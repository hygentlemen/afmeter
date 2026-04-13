"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function AboutPage() {
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
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">معلومات عنا</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">أكثر من 15 سنة من التميز<br />في العدادات الذكية</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            رائد في تصنيع العدادات الذكية المدفوعة مقدماً وحلول AMI، خدمة أكثر من 50 دولة على 6 قارات.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">قصتنا</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">من ورشة صغيرة إلى رائد عالمي</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Shenzhen afmeter Co., Ltd. هو رائد في تصنيع العدادات الذكية المدفوعة مقدماً وحلول AMI (Advanced Metering Infrastructure). تأسست في عام 2003، كبرنا من ورشة صغيرة إلى رائد عالمي في حلول العدادات الذكية.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                مع أكثر من 15 سنة من الخبرة، نحن متخصصون في تقنيات العدادات الكهربائية والمائية والغازية، خدمة العملاء في أكثر من 50 دولة على 6 قارات.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">20,000+</div>
                  <div className="text-slate-600 text-sm">م² منشآت التصنيع</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">500+</div>
                  <div className="text-slate-600 text-sm">موظفين مؤهلين</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">15+</div>
                  <div className="text-slate-600 text-sm">سنوات الخبرة</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-xl">
                  <div className="text-4xl font-extrabold text-sky-600 mb-2">50+</div>
                  <div className="text-slate-600 text-sm">دولة</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-2xl text-white">
                <div className="text-5xl font-extrabold mb-2">ISO</div>
                <div className="text-sm opacity-85">9001, 14001, 45001 معتمد</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl">
                <div className="text-5xl font-extrabold text-slate-900 mb-2">2.2M+</div>
                <div className="text-sm text-slate-500">الإنتاج السنوي</div>
              </div>
              <div className="bg-white border-2 border-slate-200 p-8 rounded-2xl col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-5xl font-extrabold text-slate-900 mb-2">50+</div>
                    <div className="text-sm text-slate-500">دول على 6 قارات</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-2xl">🌍</div>
                      <div className="text-xs text-slate-500 mt-2">عالمي</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">⚡</div>
                      <div className="text-xs text-slate-500 mt-2">طاقة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">💧</div>
                      <div className="text-xs text-slate-500 mt-2">مياه</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl">🔥</div>
                      <div className="text-xs text-slate-500 mt-2">غاز</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">لماذا afmeter</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">حلول العدادات الذكية الرائدة في الصناعة</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              مع أكثر من 15 سنة من الخبرة في العدادات الذكية، توفر afmeter حلولاً موثوقة ومعتمدة ومبتكرة للمرافق والبلديات حول العالم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">معتمد STS & DLMS</h3>
                <p className="text-slate-600">امتثال كامل للمعايير الدولية</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">مصنع 60,000+ م²</h3>
                <p className="text-slate-600">قدرة تصنيع كبيرة الحجم</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">500+ عامل مؤهل</h3>
                <p className="text-slate-600">فريق مكرس مع خبرة R&D</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-12 h-12 bg-sky-50 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">دعم عالمي 24/7</h3>
                <p className="text-slate-600">خدمة في الموقع ومساعدة فنية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">جاهز لشراكة معنا؟</h2>
          <p className="text-lg opacity-90 mb-10">
            احصل على حل مخصص مصمم حسب احتياجاتك. فريقنا من الخبراء جاهز لمساعدتك.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href={getLocalizedPath("/contact")} 
              className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
            >
              اتصل بنا
            </Link>
            <Link 
              href={getLocalizedPath("/")} 
              className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
