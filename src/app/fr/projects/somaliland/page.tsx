"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function SomalilandProjectPage() {
  const params = useParams();
  const currentLocale = "fr";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-4">Projet Somaliland</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Projet de comptage intelligent au Somaliland</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Compteurs robustes fonctionnant dans des conditions extrêmes de 45°C+ avec 99,5% de disponibilité
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">Aperçu du projet</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Performance dans des conditions extrêmes</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              afmeter a déployé des compteurs intelligents au Somaliland, où ils fonctionnent de manière fiable dans des températures dépassant 45°C, démontrant la durabilité et la fiabilité de nos produits.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">45°C+</div>
              <div className="text-sm text-slate-600">Température</div>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">99.5%</div>
              <div className="text-sm text-slate-600">Disponibilité</div>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">2019</div>
              <div className="text-sm text-slate-600">Année de démarrage</div>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">Support</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              href={getLocalizedPath("/contact")} 
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 transition-all"
            >
              Contactez-nous <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
