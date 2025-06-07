import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'wouter';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, ArrowLeft, Search, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { NewsCard } from '@/components/NewsCard';
import { NewsItem } from '@/lib/types';
import { Link } from 'wouter';

export default function News() {
  const { t, language } = useLanguage();
  const [location] = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  // Extract slug from URL if viewing single news item
  const slug = location.startsWith('/news/') ? location.split('/news/')[1] : null;

  const { data: newsItems = [], isLoading } = useQuery({
    queryKey: ['/api/news'],
  });

  const { data: singleNews, isLoading: isLoadingSingle } = useQuery({
    queryKey: ['/api/news', slug],
    enabled: !!slug,
  });

  const filteredNews = newsItems.filter((item: NewsItem) =>
    item.title[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.excerpt[language].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'sr' ? 'sr-RS' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  // Single news article view
  if (slug && singleNews) {
    return (
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="hero-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="max-w-4xl">
              <Link href="/news">
                <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  {language === 'sr' ? 'Nazad na vesti' : 'Back to news'}
                </Button>
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {singleNews.title[language]}
              </h1>
              <div className="flex items-center space-x-6 text-white/80">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {formatDate(singleNews.date)}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {getReadingTime(singleNews.content[language])} min read
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={singleNews.image}
              alt={singleNews.title[language]}
              className="w-full h-64 md:h-96 object-cover rounded-xl mb-8"
            />
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: singleNews.content[language] }} />
            </div>
          </div>
        </section>

        {/* Related News */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">
              {language === 'sr' ? 'Povezane vesti' : 'Related news'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsItems.slice(0, 3).map((item: NewsItem) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // News listing view
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.news.title}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {language === 'sr' 
                ? 'Pratite najnovije vesti o našim projektima, inovacijama i događajima u industriji'
                : 'Follow the latest news about our projects, innovations and industry events'
              }
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t.common.enterSearchTerm}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {filteredNews.length} {language === 'sr' ? 'vesti' : 'articles'}
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <div className="bg-gray-300 h-48 w-full"></div>
                  <CardContent className="p-6">
                    <div className="bg-gray-300 h-4 w-24 mb-2"></div>
                    <div className="bg-gray-300 h-6 w-full mb-3"></div>
                    <div className="bg-gray-300 h-4 w-full mb-2"></div>
                    <div className="bg-gray-300 h-4 w-3/4"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item: NewsItem) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === 'sr' ? 'Nema rezultata' : 'No results found'}
              </h3>
              <p className="text-gray-600">
                {language === 'sr' 
                  ? 'Pokušajte sa drugim ključnim rečima'
                  : 'Try different search terms'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">
                {language === 'sr' ? 'Budite u toku' : 'Stay updated'}
              </h2>
              <p className="text-xl mb-6 text-white/90">
                {language === 'sr' 
                  ? 'Prijavite se za naš newsletter i budite prvi koji će saznati o novostima'
                  : 'Subscribe to our newsletter and be the first to know about news'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  placeholder={t.contact.email}
                  className="bg-white text-gray-900"
                />
                <Button className="bg-white text-primary hover:bg-gray-100">
                  {language === 'sr' ? 'Prijavite se' : 'Subscribe'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
