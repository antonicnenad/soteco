import { Link } from 'wouter';
import { Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export function Footer() {
  const { t } = useLanguage();

  const navItems = [
    { href: '/about', label: t.nav.about },
    { href: '/solutions', label: t.nav.solutions },
    { href: '/references', label: t.nav.references },
    { href: '/news', label: t.nav.news },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <img
              className="h-8 w-auto mb-4 brightness-0 invert"
              src="https://soteco.rs/wp-content/uploads/2023/02/soteco-logo.png"
              alt="Soteco logo"
            />
            <p className="text-gray-300 mb-4">
              SOTECO je lider u projektovanju i implementaciji naprednih tehnoloških sistema za prehrambenu, farmaceutsku i ambalažnu industriju.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-gray-300">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.contactInfo}</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Trgovačka 16a, Beograd
              </p>
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                +381 24 345 678
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                info@soteco.rs
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2024 SOTECO D.O.O. {t.footer.allRightsReserved}
          </p>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition duration-300">
              {t.footer.privacyPolicy}
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              {t.footer.termsOfUse}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
