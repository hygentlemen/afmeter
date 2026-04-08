import Link from "next/link";
import { HeroCarousel } from "@/components/sections/HeroCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter - STS Prepaid Smart Meters | Energy, Water & Gas Meters",
  description: "afmeter is a leading manufacturer of STS prepaid smart meters, AMI systems, and metering solutions. 15+ years experience, 500K+ meters deployed in 50+ countries worldwide.",
  keywords: "STS prepaid meter, smart meter, energy meter, water meter, gas meter, AMI system, prepaid electricity meter, smart metering solutions, Africa meter supplier",
  openGraph: {
    title: "afmeter - STS Prepaid Smart Meters | Energy, Water & Gas Meters",
    description: "Leading manufacturer of STS prepaid smart meters, AMI systems, and metering solutions. 15+ years experience, 500K+ meters deployed worldwide.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Stats Section */}
      <section className="bg-sky-500 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-extrabold mb-2">15+</div>
              <div className="text-sm font-medium opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">50+</div>
              <div className="text-sm font-medium opacity-90">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">500K+</div>
              <div className="text-sm font-medium opacity-90">Meters Deployed</div>
            </div>
            <div>
              <div className="text-4xl font-extrabold mb-2">6</div>
              <div className="text-sm font-medium opacity-90">Continents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="bg-slate-50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Our Products</div>
            <h2 className="text-5xl font-extrabold text-slate-900 mb-4">Complete Metering Solutions</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              From residential to industrial, we provide smart metering solutions for every application
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Energy Meters */}
            <Link href="/products/energy" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
              <div className="h-56 overflow-hidden">
                <img src="/images/single-phase-1.jpg" alt="Energy Meters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">⚡</div>
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
            </Link>

            {/* Water Meters */}
            <Link href="/products/water" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
              <div className="h-56 overflow-hidden">
                <img src="/images/water-meter-1.jpg" alt="Water Meters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl">💧</div>
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
            </Link>

            {/* Gas Meters */}
            <Link href="/products/gas" className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
              <div className="h-56 overflow-hidden">
                <img src="/images/gas-meter-1.jpg" alt="Gas Meters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl">🔥</div>
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
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">Ready to Upgrade Your Metering System?</h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Get a customized solution tailored to your needs. Our team of experts is ready to assist you from specification to deployment.
          </p>
          <div className="flex gap-4 justify-center flex-wrap mb-12">
            <div className="bg-white/10 px-8 py-5 rounded-xl">
              <div className="text-sm opacity-80 mb-2">Email</div>
              <div className="font-bold text-lg">info@afmeter.com</div>
            </div>
            <div className="bg-white/10 px-8 py-5 rounded-xl">
              <div className="text-sm opacity-80 mb-2">Phone</div>
              <div className="font-bold text-lg">+86 13562505474</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/contact" className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all">
              <span>Request a Free Quote</span>
              <span className="text-xl">→</span>
            </Link>
            <Link href="/about" className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 inline-flex items-center gap-3 hover:bg-white/20 transition-all">
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
