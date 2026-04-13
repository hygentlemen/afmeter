"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProjectsPage() {
  const params = useParams();
  const currentLocale = "fr";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Nos projets</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Histoires de réussite de déploiement mondial</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Plus de 500 000 compteurs déployés dans plus de 50 pays sur 6 continents. Découvrez nos projets réussis.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Études de cas</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Projets en vedette</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Déploiements réels de compteurs intelligents qui démontrent notre expertise et nos résultats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mali Project */}
            <Link href={getLocalizedPath("/projects/mali")} className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-sky-500 hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img 
                    src="/images/single-phase-1.jpg" 
                    alt="Projet Mali" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-xs font-bold mb-4">
                    🌍 Afrique de l'Ouest
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Projet de comptage intelligent au Mali</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Plus de 50 000 compteurs prépayés STS déployés dans 12 régions au Mali, Afrique de l'Ouest.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-sky-600">50K+</div>
                      <div className="text-xs text-slate-500">Compteurs déployés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-sky-600">12</div>
                      <div className="text-xs text-slate-500">Régions</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    Voir le projet <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Nigeria Project */}
            <Link href={getLocalizedPath("/projects/nigeria")} className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-green-500 hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img 
                    src="/images/three-phase-1.jpg" 
                    alt="Projet Nigeria" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="inline-block bg-green-50 text-green-700 px-4 py-2 rounded-full text-xs font-bold mb-4">
                    🌍 Afrique de l'Ouest
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Projet de comptage intelligent au Nigeria</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Plus de 200 000 compteurs prépayés STS déployés dans 36 États au Nigeria.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-green-600">200K+</div>
                      <div className="text-xs text-slate-500">Compteurs déployés</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-green-600">36</div>
                      <div className="text-xs text-slate-500">États</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-green-500 font-bold text-sm">
                    Voir le projet <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Somaliland Project */}
            <Link href={getLocalizedPath("/projects/somaliland")} className="group">
              <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden hover:border-orange-500 hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img 
                    src="/images/gas-meter-1.jpg" 
                    alt="Projet Somaliland" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="inline-block bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-xs font-bold mb-4">
                    🌍 Afrique de l'Est
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Projet de comptage intelligent au Somaliland</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    Compteurs robustes fonctionnant dans des conditions extrêmes de 45°C+ avec 99,5% de disponibilité.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-orange-600">45°C+</div>
                      <div className="text-xs text-slate-500">Température</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-extrabold text-orange-600">99.5%</div>
                      <div className="text-xs text-slate-500">Disponibilité</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-2 text-orange-500 font-bold text-sm">
                    Voir le projet <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-extrabold text-slate-900 mb-2">500K+</div>
              <div className="text-sm text-slate-500 font-semibold">Total des compteurs déployés</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-slate-900 mb-2">50+</div>
              <div className="text-sm text-slate-500 font-semibold">Pays desservis</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-slate-900 mb-2">15+</div>
              <div className="text-sm text-slate-500 font-semibold">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-extrabold text-slate-900 mb-2">6</div>
              <div className="text-sm text-slate-500 font-semibold">Continents</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Prêt pour votre histoire de réussite ?</h2>
          <p className="text-lg opacity-90 mb-10">
            Laissez-nous vous aider à mettre en œuvre un projet de comptage intelligent réussi dans votre région.
          </p>
          <Link 
            href={getLocalizedPath("/contact")} 
            className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
          >
            Démarrer votre projet <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
