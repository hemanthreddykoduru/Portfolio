export type Blog = {
  slug: string;
  title: string;
  date: string;
  readTime?: string;
  excerpt: string;
  content: string;
  coverImage: string;
  tags?: string[];
  author?: {
    name: string;
    role: string;
    avatarUrl: string;
  };
};

export const blogs: Blog[] = [
  {
    slug: "bringing-razorpay-to-insforge",
    title: "Bringing Razorpay to InsForge: Building a Production-Grade Payment Flow for a Y Combinator-Backed Open Source Platform",
    date: "08 Jun 2026",
    readTime: "7 minutes",
    author: {
      name: "Koduru Hemanth Reddy",
      role: "Software Engineer",
      avatarUrl: "https://github.com/hemanthreddykoduru.png",
    },
    excerpt: "If you are building a modern SaaS platform in India, Stripe isn't always an option—Razorpay is the standard. Here's how I architected the complete Razorpay integration into InsForge core.",
    coverImage: "/images/razorpay-insforge.png",
    tags: ["open-source", "payments", "razorpay", "integration"],
    content: `
If you are building a modern SaaS platform in India, Stripe isn't always an option—Razorpay is the standard. A few days ago, I noticed that [InsForge](https://www.insforge.dev/), a [Y Combinator-backed](https://www.ycombinator.com/companies/insforge) open-source framework, had incredible Stripe support but completely lacked Razorpay integration. For any developer targeting the Indian market, this was a hard blocker.

I decided to fix that. Over the course of three major pull requests and roughly 3,000 lines of code, I architected and merged the complete Razorpay runtime payment flow into the InsForge core, bringing it to full feature parity with Stripe.

Here is a look at how production payment systems actually get built, and the architectural friction I had to solve along the way.

## Why Razorpay Makes Sense, and Where the Friction Lies

Like Stripe, Razorpay provides excellent primitives: hosted checkouts, subscription billing, and robust webhook events. The actual API calls are simple.

The friction appears in the layer around those primitives. Building a reliable payment system means solving for:

- **Environment setup**: Safely isolating test and live keys.
- **Catalog management**: Syncing products and prices so the application database matches the provider.
- **Webhook plumbing**: Verifying HMAC signatures, ensuring retry safety, and deduplicating asynchronous events.
- **Fulfillment correctness**: Guaranteeing that a user is never double-charged, even if a network request drops and retries.

My goal was to abstract this friction away so developers using InsForge could prompt an AI agent to build a Razorpay flow just as easily as a Stripe flow.

Here is a high-level look at the architecture I built to wrap Razorpay's API:

![Architecture and PR build sequence](/images/diagram-pr-sequence.svg)

## What We Put Into the Integration Architecture

I broke the integration down into three distinct phases, each solving a different piece of the distributed systems puzzle.

### 1. The Foundation

A payment provider integration isn't just a wrapper around API calls. It requires a provider abstraction layer that sits cleanly alongside Stripe without corrupting or entangling existing data.

I built the foundational sync services for products, plans, customers, subscriptions, and payments. This included provider-aware database migrations and a dashboard UI that dynamically adapts its credential management depending on which provider is active.

### 2. Webhook Infrastructure & Secret Management

Payments do not happen in simple request/response cycles. A subscription renewal, a failed charge, or a refund—all of these arrive asynchronously via webhooks.

I built idempotent event handlers to process these events safely. Originally, I designed the system to automatically register webhook endpoints via the Razorpay API. However, after carefully reading the API constraints, I discovered that programmatic webhook creation is restricted to Partner accounts.

That constraint forced a better design. I rebuilt the flow around a guided manual setup, backed by a secure, native secret-management system inside InsForge that generates and validates webhook secrets locally.

## What the Payment Journey Looks Like

The final gap was the runtime flow itself: allowing developers to actually create Razorpay orders and subscriptions on the fly.

Here is exactly how the runtime flow safely handles a user checkout without risking duplicate charges:

![Razorpay payment journey in InsForge](/images/diagram-payment-journey.svg)

I engineered a \`RazorpayCheckoutService\` to handle the complexity of this sequence. To guarantee strict idempotency and prevent double-charging, I implemented PostgreSQL advisory locking and pre-flight database insertion (\`ON CONFLICT DO NOTHING\`).

Here is a look at how that strict idempotency actually works in the code:

\`\`\`typescript
/**
 * Generates a new Razorpay Order with strict idempotency guarantees.
 * Uses PostgreSQL advisory locks and pre-flight database insertion 
 * to ensure users are never double-charged.
 */
public async createOrder(
  input: CreatePaymentOrderInput
): Promise<CreateRazorpayOrderResponse> {
  const lockId = await this.generateAdvisoryLockId(
    input.environment,
    input.idempotencyKey
  );
  
  return this.withAdvisoryLock(lockId, async () => {
    // 1. Insert a placeholder record to establish a stable InsForge ID.
    //    Uses ON CONFLICT DO NOTHING to prevent duplicate charges.
    const { id, existingOrder } = await this.insertInitializedOrder(input);
    
    if (existingOrder) {
      if (existingOrder.status === 'failed') {
        throw new AppError(
          'Previous order attempt failed. Please generate a new idempotency key.',
          409,
          ERROR_CODES.PAYMENT_CHECKOUT_ALREADY_EXISTS
        );
      }
      
      // Idempotent replay: return the already-created order.
      const keyId = await this.resolveKeyId(input.environment);
      return { attemptId: existingOrder.id, order: existingOrder, keyId };
    }
    
    // 2. Call the Razorpay SDK to finalize the provider-side order
    const resolvedCustomer = await this.resolveCustomer(input);
    const razorpayOrder = await this.provider.createOrder(input.environment, {
      amount: input.amount,
      currency: input.currency,
      receipt: id, // Attach our InsForge internal UUID as the receipt
      customerId: resolvedCustomer?.customerId,
      notes: {
        insforge_order_id: id,
        ...input.metadata,
      },
    });
    
    // 3. Mark the order as 'created' in our DB and return to the client
    const finalOrder = await this.markOrderCreated(id, razorpayOrder);
    const keyId = await this.resolveKeyId(input.environment);
    return { attemptId: id, order: finalOrder, keyId };
  });
}
\`\`\`

## Edge Case Scenarios Solved

To understand why this rigorous architecture was necessary, let's look at three critical scenarios we had to fix to ensure a production-grade flow:

### Scenario 1: The Dropped Client Request
**The Problem:** What happens if a user's network drops right after we call Razorpay, but before we return the checkout ID to their browser? If the frontend simply retries the request blindly, we might create a second identical order in Razorpay, risking a double-charge.
**The Fix:** The \`RazorpayCheckoutService\` uses a pre-flight database insertion (\`ON CONFLICT DO NOTHING\`) tied to a unique idempotency key. If the frontend retries, the database lock ensures we just return the *existing* order ID instead of hitting Razorpay's API again.

### Scenario 2: Concurrent Webhook Deliveries
**The Problem:** What happens if Razorpay fires the \`payment.captured\` webhook twice at the exact same millisecond? A naive handler might grant the user a subscription twice, or credit their wallet balance twice.
**The Fix:** Idempotent event handlers. We log every incoming webhook ID in a dedicated table using a strict unique constraint. If a second webhook with the same ID arrives simultaneously, the database rejects it immediately, ensuring the application's fulfillment logic runs exactly once.

### Scenario 3: The Failed Order Retry
**The Problem:** What happens if the first order attempt genuinely fails (e.g., bad currency configuration), and the frontend retries using the same idempotency key? A naive implementation might return a silent success or ignore the failure.
**The Fix:** The automated AI reviewers actually caught this exact edge case during code review. If an order fails, the server explicitly returns a \`409 Conflict\`. This explicitly forces the client to generate a *new* idempotency key and start fresh, ensuring the user gets clear error feedback instead of being stuck in a silent failure loop.

## What You Watch in InsForge, and What Still Belongs in Razorpay

Writing the code was the easy part. The harder part—and the real education—came during the rigorous code review process with the maintainers and InsForge's automated AI reviewers.

When building payment systems, you are forced to answer uncomfortable questions:

- What happens when a webhook fires twice simultaneously?
- Can two providers share a database without corrupting each other's data?
- If an order fails, and the frontend sends an idempotent retry, should it return a silent success or a 409 Conflict so the user knows to try again? (The AI reviewers caught this exact edge case!)
- What does this look like under concurrent load in six months when I'm not around to fix it?

I didn't have clean answers to all of those questions at first. Working through them, refining the architecture, and edge-case testing the system was the most valuable part of this open-source journey.

## Get Started

The Razorpay integration is now live in InsForge. If you are building a SaaS in India, you can now use InsForge's agentic workflow to wire up a production-ready Razorpay checkout in minutes.

A huge thanks to the InsForge maintainers for their patience and detailed architectural discussions throughout this process.

If you are interested in the code, you can view the core PRs here:

- [PR #1382: Foundational Provider & Sync](https://github.com/InsForge/InsForge/pull/1382)
- [PR #1485: Webhook Infrastructure](https://github.com/InsForge/InsForge/pull/1485)
- [PR #1490: Runtime Payment Flow](https://github.com/InsForge/InsForge/pull/1490)
`
  }
];
