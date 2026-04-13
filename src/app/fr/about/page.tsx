"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function AboutPage() {
  const params = useParams();
  const currentLocale = "fr";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">À propos de nous</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Plus de 15 ans d'excellence<br />dans le comptage intelligent</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Fabricant leader de compteurs intelligents prépayés et de solutions AMI, au service de plus de 50 pays sur 6 continents.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Notre histoire</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">D'un petit atelier à leader mondial</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Shenzhen afmeter Co., Ltd. est un fabricant leader de compteurs intelligents prépayés et de solutions AMI (Advanced Metering Infrastructure). Fondée en 2003, nous avons grandi d'un petit atelier à un leader mondial en solutions de comptage intelligent.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Avec plus de 15 ans d'expérience, nous nous spécialisons dans les technologies de comptage d'électricité, d'eau et de gaz, au service de clients dans plus de 50 pays sur 6 continents.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">20,000+</div>
                  <div className="text-slate-600 text-sm">Installations de fabrication m²</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">500+</div>
                  <div className="text-slate-600 text-sm">Employés qualifiés</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">15+</div>
                  <div className="text-slate-600 text-sm">Années d'expérience</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">50+</div>
                  <div className="text-slate-600 text-sm">Pays</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white">
                <div className="text-5xl font-extrabold mb-2">ISO</div>
                <div className="text-sm opacity-85">9001, 14001, 45001 Certifié</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl">
                <div className="text-5xl font-extrabold text-slate-900 mb-2">2.2M+</div>
                <div className="text-sm text-slate-500">Production annuelle</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-extrabold text-slate-900 mb-2">50+</div>
                    <div className="text-sm text-slate-500">Pays sur 6 continents</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl">🌍</div>
                      <div className="text-xs text-slate-500 mt-2">Mondial</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">⚡</div>
                      <div className="text-xs text-slate-500 mt-2">Énergie</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">💧</div>
                      <div className="text-xs text-slate-500 mt-2">Eau</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">🔥</div>
                      <div className="text-xs text-slate-500 mt-2">Gaz</div>
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
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Pourquoi afmeter</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Solutions de comptage intelligent leaders du secteur</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Avec plus de 15 ans d'expérience en comptage intelligent, afmeter fournit des solutions fiables, certifiées et innovantes aux services publics et municipalités du monde entier.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Certifié STS & DLMS</h3>
                <p className="text-slate-600">Conformité complète aux normes internationales</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Usine de 60,000+ m²</h3>
                <p className="text-slate-600">Capacité de fabrication à grande échelle</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">500+ travailleurs qualifiés</h3>
                <p className="text-slate-600">Équipe dédiée avec expertise R&D</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Support global 24/7</h3>
                <p className="text-slate-600">Service sur site et assistance technique</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Prêt à devenir notre partenaire ?</h2>
          <p className="text-lg opacity-90 mb-10">
            Obtenez une solution personnalisée adaptée à vos besoins. Notre équipe d'experts est prête à vous aider.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href={getLocalizedPath("/contact")} 
              className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
            >
              Nous contacter
            </Link>
            <Link 
              href={getLocalizedPath("/")} 
              className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
