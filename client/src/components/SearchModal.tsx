import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface SearchModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SearchModal({ open, onOpenChange }: SearchModalProps) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            {t.common.searchSite}
            
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSearch} className="space-y-4">
          <Input
            placeholder={t.common.enterSearchTerm}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            autoFocus
          />
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Search className="h-4 w-4 mr-2" />
            {t.common.search}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
