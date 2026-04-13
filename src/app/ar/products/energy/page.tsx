"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function EnergyMeterPage() {
  const params = useParams();
  const currentLocale = "ar";

  const getLocalizedPath = (path: string) => {
    return `/${currentLocale}${path}`;
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">عدادات الطاقة</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">عدادات الطاقة المدفوعة مقدماً STS</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            عدادات كهرباء ذكية أحادية الطور وثلاثية الطور مع تكامل AMI متقدم
          </p>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">نظرة عامة على المنتج</div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">عداد طاقة مدفوع مقدماً أحادي الطور بلوحة مفاتيح</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                CA168-L01 هو عداد ذكي أحادي الطور متعدد الوظائف مع اتصال مدمج. يستخدم العداد لقياس الطاقة الكهربائية بدقة للعملاء التجاريين والسكنيين.
              </p>

              {/* Key Features */}
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">دفع مقدماً متوافق مع STS</h3>
                    <p className="text-slate-600 text-sm">نظام بيع آمن يعتمد على رموز مكونة من 20 رقم</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">اتصال PLC/RF/كبل</h3>
                    <p className="text-slate-600 text-sm">خيارات اتصال متعددة إلى CIU</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">دقة فئة 1.0</h3>
                    <p className="text-slate-600 text-sm">قياس عالي الدقة</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center text-lg flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">حماية ضد التلاعب</h3>
                    <p className="text-slate-600 text-sm">كشف الحقل المغناطيسي والمزيد</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link 
                  href={getLocalizedPath("/contact")} 
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  احصل على عرض سعر
                </Link>
                <Link 
                  href={getLocalizedPath("/products")} 
                  className="bg-white border-2 border-slate-200 hover:border-sky-500 text-slate-900 px-8 py-4 font-bold rounded-xl transition-colors"
                >
                  العودة للمنتجات
                </Link>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 rounded-2xl p-6">
                <img 
                  src="/images/single-phase-1.jpg" 
                  alt="عداد طاقة أحادي الطور" 
                  className="w-full rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img 
                    src="/images/single-phase-2.jpg" 
                    alt="عداد أحادي الطور من الأمام" 
                    className="w-full rounded-xl"
                  />
                </div>
                <div className="bg-slate-50 rounded-2xl p-6">
                  <img 
                    src="/images/single-phase-3.jpg" 
                    alt="عداد أحادي الطور من الجانب" 
                    className="w-full rounded-xl"
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
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">جاهز للطلب؟</h2>
          <p className="text-lg opacity-90 mb-10">
            احصل على مواصفات مفصلة وأسعار ومعلومات التوصيل لمشروعك.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link 
              href={getLocalizedPath("/contact")} 
              className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
            >
              طلب عرض سعر <span className="text-xl">→</span>
            </Link>
            <Link 
              href={getLocalizedPath("/products")} 
              className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
            >
              عرض جميع المنتجات
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
