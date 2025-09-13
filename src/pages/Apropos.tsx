import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Target, 
  Eye, 
  Award, 
  Users, 
  CheckCircle, 
  MapPin,
  Phone,
  Mail,
  Calendar,
  Briefcase
} from 'lucide-react';

const Apropos = () => {
  const values = [
    {
      icon: Shield,
      title: 'Sécurité',
      description: 'La sécurité de nos clients est notre priorité absolue. Nous utilisons les technologies les plus avancées.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque installation et chaque service que nous fournissons.'
    },
    {
      icon: Users,
      title: 'Proximité',
      description: 'Une relation de confiance et de proximité avec nos clients, basée sur l\'écoute et la réactivité.'
    },
    {
      icon: CheckCircle,
      title: 'Fiabilité',
      description: 'Des solutions fiables et durables, accompagnées d\'un service après-vente exceptionnel.'
    }
  ];

  const team = [
    {
      name: 'KOUAME Jean-Baptiste',
      role: 'Directeur Général & Fondateur',
      experience: '15 ans d\'expérience',
      description: 'Expert en sécurité électronique, diplômé en électronique industrielle.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'TRAORE Mamadou',
      role: 'Responsable Technique',
      experience: '12 ans d\'expérience',
      description: 'Spécialiste en systèmes de vidéosurveillance et contrôle d\'accès.',
      image: '/api/placeholder/150/150'
    },
    {
      name: 'DIALLO Fatou',
      role: 'Responsable Formation',
      experience: '8 ans d\'expérience',
      description: 'Formatrice certifiée en sécurité électronique et maintenance.',
      image: '/api/placeholder/150/150'
    }
  ];

  const milestones = [
    { year: '2014', event: 'Création de Glory Security Services' },
    { year: '2016', event: 'Certification ISO 9001' },
    { year: '2018', event: '100ème installation réalisée' },
    { year: '2020', event: 'Lancement du centre de formation' },
    { year: '2022', event: 'Ouverture de la succursale de San Pedro' },
    { year: '2024', event: 'Plus de 500 clients satisfaits' }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">À Propos de Glory Security Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Depuis plus de 10 ans, Glory Security Services (GLS) s'impose comme le leader de la sécurité électronique 
            en Côte d'Ivoire. Notre expertise et notre engagement font de nous le partenaire de confiance pour 
            protéger vos biens les plus précieux.
          </p>
        </div>

        {/* Mission, Vision, Valeurs */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          <Card className="card-gradient text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Target className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Notre Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Fournir des solutions de sécurité électronique innovantes et fiables, 
                adaptées aux besoins spécifiques de chaque client, tout en garantissant 
                un service d'excellence et un accompagnement personnalisé.
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Eye className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Notre Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Devenir la référence incontournable en matière de sécurité électronique 
                en Afrique de l'Ouest, en alliant innovation technologique, expertise 
                technique et service client exceptionnel.
              </p>
            </CardContent>
          </Card>

          <Card className="card-gradient text-center">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Notre Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Une équipe de professionnels certifiés, une veille technologique constante 
                et plus de 1000 installations réussies font de GLS votre garantie 
                d'une sécurité optimale et durable.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Nos Valeurs */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Nos Valeurs</h2>
            <p className="text-xl text-muted-foreground">Les principes qui guident chacune de nos actions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center group hover:shadow-gls-md transition-all card-gradient">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                      <value.icon className="h-8 w-8 text-primary group-hover:text-white" />
                    </div>
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Notre Histoire */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Notre Histoire</h2>
            <p className="text-xl text-muted-foreground">Plus de 10 ans d'innovation et de croissance</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/20"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <Card className="card-gradient">
                      <CardContent className="p-4">
                        <div className="text-lg font-semibold text-primary">{milestone.year}</div>
                        <p className="text-muted-foreground">{milestone.event}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-gls"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Notre Équipe</h2>
            <p className="text-xl text-muted-foreground">Des professionnels passionnés à votre service</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center card-gradient hover:shadow-gls-md transition-all">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-12 w-12 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center space-x-2 text-sm">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>{member.experience}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Localisation */}
        <section className="mb-20">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Notre Localisation</h2>
            <p className="text-xl text-muted-foreground">Facilement accessible à Abidjan</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="card-gradient">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                      <p className="text-muted-foreground">
                        Cocody, Angré carrefour des Oscars<br />
                        Abidjan, Côte d'Ivoire
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Téléphones</h3>
                      <p className="text-muted-foreground">
                        (+225) 05 07 20 87 90<br />
                        (+225) 27 22 49 51 91
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">gls.ciabj@gmail.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Horaires d'ouverture</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi:</span>
                    <span className="font-medium">8h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi:</span>
                    <span className="font-medium">8h - 16h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dimanche:</span>
                    <span className="font-medium">Urgence uniquement</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support 24h/7j:</span>
                    <span className="font-medium text-primary">Disponible</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Carte Interactive</h3>
              <p className="text-muted-foreground mb-4">
                Trouvez facilement nos bureaux à Cocody, Angré
              </p>
              <Button variant="outline">
                Voir sur Google Maps
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center space-y-8 p-12 hero-gradient text-white rounded-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Rejoignez nos Clients Satisfaits</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour sécuriser vos biens et protéger ce qui compte le plus pour vous
          </p>
          <Button size="lg" className="bg-white text-gls-blue hover:bg-white/90">
            <Phone className="mr-2 h-5 w-5" />
            Contactez-nous Maintenant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Apropos;