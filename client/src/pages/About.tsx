import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TeamMember } from '@/components/TeamMember';
import { useLanguage } from '@/hooks/useLanguage';
import { Link } from 'wouter';
import { TeamMember as TeamMemberType } from '@/lib/types';

// Mock team data
const mockTeam: TeamMemberType[] = [
  {
    id: '1',
    name: 'Marko Petrović',
    position: { sr: 'Glavni Inženjer', en: 'Chief Engineer' },
    description: { sr: '15+ godina iskustva u projektovanju industrijskih sistema', en: '15+ years experience in industrial systems design' },
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
  },
  {
    id: '2',
    name: 'Ana Jovanović',
    position: { sr: 'Menadžer Projekata', en: 'Project Manager' },
    description: { sr: 'Stručnjak za upravljanje kompleksnim projektima', en: 'Expert in managing complex projects' },
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
  },
  {
    id: '3',
    name: 'Stefan Nikolić',
    position: { sr: 'Tehnički Direktor', en: 'Technical Director' },
    description: { sr: '20+ godina iskustva u tehničkim rešenjima', en: '20+ years experience in technical solutions' },
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
  },
  {
    id: '4',
    name: 'Milica Stošić',
    position: { sr: 'Kontrola Kvaliteta', en: 'Quality Control' },
    description: { sr: 'Sertifikovani stručnjak za standarde kvaliteta', en: 'Certified quality standards specialist' },
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
  },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.about.title}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.about.description1}
              </p>
              <p className="text-lg text-gray-600 mb-8">
                {t.about.description2}
              </p>
              <Link href="#team">
                <Button className="bg-primary hover:bg-primary/90">
                  {t.about.meetTeam}
                </Button>
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="SOTECO facility"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naše Vrednosti</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Osnovna načela koja vode našu kompaniju u svim poslovnim aktivnostima
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="bg-primary bg-opacity-10 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Kvalitet</h3>
                <p className="text-gray-600">
                  Posvećeni smo isporuci najkvalitetnijih rešenja koja nadmašuju očekivanja naših klijenata
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="bg-primary bg-opacity-10 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Inovacija</h3>
                <p className="text-gray-600">
                  Kontinuirano unapređujemo naša rešenja kroz istraživanje i razvoj novih tehnologija
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8 text-center">
                <div className="bg-primary bg-opacity-10 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Partnerstvo</h3>
                <p className="text-gray-600">
                  Gradimo dugoročne odnose sa klijentima zasnovane na poverenju i uzajamnom poštovanju
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.about.team.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.about.team.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockTeam.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Naša Istorija</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Putovanje od osnivanja do danas
            </p>
          </div>

          <div className="space-y-8">
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold">
                    1997
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Osnivanje Kompanije</h3>
                    <p className="text-gray-600">
                      SOTECO je osnovan sa vizijom pružanja najkvalitetnijih industrijskih rešenja u regionu.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold">
                    2005
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Ekspanzija na Regionalne Tržište</h3>
                    <p className="text-gray-600">
                      Proširili smo poslovanje na zemlje regiona i uspostavili partnerstva sa vodećim kompanijama.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold">
                    2015
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Modernizacija i Digitalizacija</h3>
                    <p className="text-gray-600">
                      Implementirali smo najnovije tehnologije i digitalne sisteme za upravljanje projektima.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold">
                    2024
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ISO Sertifikacija</h3>
                    <p className="text-gray-600">
                      Dobili smo ISO 9001:2015 sertifikat koji potvrđuje našu posvećenost kvalitetu i kontinuiranom unapređenju.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
