"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductsPage() {
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
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Nos produits</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Solutions de comptage complètes</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Du résidentiel à l'industriel, nous fournissons des solutions de comptage intelligent pour chaque application.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Catégories de produits</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Choisissez votre solution</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Compteurs prépayés conformes STS pour l'énergie, l'eau et le gaz avec intégration AMI avancée.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Energy Meters */}
            <Link href={getLocalizedPath("/products/energy")} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="/images/single-phase-1.jpg" 
                    alt="Compteurs d'énergie" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Compteurs d'énergie</h3>
                      <p className="text-sm text-slate-500">Électricité prépayée STS</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Compteurs intelligents monophasés et triphasés avec clavier, LoRaWAN, GPRS et conformité DLMS/COSEM.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    Voir les produits <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Water Meters */}
            <Link href={getLocalizedPath("/products/water")} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="/images/water-meter-1.jpg" 
                    alt="Compteurs d'eau" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl">
                      💧
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Compteurs d'eau</h3>
                      <p className="text-sm text-slate-500">Prépayé STS & Ultrasonique</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Compteurs d'eau prépayés multi-jets et ultrasoniques avec IP68, batterie 10 ans et fonctionnalités de réduction des pertes non rémunérées.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    Voir les produits <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Gas Meters */}
            <Link href={getLocalizedPath("/products/gas")} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="/images/gas-meter-1.jpg" 
                    alt="Compteurs de gaz" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl">
                      🔥
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Compteurs de gaz</h3>
                      <p className="text-sm text-slate-500">Diaphragme prépayé STS</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Compteurs de gaz à diaphragme avec STS, compensation de température, protection contre les champs magnétiques et options CIU.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    Voir les produits <span className="text-lg">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Produits phares</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Nos compteurs les plus vendus</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Conçus pour la fiabilité, la précision et les performances à long terme dans des environnements exigeants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Single Phase */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-xs font-bold mb-5">
                    LE PLUS VENDU
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Compteur d'énergie prépayé à clavier monophasé</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Conforme STS, précision classe 1.0, prépaiement par clavier, PLC/RF/Câble vers CIU, protection anti-falsification.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">STS</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">Classe 1.0</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">Clavier</span>
                  </div>
                  <Link 
                    href={getLocalizedPath("/products/energy")} 
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    Voir les détails <span>→</span>
                  </Link>
                </div>
                <div className="bg-slate-100 p-8 flex items-center justify-center">
                  <img 
                    src="/images/single-phase-2.jpg" 
                    alt="Compteur monophasé" 
                    className="max-w-full max-h-64 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Multi-Jet Water */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-xs font-bold mb-5">
                    RÉDUCTION NRW
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Compteur d'eau prépayé STS multi-jet avancé</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Précision R160/R250, protection IP67/IP68, batterie 10 ans, résistance aux champs magnétiques, LoRaWAN/GPRS.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">R250</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">IP68</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">10 ans</span>
                  </div>
                  <Link 
                    href={getLocalizedPath("/products/water")} 
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    Voir les détails <span>→</span>
                  </Link>
                </div>
                <div className="bg-cyan-50 p-8 flex items-center justify-center">
                  <img 
                    src="/images/water-meter-2.jpg" 
                    alt="Compteur d'eau" 
                    className="max-w-full max-h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">Besoin d'une solution personnalisée ?</h2>
          <p className="text-lg opacity-90 mb-10">
            Obtenez une solution de comptage adaptée à vos besoins spécifiques. Notre équipe est prête à vous aider.
          </p>
          <Link 
            href={getLocalizedPath("/contact")} 
            className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
          >
            Demander un devis <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
