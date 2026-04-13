"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function NigeriaProjectPage() {
  const params = useParams();
  const currentLocale = "ar";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-green-400 font-bold text-sm tracking-widest uppercase mb-4">مشروع نيجيريا</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">مشروع العدادات الذكية في نيجيريا</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            أكثر من 200 ألف عداد مدفوع مقدماً STS منشور في 36 ولاية
          </p>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-green-500 font-bold text-sm tracking-widest uppercase mb-3">نظرة عامة على المشروع</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6">نشر واسع النطاق في نيجيريا</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              نشرت afmeter أكثر من 200 ألف عداد مدفوع مقدماً STS عبر 36 ولاية في نيجيريا، أحد أكبر نشرات العدادات الذكية في غرب أفريقيا.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-green-600 mb-2">200K+</div>
              <div className="text-sm text-slate-600">العدادات المنشورة</div>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-green-600 mb-2">36</div>
              <div className="text-sm text-slate-600">ولايات</div>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-green-600 mb-2">2016</div>
              <div className="text-sm text-slate-600">سنة البدء</div>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-xl">
              <div className="text-4xl font-extrabold text-green-600 mb-2">99%</div>
              <div className="text-sm text-slate-600">رضا العملاء</div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link 
              href={getLocalizedPath("/contact")} 
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 transition-all"
            >
              اتصل بنا <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
