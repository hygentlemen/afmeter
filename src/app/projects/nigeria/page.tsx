import Link from "next/link";

export default function NigeriaProjectPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-green-800 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-green-500/20 text-green-300 px-5 py-2 rounded-full text-xs font-bold mb-4">
            🌍 West Africa
          </div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Nigeria Smart Metering Project
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            200,000+ STS Prepaid Meters Deployed Across 36 States
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-green-600 font-bold text-sm tracking-widest uppercase mb-3">Project Overview</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Nationwide Deployment in Nigeria
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                One of the largest smart metering deployments in West Africa, CalinS Meter supplied over 200,000 STS prepaid electricity meters to 11 Distribution Companies (DisCos) across 36 states in Nigeria.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                This nationwide project addressed critical challenges in revenue collection, grid management, and customer satisfaction through advanced prepaid metering technology and comprehensive training programs.
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-green-600 mb-2">200K+</div>
                  <div className="text-sm text-slate-500">Meters Deployed</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-green-600 mb-2">36</div>
                  <div className="text-sm text-slate-500">States Covered</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Get a Similar Solution
                </Link>
                <Link
                  href="/projects"
                  className="bg-white border-2 border-slate-200 hover:border-green-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img
                  src="/images/banner-minigrid.jpg"
                  alt="Nigeria Project"
                  className="w-full rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img
                    src="/images/three-phase-1.jpg"
                    alt="Three Phase Meter"
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
      <section className="py-16 px-8 bg-gradient-to-br from-slate-900 via-green-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 leading-tight">Project Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-5xl font-extrabold mb-3">+45%</div>
              <div className="text-lg opacity-90">Revenue Increase</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-3">-60%</div>
              <div className="text-lg opacity-90">Energy Loss Reduction</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-3">99%</div>
              <div className="text-lg opacity-90">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Ready for Large-Scale Deployment?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We have the capacity and expertise for nationwide projects across multiple regions.
          </p>
          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 transition-all"
          >
            Start Your Project <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
