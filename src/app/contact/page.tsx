import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter - Contact Us | Get a Quote for Smart Meters",
  description: "Contact afmeter for STS prepaid meters, AMI systems, and smart metering solutions. Get a quote for your project. Email: info@afmeter.com",
  keywords: "contact smart meter supplier, get quote prepaid meter, AMI system inquiry, smart metering solutions contact",
};

export default function ContactPage() {
  return (
    <>
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Contact Us</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">Get in Touch</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            Ready to upgrade your metering system? Our team of experts is here to help you from specification to deployment.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Reach Out</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Contact Information</h2>
              
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
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Phone</h3>
                    <p className="text-slate-600 text-lg">+86 13562505474</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Location</h3>
                    <p className="text-slate-600 text-lg">Shenzhen, China</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🏭
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Manufacturing Facility</h3>
                    <p className="text-slate-600 text-lg">20,000+ sqm Production Base</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">Send a Message</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Get a Free Quote</h2>
              
              {/* Formspree Form */}
              <form 
                action="https://formspree.io/f/xnjoyglp" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-3">First Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-3">Last Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                      placeholder="Your last name"
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
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-3">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-3">Message <span className="text-red-500">*</span></label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white px-8 py-5 font-bold text-lg rounded-xl transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Need Immediate Assistance?</h2>
          <p className="text-lg text-slate-600 mb-10">
            Our team is available 24/7 for urgent inquiries and technical support.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="mailto:info@afmeter.com" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 font-bold rounded-xl transition-all inline-flex items-center gap-3"
            >
              <span>📧</span>
              Email Us
            </Link>
            <Link 
              href="tel:+8613562505474" 
              className="bg-white border-2 border-slate-200 hover:border-sky-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-all inline-flex items-center gap-3"
            >
              <span>📱</span>
              Call Us
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
