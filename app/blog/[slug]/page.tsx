import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { blogs } from "../../../data/blogs";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import TableOfContents from "../../../components/TableOfContents";

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const blogIndex = blogs.findIndex((b) => b.slug === resolvedParams.slug);
  const blog = blogs[blogIndex];

  if (!blog) {
    notFound();
  }

  const previousBlog = blogIndex > 0 ? blogs[blogIndex - 1] : null;
  const nextBlog = blogIndex < blogs.length - 1 ? blogs[blogIndex + 1] : null;

  const slugify = (text: string) => 
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  const headings = blog.content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "").trim();
      return { text, id: slugify(text) };
    });

  return (
    <div className="min-h-screen selection:bg-neutral-200 dark:selection:bg-neutral-800 font-sans flex flex-col justify-between transition-colors">
      <Navbar />
      
      <main className="flex-grow pt-16 md:pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:flex lg:gap-16 items-start relative">
          
          <article className="flex-1 min-w-0">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white transition-colors mb-12"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-12">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-display font-black tracking-tight text-black dark:text-white leading-tight mb-4 transition-colors">
                {blog.displayTitle || blog.title}
              </h1>
              
              <div className="flex items-center text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-8 transition-colors">
                <span>{blog.date}</span>
                {blog.readTime && (
                  <>
                    <span className="mx-2">•</span>
                    <span>{blog.readTime}</span>
                  </>
                )}
              </div>

              {blog.author && (
                <div className="flex items-center gap-4 mb-10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                    <Image 
                      src={blog.author.avatarUrl} 
                      alt={blog.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-black dark:text-white transition-colors">{blog.author.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">{blog.author.role}</p>
                  </div>
                </div>
              )}
              
              <div className="relative w-full aspect-[21/9] bg-neutral-100 dark:bg-neutral-900 rounded-3xl overflow-hidden mb-12 border border-neutral-200 dark:border-neutral-800 transition-colors">
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </header>

            {/* Mobile Tags */}
            <div className="lg:hidden flex flex-wrap gap-2 mb-10">
              {blog.tags?.map((tag) => (
                <span key={tag} className="px-3 py-1 text-[11px] font-mono tracking-wide font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800/50 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            <div className="max-w-none text-base md:text-lg transition-colors break-words">
              <ReactMarkdown
                components={{
                  p: ({node, ...props}) => <p className="text-neutral-800 dark:text-neutral-300 leading-relaxed mb-6 transition-colors" {...props} />,
                  h1: ({node, ...props}) => <h1 className="text-3xl md:text-4xl font-display font-black text-black dark:text-white mt-10 mb-6 transition-colors" {...props} />,
                  h2: ({node, children, ...props}: any) => {
                    const id = slugify(String(children));
                    return <h2 id={id} className="text-2xl md:text-3xl font-display font-black text-black dark:text-white mt-10 mb-6 scroll-mt-24 transition-colors" {...props}>{children}</h2>
                  },
                  h3: ({node, ...props}) => <h3 className="text-xl md:text-2xl font-display font-black text-black dark:text-white mt-8 mb-4 scroll-mt-24 transition-colors" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-6 text-neutral-800 dark:text-neutral-300 transition-colors" {...props} />,
                  li: ({node, ...props}) => <li className="mb-2 text-neutral-800 dark:text-neutral-300 transition-colors" {...props} />,
                  a: ({node, ...props}) => <a className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors break-all" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-black text-black dark:text-white transition-colors" {...props} />,
                  pre: ({node, ref, ...props}: any) => <div className="mb-8 overflow-x-auto" {...props} />,
                  code: ({node, inline, className, children, ...props}: any) => {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <div className="rounded-2xl overflow-hidden shadow-xl text-xs md:text-sm font-mono border border-neutral-800">
                        <SyntaxHighlighter
                          {...props}
                          style={vscDarkPlus}
                          language={match[1]}
                          PreTag="div"
                          customStyle={{ margin: 0, padding: "1.5rem", background: "#0a0a0a" }}
                        >
                          {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                      </div>
                    ) : (
                      <code className="bg-neutral-100 dark:bg-neutral-800 text-black dark:text-white px-1.5 py-0.5 rounded-md font-mono text-xs md:text-sm border border-neutral-200 dark:border-neutral-700 transition-colors break-words" {...props}>
                        {children}
                      </code>
                    )
                  }
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>

            {/* Previous / Next Blog Navigation */}
            {(previousBlog || nextBlog) && (
              <div className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800 flex flex-col sm:flex-row gap-4 transition-colors">
                {previousBlog ? (
                  <Link 
                    href={`/blog/${previousBlog.slug}`}
                    className="flex-1 block p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors group"
                  >
                    <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2 flex items-center gap-2">
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                      Previous Blog
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-1 line-clamp-1 transition-colors">{previousBlog.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">{previousBlog.date}</p>
                  </Link>
                ) : <div className="flex-1" />}
                
                {nextBlog ? (
                  <Link 
                    href={`/blog/${nextBlog.slug}`}
                    className="flex-1 block p-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors group text-right"
                  >
                    <div className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2 flex items-center justify-end gap-2">
                      Next Blog
                      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-1 line-clamp-1 transition-colors">{nextBlog.title}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 transition-colors">{nextBlog.date}</p>
                  </Link>
                ) : <div className="flex-1" />}
              </div>
            )}

          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-32">
            
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {blog.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 text-[11px] font-mono tracking-wide font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-900/30 rounded-full border border-emerald-200 dark:border-emerald-800/50 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {headings.length > 0 && <TableOfContents headings={headings} />}

            <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-800 transition-colors">
              <h4 className="text-sm font-black text-black dark:text-white mb-4 font-display transition-colors">
                Share this article
              </h4>
              <div className="flex items-center gap-3">
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-black dark:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.965h-1.969z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-black dark:text-white transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.603 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

          </aside>

        </div>
      </main>

      <Footer />
    </div>
  );
}
