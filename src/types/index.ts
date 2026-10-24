export type ProductCategory = 'all' | 'pulses' | 'spices' | 'seeds' | 'oil';

export interface Product {
  id: string;
  name: string;
  localName?: string;
  category: 'pulses' | 'spices' | 'seeds' | 'oil';
  categoryLabel: string;
  description: string;
  price?: number;
  formattedPrice?: string;
  unit: string;
  image: string;
  benefits: string[];
  tags: string[];
  isFeatured?: boolean;
  inStock: boolean;
  nutritionHighlights?: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  phone?: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'farming' | 'harvest' | 'processing' | 'products';
  image: string;
  caption: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'quality' | 'orders' | 'b2b';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  comment: string;
  rating: number;
  avatar?: string;
  verified: boolean;
  date: string;
}

export interface UserComment {
  id: string;
  userName: string;
  userComment: string;
  userAvatar?: string;
  rating?: number;
  timestamp: number;
}

export interface CompanyInfo {
  brandName: string;
  tagline: string;
  legalEntity: string;
  addressLine: string;
  area: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  phones: string[];
  primaryPhone: string;
  email: string;
  gstNumber: string;
  fssaiNumber: string;
  instagramUrl: string;
  whatsappNumber: string;
  developerCredit: string;
}
