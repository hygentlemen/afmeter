'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/banner-minigrid.jpg',
    title: 'Mini Grid Deployment',
    subtitle: 'Widely deployed in mini grid projects across Africa and Asia',
    cta: 'View Projects',
    ctaLink: '/projects'
  },
  {
    image: '/images/single-phase-1.jpg',
    title: 'Complete Metering Solutions',
    subtitle: 'Energy, Water, and Gas Meters - All in One Place',
    cta: 'Explore Products',
    ctaLink: '/products'
  },
  {
    image: '/images/banner-factory.jpg',
    title: 'Advanced Manufacturing',
    subtitle: '20,000+ sqm facility with 2.2M+ annual production capacity',
    cta: 'Learn About Us',
    ctaLink: '/about'
  }
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-[600px] overflow-hidden bg-slate-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-8 flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                {slide.title}
              </h1>
              <p className="text-xl opacity-90 mb-10 leading-relaxed">
                {slide.subtitle}
              </p>
              <a
                href={slide.ctaLink}
                className="inline-flex items-center gap-3 bg-sky-500 hover:bg-sky-600 text-white px-10 py-5 rounded-xl font-bold text-lg transition-colors"
              >
                {slide.cta}
                <span className="text-xl">→</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Previous slide"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all"
        aria-label="Next slide"
      >
        →
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-sky-500 w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
