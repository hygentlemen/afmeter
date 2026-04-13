"use client";

import Link from "next/link";
import Script from "next/script";
import { useParams } from "next/navigation";

export default function ContactPage() {
  const params = useParams();
  const currentLocale = "fr";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <>
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Contactez-nous</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Entrez en contact</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Prêt à mettre à niveau votre système de comptage ? Notre équipe d'experts est là pour vous aider de la spécification au déploiement.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Contactez-nous</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Informations de contact</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-600 text-lg">info@afmeter.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Téléphone</h3>
                    <p className="text-slate-600 text-lg">+86 13562505474</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Emplacement</h3>
                    <p className="text-slate-600 text-lg">Shenzhen, Chine</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🏭
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Installation de fabrication</h3>
                    <p className="text-slate-600 text-lg">Base de production 20,000+ m²</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Envoyer un message</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Obtenir un devis gratuit</h2>
              
              {/* Formspree Form */}
              <form 
                action="https://formspree.io/f/xnjoyglp" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-3">Prénom <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-3">Nom de famille <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                      placeholder="Votre nom de famille"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-3">Email <span className="text-red-500">*</span></label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-3">Entreprise</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                    placeholder="Le nom de votre entreprise"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-3">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                    placeholder="Parlez-nous de votre projet..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white px-8 py-5 font-bold text-lg rounded-xl transition-all"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Besoin d'aide immédiate ?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Notre équipe est disponible 24/7 pour les demandes urgentes et le support technique.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="mailto:info@afmeter.com" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 font-bold rounded-xl transition-all inline-flex items-center gap-3"
            >
              <span>📧</span>
              Nous écrire
            </Link>
            <Link 
              href="tel:+8613562505474" 
              className="bg-white border-2 border-slate-200 hover:border-sky-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-all inline-flex items-center gap-3"
            >
              <span>📱</span>
              Nous appeler
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Script id="contact-form-validation" strategy="afterInteractive">
      {`
        (function() {
          const form = document.querySelector('form[action*="formspree"]');
          if (!form) return;
          
          const requiredFields = form.querySelectorAll('[required]');
          requiredFields.forEach(field => {
            // Store original required attribute
            const isRequired = field.hasAttribute('required');
            const isEmail = field.type === 'email';
            
            field.addEventListener('invalid', function() {
              if (this.validity.valueMissing) {
                this.setCustomValidity('This field is required');
              } else if (isEmail && this.validity.typeMismatch) {
                this.setCustomValidity('Please enter a valid email address');
              }
            });
            
            field.addEventListener('input', function() {
              this.setCustomValidity('');
            });
          });
        })();
      `}
    </Script>
    </>
  );
}
