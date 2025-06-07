import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

export function LanguageToggle() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex border rounded-full overflow-hidden border-gray-300">
      <Button
        variant="ghost"
        size="sm"
        className={`px-3 py-1 text-sm font-medium rounded-none ${
          language === 'sr'
            ? 'bg-primary text-white hover:bg-primary/90'
            : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
        onClick={() => switchLanguage('sr')}
      >
        SR
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={`px-3 py-1 text-sm font-medium rounded-none ${
          language === 'en'
            ? 'bg-primary text-white hover:bg-primary/90'
            : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
        onClick={() => switchLanguage('en')}
      >
        EN
      </Button>
    </div>
  );
}
