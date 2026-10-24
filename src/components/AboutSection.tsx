import React from 'react';
import { Leaf, Award, HeartHandshake, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { companyData } from '../data/companyData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 z-10">
                <img
                  src="/images/about12.jfif"
                  alt="Mother Farm fields and harvest"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Direct From Washim, Maharashtra
                  </span>
                  <h4 className="text-xl font-bold font-serif">
                    Rooted In Sustainable Agriculture
                  </h4>
                </div>
              </div>

              {/* Floating Secondary Image */}
              <div className="absolute -bottom-10 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-20 hidden sm:block">
                <img
                  src="/images/about13.jfif"
                  alt="Organic seeds and sorting"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute -top-6 -left-6 z-20 bg-emerald-800 text-white p-4 rounded-2xl shadow-xl flex items-center space-x-3 border-2 border-emerald-700">
                <Leaf className="w-8 h-8 text-emerald-300" />
                <div>
                  <div className="text-xl font-bold font-serif leading-none">100%</div>
                  <div className="text-[11px] text-emerald-200 uppercase font-medium tracking-wider">
                    Chemical Free
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-4">
              <Leaf className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
              Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif leading-tight">
              Preserving Traditional Tastes with Uncompromising Purity
            </h2>

            <p className="mt-5 text-base text-slate-600 leading-relaxed">
              At <strong>MotherFarm</strong>, we are passionate about bringing you the finest quality pulses, spices, and whole seeds. Sourced directly from trusted regional farms in Maharashtra and central India, our products are carefully selected to ensure absolute purity, freshness, and rich, authentic flavors.
            </p>

            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              We believe in preserving traditional culinary tastes while meeting modern international safety standards. Our mission is to provide natural, chemical-free ingredients that enhance your daily cooking experience. Whether it’s hearty lentils, nourishing beans, or handpicked aromatic spices, every pack is crafted to bring genuine farm freshness directly to your dining table.
            </p>

            {/* Core Values Bullet List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Artificial Glaze</h4>
                  <p className="text-xs text-slate-500">No harmful water or oil polishing agents.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Farmer Procurement</h4>
                  <p className="text-xs text-slate-500">Fair trade pricing supporting rural families.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Lab-Tested Purity</h4>
                  <p className="text-xs text-slate-500">FSSAI certified and moisture controlled.</p>
                </div>
              </div>

              <div className="flex items-start space-x-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Airtight Freshness</h4>
                  <p className="text-xs text-slate-500">Food-grade packaging preserving essential oils.</p>
                </div>
              </div>
            </div>

            {/* Quote banner */}
            <div className="mt-8 bg-emerald-50/70 border-l-4 border-emerald-600 p-4 rounded-r-xl">
              <p className="text-xs sm:text-sm font-medium text-emerald-900 italic">
                &ldquo;Ready to elevate your cooking with our premium pulses and spices? Experience unmatched quality, rich flavors, and purity in every pack. Your taste, our promise! 🌿✨&rdquo;
              </p>
              <div className="mt-2 text-xs font-semibold text-emerald-800">
                — {companyData.legalEntity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
