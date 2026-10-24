/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { IntroSlider } from './components/IntroSlider';
import { FoodProductsSection } from './components/FoodProductsSection';
import { AboutUsSection } from './components/AboutUsSection';
import { WhyMotherfarmSection } from './components/WhyMotherfarmSection';
import { NewsletterSection } from './components/NewsletterSection';
import { ClientSection } from './components/ClientSection';
import { CommentsSection } from './components/CommentsSection';
import { FaqAccordionSection } from './components/FaqAccordionSection';
import { GallerySection } from './components/GallerySection';
import { FoundersSection } from './components/FoundersSection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';

export default function App() {
  return (
    <div className="motherfarm-app">
      {/* 1. Site Header & Dropdown */}
      <Header />

      {/* 2. Hero Intro Slider Section */}
      <IntroSlider />

      {/* 3. Products Catalog with Filters */}
      <FoodProductsSection />

      {/* 4. Who We Are / About Section */}
      <AboutUsSection />

      {/* 5. Why Motherfarm & Farm Story Video */}
      <WhyMotherfarmSection />

      {/* 6. Harvest Newsletter Form */}
      <NewsletterSection />

      {/* 7. Client Reviews Section */}
      <ClientSection />

      {/* 8. Interactive Customer Comments */}
      <CommentsSection />

      {/* 9. FAQ Accordion */}
      <FaqAccordionSection />

      {/* 10. Farm Photo Gallery with Lightbox */}
      <GallerySection />

      {/* 11. Founders Leadership */}
      <FoundersSection />

      {/* 12. Contact Form & Washim Map */}
      <ContactSection />

      {/* 13. Footer with Legal Info & Sahil Kapse Attribution */}
      <FooterSection />
    </div>
  );
}
