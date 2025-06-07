import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Utensils, Pill, Package, Headset, Factory, Fan } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TestimonialCard } from '@/components/TestimonialCard';
import { NewsCard } from '@/components/NewsCard';
import { DocumentCard } from '@/components/DocumentCard';
import { Link } from 'wouter';
import { Testimonial, NewsItem, Document } from '@/lib/types';

// Mock data - in real app this would come from API
const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Petar Marković',
    position: { sr: 'Direktor Proizvodnje', en: 'Production Director' },
    company: 'ABC Food',
    content: {
      sr: 'SOTECO nam je isporučio vrhunsko rešenje koje je značajno poboljšalo našu proizvodnu efikasnost. Profesionalan pristup i kvalitetna podrška.',
      en: 'SOTECO delivered an excellent solution that significantly improved our production efficiency. Professional approach and quality support.',
    },
    rating: 5,
  },
  {
    id: '2',
    name: 'Marina Stojanović',
    position: { sr: 'Glavni Tehnolog', en: 'Chief Technologist' },
    company: 'PharmaTech',
    content: {
      sr: 'Izuzetno zadovoljni saradnjom. Sistem je implementiran u rekordnom vremenu uz poštovanje svih farmaceutskih standarda.',
      en: 'Extremely satisfied with the cooperation. The system was implemented in record time while respecting all pharmaceutical standards.',
    },
    rating: 5,
  },
  {
    id: '3',
    name: 'Miloš Đorđević',
    position: { sr: 'COO', en: 'COO' },
    company: 'PackagePro',
    content: {
      sr: 'SOTECO je partner na kojeg možemo da se oslonimo. Njihova rešenja su pouzdana i dugotrajna.',
      en: 'SOTECO is a partner we can rely on. Their solutions are reliable and long-lasting.',
    },
    rating: 5,
  },
];

const mockNews: NewsItem[] = [
  {
    id: '1',
    title: {
      sr: 'SOTECO na Međunarodnom Sajmu Tehnologije',
      en: 'SOTECO at International Technology Fair',
    },
    content: { sr: '', en: '' },
    excerpt: {
      sr: 'Uspešno učešće na najvećem sajmu industrijske tehnologije u regionu sa predstavljanjem novih rešenja...',
      en: 'Successful participation at the largest industrial technology fair in the region presenting new solutions...',
    },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    date: '2024-03-15',
    slug: 'technology-fair-2024',
  },
  {
    id: '2',
    title: {
      sr: 'Novi Ventilacioni Sistem za Galenika',
      en: 'New Ventilation System for Galenika',
    },
    content: { sr: '', en: '' },
    excerpt: {
      sr: 'Završena instalacija naprednog ventilacionog sistema u najvećoj farmaceutskoj kompaniji u Srbiji...',
      en: 'Completed installation of advanced ventilation system in the largest pharmaceutical company in Serbia...',
    },
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    date: '2024-03-08',
    slug: 'galenika-ventilation-system',
  },
  {
    id: '3',
    title: {
      sr: 'SOTECO Dobio ISO 9001:2015 Sertifikat',
      en: 'SOTECO Received ISO 9001:2015 Certificate',
    },
    content: { sr: '', en: '' },
    excerpt: {
      sr: 'Ponosni smo što smo dobili ISO 9001:2015 sertifikat koji potvrđuje našu posvećenost kvalitetu...',
      en: 'We are proud to have received ISO 9001:2015 certificate confirming our commitment to quality...',
    },
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    date: '2024-03-01',
    slug: 'iso-certification-2024',
  },
];

const mockDocuments: Document[] = [
  {
    id: '1',
    title: {
      sr: 'Katalog Proizvoda 2024',
      en: 'Product Catalog 2024',
    },
    description: {
      sr: 'Kompletan pregled svih naših proizvoda sa tehničkim specifikacijama',
      en: 'Complete overview of all our products with technical specifications',
    },
    filename: 'catalog-2024.pdf',
    size: '5.2MB',
    type: 'pdf',
    downloadUrl: '/documents/catalog-2024.pdf',
  },
  {
    id: '2',
    title: {
      sr: 'Tehnička Uputstva',
      en: 'Technical Manuals',
    },
    description: {
      sr: 'Detaljni priručnici za instalaciju i održavanje opreme',
      en: 'Detailed manuals for equipment installation and maintenance',
    },
    filename: 'technical-manuals.pdf',
    size: '12.8MB',
    type: 'pdf',
    downloadUrl: '/documents/technical-manuals.pdf',
  },
  {
    id: '3',
    title: {
      sr: 'Sertifikati Kvaliteta',
      en: 'Quality Certificates',
    },
    description: {
      sr: 'ISO sertifikati i dokumentacija o standardima kvaliteta',
      en: 'ISO certificates and quality standards documentation',
    },
    filename: 'certificates.pdf',
    size: '2.1MB',
    type: 'pdf',
    downloadUrl: '/documents/certificates.pdf',
  },
];

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="slide-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.home.hero.title}
              </h1>
              <p className="text-xl mb-8">
                {t.home.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/solutions">
                  <Button className="bg-white text-primary hover:bg-gray-100">
                    {t.home.hero.viewSolutions}
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
                    {t.home.hero.contactUs}
                  </Button>
                </Link>
              </div>
            </div>
            <div className="fade-in">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Industrial machinery"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-lg text-gray-600">{t.home.stats.yearsExperience}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-gray-600">{t.home.stats.completedProjects}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg text-gray-600">{t.home.stats.satisfiedClients}</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg text-gray-600">{t.home.stats.exportCountries}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.home.solutions.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.home.solutions.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Food Factory */}
            <Card className="card-hover overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Food processing equipment"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Utensils className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">{t.home.solutions.food.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{t.home.solutions.food.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  {t.home.solutions.food.learnMore}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Pharmaceutical Factory */}
            <Card className="card-hover overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Pharmaceutical manufacturing"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Pill className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">{t.home.solutions.pharmaceutical.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{t.home.solutions.pharmaceutical.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  {t.home.solutions.pharmaceutical.learnMore}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Packaging Factory */}
            <Card className="card-hover overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Packaging machinery"
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Package className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">{t.home.solutions.packaging.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{t.home.solutions.packaging.description}</p>
                <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                  {t.home.solutions.packaging.learnMore}
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.documents.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.documents.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockDocuments.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.testimonials.title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.news.title}</h2>
            </div>
            <Link href="/news">
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                {t.news.allNews}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mockNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100">
                {t.cta.requestQuote}
              </Button>
            </Link>
            <Button variant="outline" className="bg-white text-primary hover:bg-gray-100">
              {t.cta.callUs}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
