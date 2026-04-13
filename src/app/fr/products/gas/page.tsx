"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function GasMeterPage() {
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
          <div className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-4">Compteurs de gaz</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Compteurs de gaz prépayés STS</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Compteurs de gaz à diaphragme avec prépaiement sécurisé basé sur des jetons
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">Aperçu du produit</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Compteur de gaz à diaphragme prépayé à clavier STS</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                La série CG sont des compteurs de gaz à diaphragme prépayés conformes STS avec compensation de température, protection contre les champs magnétiques et options CIU.
              </p>

              {/* Key Features */}
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Prépaiement conforme STS</h3>
                    <p className="text-slate-600 text-sm">Système de vente sécurisé basé sur des jetons à 20 chiffres</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Compensation de température</h3>
                    <p className="text-slate-600 text-sm">Mesure de volume précise à travers des températures variables</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Protection contre les champs magnétiques</h3>
                    <p className="text-slate-600 text-sm">Anti-trespassage avec détection de champ magnétique</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">CIU optionnel</h3>
                    <p className="text-slate-600 text-sm">Unité d'affichage à distance disponible</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  href={getLocalizedPath("/contact")}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Obtenir un devis
                </Link>
                <Link
                  href={getLocalizedPath("/products")}
                  className="bg-white border-2 border-slate-200 hover:border-orange-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  Retour aux produits
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img
                  src="/images/gas-meter-1.jpg"
                  alt="Compteur de gaz à diaphragme"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Prêt pour le comptage du gaz ?</h2>
          <p className="text-lg opacity-90 mb-10">
            Obtenez des spécifications détaillées, des prix et des informations de livraison pour votre projet de comptage du gaz.
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
