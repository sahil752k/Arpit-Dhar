import React from 'react';
import { X, CheckCircle, MessageSquare, Phone, Package, Shield, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { companyData } from '../data/companyData';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) return null;

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `Hello Mother Farm India! I would like to order or inquire about:\n- Product: ${product.name} (${product.localName || ''})\n- Pack Unit: ${product.unit}\n- Price: ${product.formattedPrice || 'Wholesale rate'}\nPlease share availability and delivery options.`
    );
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-2xl border border-slate-100">
          {/* Header Close Button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image Preview Box */}
            <div className="relative bg-gradient-to-br from-emerald-50/60 to-slate-100 p-8 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-64 sm:max-h-72 w-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                <Sparkles className="w-3 h-3 mr-1 text-emerald-600" />
                {product.categoryLabel}
              </span>
            </div>

            {/* Product Details Box */}
            <div className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase font-semibold text-emerald-700 tracking-wider mb-1">
                  MOTHER FARM • 100% FARM FRESH
                </div>
                <h3 className="text-2xl font-bold text-slate-900 font-serif">
                  {product.name}
                </h3>
                {product.localName && (
                  <p className="text-sm font-medium text-slate-500 mb-3">
                    {product.localName}
                  </p>
                )}

                <div className="flex items-baseline space-x-3 my-3 pb-3 border-b border-slate-100">
                  <span className="text-xl font-bold text-emerald-800">
                    {product.formattedPrice}
                  </span>
                  <span className="text-xs text-slate-500">
                    / {product.unit} (Standard Pack)
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Quality Highlights:
                  </h4>
                  <ul className="space-y-1.5">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="text-xs text-slate-700 flex items-start">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.nutritionHighlights && (
                  <div className="bg-slate-50 rounded-xl p-2.5 text-xs text-slate-600 border border-slate-100 mb-4">
                    <span className="font-semibold text-slate-800">Nutrition Highlights: </span>
                    {product.nutritionHighlights}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <button
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl bg-emerald-700 text-white font-medium hover:bg-emerald-800 transition-colors shadow-sm text-sm"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Order on WhatsApp
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                  <span className="flex items-center">
                    <Shield className="w-3 h-3 mr-1 text-emerald-600" />
                    FSSAI: {companyData.fssaiNumber}
                  </span>
                  <span className="flex items-center">
                    <Package className="w-3 h-3 mr-1 text-slate-400" />
                    Bulk 25kg/50kg Available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
