import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "afmeter - عدادات ذكية مدفوعة مقدماً STS | عدادات طاقة ومياه وغاز",
  description: "afmeter هي رائدة في تصنيع العدادات الذكية المدفوعة مقدماً STS وأنظمة AMI وحلول العدادات. أكثر من 15 سنة خبرة، أكثر من 500 ألف عداد منشور في أكثر من 50 دولة حول العالم.",
  keywords: "عداد مدفوع مقدماً STS، عداد ذكي، عداد طاقة، عداد مياه، عداد غاز، نظام AMI، عداد كهرباء مدفوع مقدماً، حلول عدادات ذكية، مورد عدادات في إفريقيا",
  openGraph: {
    title: "afmeter - عدادات ذكية مدفوعة مقدماً STS | عدادات طاقة ومياه وغاز",
    description: "رائدة في تصنيع العدادات الذكية المدفوعة مقدماً STS وأنظمة AMI وحلول العدادات. أكثر من 15 سنة خبرة، أكثر من 500 ألف عداد منشور حول العالم.",
    type: "website",
  },
};

"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { HeroCarousel } from "@/components/sections/HeroCarousel";

export default function Home() {
  const params = useParams();
  const currentLocale = "ar";

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
            "description": "رائدة في تصنيع العدادات الذكية المدفوعة مقدماً STS وأنظمة AMI وحلول العدادات. أكثر من 15 سنة خبرة، أكثر من 500 ألف عداد منشور في أكثر من 50 دولة حول العالم.",
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
                <div className="text-sm font-medium opacity-90">سنوات الخبرة</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">50+</div>
                <div className="text-sm font-medium opacity-90">الدول</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">500K+</div>
                <div className="text-sm font-medium opacity-90">العدادات المنشورة</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold mb-2">6</div>
                <div className="text-sm font-medium opacity-90">القارات</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section id="products" className="bg-slate-50 py-20 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-sky-500 font-bold text-sm tracking-widest uppercase mb-3">منتجاتنا</div>
              <h2 className="text-5xl font-extrabold text-slate-900 mb-4">حلول عداد كاملة</h2>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
                من السكني إلى الصناعي، نقدم حلول العدادات الذكية لكل تطبيق
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Energy Meters */}
              <Link href={getLocalizedPath("/products/energy")} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
                <div className="h-56 overflow-hidden">
                  <img src="/images/single-phase-1.jpg" alt="عدادات الطاقة" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl">⚡</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">عدادات الطاقة</h3>
                      <p className="text-sm text-slate-500">كهرباء مدفوعة مقدماً STS</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    عدادات ذكية أحادية الطور وثلاثية الطور مع لوحة مفاتيح و LoRaWAN و GPRS وامتثال DLMS/COSEM.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    عرض التفاصيل <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>

              {/* Water Meters */}
              <Link href={getLocalizedPath("/products/water")} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
                <div className="h-56 overflow-hidden">
                  <img src="/images/water-meter-1.jpg" alt="عدادات المياه" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl">💧</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">عدادات المياه</h3>
                      <p className="text-sm text-slate-500">مدفوعة مقدماً STS & فوق الصوتية</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    عدادات مياه مدفوعة مقدماً متعددة الطبقات وفوق الصوتية مع IP68 وبطارية 10 سنوات وميزات تقليل الخسائر غير المُعاد تعويضها.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    عرض التفاصيل <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>

              {/* Gas Meters */}
              <Link href={getLocalizedPath("/products/gas")} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all group block">
                <div className="h-56 overflow-hidden">
                  <img src="/images/gas-meter-1.jpg" alt="عدادات الغاز" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-2xl">🔥</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">عدادات الغاز</h3>
                      <p className="text-sm text-slate-500">حجابي مدفوع مقدماً STS</p>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">
                    عدادات غاز حجابية مع STS وتعويض درجة الحرارة وحماية الحقل المغناطيسي وخيارات CIU.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sky-500 font-bold text-sm">
                    عرض التفاصيل <span className="text-lg">→</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">جاهز لترقية نظام العدادات الخاص بك؟</h2>
            <p className="text-xl opacity-90 mb-12 leading-relaxed">
              احصل على حل مخصص مصمم حسب احتياجاتك. فريقنا من الخبراء جاهز لمساعدتك من المواصفات إلى النشر.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <div className="bg-white/10 px-8 py-5 rounded-xl">
                <div className="text-sm opacity-80 mb-2">البريد الإلكتروني</div>
                <div className="font-bold text-lg">info@afmeter.com</div>
              </div>
              <div className="bg-white/10 px-8 py-5 rounded-xl">
                <div className="text-sm opacity-80 mb-2">الهاتف</div>
                <div className="font-bold text-lg">+86 13562505474</div>
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href={getLocalizedPath("/contact")} className="bg-white text-slate-900 px-10 py-5 rounded-xl font-extrabold text-lg inline-flex items-center gap-3 hover:bg-slate-100 transition-all">
                <span>احصل على عرض سعر مجاني</span>
                <span className="text-xl">→</span>
              </Link>
              <Link href={getLocalizedPath("/about")} className="bg-white/10 text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 inline-flex items-center gap-3 hover:bg-white/20 transition-all">
                اعرف المزيد
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
