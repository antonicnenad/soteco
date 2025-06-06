import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Car } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { ContactForm } from '@/components/ContactForm';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.contact.title}</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address Card */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <MapPin className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">{t.contact.address}</h3>
                </div>
                <p className="text-gray-600 mb-2">Trgovačka 16a</p>
                <p className="text-gray-600 mb-2">11000 Beograd</p>
                <p className="text-gray-600">Srbija</p>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Phone className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">{t.contact.phone}</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+381243456789" className="hover:text-primary">
                    +381 24 345 678
                  </a>
                </p>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+381631234567" className="hover:text-primary">
                    +381 63 123 456
                  </a>
                </p>
                <p className="text-gray-600">Fax: +381 24 345 679</p>
              </CardContent>
            </Card>

            {/* Email Card */}
            <Card className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <Mail className="text-primary text-xl" />
                  </div>
                  <h3 className="text-xl font-bold">Email</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:info@soteco.rs" className="hover:text-primary">
                    info@soteco.rs
                  </a>
                </p>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:prodaja@soteco.rs" className="hover:text-primary">
                    prodaja@soteco.rs
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:podrska@soteco.rs" className="hover:text-primary">
                    podrska@soteco.rs
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map and Form Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                {t.language === 'sr' ? 'Pronađite nas' : 'Find us'}
              </h2>

              <div className="rounded-xl overflow-hidden shadow-lg mb-6" style={{ height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.1477360124!2d20.46241531559386!3d44.81299937911393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3bf1c1111%3A0x1234567890abcdef!2sTrgovačka%2016a%2C%20Beograd%2C%20Serbia!5e0!3m2!1sen!2srs!4v1620000000000!5m2!1sen!2srs"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <h4 className="font-semibold">{t.contact.workingHours}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{t.contact.mondayFriday}</p>
                    <p className="text-gray-600 text-sm">{t.contact.saturday}</p>
                    <p className="text-gray-600 text-sm">{t.contact.sunday}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <Car className="h-4 w-4 mr-2 text-primary" />
                      <h4 className="font-semibold">Parking</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {t.language === 'sr' 
                        ? 'Besplatan parking za posetioce ispred objekta'
                        : 'Free parking for visitors in front of the building'
                      }
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.language === 'sr' ? 'Dodatne informacije' : 'Additional information'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.language === 'sr' 
                ? 'Sve što trebate da znate o saradnji sa SOTECO-m'
                : 'Everything you need to know about working with SOTECO'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t.language === 'sr' ? 'Besplatna procena' : 'Free assessment'}
                </h3>
                <p className="text-gray-600">
                  {t.language === 'sr' 
                    ? 'Pružamo besplatnu procenu vaših potreba i izvodljivosti projekta'
                    : 'We provide free assessment of your needs and project feasibility'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t.language === 'sr' ? 'Brz odgovor' : 'Quick response'}
                </h3>
                <p className="text-gray-600">
                  {t.language === 'sr' 
                    ? 'Odgovaramo na sve upite u roku od 24 časa'
                    : 'We respond to all inquiries within 24 hours'
                  }
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 p-4 rounded-full inline-block mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">
                  {t.language === 'sr' ? 'Stručni tim' : 'Expert team'}
                </h3>
                <p className="text-gray-600">
                  {t.language === 'sr' 
                    ? 'Naš tim stručnjaka je uvek dostupan za konsultacije'
                    : 'Our team of experts is always available for consultations'
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
