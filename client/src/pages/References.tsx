import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

export default function References() {
  const { t } = useLanguage();

  const references = [
    {
      name: 'Moravka',
      logo: 'https://soteco.rs/wp-content/uploads/2024/01/Moravka-400x209.png',
      category: 'Prehrambena industrija',
    },
    {
      name: 'Devolli',
      logo: 'https://soteco.rs/wp-content/uploads/2024/01/Devolli-400x209.jpg',
      category: 'Prehrambena industrija',
    },
    {
      name: 'Actavis',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/actavis-logo-flat-520x245-1-400x209.png',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Alkaloid',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/alkaloid-logo-1-300x134-1.png',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Aura',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/aura-400x203.png',
      category: 'Prehrambena industrija',
    },
    {
      name: 'Bambi',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/bambi-400x213.jpeg',
      category: 'Prehrambena industrija',
    },
    {
      name: 'Biljana',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/biljana-1-400x237.png',
      category: 'Prehrambena industrija',
    },
    {
      name: 'Bosnalijek',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/bosnalijek-logo-400x213.jpeg',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Centro proizvod',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/Centro-proizvod-400x200.png',
      category: 'Ambalaža',
    },
    {
      name: 'Centropak',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/Centropak-400x213.png',
      category: 'Ambalaža',
    },
    {
      name: 'Farmakos',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/farmakos-400x200.png',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Formapharm',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/formapharm-400x207.png',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Fructus',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/Fructus-logo-400x203.png',
      category: 'Prehrambena industrija',
    },
    {
      name: 'Galenika',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/Galenika_logo-400x200.jpeg',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Hemofarm',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/hemofarm-1-400x215.jpeg',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Herba',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/herba-400x169.jpeg',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Jugoremedija',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/Jugoremedija-400x214.png',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Kirka',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/kirka-logo-400x205.jpeg',
      category: 'Farmaceutska industrija',
    },
    {
      name: 'Kondiva',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/Kondiva-400x201.png',
      category: 'Prehrambena industrija',
    },
    {
      name: 'Replek Farm',
      logo: 'https://soteco.rs/wp-content/uploads/2023/02/logo-replek-farm-400x163.jpeg',
      category: 'Farmaceutska industrija',
    },
  ];

  const categories = ['Sve', 'Prehrambena industrija', 'Farmaceutska industrija', 'Ambalaža'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.references.title}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t.references.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-gray-600">Realizovanih Projekata</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-lg text-gray-600">Zadovoljnih Klijenata</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg text-gray-600">Zemalja Izvoza</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg text-gray-600">Zadovoljna Klijentela</div>
            </div>
          </div>
        </div>
      </section>

      {/* References Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naši Partneri</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ponosni smo na dugogodišnju saradnju sa vodećim kompanijama u regionu
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {references.map((reference, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 flex items-center justify-center h-32">
                  <img
                    src={reference.logo}
                    alt={reference.name}
                    className="h-16 object-contain partner-logo"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Priče o Uspehu</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Neki od naših najznačajnijih projekata koji su doneli značajne rezultate
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Success story"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Modernizacija Galenika</h3>
                  <p className="text-gray-600 mb-4">
                    Implementacija naprednog ventilacionog sistema u glavnom proizvodnom pogonu koji je povećao efikasnost za 40%.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">2023</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Završeno</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Success story"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Automatizacija Bambi</h3>
                  <p className="text-gray-600 mb-4">
                    Kompletna automatizacija linije za pakovanje koja je smanjila troškove rada za 35% i povećala produktivnost.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">2022</span>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">Završeno</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-0">
                <img
                  src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                  alt="Success story"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">Optimizacija Hemofarm</h3>
                  <p className="text-gray-600 mb-4">
                    Implementacija sistema za kontrolu kvaliteta koji je skratio vreme testiranja proizvoda za 50%.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">2024</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">U toku</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industrije koje Opslužujemo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Naša ekspertiza pokriva širok spektar industrija
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16l-3-9m3 9l3-9" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Prehrambena Industrija</h3>
                <p className="text-gray-600 mb-4">
                  Mlečni proizvodi, mesna industrija, pekarstvo, voće i povrće
                </p>
                <div className="text-2xl font-bold text-primary">60%</div>
                <div className="text-sm text-gray-500">naših projekata</div>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Farmaceutska Industrija</h3>
                <p className="text-gray-600 mb-4">
                  Lekovi, medicinski uređaji, kozmetika, dijetetski suplementi
                </p>
                <div className="text-2xl font-bold text-primary">30%</div>
                <div className="text-sm text-gray-500">naših projekata</div>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Ambalažna Industrija</h3>
                <p className="text-gray-600 mb-4">
                  Kartonska ambalaža, plastika, staklo, metal
                </p>
                <div className="text-2xl font-bold text-primary">10%</div>
                <div className="text-sm text-gray-500">naših projekata</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
