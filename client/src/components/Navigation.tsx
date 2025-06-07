import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Search, Menu } from 'lucide-react';
import { LanguageToggle } from './LanguageToggle';
import { SearchModal } from './SearchModal';
import { useLanguage } from '@/context/LanguageContext';

export function Navigation() {
  const { t } = useLanguage();
  const [location] = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/about', label: t.nav.about },
    { href: '/solutions', label: t.nav.solutions },
    { href: '/references', label: t.nav.references },
    { href: '/news', label: t.nav.news },
    { href: '/contact', label: t.nav.contact },
  ];

  const NavLink = ({
    href,
    children,
    mobile = false,
  }: {
    href: string;
    children: React.ReactNode;
    mobile?: boolean;
  }) => {
    const isActive = location === href;
    const className = mobile
      ? `block px-3 py-2 text-base font-medium ${
          isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-900'
        }`
      : `inline-flex items-center px-1 pt-1 text-sm font-medium ${
          isActive ? 'text-primary' : 'text-gray-500 hover:text-gray-900'
        }`;

    return (
      <Link
        href={href}
        className={className}
        onClick={() => mobile && setIsMobileMenuOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://soteco.rs/wp-content/uploads/2023/02/soteco-logo.png"
                  alt="Soteco logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Right controls */}
            <div className="flex items-center space-x-4">
              {/* Desktop Search Button */}
              <div className="hidden md:block">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2"
                >
                  <Search className="h-5 w-5" />
                </Button>
              </div>

              <LanguageToggle />

              {/* Mobile menu button */}
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden p-2">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64">
                  <div className="flex flex-col space-y-3 mt-6">
                    {navItems.map((item) => (
                      <NavLink key={item.href} href={item.href} mobile>
                        {item.label}
                      </NavLink>
                    ))}

                    {/* Mobile Search Button */}
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setIsSearchOpen(true);
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 justify-start mt-4 px-3 text-gray-700"
                    >
                      <Search className="h-5 w-5" />
                      <span>{t.common.search}</span>
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <SearchModal open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
}
