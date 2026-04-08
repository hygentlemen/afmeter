import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter - Somaliland Smart Metering Project | 30K+ Meters in Extreme Conditions",
  description: "afmeter deployed 30K+ STS prepaid electricity meters across 6 regions in Somaliland. Operating in extreme 45°C+ conditions with 99.5% uptime. Learn more about this challenging environment success story.",
  keywords: "Somaliland smart meter project, Somaliland prepaid meter deployment, STS meter Somaliland, East Africa metering project, extreme temperature meter",
};

export default function SomalilandProjectPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-orange-800 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-500/20 text-orange-300 px-5 py-2 rounded-full text-xs font-bold mb-4">
            🌍 East Africa
          </div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Somaliland Smart Metering Project
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Robust Meters Operating in Extreme 45°C+ Conditions
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-3">Project Overview</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Challenging Environment Success Story
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                afmeter deployed over 30,000 STS prepaid electricity meters across 6 regions in Somaliland, one of the most challenging environments for smart metering infrastructure.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                The project required meters capable of withstanding extreme temperatures (45°C+), dust, humidity, and unstable power conditions. Our robust design and rigorous testing ensured 99.5% uptime and reliable operation.
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-orange-600 mb-2">45°C+</div>
                  <div className="text-sm text-slate-500">Operating Temperature</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-orange-600 mb-2">99.5%</div>
                  <div className="text-sm text-slate-500">Uptime</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Get a Similar Solution
                </Link>
                <Link
                  href="/projects"
                  className="bg-white border-2 border-slate-200 hover:border-orange-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img
                  src="/images/banner-minigrid.jpg"
                  alt="Somaliland Project"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img
                    src="/images/single-phase-1.jpg"
                    alt="Meter Installation"
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img
                    src="/images/banner-factory.jpg"
                    alt="Factory Production"
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 px-8 bg-gradient-to-br from-slate-900 via-orange-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 leading-tight">Project Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-5xl font-extrabold mb-3">99.5%</div>
              <div className="text-lg opacity-90">Uptime Rate</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-3">45°C+</div>
              <div className="text-lg opacity-90">Operating Temperature</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-3">+55%</div>
              <div className="text-lg opacity-90">Revenue Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Need Meters for Challenging Environments?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Our robust meters are proven in the world's toughest conditions, from extreme temperatures to harsh dust and humidity.
          </p>
          <Link
            href="/contact"
            className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 transition-all"
          >
            Start Your Project <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
