
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const blogPosts = {
  "africa-smart-meter-market-2026": {
    title: "Africa Smart Meter Market Trends 2026",
    description: "Exploring the growth of smart metering in Africa, key market drivers, and opportunities for utilities and municipalities.",
    date: "2026-04-08",
    author: "afmeter Team",
    category: "Market Trends",
    content: (
      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>
          The African smart meter market is experiencing significant growth in 2026, driven by increasing demand for energy efficiency, revenue protection, and advanced metering infrastructure (AMI) solutions.
        </p>

        <h2>Key Market Drivers</h2>
        <ul>
          <li><strong>Revenue Protection:</strong> Utilities are adopting smart meters to reduce non-technical losses and improve revenue collection.</li>
          <li><strong>Energy Efficiency:</strong> Smart metering enables consumers to monitor and manage their energy consumption, leading to reduced waste.</li>
          <li><strong>Regulatory Mandates:</strong> Many African countries are implementing regulations requiring the deployment of smart meters.</li>
          <li><strong>Technological Advancements:</strong> Improvements in communication technologies (LoRaWAN, GPRS, PLC) are making smart metering more accessible and cost-effective.</li>
        </ul>

        <h2>Market Opportunities</h2>
        <p>
          The African market presents significant opportunities for smart meter manufacturers and solution providers:
        </p>
        <ul>
          <li>Large-scale deployment projects in countries like Nigeria, Kenya, and South Africa</li>
          <li>Growing demand for prepayment solutions (STS compliant meters)</li>
          <li>Expansion into water and gas metering sectors</li>
          <li>Need for localized support and training services</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          The African smart meter market is poised for continued growth in 2026 and beyond. With the right solutions and partnerships, manufacturers and service providers can capitalize on these opportunities and make a meaningful impact on energy access and efficiency across the continent.
        </p>
      </div>
    ),
  },
  "sts-prepaid-meter-usage-guide": {
    title: "STS Prepaid Meter Usage Guide",
    description: "A step-by-step guide to using STS prepaid meters, including token vending, troubleshooting, and best practices.",
    date: "2026-04-05",
    author: "afmeter Team",
    category: "Product Guides",
    content: (
      <div className="prose prose-slate max-w-none">
        <h2>Introduction</h2>
        <p>
          STS (Standard Transfer Specification) prepaid meters are widely used around the world for their secure and reliable token-based vending system. This guide will help you understand how to use your STS prepaid meter effectively.
        </p>

        <h2>How to Use Your STS Prepaid Meter</h2>
        <h3>1. Purchasing Tokens</h3>
        <p>
          To purchase tokens, contact your utility provider or an authorized vending partner. You will need your meter number (usually located on the meter or your customer card).
        </p>

        <h3>2. Entering Tokens</h3>
        <p>
          Once you have your 20-digit token, follow these steps to enter it into your meter:
        </p>
        <ol>
          <li>Press the <strong>#</strong> key on your meter or CIU (Customer Interface Unit).</li>
          <li>Enter the 20-digit token using the keypad.</li>
          <li>Press the <strong>#</strong> key again to confirm.</li>
          <li>Your meter will display "ACCEPT" if the token is valid, and the credit will be added to your account.</li>
        </ol>

        <h2>Troubleshooting Common Issues</h2>
        <h3>Token Not Accepted</h3>
        <ul>
          <li>Check that you entered the token correctly (no typos).</li>
          <li>Ensure the token is for your specific meter (check the meter number).</li>
          <li>Verify that the token has not expired (tokens usually have a validity period).</li>
        </ul>

        <h3>Meter Display Errors</h3>
        <p>
          If your meter displays an error code, consult your meter's user manual or contact your utility provider for assistance.
        </p>

        <h2>Best Practices</h2>
        <ul>
          <li>Keep your meter and CIU in a safe, dry place.</li>
          <li>Regularly check your credit balance to avoid disconnection.</li>
          <li>Contact your utility provider immediately if you notice any unusual activity or issues with your meter.</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          STS prepaid meters offer a convenient and secure way to manage your energy consumption. By following this guide, you can make the most of your meter and ensure a smooth experience.
        </p>
      </div>
    ),
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} - afmeter Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug as keyof typeof blogPosts];
  if (!post) {
    notFound();
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-sky-500/20 text-sky-300 px-4 py-1.5 rounded-full text-xs font-bold">
              {post.category}
            </span>
            <span className="text-slate-400 text-sm">{post.date}</span>
          </div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">{post.title}</h1>
          <p className="text-xl opacity-90 leading-relaxed">{post.description}</p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <article className="prose prose-slate max-w-none">
            {post.content}
          </article>

          <div className="mt-16 pt-8 border-t border-slate-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm hover:text-sky-600 transition-colors"
            >
              <span className="text-lg">←</span> Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
