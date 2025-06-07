import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import { Navigation } from './Navigation';
import { Footer } from './Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { ScrollReset } from '@/components/ScrollReset';
import { PageLoader } from '@/components/PageLoader';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Prikaz "scroll to top" dugmeta
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PageLoader /> {/* 👈 loader se prikazuje iznad svega */}
      <Navigation />
      <main className="flex-1">
        <ScrollReset /> {/* 👈 reset skrola pri promeni stranice */}
        {children}
      </main>
      <Footer />
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 rounded-full p-3 shadow-lg z-40"
          size="sm"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
