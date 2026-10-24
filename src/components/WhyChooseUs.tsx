import React, { useState } from 'react';
import { Play, Sparkles, Sprout, ShieldAlert, Award, Clock } from 'lucide-react';
import { VideoModal } from './VideoModal';

export const WhyChooseUs: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const videoId = 'c8aFcHFu8QM';

  const reasons = [
    {
      icon: Sprout,
      title: 'Direct From Trusted Farms',
      description: 'We cut out middlemen and source directly from family farmers, ensuring complete harvest traceability and fair farm wages.'
    },
    {
      icon: ShieldAlert,
      title: 'Zero Chemical Adulteration',
      description: 'No harmful artificial dyes, no petroleum polishing, no marble dust, and no synthetic preservatives in our grains.'
    },
    {
      icon: Award,
      title: 'Traditional Aroma & Nutrient Rich',
      description: 'Our slow natural sun-drying process retains volatile essential oils, bioactive antioxidants, and full protein potency.'
    },
    {
      icon: Clock,
      title: 'Freshly Sorted & Packaged',
      description: 'Grains are cleaned using modern multi-stage aspirators and immediately sealed into airtight packs to prevent oxidation.'
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
            The Mother Farm Promise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Why Motherfarm?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-900/90 font-medium">
            Motherfarm delivers pure, farm-fresh pulses and spices for rich flavors, effortlessly for all 🌿✨
          </p>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            We believe in delivering the finest pulses and spices, sourced directly from trusted farms. Our commitment to quality ensures that every product is pure, natural, and free from harmful additives. With a deep-rooted passion for traditional flavors, we bring you ingredients that enhance your cooking with rich aroma and wholesome nourishment.
          </p>
        </div>

        {/* 4 Feature Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-emerald-300 shadow-xs hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100/70 text-emerald-700 flex items-center justify-center mb-5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-800 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Video Feature Spotlight */}
        <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Video Copy */}
            <div className="p-8 sm:p-12 lg:col-span-5 text-white">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Behind The Scenes
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif mt-2 mb-4">
                Watch Our Farm Story
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Take a visual journey into our fields in Washim, Maharashtra. See firsthand how our partner farmers cultivate, harvest, and naturally sun-dry the pulses and spices that grace your kitchen.
              </p>

              <button
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-950 transition-all hover:scale-105"
              >
                <Play className="w-4 h-4 mr-2 fill-white" />
                Play Farm Video
              </button>
            </div>

            {/* Video Thumbnail Stage */}
            <div className="lg:col-span-7 relative aspect-16/10 sm:aspect-16/9 bg-slate-900 group cursor-pointer overflow-hidden" onClick={() => setVideoOpen(true)}>
              <img
                src="/images/47.jpg"
                alt="Mother Farm fields thumbnail"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

              {/* Pulsing Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute -inset-3 bg-emerald-500/30 rounded-full animate-ping" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:bg-emerald-500 transition-all">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-xs text-white text-xs px-3 py-1 rounded-lg">
                Click to Watch
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={videoOpen}
        videoId={videoId}
        onClose={() => setVideoOpen(false)}
      />
    </section>
  );
};
