import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">About Us</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">15+ Years of Excellence<br />in Smart Metering</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Leading manufacturer of smart prepayment meters and AMI solutions, serving 50+ countries across 6 continents.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Our Story</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">From a Small Workshop to Global Leader</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Shenzhen afmeter Co., Ltd. is a leading manufacturer of smart prepayment meters and AMI (Advanced Metering Infrastructure) solutions. Founded in 2003, we have grown from a small workshop to a global leader in smart metering solutions.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                With over 15 years of experience, we specialize in electricity, water, and gas metering technologies, serving customers in 50+ countries across 6 continents.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">20,000+</div>
                  <div className="text-slate-600 text-sm">sqm Manufacturing Facility</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">500+</div>
                  <div className="text-slate-600 text-sm">Skilled Employees</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">15+</div>
                  <div className="text-slate-600 text-sm">Years Experience</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">50+</div>
                  <div className="text-slate-600 text-sm">Countries</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white">
                <div className="text-5xl font-extrabold mb-2">ISO</div>
                <div className="text-sm opacity-85">9001, 14001, 45001 Certified</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl">
                <div className="text-5xl font-extrabold text-slate-900 mb-2">2.2M+</div>
                <div className="text-sm text-slate-500">Annual Production</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-extrabold text-slate-900 mb-2">50+</div>
                    <div className="text-sm text-slate-500">Countries Across 6 Continents</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl">🌍</div>
                      <div className="text-xs text-slate-500 mt-2">Global</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">⚡</div>
                      <div className="text-xs text-slate-500 mt-2">Energy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">💧</div>
                      <div className="text-xs text-slate-500 mt-2">Water</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">🔥</div>
                      <div className="text-xs text-slate-500 mt-2">Gas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Why afmeter</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Industry-Leading Smart Metering Solutions</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              With over 15 years of experience in smart metering, afmeter delivers reliable, certified, and innovative solutions to utilities and municipalities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">STS & DLMS Certified</h3>
                <p className="text-slate-600">Full compliance with international standards</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">60,000+ sqm Factory</h3>
                <p className="text-slate-600">Large-scale manufacturing capacity</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">500+ Skilled Workers</h3>
                <p className="text-slate-600">Dedicated team with R&D expertise</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">24/7 Global Support</h3>
                <p className="text-slate-600">On-site service and technical assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Ready to Partner with Us?</h2>
          <p className="text-lg opacity-90 mb-10">
            Get a customized solution tailored to your needs. Our team of experts is ready to assist you.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href="/contact" 
              className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
            >
              Contact Us
            </Link>
            <Link 
              href="/" 
              className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
