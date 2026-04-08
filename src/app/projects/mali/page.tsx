import Link from "next/link";

export default function MaliProjectPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-800 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-500/20 text-blue-300 px-5 py-2 rounded-full text-xs font-bold mb-4">
            🌍 West Africa
          </div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Mali Smart Metering Project
          </h1>
          <p className="text-xl opacity-90 leading-relaxed">
            50,000+ STS Prepaid Meters Deployed Across 12 Regions
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-blue-500 font-bold text-sm tracking-widest uppercase mb-3">Project Overview</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                Successful Deployment in West Africa
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                afmeter successfully deployed over 50,000 STS prepaid electricity and water meters across 12 regions in Mali, West Africa.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                This large-scale smart metering project significantly improved revenue collection and reduced non-revenue water for the national utility.
              </p>

              {/* Project Stats */}
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">50K+</div>
                  <div className="text-sm text-slate-500">Meters Deployed</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">12</div>
                  <div className="text-sm text-slate-500">Regions Covered</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href="/contact" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Get a Similar Solution
                </Link>
                <Link 
                  href="/projects" 
                  className="bg-white border-2 border-slate-200 hover:border-blue-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  View All Projects
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img 
                  src="/images/banner-minigrid.jpg" 
                  alt="Mali Project" 
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
      <section className="py-16 px-8 bg-gradient-to-br from-slate-900 via-blue-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-12 leading-tight">Project Results & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <div className="text-5xl font-extrabold mb-3">98%</div>
              <div className="text-lg opacity-90">Revenue Collection Rate</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-3">-35%</div>
              <div className="text-lg opacity-90">Non-Revenue Water Reduction</div>
            </div>
            <div>
              <div className="text-5xl font-extrabold mb-3">24/7</div>
              <div className="text-lg opacity-90">Prepaid Service Availability</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Ready for Your Success Story?</h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Let us help you implement a successful smart metering project in your region.
          </p>
          <Link 
            href="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 transition-all"
          >
            Start Your Project <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
