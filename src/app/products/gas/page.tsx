import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter - STS Prepaid Gas Meters | Diaphragm & Temperature Compensation",
  description: "afmeter's STS prepaid gas meters feature diaphragm technology, temperature compensation, magnetic field protection, and CIU options. Perfect for residential, commercial, and industrial gas metering applications.",
  keywords: "STS prepaid gas meter, diaphragm gas meter, smart gas meter, temperature compensation, anti-tampering",
};

export default function GasMeterPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-4">Gas Meters</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">STS Prepaid Gas Meters</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Diaphragm Gas Meters with Secure Token-Based Prepayment
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">Product Overview</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">STS Keypad Prepaid Diaphragm Gas Meter</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                The CG series are STS compliant prepaid diaphragm gas meters with temperature compensation, magnetic field protection, and CIU options.
              </p>

              {/* Key Features */}
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">STS Compliant Prepayment</h3>
                    <p className="text-slate-600 text-sm">Secure 20-digit token-based vending system</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Temperature Compensation</h3>
                    <p className="text-slate-600 text-sm">Accurate volume measurement across varying temperatures</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Magnetic Field Protection</h3>
                    <p className="text-slate-600 text-sm">Anti-tampering with magnetic field detection</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">CIU Optional</h3>
                    <p className="text-slate-600 text-sm">Remote display unit available</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/products"
                  className="bg-white border-2 border-slate-200 hover:border-orange-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Back to Products
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img
                  src="/images/gas-meter-1.jpg"
                  alt="Diaphragm Gas Meter"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img
                    src="/images/gas-meter-2.jpg"
                    alt="Gas Meter Detail"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img
                    src="/images/single-phase-1.jpg"
                    alt="Gas Meter Installation"
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
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">Technical Specifications</div>
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
                  <td className="px-8 py-4 text-slate-600">STS, EN 1359, OIML R137</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Flow Rate</td>
                  <td className="px-8 py-4 text-slate-600">G1.6, G2.5, G4, G6 Available</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Temperature Range</td>
                  <td className="px-8 py-4 text-slate-600">-10°C to +40°C Operation</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Working Pressure</td>
                  <td className="px-8 py-4 text-slate-600">Max 50 kPa</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Protection</td>
                  <td className="px-8 py-4 text-slate-600">Magnetic Field, Reverse Flow Detection</td>
                </tr>
                <tr>
                  <td className="px-8 py-4 text-slate-700 font-medium">Communication</td>
                  <td className="px-8 py-4 text-slate-600">Keypad, CIU Optional</td>
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
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">Applications</div>
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
              <div className="text-5xl mb-6">🏪</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Commercial</h3>
              <p className="text-slate-600 leading-relaxed">
                Restaurants, hotels, and small businesses with gas consumption.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl text-center">
              <div className="text-5xl mb-6">🏭</div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Industrial</h3>
              <p className="text-slate-600 leading-relaxed">
                Small industrial applications with larger gas meters for factories and plants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Ready for Safe Gas Metering?</h2>
          <p className="text-lg opacity-90 mb-10">
            Get detailed specifications, pricing, and delivery information for your gas metering project.
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
