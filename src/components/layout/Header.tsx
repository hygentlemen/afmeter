"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  // Detect current locale from pathname
  const getCurrentLocale = () => {
    if (pathname.startsWith("/fr")) return "fr";
    if (pathname.startsWith("/ar")) return "ar";
    if (pathname.startsWith("/en")) return "en";
    return "en"; // default to English
  };

  const currentLocale = getCurrentLocale();

  // Get path without locale prefix
  const getPathWithoutLocale = () => {
    if (pathname.startsWith("/en")) {
      return pathname.substring(3) || "/";
    }
    if (pathname.startsWith("/fr")) {
      return pathname.substring(3) || "/";
    }
    if (pathname.startsWith("/ar")) {
      return pathname.substring(3) || "/";
    }
    return pathname;
  };

  const pathWithoutLocale = getPathWithoutLocale();

  // Create link with current locale
  const getLocalizedPath = (path: string) => {
    if (currentLocale === "en") {
      return path; // English uses root path
    }
    return `/${currentLocale}${path}`;
  };

  // Switch to a different locale
  const switchLocale = (newLocale: string) => {
    if (newLocale === "en") {
      return pathWithoutLocale;
    }
    return `/${newLocale}${pathWithoutLocale}`;
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
          <Link
            href={getLocalizedPath("/")}
            className="flex items-center gap-3"
          >
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
            <Link
              href={getLocalizedPath("/")}
              className="text-slate-900 font-semibold hover:text-sky-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href={getLocalizedPath("/products")}
              className="text-slate-600 font-medium hover:text-sky-500 transition-colors"
            >
              Products
            </Link>
            <Link
              href={getLocalizedPath("/projects")}
              className="text-slate-600 font-medium hover:text-sky-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href={getLocalizedPath("/about")}
              className="text-slate-600 font-medium hover:text-sky-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              href={getLocalizedPath("/blog")}
              className="text-slate-600 font-medium hover:text-sky-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              href={getLocalizedPath("/contact")}
              className="text-slate-600 font-medium hover:text-sky-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative group">
              <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-500 border border-slate-200 rounded-lg">
                {localeNames[currentLocale]}
              </button>
              <div className="absolute right-0 top-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px]">
                {["en", "fr", "ar"].map((locale) => (
                  <Link
                    key={locale}
                    href={switchLocale(locale)}
                    className="block w-full text-left px-4 py-2 text-sm text-slate-600 hover:text-sky-500 hover:bg-slate-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {localeNames[locale]}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href={getLocalizedPath("/contact")}
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
