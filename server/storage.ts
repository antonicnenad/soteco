import { 
  users, 
  contactMessages, 
  newsItems, 
  documents, 
  teamMembers, 
  testimonials,
  type User, 
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
  type NewsItem,
  type InsertNewsItem,
  type Document,
  type InsertDocument,
  type TeamMember,
  type InsertTeamMember,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getUnprocessedContactMessages(): Promise<ContactMessage[]>;
  markContactMessageProcessed(id: number): Promise<void>;
  
  // News
  getPublishedNews(): Promise<NewsItem[]>;
  getNewsBySlug(slug: string): Promise<NewsItem | undefined>;
  createNewsItem(news: InsertNewsItem): Promise<NewsItem>;
  getFeaturedNews(): Promise<NewsItem[]>;
  
  // Documents
  getDocuments(): Promise<Document[]>;
  getFeaturedDocuments(): Promise<Document[]>;
  createDocument(document: InsertDocument): Promise<Document>;
  
  // Team Members
  getActiveTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  // Testimonials
  getApprovedTestimonials(): Promise<Testimonial[]>;
  getFeaturedTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Search
  searchContent(query: string): Promise<any[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private newsItems: Map<number, NewsItem>;
  private documents: Map<number, Document>;
  private teamMembers: Map<number, TeamMember>;
  private testimonials: Map<number, Testimonial>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.newsItems = new Map();
    this.documents = new Map();
    this.teamMembers = new Map();
    this.testimonials = new Map();
    this.currentId = 1;
    
    // Initialize with some sample data
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Sample news items
    const sampleNews: NewsItem[] = [
      {
        id: this.currentId++,
        title: {
          sr: 'SOTECO na Međunarodnom Sajmu Tehnologije',
          en: 'SOTECO at International Technology Fair'
        },
        content: {
          sr: '<p>Uspešno učešće na najvećem sajmu industrijske tehnologije u regionu sa predstavljanjem novih rešenja za prehrambenu i farmaceutsku industriju.</p><p>Naš tim je predstavio najnovije inovacije u oblasti automatizacije i kontrole kvaliteta.</p>',
          en: '<p>Successful participation at the largest industrial technology fair in the region presenting new solutions for food and pharmaceutical industries.</p><p>Our team presented the latest innovations in automation and quality control.</p>'
        },
        excerpt: {
          sr: 'Uspešno učešće na najvećem sajmu industrijske tehnologije u regionu sa predstavljanjem novih rešenja...',
          en: 'Successful participation at the largest industrial technology fair in the region presenting new solutions...'
        },
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
        slug: 'technology-fair-2024',
        published: true,
        featured: true,
        createdAt: new Date('2024-03-15'),
        updatedAt: new Date('2024-03-15')
      },
      {
        id: this.currentId++,
        title: {
          sr: 'Novi Ventilacioni Sistem za Galenika',
          en: 'New Ventilation System for Galenika'
        },
        content: {
          sr: '<p>Završena instalacija naprednog ventilacionog sistema u najvećoj farmaceutskoj kompaniji u Srbiji.</p><p>Sistem omogućava preciznu kontrolu temperature i vlažnosti u proizvodnim halama.</p>',
          en: '<p>Completed installation of advanced ventilation system in the largest pharmaceutical company in Serbia.</p><p>The system enables precise temperature and humidity control in production halls.</p>'
        },
        excerpt: {
          sr: 'Završena instalacija naprednog ventilacionog sistema u najvećoj farmaceutskoj kompaniji u Srbiji...',
          en: 'Completed installation of advanced ventilation system in the largest pharmaceutical company in Serbia...'
        },
        image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
        slug: 'galenika-ventilation-system',
        published: true,
        featured: false,
        createdAt: new Date('2024-03-08'),
        updatedAt: new Date('2024-03-08')
      },
      {
        id: this.currentId++,
        title: {
          sr: 'SOTECO Dobio ISO 9001:2015 Sertifikat',
          en: 'SOTECO Received ISO 9001:2015 Certificate'
        },
        content: {
          sr: '<p>Ponosni smo što smo dobili ISO 9001:2015 sertifikat koji potvrđuje našu posvećenost kvalitetu.</p><p>Ovaj sertifikat predstavlja prepoznavanje naših standarda kvaliteta i kontinuirani napredak.</p>',
          en: '<p>We are proud to have received ISO 9001:2015 certificate confirming our commitment to quality.</p><p>This certificate represents recognition of our quality standards and continuous improvement.</p>'
        },
        excerpt: {
          sr: 'Ponosni smo što smo dobili ISO 9001:2015 sertifikat koji potvrđuje našu posvećenost kvalitetu...',
          en: 'We are proud to have received ISO 9001:2015 certificate confirming our commitment to quality...'
        },
        image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
        slug: 'iso-certification-2024',
        published: true,
        featured: true,
        createdAt: new Date('2024-03-01'),
        updatedAt: new Date('2024-03-01')
      }
    ];

    sampleNews.forEach(news => {
      this.newsItems.set(news.id, news);
    });

    // Sample documents
    const sampleDocuments: Document[] = [
      {
        id: this.currentId++,
        title: {
          sr: 'Katalog Proizvoda 2024',
          en: 'Product Catalog 2024'
        },
        description: {
          sr: 'Kompletan pregled svih naših proizvoda sa tehničkim specifikacijama',
          en: 'Complete overview of all our products with technical specifications'
        },
        filename: 'catalog-2024.pdf',
        originalName: 'Katalog proizvoda 2024.pdf',
        size: 5242880, // 5MB
        mimeType: 'application/pdf',
        downloadUrl: '/documents/catalog-2024.pdf',
        category: 'catalog',
        featured: true,
        createdAt: new Date('2024-01-01')
      },
      {
        id: this.currentId++,
        title: {
          sr: 'Tehnička Uputstva',
          en: 'Technical Manuals'
        },
        description: {
          sr: 'Detaljni priručnici za instalaciju i održavanje opreme',
          en: 'Detailed manuals for equipment installation and maintenance'
        },
        filename: 'technical-manuals.pdf',
        originalName: 'Technical Manuals.pdf',
        size: 12582912, // 12MB
        mimeType: 'application/pdf',
        downloadUrl: '/documents/technical-manuals.pdf',
        category: 'manual',
        featured: true,
        createdAt: new Date('2024-01-01')
      },
      {
        id: this.currentId++,
        title: {
          sr: 'Sertifikati Kvaliteta',
          en: 'Quality Certificates'
        },
        description: {
          sr: 'ISO sertifikati i dokumentacija o standardima kvaliteta',
          en: 'ISO certificates and quality standards documentation'
        },
        filename: 'certificates.pdf',
        originalName: 'Quality Certificates.pdf',
        size: 2097152, // 2MB
        mimeType: 'application/pdf',
        downloadUrl: '/documents/certificates.pdf',
        category: 'certificate',
        featured: true,
        createdAt: new Date('2024-01-01')
      }
    ];

    sampleDocuments.forEach(doc => {
      this.documents.set(doc.id, doc);
    });

    // Sample team members
    const sampleTeam: TeamMember[] = [
      {
        id: this.currentId++,
        name: 'Marko Petrović',
        position: { sr: 'Glavni Inženjer', en: 'Chief Engineer' },
        description: { sr: '15+ godina iskustva u projektovanju industrijskih sistema', en: '15+ years experience in industrial systems design' },
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        email: 'marko.petrovic@soteco.rs',
        phone: '+381 24 345 680',
        orderIndex: 1,
        active: true
      },
      {
        id: this.currentId++,
        name: 'Ana Jovanović',
        position: { sr: 'Menadžer Projekata', en: 'Project Manager' },
        description: { sr: 'Stručnjak za upravljanje kompleksnim projektima', en: 'Expert in managing complex projects' },
        image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        email: 'ana.jovanovic@soteco.rs',
        phone: '+381 24 345 681',
        orderIndex: 2,
        active: true
      },
      {
        id: this.currentId++,
        name: 'Stefan Nikolić',
        position: { sr: 'Tehnički Direktor', en: 'Technical Director' },
        description: { sr: '20+ godina iskustva u tehničkim rešenjima', en: '20+ years experience in technical solutions' },
        image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        email: 'stefan.nikolic@soteco.rs',
        phone: '+381 24 345 682',
        orderIndex: 3,
        active: true
      },
      {
        id: this.currentId++,
        name: 'Milica Stošić',
        position: { sr: 'Kontrola Kvaliteta', en: 'Quality Control' },
        description: { sr: 'Sertifikovani stručnjak za standarde kvaliteta', en: 'Certified quality standards specialist' },
        image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
        email: 'milica.stosic@soteco.rs',
        phone: '+381 24 345 683',
        orderIndex: 4,
        active: true
      }
    ];

    sampleTeam.forEach(member => {
      this.teamMembers.set(member.id, member);
    });

    // Sample testimonials
    const sampleTestimonials: Testimonial[] = [
      {
        id: this.currentId++,
        name: 'Petar Marković',
        position: { sr: 'Direktor Proizvodnje', en: 'Production Director' },
        company: 'ABC Food',
        content: {
          sr: 'SOTECO nam je isporučio vrhunsko rešenje koje je značajno poboljšalo našu proizvodnu efikasnost. Profesionalan pristup i kvalitetna podrška.',
          en: 'SOTECO delivered an excellent solution that significantly improved our production efficiency. Professional approach and quality support.'
        },
        rating: 5,
        image: null,
        featured: true,
        approved: true,
        createdAt: new Date('2024-02-15')
      },
      {
        id: this.currentId++,
        name: 'Marina Stojanović',
        position: { sr: 'Glavni Tehnolog', en: 'Chief Technologist' },
        company: 'PharmaTech',
        content: {
          sr: 'Izuzetno zadovoljni saradnjom. Sistem je implementiran u rekordnom vremenu uz poštovanje svih farmaceutskih standarda.',
          en: 'Extremely satisfied with the cooperation. The system was implemented in record time while respecting all pharmaceutical standards.'
        },
        rating: 5,
        image: null,
        featured: true,
        approved: true,
        createdAt: new Date('2024-02-10')
      },
      {
        id: this.currentId++,
        name: 'Miloš Đorđević',
        position: { sr: 'COO', en: 'COO' },
        company: 'PackagePro',
        content: {
          sr: 'SOTECO je partner na kojeg možemo da se oslonimo. Njihova rešenja su pouzdana i dugotrajna.',
          en: 'SOTECO is a partner we can rely on. Their solutions are reliable and long-lasting.'
        },
        rating: 5,
        image: null,
        featured: true,
        approved: true,
        createdAt: new Date('2024-02-05')
      }
    ];

    sampleTestimonials.forEach(testimonial => {
      this.testimonials.set(testimonial.id, testimonial);
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact Message methods
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.currentId++;
    const contactMessage: ContactMessage = {
      ...message,
      id,
      phone: message.phone || null,
      company: message.company || null,
      privacy: message.privacy ?? false,
      createdAt: new Date(),
      processed: false
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getUnprocessedContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values())
      .filter(msg => !msg.processed)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async markContactMessageProcessed(id: number): Promise<void> {
    const message = this.contactMessages.get(id);
    if (message) {
      message.processed = true;
      this.contactMessages.set(id, message);
    }
  }

  // News methods
  async getPublishedNews(): Promise<NewsItem[]> {
    return Array.from(this.newsItems.values())
      .filter(news => news.published)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getNewsBySlug(slug: string): Promise<NewsItem | undefined> {
    return Array.from(this.newsItems.values()).find(news => news.slug === slug);
  }

  async createNewsItem(news: InsertNewsItem): Promise<NewsItem> {
    const id = this.currentId++;
    const now = new Date();
    const newsItem: NewsItem = {
      ...news,
      id,
      createdAt: now,
      updatedAt: now
    };
    this.newsItems.set(id, newsItem);
    return newsItem;
  }

  async getFeaturedNews(): Promise<NewsItem[]> {
    return Array.from(this.newsItems.values())
      .filter(news => news.published && news.featured)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  // Document methods
  async getDocuments(): Promise<Document[]> {
    return Array.from(this.documents.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getFeaturedDocuments(): Promise<Document[]> {
    return Array.from(this.documents.values())
      .filter(doc => doc.featured)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createDocument(document: InsertDocument): Promise<Document> {
    const id = this.currentId++;
    const doc: Document = {
      ...document,
      id,
      createdAt: new Date()
    };
    this.documents.set(id, doc);
    return doc;
  }

  // Team Member methods
  async getActiveTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values())
      .filter(member => member.active)
      .sort((a, b) => (a.orderIndex || 0) - (b.orderIndex || 0));
  }

  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const id = this.currentId++;
    const teamMember: TeamMember = { ...member, id };
    this.teamMembers.set(id, teamMember);
    return teamMember;
  }

  // Testimonial methods
  async getApprovedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.approved)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getFeaturedTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values())
      .filter(testimonial => testimonial.approved && testimonial.featured)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentId++;
    const newTestimonial: Testimonial = {
      ...testimonial,
      id,
      createdAt: new Date()
    };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }

  // Search method
  async searchContent(query: string): Promise<any[]> {
    const results: any[] = [];
    const searchTerm = query.toLowerCase();

    // Search news
    Array.from(this.newsItems.values())
      .filter(news => news.published)
      .forEach(news => {
        const titleMatch = news.title.sr.toLowerCase().includes(searchTerm) || 
                          news.title.en.toLowerCase().includes(searchTerm);
        const excerptMatch = news.excerpt.sr.toLowerCase().includes(searchTerm) || 
                            news.excerpt.en.toLowerCase().includes(searchTerm);
        
        if (titleMatch || excerptMatch) {
          results.push({
            id: news.id,
            title: news.title,
            excerpt: news.excerpt,
            url: `/news/${news.slug}`,
            type: 'news'
          });
        }
      });

    // Search documents
    Array.from(this.documents.values()).forEach(doc => {
      const titleMatch = doc.title.sr.toLowerCase().includes(searchTerm) || 
                        doc.title.en.toLowerCase().includes(searchTerm);
      const descMatch = doc.description.sr.toLowerCase().includes(searchTerm) || 
                       doc.description.en.toLowerCase().includes(searchTerm);
      
      if (titleMatch || descMatch) {
        results.push({
          id: doc.id,
          title: doc.title,
          excerpt: doc.description,
          url: doc.downloadUrl,
          type: 'document'
        });
      }
    });

    return results;
  }
}

export const storage = new MemStorage();
