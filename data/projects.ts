export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: string[];
  userFlow?: string[];
  contactEmail?: string;
  role: string;
  year: string;
  stack: string[];
  live: string;
  github: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "quickxerox",
    name: "QuickXerox",
    tagline: "Online Xerox printing service with remote ordering",
    description: "An online service that allows users to upload documents, choose print settings, select a nearby registered shop, and pay online.",
    fullDescription: "QuickXerox is a modern solution that simplifies the document printing process. Users can upload their documents, configure preferences like color or B&W, and select a nearby shop for pickup. The platform handles secure online payments and provides shopkeepers with a dedicated dashboard to manage and fulfill orders efficiently.",
    features: [
      "Multi-format File Upload (PDF, DOCX, Images)",
      "Dynamic Print settings (Color or B&W)",
      "Proximity-based registered shop selection",
      "Secure Online payments via Razorpay",
      "Robust Authentication using Firebase",
      "Dedicated Shopkeeper Dashboard for order management"
    ],
    userFlow: [
      "User visits QuickXerox",
      "Uploads document and selects print preferences",
      "Chooses a nearby shop",
      "Pays securely online",
      "Collects the printed file from the shop"
    ],
    contactEmail: "workwithquickxerox@gmail.com",
    role: "Full-Stack Developer",
    year: "2024",
    stack: ["React", "Tailwind CSS", "Firebase", "Razorpay"],
    live: "https://quickxerox.app",
    github: "https://github.com/hemanthreddykoduru/quickxerox",
    image: "/images/quickxerox_dashboard.png",
  },
  {
    slug: "local-share",
    name: "Local Share",
    tagline: "GPS-based anonymous clipboard for nearby users",
    description: "Drop text, links, or notes — anyone physically nearby can pick them up. No accounts, no tracking. Built with a GPS fallback to IP geolocation.",
    fullDescription: "Local Share redefines proximity-based data exchange. By utilizing the browser's Geolocation API, it creates 'digital geo-cells' where users can anonymously share clips of text, URLs, or short notes with others in their immediate physical vicinity. It solves the friction of 'how do I send this link to everyone in the room?' without requiring shared networks or account creation.",
    features: [
      "Precision GPS-based nearby user discovery",
      "IP-based geolocation fallback for desktop users",
      "Zero-account, privacy-first data sharing",
      "Real-time updates via Supabase Realtime",
      "Responsive mobile-first design"
    ],
    userFlow: [
      "User opens the app in a browser",
      "Grants location permissions",
      "Drops a link or text into the clipboard",
      "Nearby users automatically see the new clip",
      "Data is cleared after a set period of inactivity"
    ],
    role: "Lead Developer",
    year: "2023",
    stack: ["Next.js", "Supabase", "Cloudflare", "GPS API"],
    live: "https://local-share.tech",
    github: "https://github.com/hemanthreddykoduru/local-share",
    image: "/images/localshare.png",
  },
  {
    slug: "notesbay",
    name: "Notes Bay",
    tagline: "Notes sharing platform for students",
    description: "A collaborative platform where students can seamlessly share and access study notes, fostering a community of shared knowledge.",
    fullDescription: "Notes Bay is a student-centric repository designed to make high-quality academic resources accessible to everyone. The platform allows users to upload their curated notes, search by subject or course code, and contribute to a growing community of knowledge. It focuses on clean document organization and easy discovery of peer-reviewed study materials.",
    features: [
      "Subject-wise document categorization",
      "Search-optimized discovery for course codes",
      "Secure document hosting and preview",
      "Community contribution system",
      "Mobile-optimized reading experience"
    ],
    userFlow: [
      "Student searches for a specific course or subject",
      "Browses through peer-uploaded notes",
      "Views a high-quality preview of the document",
      "Downloads or bookmarks for future study",
      "Optionally uploads their own notes to help others"
    ],
    role: "Full-Stack Developer",
    year: "2023",
    stack: ["React", "Firebase", "Node.js"],
    live: "https://notesbay.in",
    github: "https://github.com/hemanthreddykoduru/notes-bay",
    image: "/images/notesbay.png",
  },
];
