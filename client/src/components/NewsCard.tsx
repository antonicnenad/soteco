import { Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NewsItem } from '@/lib/types';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'wouter';

interface NewsCardProps {
  news: NewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  const { language, t } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'sr' ? 'sr-RS' : 'en-US');
  };

  return (
    <Card className="news-card overflow-hidden h-full">
      <div className="relative overflow-hidden">
        <img
          src={news.image}
          alt={news.title[language]}
          className="w-full h-48 object-cover news-image"
        />
      </div>
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{formatDate(news.date)}</span>
        </div>
        <h3 className="text-xl font-bold mb-3">{news.title[language]}</h3>
        <p className="text-gray-600 mb-4 flex-1">{news.excerpt[language]}</p>
        <Link href={`/news/${news.slug}`}>
          <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
            {t.news.readMore}
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
