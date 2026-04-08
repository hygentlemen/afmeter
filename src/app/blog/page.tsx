
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter Blog - Smart Metering Industry Insights & Guides",
  description: "afmeter blog shares insights on smart metering, STS prepaid meters, AMI systems, and market trends in Africa and beyond.",
  keywords: "smart metering blog, STS prepaid meter guide, AMI system insights, Africa meter market",
};

const blogPosts = [
  {
    id: "africa-smart-meter-market-2026",
    title: "Africa Smart Meter Market Trends 2026",
    excerpt: "Exploring the growth of smart metering in Africa, key market drivers, and opportunities for utilities and municipalities.",
    date: "2026-04-08",
    author: "afmeter Team",
    category: "Market Trends",
  },
  {
    id: "sts-prepaid-meter-usage-guide",
    title: "STS Prepaid Meter Usage Guide",
    excerpt: "A step-by-step guide to using STS prepaid meters, including token vending, troubleshooting, and best practices.",
    date: "2026-04-05",
    author: "afmeter Team",
    category: "Product Guides",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Blog</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Smart Metering Insights & Guides</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Industry trends, product guides, and best practices for smart metering solutions.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-sky-100 text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-sm">{post.date}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4">
                    <Link href={`/blog/${post.id}`} className="hover:text-sky-500 transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm hover:text-sky-600 transition-colors"
                  >
                    Read More <span className="text-lg">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
