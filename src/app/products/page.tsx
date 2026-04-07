import Link from "next/link";

export default function ProductsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Our Products</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Complete Metering Solutions</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            From residential to industrial, we provide smart metering solutions for every application.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Product Categories</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Choose Your Solution</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              STS compliant prepaid meters for energy, water, and gas with advanced AMI integration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Energy Meters */}
            <Link href="/products/energy" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="/images/single-phase-1.jpg" 
                    alt="Energy Meters" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Energy Meters</h3>
                      <p className="text-sm text-slate-500">STS Prepaid Electricity</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Single-phase & three-phase smart meters with keypad, LoRaWAN, GPRS, and DLMS/COSEM compliance.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    View Products <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Water Meters */}
            <Link href="/products/water" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="/images/water-meter-1.jpg" 
                    alt="Water Meters" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl">
                      💧
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Water Meters</h3>
                      <p className="text-sm text-slate-500">STS Prepaid & Ultrasonic</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Multi-jet & ultrasonic prepaid water meters with IP68, 10-year battery, and NRW reduction features.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    View Products <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Gas Meters */}
            <Link href="/products/gas" className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="/images/gas-meter-1.jpg" 
                    alt="Gas Meters" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl">
                      🔥
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Gas Meters</h3>
                      <p className="text-sm text-slate-500">STS Prepaid Diaphragm</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Diaphragm gas meters with STS, temperature compensation, magnetic field protection, and CIU options.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    View Products <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Featured Products</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Best-Selling Meters</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Engineered for reliability, accuracy, and long-term performance in demanding environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Single Phase */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-xs font-bold mb-5">
                    BEST SELLER
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Single Phase Keypad Prepaid Energy Meter</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    STS compliant, class 1.0 accuracy, keypad prepayment, PLC/RF/Cable to CIU, anti-tampering protection.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">STS</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">Class 1.0</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">Keypad</span>
                  </div>
                  <Link 
                    href="/products/energy" 
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
                <div className="bg-slate-100 p-8 flex items-center justify-center">
                  <img 
                    src="/images/single-phase-2.jpg" 
                    alt="Single Phase Meter" 
                    className="max-w-full max-h-64 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Multi-Jet Water */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-xs font-bold mb-5">
                    NRW REDUCTION
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Advanced Multi-Jet STS Prepaid Water Meter</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    R160/R250 accuracy, IP67/IP68 protection, 10-year battery, magnetic field resistance, LoRaWAN/GPRS.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">R250</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">IP68</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">10-Year</span>
                  </div>
                  <Link 
                    href="/products/water" 
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    View Details <span>→</span>
                  </Link>
                </div>
                <div className="bg-cyan-50 p-8 flex items-center justify-center">
                  <img 
                    src="/images/water-meter-2.jpg" 
                    alt="Water Meter" 
                    className="max-w-full max-h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Need a Customized Solution?</h2>
          <p className="text-lg opacity-90 mb-10">
            Get a tailored metering solution for your specific requirements. Our team is ready to help.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
          >
            Request a Quote <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
