"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function SomalilandProjectPage() {
  const params = useParams();
  const currentLocale = "ar";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-orange-400 font-bold text-sm tracking-widest uppercase mb-4">مشروع صوماليلاند</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">مشروع العدادات الذكية في صوماليلاند</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            عدادات قوية تعمل في ظروف قاسية 45°C+ مع 99.5% من وقت التشغيل
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">نظرة عامة على المشروع</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">الأداء في الظروف القاسية</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              نشرت afmeter عدادات ذكية في صوماليلاند، حيث تعمل بشكل موثوق في درجات حرارة تتجاوز 45°C، مما يوضح متانة وموثوقية منتجاتنا.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">45°C+</div>
              <div className="text-sm text-slate-600">درجة الحرارة</div>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">99.5%</div>
              <div className="text-sm text-slate-600">وقت التشغيل</div>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">2019</div>
              <div className="text-sm text-slate-600">سنة البدء</div>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-slate-600">الدعم</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              href={getLocalizedPath("/contact")} 
              className="bg-orange-600 hover:bg-orange-700 text-white px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 transition-all"
            >
              اتصل بنا <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
