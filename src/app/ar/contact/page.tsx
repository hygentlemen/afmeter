"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ContactPage() {
  const params = useParams();
  const currentLocale = "ar";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">اتصل بنا</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">تواصل معنا</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            جاهز لترقية نظام العدادات الخاص بك؟ فريقنا من الخبراء هنا لمساعدتك من المواصفات إلى النشر.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">تواصل معنا</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8">معلومات الاتصال</h2>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📧
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">البريد الإلكتروني</h3>
                    <p className="text-slate-600 text-lg">info@afmeter.com</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📱
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">الهاتف</h3>
                    <p className="text-slate-600 text-lg">+86 13562505474</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    📍
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">الموقع</h3>
                    <p className="text-slate-600 text-lg">Shenzhen, الصين</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                    🏭
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">منشأة التصنيع</h3>
                    <p className="text-slate-600 text-lg">قاعدة إنتاج 20,000+ م²</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">إرسال رسالة</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8">احصل على عرض سعر مجاني</h2>
              
              {/* Formspree Form */}
              <form 
                action="https://formspree.io/f/xnjoyglp" 
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-medium mb-3">الاسم الأول</label>
                    <input 
                      type="text" 
                      name="firstName"
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                      placeholder="اسمك الأول"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-3">اسم العائلة</label>
                    <input 
                      type="text" 
                      name="lastName"
                      required
                      className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                      placeholder="اسم عائلتك"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-3">البريد الإلكتروني</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                    placeholder="عنوانك@البريد.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-3">الشركة</label>
                  <input 
                    type="text" 
                    name="company"
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all"
                    placeholder="اسم شركتك"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-3">الرسالة</label>
                  <textarea 
                    name="message"
                    required
                    rows={5}
                    className="w-full px-5 py-4 border border-slate-200 rounded-xl focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 outline-none transition-all resize-none"
                    placeholder="أخبرنا عن مشروعك..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white px-8 py-5 font-bold text-lg rounded-xl transition-all"
                >
                  إرسال الرسالة
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6">بحاجة إلى مساعدة فورية؟</h2>
          <p className="text-lg text-slate-600 mb-10">
            فريقنا متاح 24/7 للطلبات العاجلة والدعم الفني.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link 
              href="mailto:info@afmeter.com" 
              className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 font-bold rounded-xl transition-all inline-flex items-center gap-3"
            >
              <span>📧</span>
              مراسلتنا
            </Link>
            <Link 
              href="tel:+8613562505474" 
              className="bg-white border-2 border-slate-200 hover:border-sky-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-all inline-flex items-center gap-3"
            >
              <span>📱</span>
              اتصال بنا
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
