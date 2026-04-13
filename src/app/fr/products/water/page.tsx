"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function WaterMeterPage() {
  const params = useParams();
  const currentLocale = "fr";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-cyan-400 font-bold text-sm tracking-widest uppercase mb-4">Compteurs d'eau</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Compteurs d'eau prépayés STS</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Compteurs d'eau intelligents multi-jets et ultrasoniques avec réduction avancée des pertes non rémunérées
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-cyan-500 font-bold text-sm tracking-widest uppercase mb-3">Aperçu du produit</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Compteur d'eau prépayé STS multi-jet avancé</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                La série CA568 sont des compteurs d'eau prépayés multi-jets et ultrasoniques avancés avec conformité STS, protection IP67/IP68 et durée de vie de batterie de 10 ans.
              </p>

              {/* Key Features */}
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Prépaiement conforme STS</h3>
                    <p className="text-slate-600 text-sm">Système de vente sécurisé basé sur des jetons à 20 chiffres</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Précision R160/R250</h3>
                    <p className="text-slate-600 text-sm">Mesure multi-jet et ultrasonique haute précision</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Étanche IP67/IP68</h3>
                    <p className="text-slate-600 text-sm">Conçu pour une installation extérieure et souterraine difficile</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-cyan-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Durée de vie de batterie 10 ans</h3>
                    <p className="text-slate-600 text-sm">Batterie au lithium durable avec consommation ultra-basse</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href={getLocalizedPath("/contact")} 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Obtenir un devis
                </Link>
                <Link 
                  href={getLocalizedPath("/products")} 
                  className="bg-white border-2 border-slate-200 hover:border-cyan-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Retour aux produits
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img 
                  src="/images/water-meter-1.jpg" 
                  alt="Compteur d'eau multi-jet" 
                  className="w-full rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img 
                    src="/images/water-meter-2.jpg" 
                    alt="Détail du compteur d'eau" 
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img 
                    src="/images/single-phase-1.jpg" 
                    alt="Installation du compteur d'eau" 
                    className="w-full rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Prêt pour la réduction des pertes non rémunérées ?</h2>
          <p className="text-lg opacity-90 mb-10">
            Obtenez des spécifications détaillées, des prix et des informations de livraison pour votre projet de comptage d'eau.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href={getLocalizedPath("/contact")} 
              className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
            >
              Demander un devis <span className="text-xl">→</span>
            </Link>
            <Link 
              href={getLocalizedPath("/products")} 
              className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
