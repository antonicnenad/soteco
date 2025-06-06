export interface TeamMember {
  id: string;
  name: string;
  position: {
    sr: string;
    en: string;
  };
  description: {
    sr: string;
    en: string;
  };
  image: string;
}

export interface NewsItem {
  id: string;
  title: {
    sr: string;
    en: string;
  };
  content: {
    sr: string;
    en: string;
  };
  excerpt: {
    sr: string;
    en: string;
  };
  image: string;
  date: string;
  slug: string;
}

export interface Document {
  id: string;
  title: {
    sr: string;
    en: string;
  };
  description: {
    sr: string;
    en: string;
  };
  filename: string;
  size: string;
  type: 'pdf' | 'doc' | 'other';
  downloadUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: {
    sr: string;
    en: string;
  };
  company: string;
  content: {
    sr: string;
    en: string;
  };
  rating: number;
  image?: string;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  type: 'page' | 'news' | 'document';
}

export type Language = 'sr' | 'en';
