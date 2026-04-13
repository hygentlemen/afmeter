import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter - STS Prepaid Energy Meters | Single Phase & Three Phase",
  description: "afmeter's STS prepaid energy meters include single-phase and three-phase smart electricity meters with keypad, LoRaWAN, GPRS, and DLMS/COSEM compliance. Perfect for residential, commercial, and industrial applications.",
  keywords: "STS prepaid energy meter, single phase meter, three phase meter, smart electricity meter, keypad prepayment, AMI system",
};

export default function EnergyMeterPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Energy Meters</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">STS Prepaid Energy Meters</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Single-Phase & Three-Phase Smart Electricity Meters with Advanced AMI Integration
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Product Overview</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Single Phase Keypad Prepaid Energy Meter</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The CA168-L01 is a multi-function single-phase smart meter with embedded communication. The meter is used to measure electrical energy accurately for commercial and residential customers.
              </p>

              {/* Key Features */}
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">STS Compliant Prepayment</h3>
                    <p className="text-slate-600 text-sm">Secure 20-digit token-based vending system</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">PLC/RF/Cable Communication</h3>
                    <p className="text-slate-600 text-sm">Multiple communication options to CIU</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Class 1.0 Accuracy</h3>
                    <p className="text-slate-600 text-sm">High-precision measurement</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Anti-Tampering Protection</h3>
                    <p className="text-slate-600 text-sm">Magnetic field detection and more</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Get a Quote
                </Link>
                <Link 
                  href="/products" 
                  className="bg-white border-2 border-slate-200 hover:border-sky-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Back to Products
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img 
                  src="/images/single-phase-1.jpg" 
                  alt="Single Phase Energy Meter" 
                  className="w-full rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img 
                    src="/images/single-phase-2.jpg" 
                    alt="Single Phase Meter Front" 
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img 
                    src="/images/single-phase-3.jpg" 
                    alt="Single Phase Meter Side" 
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
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Technical Specifications</div>
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
                  <td className="px-8 py-4 text-slate-600">STS, DLMS/COSEM, IEC 62052/62053</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Accuracy</td>
                  <td className="px-8 py-4 text-slate-600">Class 1.0, Class 2.0 optional</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Communication</td>
                  <td className="px-8 py-4 text-slate-600">PLC, RF, Cable to CIU</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Current Rating</td>
                  <td className="px-8 py-4 text-slate-600">5(60)A, 10(100)A available</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Display</td>
                  <td className="px-8 py-4 text-slate-600">LCD with backlight</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Protection</td>
                  <td className="px-8 py-4 text-slate-600">Anti-tampering, magnetic field detection</td>
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
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Applications</div>
            <h2 className="text-4xl font-extrabold text-slate-900">Where to Use</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="text-5xl mb-6">🏠</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Residential</h3>
              <p className="text-slate-600 leading-relaxed">
                Single-phase meters for apartments, houses, and residential complexes with prepaid or postpaid options.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="text-5xl mb-6">🏢</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Commercial</h3>
              <p className="text-slate-600 leading-relaxed">
                Three-phase meters for offices, shopping malls, hotels, and commercial buildings with AMI integration.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="text-5xl mb-6">🏭</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Industrial</h3>
              <p className="text-slate-600 leading-relaxed">
                High-capacity CT connection meters for factories, industrial parks, and large-scale facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Ready to Order?</h2>
          <p className="text-lg opacity-90 mb-10">
            Get detailed specifications, pricing, and delivery information for your project.
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
