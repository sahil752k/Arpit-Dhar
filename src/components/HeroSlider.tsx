import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Shield, Award, Sparkles, MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyData';

interface Slide {
  image: string;
  tagline: string;
  title: string;
  subtitle: string;
  badge: string;
}

const slides: Slide[] = [
  {
    image: '/images/fin1.jfif',
    tagline: 'Pure Pulses & Authentic Spices',
    title: 'Get ready, food lovers! We crafted a super awesome Brand for premium pulses & spices.',
    subtitle: '100% unpolished, chemical-free lentils and farm-direct aromatic spices harvested with care in Maharashtra, India.',
    badge: 'Farm Direct Harvest'
  },
  {
    image: '/images/fin2.jfif',
    tagline: 'Farm-To-Kitchen Transparency',
    title: 'Rich traditional aroma & natural purity in every single pack.',
    subtitle: 'From nutrient-packed chia seeds and green pumpkin seeds to golden turmeric and premium tur dal, taste the authentic goodness.',
    badge: '100% Chemical-Free'
  },
  {
    image: '/images/fin3.jfif',
    tagline: 'MOTHERFARM TRADING',
    title: 'Trusted supplier for households, culinary artisans & global exporters.',
    subtitle: 'FSSAI certified, multi-stage cleaned, and sealed in airtight food-grade packs to preserve active natural nutrients.',
    badge: 'Global Supply Quality'
  }
];

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  const openWhatsApp = () => {
    const text = encodeURIComponent('Hi Mother Farm India! I am interested in your premium pulses and spices catalog.');
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-[580px] lg:min-h-[680px] flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center brightness-[0.42] contrast-105 transition-transform duration-7000 ease-out"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/70" />
        </div>
      ))}

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Animated Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 backdrop-blur-md mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 mr-2 text-amber-300 animate-pulse" />
          {slides[currentSlide].badge}
          <span className="mx-2 text-emerald-400/40">•</span>
          <span className="text-white/80">{slides[currentSlide].tagline}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl font-serif leading-tight sm:leading-tight mb-6">
          {slides[currentSlide].title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-200/90 max-w-2xl font-normal leading-relaxed mb-8">
          {slides[currentSlide].subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Explore Our Products
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>

          <button
            onClick={openWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 backdrop-blur-md transition-all hover:scale-[1.02]"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-emerald-400" />
            Order on WhatsApp
          </button>

          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-all text-sm"
          >
            Know More About Us
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-12 pt-8 border-t border-white/15 w-full max-w-3xl text-left">
          <div className="flex items-center space-x-2.5">
            <Shield className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">100% Pure</p>
              <p className="text-[11px] text-slate-400">Zero Chemical Glaze</p>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <Award className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">FSSAI Certified</p>
              <p className="text-[11px] text-slate-400">Lic: {companyData.fssaiNumber}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Unpolished</p>
              <p className="text-[11px] text-slate-400">Nutrient Dense</p>
            </div>
          </div>
          <div className="flex items-center space-x-2.5">
            <Shield className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider">Direct Sourcing</p>
              <p className="text-[11px] text-slate-400">Trusted Farms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-xs border border-white/10 transition-colors hidden sm:flex items-center justify-center"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white/80 hover:text-white backdrop-blur-xs border border-white/10 transition-colors hidden sm:flex items-center justify-center"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 z-20 flex items-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-emerald-400' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
