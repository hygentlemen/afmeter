"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // For now, just show a message that this will be implemented
    // Later we'll add proper routing
    alert(`Language switching to ${newLocale.toUpperCase()} will be available soon!`);
  };

  const localeNames: Record<string, string> = {
    en: "EN",
    fr: "FR",
    ar: "عربي"
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="afmeter Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <div className="text-xl font-bold text-slate-900">afmeter</div>
              <div className="text-xs text-slate-500">Smart Metering Solutions</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-900 font-semibold hover:text-sky-500 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-slate-600 font-medium hover:text-sky-500 transition-colors">
              Products
            </Link>
            <Link href="/projects" className="text-slate-600 font-medium hover:text-sky-500 transition-colors">
              Projects
            </Link>
            <Link href="/about" className="text-slate-600 font-medium hover:text-sky-500 transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="text-slate-600 font-medium hover:text-sky-500 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-slate-600 font-medium hover:text-sky-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-500 border border-slate-200 rounded-lg">
                EN
              </button>
              <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px]">
                {["en", "fr", "ar"].map((locale) => (
                  <button
                    key={locale}
                    onClick={() => switchLocale(locale)}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-sky-500 hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {localeNames[locale]}
                  </button>
                ))}
              </div>
            </div>
            
            <Link 
              href="/contact" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 font-semibold rounded-lg transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
