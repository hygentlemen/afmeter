import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                CM
              </div>
              <div>
                <div className="text-2xl font-bold text-white">afmeter</div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Leading manufacturer of smart prepayment meters and AMI solutions. 15+ years of excellence in energy, water, and gas metering technologies.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-11 h-11 bg-slate-800 hover:bg-sky-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                f
              </a>
              <a href="https://www.linkedin.com/in/qiscott/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 bg-slate-800 hover:bg-sky-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                in
              </a>
              <a href="#" className="w-11 h-11 bg-slate-800 hover:bg-sky-600 rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all">
                📺
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Products</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/products/energy" className="text-slate-400 hover:text-sky-400 transition-colors">
                Energy Meters
              </Link>
              <Link href="/products/water" className="text-slate-400 hover:text-sky-400 transition-colors">
                Water Meters
              </Link>
              <Link href="/products/gas" className="text-slate-400 hover:text-sky-400 transition-colors">
                Gas Meters
              </Link>
              <Link href="/products" className="text-slate-400 hover:text-sky-400 transition-colors">
                AMI Systems
              </Link>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-lg">Company</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/about" className="text-slate-400 hover:text-sky-400 transition-colors">
                About Us
              </Link>
              <Link href="/projects/mali" className="text-slate-400 hover:text-sky-400 transition-colors">
                Mali Project
              </Link>
              <Link href="/projects/nigeria" className="text-slate-400 hover:text-sky-400 transition-colors">
                Nigeria Project
              </Link>
              <Link href="/projects/somaliland" className="text-slate-400 hover:text-sky-400 transition-colors">
                Somaliland Project
              </Link>
            </nav>
          </div>
        </div>

        {/* Contact Info */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            Copyright © 2026 afmeter. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
