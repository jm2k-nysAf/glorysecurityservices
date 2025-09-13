import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Linkedin, 
  Twitter,
  Shield,
  Clock,
  Award
} from 'lucide-react';
import logoGls from '@/assets/logo-gls.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logoGls} alt="Glory Security Services" className="h-12 w-12" />
              <div>
                <h3 className="font-bold text-xl text-primary">GLS</h3>
                <p className="text-sm opacity-90">Security Services</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Expert en sécurité électronique depuis plus de 10 ans. 
              Nous protégeons vos biens avec des solutions innovantes et fiables.
            </p>
            <div className="flex space-x-3">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm">Certifié & Agréé</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Nos Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-colors">Vidéosurveillance</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Alarme Anti-intrusion</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Clôture Électrique</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Motorisation Portail</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Contrôle d'Accès</Link></li>
              <li><Link to="/formation" className="hover:text-primary transition-colors">Formation</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-primary transition-colors">Accueil</Link></li>
              <li><Link to="/apropos" className="hover:text-primary transition-colors">À propos</Link></li>
              <li><Link to="/temoignages" className="hover:text-primary transition-colors">Témoignages</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-primary" />
              <span>Service 24h/7j</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>Cocody, Angré carrefour des Oscars<br />Abidjan, Côte d'Ivoire</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <div>
                  <div>05 07 20 87 90</div>
                  <div>27 22 49 51 91</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span>gls.ciabj@gmail.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <h5 className="font-medium">Suivez-nous</h5>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                  <Facebook className="h-4 w-4" />
                </a>
                <a 
                  href="https://wa.me/2250507208790?text=Bonjour,%20j'aimerais%20plus%20d'informations"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="p-2 bg-primary/10 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all">
                  <Twitter className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm">
              <span>© 2025 Glory Security Services.</span>
              <span>Tous droits réservés.</span>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <Link to="/mentions-legales" className="hover:text-primary transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;