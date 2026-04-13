"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function NigeriaProjectPage() {
  const params = useParams();
  const currentLocale = "fr";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-green-400 font-bold text-sm tracking-widest uppercase mb-4">Projet Nigeria</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Projet de comptage intelligent au Nigeria</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Plus de 200 000 compteurs prépayés STS déployés dans 36 États
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-green-500 font-bold text-sm tracking-widest uppercase mb-3">Aperçu du projet</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Déploiement à grande échelle au Nigeria</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              afmeter a déployé plus de 200 000 compteurs prépayés STS à travers 36 États du Nigeria, l'un des plus grands déploiements de compteurs intelligents en Afrique de l'Ouest.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-green-600 mb-2">200K+</div>
              <div className="text-sm text-slate-600">Compteurs déployés</div>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-green-600 mb-2">36</div>
              <div className="text-sm text-slate-600">États</div>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-green-600 mb-2">2016</div>
              <div className="text-sm text-slate-600">Année de démarrage</div>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-green-600 mb-2">99%</div>
              <div className="text-sm text-slate-600">Satisfaction client</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              href={getLocalizedPath("/contact")} 
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 transition-all"
            >
              Contactez-nous <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
