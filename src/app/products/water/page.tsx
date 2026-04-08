import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter - STS Prepaid Water Meters | Multi-Jet & Ultrasonic",
  description: "afmeter's STS prepaid water meters feature multi-jet and ultrasonic technology with IP67/IP68 protection, 10-year battery life, and advanced NRW reduction capabilities. Ideal for residential, commercial, and district metering.",
  keywords: "STS prepaid water meter, multi-jet water meter, ultrasonic water meter, NRW reduction, smart water meter, IP68",
};

export default function WaterMeterPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-4">Water Meters</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">STS Prepaid Water Meters</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Multi-Jet & Ultrasonic Smart Water Meters with Advanced NRW Reduction
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-cyan-500 font-bold text-sm tracking-widest uppercase mb-3">Product Overview</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Advanced Multi-Jet STS Prepaid Water Meter</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The CA568 series are advanced multi-jet and ultrasonic prepaid water meters with STS compliance, IP67/IP68 protection, and 10-year battery life.
              </p>

              {/* Key Features */}
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">STS Compliant Prepayment</h3>
                    <p className="text-slate-600 text-sm">Secure 20-digit token-based vending system</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">R160/R250 Accuracy</h3>
                    <p className="text-slate-600 text-sm">High-precision multi-jet and ultrasonic measurement</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">IP67/IP68 Waterproof</h3>
                    <p className="text-slate-600 text-sm">Designed for challenging outdoor and underground installation</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">10-Year Battery Life</h3>
                    <p className="text-slate-600 text-sm">Long-lasting lithium battery with ultra-low power consumption</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Get a Quote
                </Link>
                <Link 
                  href="/products" 
                  className="bg-white border-2 border-slate-200 hover:border-cyan-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Back to Products
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img 
                  src="/images/water-meter-1.jpg" 
                  alt="Multi-Jet Water Meter" 
                  className="w-full rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img 
                    src="/images/water-meter-2.jpg" 
                    alt="Water Meter Detail" 
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img 
                    src="/images/single-phase-1.jpg" 
                    alt="Water Meter Installation" 
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-500 font-bold text-sm tracking-widest uppercase mb-3">Technical Specifications</div>
            <h2 className="text-4xl font-extrabold text-slate-900">Product Details</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-slate-900 text-white">
                <tr>
                  <th className="px-8 py-4 text-left font-bold">Parameter</th>
                  <th className="px-8 py-4 text-left font-bold">Specification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Standard</td>
                  <td className="px-8 py-4 text-slate-600">STS, ISO 4064 Class B/C, OIML R49</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Accuracy</td>
                  <td className="px-8 py-4 text-slate-600">R160, R250 (Ultrasonic)</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Communication</td>
                  <td className="px-8 py-4 text-slate-600">RF, Cable to CIU, LoRaWAN, GPRS/3G</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Protection</td>
                  <td className="px-8 py-4 text-slate-600">IP67, IP68, Magnetic Field Resistance</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Body Material</td>
                  <td className="px-8 py-4 text-slate-600">Brass, Stainless Steel Optional</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Size Range</td>
                  <td className="px-8 py-4 text-slate-600">DN15-DN25 (1/2" - 1"), DN32-DN65 (Bulk)</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Battery</td>
                  <td className="px-8 py-4 text-slate-600">10+ Years Operational Life</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-cyan-500 font-bold text-sm tracking-widest uppercase mb-3">Applications</div>
            <h2 className="text-4xl font-extrabold text-slate-900">Where to Use</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="text-5xl mb-6">🏠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Residential</h3>
              <p className="text-slate-600 leading-relaxed">
                Apartments, houses, and residential complexes with prepaid or postpaid options.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Commercial</h3>
              <p className="text-slate-600 leading-relaxed">
                Shopping malls, hotels, office buildings, and commercial districts.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="text-5xl mb-6">🚰</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">District Metering</h3>
              <p className="text-slate-600 leading-relaxed">
                Bulk meters for district metering and NRW reduction projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Ready for NRW Reduction?</h2>
          <p className="text-lg opacity-90 mb-10">
            Get detailed specifications, pricing, and delivery information for your water metering project.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
            >
              Request a Quote <span className="text-xl">→</span>
            </Link>
            <Link 
              href="/products" 
              className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
