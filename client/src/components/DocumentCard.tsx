import { Download, FileText, File, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Document } from '@/lib/types';
import { useLanguage } from '@/context/LanguageContext';

interface DocumentCardProps {
  document: Document;
}

export function DocumentCard({ document }: DocumentCardProps) {
  const { language, t } = useLanguage();

  const getIcon = () => {
    switch (document.type) {
      case 'pdf':
        return <FileText className="text-primary text-xl" />;
      case 'doc':
        return <File className="text-primary text-xl" />;
      default:
        return <Award className="text-primary text-xl" />;
    }
  };

  const handleDownload = () => {
    // Implement download functionality
    window.open(document.downloadUrl, '_blank');
  };

  return (
    <Card className="document-item h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
            {getIcon()}
          </div>
          <div>
            <h3 className="font-semibold">{document.title[language]}</h3>
            <p className="text-sm text-gray-600">{document.filename} - {document.size}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{document.description[language]}</p>
        <Button
          onClick={handleDownload}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <Download className="h-4 w-4 mr-2" />
          {t.documents.download}
        </Button>
      </CardContent>
    </Card>
  );
}
