import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Camera, 
  Shield, 
  Zap, 
  DoorOpen, 
  Key, 
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Award,
  Settings,
  Wifi,
  Smartphone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'videosurveillance',
      icon: Camera,
      title: 'Vidéosurveillance',
      subtitle: 'Protection visuelle 24h/24',
      description: 'Systèmes de surveillance haute définition pour une protection optimale de vos locaux avec accès à distance et enregistrement sécurisé.',
      price: 'À partir de 150 000 FCFA',
      features: [
        'Caméras HD/4K haute résolution',
        'Vision nocturne infrarouge',
        'Accès mobile via application',
        'Enregistrement cloud sécurisé',
        'Détection de mouvement intelligente',
        'Notifications en temps réel',
        'Installation et configuration',
        'Formation utilisateur incluse'
      ],
      technologies: ['IP Camera', 'Cloud Storage', 'Mobile App', 'AI Detection'],
      warranty: '3 ans',
      maintenance: 'Maintenance préventive incluse'
    },
    {
      id: 'alarme',
      icon: Shield,
      title: 'Alarme Anti-intrusion',
      subtitle: 'Détection intelligente',
      description: 'Systèmes d\'alarme sophistiqués avec détection volumétrique et périmétrique pour une protection complète de vos espaces.',
      price: 'À partir de 120 000 FCFA',
      features: [
        'Détecteurs volumétriques PIR',
        'Détecteurs d\'ouverture magnétiques',
        'Sirènes intérieures et extérieures',
        'Clavier de commande LCD',
        'Télésurveillance 24h/24',
        'Application mobile de contrôle',
        'Sauvegarde batterie 12h',
        'Certification NF&A2P'
      ],
      technologies: ['Wireless', 'GSM/GPRS', 'Mobile Control', 'Battery Backup'],
      warranty: '2 ans',
      maintenance: 'Contrôle annuel inclus'
    },
    {
      id: 'cloture-electrique',
      icon: Zap,
      title: 'Clôture Électrique',
      subtitle: 'Protection périmétrique',
      description: 'Installation de clôtures électriques dissuasives conformes aux normes de sécurité pour protéger vos périmètres.',
      price: 'À partir de 25 000 FCFA/ml',
      features: [
        'Fil électrifié haute tension',
        'Isolateurs céramique premium',
        'Électrificateur certifié CE',
        'Panneau de signalisation',
        'Test de conformité inclus',
        'Mise à la terre professionnelle',
        'Protection contre la foudre',
        'Garantie étanchéité IP65'
      ],
      technologies: ['High Voltage', 'Weather Resistant', 'CE Certified', 'Lightning Protection'],
      warranty: '3 ans',
      maintenance: 'Maintenance semestrielle'
    },
    {
      id: 'motorisation',
      icon: DoorOpen,
      title: 'Motorisation Portail',
      subtitle: 'Confort et sécurité',
      description: 'Automatisation de vos portails battants et coulissants avec système de sécurité intégré et télécommandes.',
      price: 'À partir de 200 000 FCFA',
      features: [
        'Moteurs robustes 24V',
        'Télécommandes rolling code',
        'Cellules photoélectriques',
        'Lampe de courtoisie',
        'Déverrouillage manuel',
        'Option alimentation solaire',
        'Programmation personnalisée',
        'Garantie moteur 5 ans'
      ],
      technologies: ['24V Motors', 'Solar Option', 'Safety Sensors', 'Remote Control'],
      warranty: '5 ans moteur',
      maintenance: 'Révision annuelle'
    },
    {
      id: 'controle-acces',
      icon: Key,
      title: 'Contrôle d\'Accès',
      subtitle: 'Gestion intelligente',
      description: 'Systèmes de contrôle d\'accès par badges RFID, codes PIN ou biométrie avec historique détaillé des passages.',
      price: 'À partir de 300 000 FCFA',
      features: [
        'Lecteurs RFID/Mifare',
        'Clavier codes PIN',
        'Reconnaissance biométrique',
        'Gestion multi-utilisateurs',
        'Historique des accès',
        'Programmation horaire',
        'Interface web de gestion',
        'Intégration vidéosurveillance'
      ],
      technologies: ['RFID/Mifare', 'Biometric', 'Web Interface', 'Database'],
      warranty: '2 ans',
      maintenance: 'Support technique inclus'
    },
    {
      id: 'formation',
      icon: GraduationCap,
      title: 'Formation Sécurité',
      subtitle: 'Expertise partagée',
      description: 'Programmes de formation professionnelle en sécurité électronique, maintenance et utilisation des équipements.',
      price: 'À partir de 50 000 FCFA/personne',
      features: [
        'Formation théorique et pratique',
        'Certification professionnelle',
        'Support de cours inclus',
        'Pratique sur site client',
        'Suivi post-formation',
        'Mise à jour des compétences',
        'Formation continue disponible',
        'Attestation de fin de stage'
      ],
      technologies: ['Hands-on Training', 'Certification', 'Documentation', 'Follow-up'],
      warranty: 'Formation certifiée',
      maintenance: 'Support permanent'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Nos Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des solutions complètes de sécurité électronique adaptées à tous vos besoins, 
            de l'installation à la maintenance, en passant par la formation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                    <p className="text-lg text-primary font-medium">{service.subtitle}</p>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-primary/10 text-primary">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{service.warranty}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{service.maintenance}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div>
                    <div className="text-2xl font-bold text-primary">{service.price}</div>
                    <div className="text-sm text-muted-foreground">Installation comprise</div>
                  </div>
                  <div className="flex space-x-3">
                    <Link to="/contact">
                      <Button className="btn-gradient">
                        <Phone className="mr-2 h-4 w-4" />
                        Devis Gratuit
                      </Button>
                    </Link>
                    <Button variant="outline">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Features Card */}
              <div className="flex-1 max-w-lg">
                <Card className="card-gradient shadow-gls-md">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Fonctionnalités incluses</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center space-y-8 p-12 hero-gradient text-white rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Besoin d'une Solution Personnalisée ?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Nos experts analysent vos besoins et vous proposent la solution de sécurité la plus adaptée
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gls-blue hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Consultation Gratuite
              </Button>
            </Link>
            <a href="tel:+2250507208790">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gls-blue">
                <Clock className="mr-2 h-5 w-5" />
                Appel d'urgence 24h/7j
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;