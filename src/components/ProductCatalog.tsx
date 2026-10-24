import React, { useState, useMemo } from 'react';
import { Search, Eye, MessageSquare, Sparkles, Filter, Check } from 'lucide-react';
import { productsData, productCategories } from '../data/productsData';
import { Product, ProductCategory } from '../types';
import { ProductModal } from './ProductModal';
import { companyData } from '../data/companyData';

export const ProductCatalog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return productsData.filter((p) => {
      const matchesCategory =
        selectedCategory === 'all' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        (p.localName && p.localName.toLowerCase().includes(q)) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickOrder = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Hello Mother Farm! I would like to order/inquire about: ${product.name} (${product.unit}) at ${product.formattedPrice || 'market rate'}. Please share details.`
    );
    window.open(`https://wa.me/${companyData.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 text-emerald-600" />
            100% Farm-Direct Harvest
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-serif">
            Our Products
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            We deliver unpolished pulses, aromatic sun-dried spices, and raw superfood seeds packed with natural goodness and zero chemical additives.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {productCategories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center shadow-2xs ${
                    active
                      ? 'bg-emerald-700 text-white shadow-sm ring-2 ring-emerald-700/20'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search Jira, Tur Dal, Chia..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent placeholder:text-slate-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Product Count Indicator */}
        <div className="flex justify-between items-center text-xs text-slate-500 mb-6 px-1">
          <span>
            Showing <strong className="text-slate-800">{filteredProducts.length}</strong> items
            {selectedCategory !== 'all' && ` in ${selectedCategory}`}
          </span>
          <span className="flex items-center text-emerald-700 font-medium">
            <Check className="w-3.5 h-3.5 mr-1" />
            Pan-India & Global Doorstep Dispatch
          </span>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Product Image Stage */}
                <div className="relative w-full h-48 sm:h-52 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center p-6 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain drop-shadow-xs group-hover:scale-108 transition-transform duration-300"
                    loading="lazy"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200/80">
                    {product.categoryLabel}
                  </span>
                  {product.isFeatured && (
                    <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                      Popular
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-emerald-700 transition-colors">
                      {product.name}
                    </h3>
                    {product.localName && (
                      <p className="text-xs font-medium text-emerald-800/80 mb-2">
                        {product.localName}
                      </p>
                    )}
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Pricing and Action row */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-base font-bold text-emerald-800">
                        {product.formattedPrice || 'Wholesale Price'}
                      </div>
                      <div className="text-[10px] text-slate-500">
                        {product.unit}
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProduct(product);
                        }}
                        className="p-2 rounded-xl text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200"
                        title="View Product Specs"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button
                        onClick={(e) => handleQuickOrder(product, e)}
                        className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-700 text-white hover:bg-emerald-800 text-xs font-semibold flex items-center shadow-2xs hover:shadow transition-all"
                        title="Order via WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5 sm:mr-1.5" />
                        <span className="hidden sm:inline">Order</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8">
            <Filter className="w-10 h-10 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">No products match your search</h3>
            <p className="text-sm text-slate-500 mt-1 max-w-md mx-auto">
              Try searching for &quot;Jira&quot;, &quot;Tur Dal&quot;, &quot;Chia&quot;, or select &quot;All Products&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-700 text-white hover:bg-emerald-800"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* Product Quick View Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
