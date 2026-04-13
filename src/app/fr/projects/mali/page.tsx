"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function MaliProjectPage() {
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
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Projet Mali</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Projet de comptage intelligent au Mali</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Plus de 50 000 compteurs prépayés STS déployés dans 12 régions en Afrique de l'Ouest
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Aperçu du projet</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Transformation du secteur énergétique du Mali</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              afmeter a déployé plus de 50 000 compteurs prépayés STS à travers 12 régions du Mali, améliorant l'accès à l'électricité et réduisant les pertes de revenus pour les services publics.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-sky-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-sky-600 mb-2">50K+</div>
              <div className="text-sm text-slate-600">Compteurs déployés</div>
            </div>
            <div className="text-center bg-sky-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-sky-600 mb-2">12</div>
              <div className="text-sm text-slate-600">Régions</div>
            </div>
            <div className="text-center bg-sky-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-sky-600 mb-2">2018</div>
              <div className="text-sm text-slate-600">Année de démarrage</div>
            </div>
            <div className="text-center bg-sky-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-sky-600 mb-2">98%</div>
              <div className="text-sm text-slate-600">Taux de collecte</div>
            </div>
          </div>

          {/* Project Benefits */}
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Amélioration de l'accès à l'électricité</h3>
                <p className="text-slate-600">Plus de ménages ont désormais accès à une électricité fiable avec le système prépayé.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Réduction des pertes de revenus</h3>
                <p className="text-slate-600">Le système prépayé STS a considérablement réduit les pertes non techniques pour le service public.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">✓</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Contrôle de la consommation</h3>
                <p className="text-slate-600">Les clients peuvent désormais suivre et gérer leur consommation d'électricité en temps réel.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Prêt à démarrer un projet similaire ?</h2>
          <p className="text-lg opacity-90 mb-10">
            Contactez-nous pour discuter de vos besoins en matière de comptage intelligent.
          </p>
          <Link 
            href={getLocalizedPath("/contact")} 
            className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
          >
            Contactez-nous <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
