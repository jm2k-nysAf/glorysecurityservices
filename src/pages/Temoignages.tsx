import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Star, 
  Quote, 
  Building, 
  Home, 
  ShoppingBag, 
  GraduationCap,
  Users,
  Calendar,
  MapPin,
  CheckCircle,
  Award
} from 'lucide-react';

const Temoignages = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed KONE',
      title: 'Directeur Général',
      company: 'SARL KONE DISTRIBUTION',
      sector: 'Commerce',
      icon: ShoppingBag,
      location: 'Cocody, Abidjan',
      date: 'Décembre 2024',
      rating: 5,
      service: 'Vidéosurveillance + Alarme',
      testimonial: 'Excellent service de Glory Security Services ! L\'équipe a installé notre système de vidéosurveillance avec un professionnalisme remarquable. Le matériel est de qualité et l\'application mobile nous permet de surveiller nos locaux à distance. Très satisfait du résultat et du service après-vente.',
      highlights: ['Installation rapide', 'Équipe professionnelle', 'Support réactif']
    },
    {
      id: 2,
      name: 'Marie TRAORE',
      title: 'Propriétaire',
      company: 'Résidence Les Palmiers',
      sector: 'Résidentiel',
      icon: Home,
      location: 'Angré, Abidjan',
      date: 'Novembre 2024',
      rating: 5,
      service: 'Clôture Électrique',
      testimonial: 'Installation de clôture électrique impeccable ! L\'équipe GLS est très ponctuelle et compétente. Ils ont respecté tous les délais et nous ont formés sur l\'utilisation du système. Depuis l\'installation, nous nous sentons beaucoup plus en sécurité. Je recommande vivement leurs services.',
      highlights: ['Respect des délais', 'Formation complète', 'Sécurité renforcée']
    },
    {
      id: 3,
      name: 'Dr. Jean-Baptiste OUATTARA',
      title: 'Directeur Médical',
      company: 'Clinique Moderne',
      sector: 'Santé',
      icon: Building,
      location: 'Plateau, Abidjan',
      date: 'Octobre 2024',
      rating: 5,
      service: 'Contrôle d\'Accès + Vidéosurveillance',
      testimonial: 'Solution complète installée par GLS pour notre clinique. Le système de contrôle d\'accès par badges et la vidéosurveillance HD nous permettent de sécuriser efficacement nos espaces sensibles. L\'équipe technique est très réactive et le suivi est excellent.',
      highlights: ['Solution complète', 'Sécurisation des espaces sensibles', 'Suivi excellent']
    },
    {
      id: 4,
      name: 'Fatou DIALLO',
      title: 'Directrice Commerciale',
      company: 'Groupe DIALLO & ASSOCIES',
      sector: 'Services',
      icon: Building,
      location: 'Marcory, Abidjan',
      date: 'Septembre 2024',
      rating: 5,
      service: 'Motorisation Portail + Alarme',
      testimonial: 'Très satisfaite de la motorisation de nos portails et du système d\'alarme installés par Glory Security Services. L\'équipe est professionnelle, les équipements sont robustes et le service client est au top. Nous avons déjà recommandé GLS à plusieurs partenaires.',
      highlights: ['Équipements robustes', 'Service client excellent', 'Recommandé à nos partenaires']
    },
    {
      id: 5,
      name: 'Ibrahim SAWADOGO',
      title: 'Gérant',
      company: 'SAWADOGO ENTERPRISES',
      sector: 'Industrie',
      icon: Building,
      location: 'Zone Industrielle, Yopougon',
      date: 'Août 2024',
      rating: 5,
      service: 'Installation complète',
      testimonial: 'Installation complète de sécurité pour notre site industriel : vidéosurveillance, clôture électrique, contrôle d\'accès et alarme. Projet d\'envergure mené avec brio par l\'équipe GLS. Formation du personnel incluse. Aucun incident de sécurité depuis l\'installation !',
      highlights: ['Projet d\'envergure', 'Formation du personnel', 'Zéro incident depuis']
    },
    {
      id: 6,
      name: 'Aminata KONE',
      title: 'Propriétaire',
      company: 'Villa Familiale',
      sector: 'Résidentiel',
      icon: Home,
      location: 'Riviera Golf, Abidjan',
      date: 'Juillet 2024',
      rating: 5,
      service: 'Vidéosurveillance résidentielle',
      testimonial: 'Système de vidéosurveillance installé pour notre domicile familial. L\'équipe GLS a été très à l\'écoute de nos besoins spécifiques. Installation discrète et efficace. L\'accès mobile est parfait pour surveiller la maison pendant nos voyages. Service impeccable !',
      highlights: ['À l\'écoute des besoins', 'Installation discrète', 'Accès mobile parfait']
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Satisfaits' },
    { icon: Star, value: '4.9/5', label: 'Note Moyenne' },
    { icon: CheckCircle, value: '98%', label: 'Taux de Satisfaction' },
    { icon: Award, value: '10+', label: 'Années d\'Expérience' }
  ];

  const getSectorColor = (sector: string) => {
    const colors = {
      'Commerce': 'bg-blue-100 text-blue-800',
      'Résidentiel': 'bg-green-100 text-green-800',
      'Santé': 'bg-red-100 text-red-800',
      'Services': 'bg-purple-100 text-purple-800',
      'Industrie': 'bg-orange-100 text-orange-800'
    };
    return colors[sector as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Témoignages Clients</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de nos services. Leur satisfaction 
            est notre plus grande fierté et la preuve de notre engagement qualité.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center card-gradient">
              <CardContent className="p-6">
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-gradient hover:shadow-gls-md transition-all group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-white transition-all">
                      <testimonial.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-sm">
                        {testimonial.title}
                        {testimonial.company && (
                          <>
                            <br />
                            <span className="font-medium">{testimonial.company}</span>
                          </>
                        )}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="secondary" className={getSectorColor(testimonial.sector)}>
                    {testimonial.sector}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="relative">
                  <Quote className="h-6 w-6 text-primary/30 absolute -top-2 -left-1" />
                  <p className="text-muted-foreground italic leading-relaxed pl-6">
                    {testimonial.testimonial}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm">Points forts :</h4>
                  <ul className="space-y-1">
                    {testimonial.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-3 w-3" />
                    <span>{testimonial.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-3 w-3" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <Card className="hero-gradient text-white inline-block">
            <CardContent className="p-12">
              <Users className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Rejoignez nos Clients Satisfaits</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Faites comme plus de 500 clients qui nous font confiance pour leur sécurité. 
                Découvrez pourquoi nous sommes le leader de la sécurité électronique en Côte d'Ivoire.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-gls-blue hover:bg-white/90">
                  Demander un Devis Gratuit
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gls-blue">
                  Voir Nos Réalisations
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto card-gradient">
            <CardContent className="p-8">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Témoignages Authentiques</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Tous nos témoignages sont authentiques et proviennent de clients réels. 
                Nous sommes fiers de la confiance qu'ils nous accordent et nous nous engageons 
                à maintenir ce niveau d'excellence pour chaque nouveau client.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Temoignages;