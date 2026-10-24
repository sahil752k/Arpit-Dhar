import React from 'react';
import {
  ShieldCheck,
  Award,
  Phone,
  Mail,
  MapPin,
  Heart,
  Instagram,
  ArrowUp,
  MessageSquare
} from 'lucide-react';
import { companyData, businessHours } from '../data/companyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products Catalog', href: '#products' },
    { name: 'Who We Are', href: '#about' },
    { name: 'Why MotherFarm', href: '#why-us' },
    { name: 'Farm Gallery', href: '#gallery' },
    { name: 'Leadership & Founders', href: '#founders' },
    { name: 'Customer Reviews', href: '#reviews' },
    { name: 'FAQ & Guarantees', href: '#faq' },
    { name: 'Contact & Map', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 p-1 flex items-center justify-center border border-white/10">
                <img
                  src="/images/logod.png"
                  alt="Mother Farm Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold text-white font-serif tracking-tight">
                  Mother<span className="text-emerald-400">Farm</span> India
                </span>
                <span className="block text-xs text-emerald-400 font-medium">
                  {companyData.legalEntity}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              Authorized producer and distributor for 100% natural, unpolished pulses, slow sun-dried aromatic spices, and nutrient-dense seeds sourced directly from Maharashtra&apos;s fertile farmlands.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="flex items-center text-slate-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                Government Certifications:
              </p>
              <p>FSSAI Registration No: <strong className="text-white">{companyData.fssaiNumber}</strong></p>
              <p>Central GST Identification No: <strong className="text-white">{companyData.gstNumber}</strong></p>
              <p>State of Supply: <strong className="text-white">Pan-India & Global Distribution</strong></p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              Farm Headquarters
            </h4>
            <div className="text-xs text-slate-400 space-y-2.5">
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  {companyData.addressLine}, {companyData.area}, {companyData.city}, {companyData.state}, {companyData.country} - {companyData.pincode}
                </span>
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                <a href={`tel:${companyData.primaryPhone}`} className="hover:text-emerald-400">
                  {companyData.phones.join(' / ')}
                </a>
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-emerald-400 shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-emerald-400">
                  {companyData.email}
                </a>
              </p>
              <p className="text-[11px] text-slate-500 pt-1">
                Hours: {businessHours.days} ({businessHours.time})
              </p>
            </div>

            <div className="pt-2 flex items-center space-x-2">
              <a
                href={companyData.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-pink-900/60 text-slate-400 hover:text-pink-400 transition-colors border border-slate-800"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${companyData.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-emerald-900/60 text-slate-400 hover:text-emerald-400 transition-colors border border-slate-800"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {new Date().getFullYear()} {companyData.legalEntity}. All Rights Reserved. Authorized Global Distributor.
          </p>

          <div className="flex items-center space-x-4">
            <span className="flex items-center text-slate-400">
              Crafted By <strong className="text-white ml-1 font-semibold">{companyData.developerCredit}</strong>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
