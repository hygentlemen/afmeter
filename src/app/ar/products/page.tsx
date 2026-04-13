"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductsPage() {
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
          <div className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">منتجاتنا</div>
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">حلول عداد كاملة</h1>
          <p className="text-xl opacity-90 leading-relaxed">
            من السكني إلى الصناعي، نقدم حلول العدادات الذكية لكل تطبيق.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">فئات المنتجات</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">اختر الحل الخاص بك</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              عدادات مدفوعة مقدماً متوافقة مع STS للطاقة والمياه والغاز مع تكامل AMI متقدم.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Energy Meters */}
            <Link href={getLocalizedPath("/products/energy")} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-56 overflow-hidden">
                  <img 
                    src="/images/single-phase-1.jpg" 
                    alt="عدادات الطاقة" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">
                      ⚡
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">عدادات الطاقة</h3>
                      <p className="text-sm text-slate-500">كهرباء مدفوعة مقدماً STS</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    عدادات ذكية أحادية الطور وثلاثية الطور مع لوحة مفاتيح و LoRaWAN و GPRS وامتثال DLMS/COSEM.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    عرض المنتجات <span className="text-lg">→</span>
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
                    alt="عدادات المياه" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl">
                      💧
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">عدادات المياه</h3>
                      <p className="text-sm text-slate-500">مدفوعة مقدماً STS & فوق الصوتية</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    عدادات مياه مدفوعة مقدماً متعددة الطبقات وفوق الصوتية مع IP68 وبطارية 10 سنوات وميزات تقليل الخسائر غير المُعاد تعويضها.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    عرض المنتجات <span className="text-lg">→</span>
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
                    alt="عدادات الغاز" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl">
                      🔥
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">عدادات الغاز</h3>
                      <p className="text-sm text-slate-500">حجابي مدفوع مقدماً STS</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    عدادات غاز حجابية مع STS وتعويض درجة الحرارة وحماية الحقل المغناطيسي وخيارات CIU.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    عرض المنتجات <span className="text-lg">→</span>
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
            <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">المنتجات المميزة</div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">العدادات الأكثر مبيعاً لدينا</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              مصممة للاعتمادية والدقة والأداء طويل الأجل في البيئات المتطلبة.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Single Phase */}
            <div className="bg-slate-50 rounded-2xl overflow-hidden shadow-md">
              <div className="grid grid-cols-2">
                <div className="p-8 flex flex-col justify-center">
                  <div className="inline-block bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-xs font-bold mb-5">
                    الأكثر مبيعاً
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">عداد طاقة مدفوع مقدماً أحادي الطور بلوحة مفاتيح</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    متوافق مع STS، دقة فئة 1.0، دفع مقدماً بلوحة مفاتيح، PLC/RF/كبل إلى CIU، حماية ضد التلاعب.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">STS</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">فئة 1.0</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">لوحة مفاتيح</span>
                  </div>
                  <Link 
                    href={getLocalizedPath("/products/energy")} 
                    className="inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    عرض التفاصيل <span>→</span>
                  </Link>
                </div>
                <div className="bg-slate-100 p-8 flex items-center justify-center">
                  <img 
                    src="/images/single-phase-2.jpg" 
                    alt="عداد أحادي الطور" 
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
                    تقليل NRW
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">عداد مياه مدفوع مقدماً STS متعدد الطبقات متقدم</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    دقة R160/R250، حماية IP67/IP68، بطارية 10 سنوات، مقاومة الحقول المغناطيسية، LoRaWAN/GPRS.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">R250</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">IP68</span>
                    <span className="bg-white text-slate-700 px-3 py-1.5 rounded-md text-xs font-semibold">10 سنوات</span>
                  </div>
                  <Link 
                    href={getLocalizedPath("/products/water")} 
                    className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                  >
                    عرض التفاصيل <span>→</span>
                  </Link>
                </div>
                <div className="bg-cyan-50 p-8 flex items-center justify-center">
                  <img 
                    src="/images/water-meter-2.jpg" 
                    alt="عداد المياه" 
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
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">بحاجة إلى حل مخصص؟</h2>
          <p className="text-lg opacity-90 mb-10">
            احصل على حل عداد مصمم حسب احتياجاتك المحددة. فريقنا جاهز لمساعدتك.
          </p>
          <Link 
            href={getLocalizedPath("/contact")} 
            className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all"
          >
            طلب عرض سعر <span className="text-xl">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
