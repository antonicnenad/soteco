import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Utensils, Pill, Package, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'wouter';

export default function Solutions() {
  const { t } = useLanguage();

  const solutions = [
    {
      id: 'food',
      title: t.home.solutions.food.title,
      description: t.home.solutions.food.description,
      icon: Utensils,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      features: [
        'Sistemi za pakovanje',
        'Procesiranje hrane',
        'Kontrola kvaliteta',
        'Automatizacija proizvodnje',
        'Održavanje temperature',
        'Sanitarna rešenja',
      ],
      industries: ['Mlečni proizvodi', 'Mesna industrija', 'Pekarstvo', 'Konditorstvo', 'Voće i povrće'],
    },
    {
      id: 'pharmaceutical',
      title: t.home.solutions.pharmaceutical.title,
      description: t.home.solutions.pharmaceutical.description,
      icon: Pill,
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      features: [
        'GMP standardi',
        'Čiste komore',
        'Ventilacioni sistemi',
        'Kontrola vlažnosti',
        'Sterilizacija',
        'Praćenje parametara',
      ],
      industries: ['Farmaceutski proizvodi', 'Medicinski uređaji', 'Kozmetika', 'Dijetetski suplementi'],
    },
    {
      id: 'packaging',
      title: t.home.solutions.packaging.title,
      description: t.home.solutions.packaging.description,
      icon: Package,
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
      features: [
        'Automatsko pakovanje',
        'Etiketiranje',
        'Sortiranje',
        'Kontrola kvaliteta',
        'Optimizacija troškova',
        'Održiva rešenja',
      ],
      industries: ['Hrana i piće', 'Farmacija', 'Elektronika', 'Kozmetika', 'Hemijska industrija'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.home.solutions.title}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t.home.solutions.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card key={solution.id} className="card-hover">
                  <CardContent className="p-0">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                          <Icon className="text-primary text-xl" />
                        </div>
                        <h3 className="text-xl font-bold">{solution.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                        {t.home.solutions.food.learnMore}
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Solutions */}
      {solutions.map((solution, index) => {
        const Icon = solution.icon;
        const isReversed = index % 2 === 1;
        
        return (
          <section key={solution.id} className={`py-16 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-primary bg-opacity-10 p-4 rounded-full mr-4">
                      <Icon className="text-primary text-2xl" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">{solution.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Ključne Karakteristike:</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {solution.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-4">Industrije:</h3>
                    <div className="flex flex-wrap gap-2">
                      {solution.industries.map((industry, idx) => (
                        <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button className="bg-primary hover:bg-primary/90">
                      Zatražite Ponudu
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                
                <div className={isReversed ? 'lg:col-start-1' : ''}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="rounded-xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naš Proces Rada</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Od inicijalne analize do finalne implementacije, vodimo vas kroz svaki korak
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Analiza Potreba',
                description: 'Detaljno analiziramo vaše zahteve i specifičnosti poslovanja',
              },
              {
                step: '02',
                title: 'Projektovanje',
                description: 'Kreiramo prilagođeno rešenje koje odgovara vašim potrebama',
              },
              {
                step: '03',
                title: 'Implementacija',
                description: 'Profesionalno instaliramo i testiramo sistem u vašoj firmi',
              },
              {
                step: '04',
                title: 'Podrška',
                description: 'Pružamo kontinuiranu podršku i održavanje sistema',
              },
            ].map((process, idx) => (
              <Card key={idx} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold text-primary mb-4">{process.step}</div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="hero-gradient py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Spremni za Sledeći Korak?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktirajte nas danas za besplatnu konsultaciju i saznajte kako možemo unaprediti vaše poslovanje
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-primary hover:bg-gray-100">
                {t.cta.requestQuote}
              </Button>
            </Link>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Pozovite Nas: +381 24 345 678
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
