import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { companyData } from '../data/companyData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customText, setCustomText] = useState('');

  const sendWhatsApp = (msg?: string) => {
    const textToSend = msg || customText || 'Hello Mother Farm! I want to inquire about your farm fresh pulses and spices.';
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${encodeURIComponent(textToSend)}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      {/* Chat Popup Box */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-92 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-emerald-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 p-1 flex items-center justify-center">
                  <img src="/images/logod.png" alt="Mother Farm" className="w-full h-full object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-800" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Mother Farm India</h4>
                <p className="text-[11px] text-emerald-200">Typically replies within minutes</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:bg-white/10"
              aria-label="Close chat popup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-2xs border border-slate-200/80 max-w-[85%] text-slate-700 leading-relaxed">
              👋 Namaste! Welcome to Mother Farm India. How can we assist you with our pulses, spices, or seeds today?
            </div>

            {/* Quick Prompts */}
            <div className="space-y-1.5 pt-1">
              <button
                onClick={() => sendWhatsApp('Hi! I want to inquire about retail prices and order Tur Dal / Spices.')}
                className="w-full text-left p-2 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 font-medium transition-colors"
              >
                🌾 Inquire About Retail Pulses & Spices
              </button>
              <button
                onClick={() => sendWhatsApp('Hi! We need bulk 25kg/50kg commercial wholesale rates.')}
                className="w-full text-left p-2 rounded-xl bg-white hover:bg-emerald-50 border border-slate-200 hover:border-emerald-300 text-slate-700 font-medium transition-colors"
              >
                📦 Request Bulk / Wholesale Quotation
              </button>
            </div>
          </div>

          {/* Custom Message Input */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type your message..."
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendWhatsApp();
              }}
              className="flex-1 text-xs px-3 py-2 bg-slate-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-600"
            />
            <button
              onClick={() => sendWhatsApp()}
              className="p-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white transition-colors"
              aria-label="Send WhatsApp message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 sm:p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center border-2 border-white/60"
        aria-label="Open WhatsApp Support Chat"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400" />
        </span>
        <MessageSquare className="w-6 h-6 fill-white" />
      </button>
    </div>
  );
};
