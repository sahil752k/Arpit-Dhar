import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Sparkles, ChevronRight, ShieldCheck } from 'lucide-react';
import { companyData } from '../data/companyData';

interface NavbarProps {
  onOpenInquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Why MotherFarm', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Founders', href: '#founders' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent('Hello Mother Farm India! I would like to inquire about your pulses, spices, and seeds.');
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <>
      {/* Top Notification / Credential Bar */}
      <div className="bg-emerald-900 text-emerald-100 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
              100% Farm-Fresh & Unpolished
            </span>
            <span className="text-emerald-400/60">•</span>
            <span>FSSAI Lic: <strong className="text-white">{companyData.fssaiNumber}</strong></span>
            <span className="text-emerald-400/60">•</span>
            <span>GST: <strong className="text-white">{companyData.gstNumber}</strong></span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${companyData.primaryPhone}`}
              className="hover:text-white transition-colors flex items-center"
            >
              <Phone className="w-3 h-3 mr-1 text-emerald-400" />
              {companyData.phones[0]}
            </a>
            <span className="text-emerald-400/60">•</span>
            <span>Washim, Maharashtra</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-emerald-100'
            : 'bg-white py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-emerald-50 border border-emerald-200/60 p-1 flex items-center justify-center overflow-hidden shadow-sm group-hover:scale-105 transition-transform">
              <img
                src="/images/logod.png"
                alt="Mother Farm Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback to text icon if not loaded
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-950 font-serif">
                  Mother<span className="text-emerald-600">Farm</span>
                </span>
                <span className="ml-1.5 text-[10px] font-semibold uppercase tracking-wider bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">
                  India
                </span>
              </div>
              <p className="text-[11px] text-emerald-700/80 font-medium tracking-wide">
                Pure Pulses & Spices
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-emerald-700 rounded-lg hover:bg-emerald-50/70 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center space-x-2.5">
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center px-3.5 py-2 rounded-xl text-xs font-semibold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors shadow-xs"
              title="Chat with Mother Farm on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
              WhatsApp
            </button>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 shadow-sm hover:shadow transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 text-amber-300" />
              Bulk / Order Inquiry
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={openWhatsApp}
              className="p-2 rounded-lg text-emerald-700 bg-emerald-50 hover:bg-emerald-100 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed right-0 top-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center space-x-2.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 p-1 flex items-center justify-center">
                    <img src="/images/logod.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-bold text-lg text-emerald-950 font-serif">MotherFarm</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation List */}
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 text-base font-medium text-slate-800 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-emerald-600 text-white font-medium shadow-sm hover:bg-emerald-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </button>

              <a
                href={`tel:${companyData.primaryPhone}`}
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-slate-100 text-slate-800 font-medium hover:bg-slate-200 transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                Call: {companyData.phones[0]}
              </a>

              <div className="text-center text-xs text-slate-500 pt-2">
                FSSAI Lic: {companyData.fssaiNumber}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
