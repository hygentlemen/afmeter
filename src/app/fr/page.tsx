import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter - Compteurs intelligents prépayés STS | Compteurs d'énergie, d'eau et de gaz",
  description: "afmeter est un fabricant leader de compteurs intelligents prépayés STS, de systèmes AMI et de solutions de comptage. Plus de 15 ans d'expérience, plus de 500 000 compteurs déployés dans plus de 50 pays à travers le monde.",
  keywords: "compteur prépayé STS, compteur intelligent, compteur d'énergie, compteur d'eau, compteur de gaz, système AMI, compteur d'électricité prépayé, solutions de comptage intelligent, fournisseur de compteurs en Afrique",
  openGraph: {
    title: "afmeter - Compteurs intelligents prépayés STS | Compteurs d'énergie, d'eau et de gaz",
    description: "Fabricant leader de compteurs intelligents prépayés STS, de systèmes AMI et de solutions de comptage. Plus de 15 ans d'expérience, plus de 500 000 compteurs déployés à travers le monde.",
    type: "website",
  },
};

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { HeroCarousel } from "@/components/sections/HeroCarousel";

export default function Home() {
  const params = useParams();
  const currentLocale = "fr";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "afmeter",
            "alternateName": "AFC Meters",
            "url": "https://www.afmeter.com",
            "logo": "https://www.afmeter.com/logo.png",
            "description": "Fabricant leader de compteurs intelligents prépayés STS, de systèmes AMI et de solutions de comptage. Plus de 15 ans d'expérience, plus de 500 000 compteurs déployés dans plus de 50 pays à travers le monde.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+86 13562505474",
              "contactType": "customer service",
              "email": "info@afmeter.com"
            },
            "sameAs": [
              "https://www.linkedin.com/in/qiscott/"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "afmeter",
            "url": "https://www.afmeter.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.afmeter.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      <main className="min-h-screen">
        {/* Hero Carousel */}
        <HeroCarousel />

        {/* Stats Section */}
        <section className="bg-sky-500 py-12 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-extrabold mb-2">15+</div>
                <div className="text-sm font-medium opacity-90">Années d'expérience</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">50+</div>
                <div className="text-sm font-medium opacity-90">Pays</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">500K+</div>
                <div className="text-sm font-medium opacity-90">Compteurs déployés</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">6</div>
                <div className="text-sm font-medium opacity-90">Continents</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="products" className="bg-slate-50 py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Nos produits</div>
              <h2 className="text-5xl font-extrabold text-slate-900 mb-4">Solutions de comptage complètes</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Du résidentiel à l'industriel, nous fournissons des solutions de comptage intelligent pour chaque application
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Energy Meters */}
              <Link href={getLocalizedPath("/products/energy")} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
                <div className="h-56 overflow-hidden">
                  <img src="/images/single-phase-1.jpg" alt="Compteurs d'énergie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">⚡</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Compteurs d'énergie</h3>
                      <p className="text-sm text-slate-500">Électricité prépayée STS</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Compteurs intelligents monophasés et triphasés avec clavier, LoRaWAN, GPRS et conformité DLMS/COSEM.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    Voir les détails <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>

              {/* Water Meters */}
              <Link href={getLocalizedPath("/products/water")} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
                <div className="h-56 overflow-hidden">
                  <img src="/images/water-meter-1.jpg" alt="Compteurs d'eau" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl">💧</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Compteurs d'eau</h3>
                      <p className="text-sm text-slate-500">Prépayé STS & Ultrasonique</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Compteurs d'eau prépayés multi-jets et ultrasoniques avec IP68, batterie 10 ans et fonctionnalités de réduction des pertes non rémunérées.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    Voir les détails <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>

              {/* Gas Meters */}
              <Link href={getLocalizedPath("/products/gas")} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
                <div className="h-56 overflow-hidden">
                  <img src="/images/gas-meter-1.jpg" alt="Compteurs de gaz" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl">🔥</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Compteurs de gaz</h3>
                      <p className="text-sm text-slate-500">Diaphragme prépayé STS</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    Compteurs de gaz à diaphragme avec STS, compensation de température, protection contre les champs magnétiques et options CIU.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    Voir les détails <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">Prêt à mettre à niveau votre système de comptage ?</h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              Obtenez une solution personnalisée adaptée à vos besoins. Notre équipe d'experts est prête à vous aider de la spécification au déploiement.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <div className="bg-white/10 px-8 py-5 rounded-xl">
                <div className="text-sm opacity-80 mb-2">Email</div>
                <div className="font-bold text-lg">info@afmeter.com</div>
              </div>
              <div className="bg-white/10 px-8 py-5 rounded-xl">
                <div className="text-sm opacity-80 mb-2">Téléphone</div>
                <div className="font-bold text-lg">+86 13562505474</div>
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={getLocalizedPath("/contact")} className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all">
                <span>Obtenir un devis gratuit</span>
                <span className="text-xl">→</span>
              </Link>
              <Link href={getLocalizedPath("/about")} className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 inline-flex items-center gap-3 hover:bg-white/20 transition-all">
                En savoir plus
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
