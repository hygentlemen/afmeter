import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
              CM
            </div>
            <div>
              <div className="text-xl font-bold text-slate-900">CalinS Meter</div>
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
            <Link href="/contact" className="text-slate-600 font-medium hover:text-sky-500 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-sky-500 border border-slate-200 rounded-lg">
              EN / 中文
            </button>
            
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
