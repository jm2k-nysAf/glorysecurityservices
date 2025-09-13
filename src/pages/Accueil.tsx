import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Camera, 
  Zap, 
  DoorOpen, 
  Key, 
  GraduationCap,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Award,
  Clock,
  Users
} from 'lucide-react';

const Accueil = () => {
  const services = [
    {
      icon: Camera,
      title: 'Vidéosurveillance',
      description: 'Systèmes de surveillance haute définition pour une protection optimale de vos locaux.',
      features: ['Caméras HD/4K', 'Vision nocturne', 'Accès mobile', 'Enregistrement cloud']
    },
    {
      icon: Shield,
      title: 'Alarme Anti-intrusion',
      description: 'Détection sophistiquée d\'intrusion avec alerte immédiate.',
      features: ['Détecteurs volumétriques', 'Sirènes', 'Télésurveillance', 'Application mobile']
    },
    {
      icon: Zap,
      title: 'Clôture Électrique',
      description: 'Protection périmétrique électronique dissuasive et efficace.',
      features: ['Installation certifiée', 'Maintenance incluse', 'Conformité normative', 'Garantie 3 ans']
    },
    {
      icon: DoorOpen,
      title: 'Motorisation Portail',
      description: 'Automatisation de vos accès pour plus de confort et sécurité.',
      features: ['Moteurs robustes', 'Télécommandes', 'Sécurité piéton', 'Alimentation solaire']
    },
    {
      icon: Key,
      title: 'Contrôle d\'Accès',
      description: 'Gestion intelligente des accès par badges, codes ou biométrie.',
      features: ['Badges RFID', 'Codes PIN', 'Biométrie', 'Historique des accès']
    },
    {
      icon: GraduationCap,
      title: 'Formation',
      description: 'Formation professionnelle en sécurité électronique et maintenance.',
      features: ['Formation certifiante', 'Pratique terrain', 'Support technique', 'Suivi post-formation']
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Clients satisfaits' },
    { icon: Award, value: '10+', label: 'Années d\'expérience' },
    { icon: CheckCircle, value: '1000+', label: 'Installations réalisées' },
    { icon: Clock, value: '24/7', label: 'Support technique' }
  ];

  const testimonials = [
    {
      name: 'Ahmed Koné',
      company: 'Directeur Général, SARL KONE',
      content: 'Excellent service ! L\'équipe GLS a installé notre système de vidéosurveillance avec professionnalisme. Très satisfait du résultat.',
      rating: 5
    },
    {
      name: 'Marie Traoré', 
      company: 'Résidence Les Palmiers',
      content: 'Installation de clôture électrique impeccable. Équipe ponctuelle et compétente. Je recommande vivement Glory Security Services.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-slide-up">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Votre Sécurité, 
                <span className="block text-white/90">Notre Priorité</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
                Expert en sécurité électronique depuis plus de 10 ans. 
                Nous protégeons vos biens avec des solutions innovantes et fiables.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Button size="lg" className="bg-white text-gls-blue hover:bg-white/90 shadow-gls-lg">
                <Phone className="mr-2 h-5 w-5" />
                Devis Gratuit
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gls-blue">
                Nos Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Shield className="h-16 w-16" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <Camera className="h-20 w-20" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex justify-center">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Nos Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions complètes de sécurité électronique adaptées à vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-gls-md transition-all duration-300 hover:-translate-y-2 card-gradient">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                      <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    En savoir plus
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">Pourquoi Choisir GLS ?</h2>
              <p className="text-xl text-muted-foreground">Excellence, fiabilité et innovation au service de votre sécurité</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Award className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Expertise Reconnue</h3>
                <p className="text-muted-foreground">Plus de 10 ans d'expérience dans la sécurité électronique avec une équipe certifiée.</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Clock className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Service 24h/7j</h3>
                <p className="text-muted-foreground">Support technique et intervention d'urgence disponibles à tout moment.</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <CheckCircle className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">Garantie Totale</h3>
                <p className="text-muted-foreground">Garantie sur tous nos équipements et services avec maintenance incluse.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Ils Nous Font Confiance</h2>
            <p className="text-xl text-muted-foreground">Découvrez les témoignages de nos clients satisfaits</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-gradient">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/temoignages">
              <Button variant="outline">
                Voir tous les témoignages
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Prêt à Sécuriser Vos Biens ?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit et personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-gls-blue hover:bg-white/90">
                <Phone className="mr-2 h-5 w-5" />
                Demander un Devis
              </Button>
            </Link>
            <a href="tel:+2250507208790">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gls-blue">
                Appeler Maintenant
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;