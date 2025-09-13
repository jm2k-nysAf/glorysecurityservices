import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Shield, Phone } from 'lucide-react';
import logoGls from '@/assets/logo-gls.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/services', label: 'Services' },
    { href: '/apropos', label: 'À propos' },
    { href: '/formation', label: 'Formation' },
    { href: '/temoignages', label: 'Témoignages' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logoGls} alt="Glory Security Services" className="h-10 w-10" />
            <div>
              <h1 className="font-bold text-lg text-gradient">GLS</h1>
              <p className="text-xs text-muted-foreground -mt-1">Security Services</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-gls'
                    : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+2250507208790"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">05 07 20 87 90</span>
            </a>
            <Button variant="default" className="btn-gradient">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                <div className="flex items-center space-x-3 pb-4 border-b">
                  <img src={logoGls} alt="Glory Security Services" className="h-10 w-10" />
                  <div>
                    <h2 className="font-bold text-gradient">Glory Security Services</h2>
                    <p className="text-sm text-muted-foreground">Protection & Sécurité</p>
                  </div>
                </div>
                
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      isActive(item.href)
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-accent'
                    }`}
                  >
                    <Shield className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                ))}
                
                <div className="pt-4 border-t space-y-3">
                  <a
                    href="tel:+2250507208790"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent"
                  >
                    <Phone className="h-4 w-4" />
                    <span>05 07 20 87 90</span>
                  </a>
                  <Button className="w-full btn-gradient" onClick={() => setIsOpen(false)}>
                    Devis Gratuit
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;