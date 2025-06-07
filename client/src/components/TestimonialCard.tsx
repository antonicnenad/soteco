import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Testimonial } from '@/lib/types';
import { useLanguage } from '@/context/LanguageContext';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { language } = useLanguage();

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < testimonial.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="testimonial-card shadow-lg h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
            <Quote className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">
              {testimonial.position[language]}, {testimonial.company}
            </p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{testimonial.content[language]}</p>
        <div className="flex">{renderStars()}</div>
      </CardContent>
    </Card>
  );
}
