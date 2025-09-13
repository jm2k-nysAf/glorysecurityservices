import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Calendar, 
  BookOpen,
  Target,
  Settings,
  Shield,
  Camera,
  Key,
  Zap,
  Phone,
  FileText,
  Star
} from 'lucide-react';

const Formation = () => {
  const formations = [
    {
      id: 'videosurveillance',
      title: 'Formation Vidéosurveillance',
      subtitle: 'Installation et maintenance',
      description: 'Formation complète sur l\'installation, la configuration et la maintenance des systèmes de vidéosurveillance IP et analogiques.',
      duration: '5 jours',
      participants: '8 max',
      price: '150 000 FCFA',
      level: 'Intermédiaire',
      icon: Camera,
      modules: [
        'Bases de la vidéosurveillance',
        'Technologies IP vs Analogique',
        'Installation de caméras',
        'Configuration des enregistreurs',
        'Réseau et accès distant',
        'Maintenance préventive',
        'Dépannage et réparation',
        'Projet pratique complet'
      ],
      objectives: [
        'Maîtriser l\'installation complète',
        'Configurer les systèmes',
        'Assurer la maintenance',
        'Résoudre les pannes courantes'
      ],
      certification: 'Certificat professionnel GLS',
      prerequisites: 'Notions d\'électricité de base'
    },
    {
      id: 'alarme',
      title: 'Formation Systèmes d\'Alarme',
      subtitle: 'Anti-intrusion et détection',
      description: 'Apprenez à installer et maintenir les systèmes d\'alarme anti-intrusion avec détecteurs et centrale de commande.',
      duration: '3 jours',
      participants: '10 max',
      price: '100 000 FCFA',
      level: 'Débutant',
      icon: Shield,
      modules: [
        'Principes de détection',
        'Types de détecteurs',
        'Centrales d\'alarme',
        'Programmation et zones',
        'Installation pratique',
        'Tests et mise en service',
        'Télésurveillance',
        'Maintenance et SAV'
      ],
      objectives: [
        'Comprendre les technologies',
        'Installer correctement',
        'Programmer les centrales',
        'Effectuer la maintenance'
      ],
      certification: 'Attestation de formation',
      prerequisites: 'Aucun prérequis'
    },
    {
      id: 'controle-acces',
      title: 'Formation Contrôle d\'Accès',
      subtitle: 'RFID, biométrie et gestion',
      description: 'Formation spécialisée sur les systèmes de contrôle d\'accès : badges RFID, biométrie, gestion des utilisateurs et intégration.',
      duration: '4 jours',
      participants: '6 max',
      price: '200 000 FCFA',
      level: 'Avancé',
      icon: Key,
      modules: [
        'Technologies d\'identification',
        'Lecteurs RFID/Mifare',
        'Systèmes biométriques',
        'Logiciels de gestion',
        'Base de données utilisateurs',
        'Intégration vidéo',
        'Sécurité des données',
        'Projet d\'intégration'
      ],
      objectives: [
        'Maîtriser les technologies',
        'Gérer les accès',
        'Intégrer les systèmes',
        'Sécuriser les données'
      ],
      certification: 'Certification avancée GLS',
      prerequisites: 'Notions informatiques requises'
    },
    {
      id: 'cloture-electrique',
      title: 'Formation Clôtures Électriques',
      subtitle: 'Installation et sécurité',
      description: 'Formation sur l\'installation sécurisée des clôtures électriques : réglementation, mise en œuvre et maintenance.',
      duration: '2 jours',
      participants: '12 max',
      price: '80 000 FCFA',
      level: 'Débutant',
      icon: Zap,
      modules: [
        'Réglementation en vigueur',
        'Électrificateurs et composants',
        'Techniques d\'installation',
        'Mise à la terre',
        'Tests de conformité',
        'Sécurité et signalisation',
        'Maintenance préventive',
        'Dépannage courant'
      ],
      objectives: [
        'Respecter la réglementation',
        'Installer en sécurité',
        'Tester la conformité',
        'Assurer la maintenance'
      ],
      certification: 'Habilitation installation',
      prerequisites: 'Habilitation électrique souhaitée'
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: 'Certification Reconnue',
      description: 'Certificat professionnel reconnu par les entreprises du secteur'
    },
    {
      icon: Users,
      title: 'Formateurs Experts',
      description: 'Équipe de formateurs avec plus de 10 ans d\'expérience terrain'
    },
    {
      icon: Settings,
      title: 'Pratique Intensive',
      description: '70% de pratique sur équipements réels dans nos ateliers'
    },
    {
      icon: BookOpen,
      title: 'Support Complet',
      description: 'Documentation technique et support post-formation inclus'
    }
  ];

  const testimonials = [
    {
      name: 'Kouadio Jean',
      role: 'Technicien Sécurité',
      company: 'SECURITECH SARL',
      testimonial: 'Formation très complète et pratique. Les formateurs sont excellents et le matériel de qualité.',
      rating: 5
    },
    {
      name: 'Aminata Diabaté',
      role: 'Ingénieur',
      company: 'TECH SOLUTIONS',
      testimonial: 'J\'ai beaucoup appris sur les systèmes de contrôle d\'accès. Formation recommandée !',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Centre de Formation GLS</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Développez votre expertise en sécurité électronique avec nos formations pratiques 
            dispensées par des professionnels expérimentés. Certificats reconnus inclus.
          </p>
        </div>

        {/* Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {advantages.map((advantage, index) => (
            <Card key={index} className="text-center card-gradient hover:shadow-gls-md transition-all group">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                    <advantage.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Formations */}
        <div className="space-y-12 mb-16">
          {formations.map((formation, index) => (
            <div key={formation.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start gap-8`}>
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-2xl">
                    <formation.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{formation.title}</h2>
                    <p className="text-lg text-primary font-medium mb-3">{formation.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed">{formation.description}</p>
                  </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{formation.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{formation.participants}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4 text-primary" />
                    <Badge variant="secondary">{formation.level}</Badge>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">Certifiant</span>
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Target className="mr-2 h-5 w-5 text-primary" />
                    Objectifs de la formation
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {formation.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <div className="text-2xl font-bold text-primary">{formation.price}</div>
                    <div className="text-sm text-muted-foreground">par participant</div>
                  </div>
                  <div className="flex space-x-3">
                    <Button className="btn-gradient">
                      <Calendar className="mr-2 h-4 w-4" />
                      S'inscrire
                    </Button>
                    <Button variant="outline">
                      <FileText className="mr-2 h-4 w-4" />
                      Programme détaillé
                    </Button>
                  </div>
                </div>
              </div>

              {/* Modules Card */}
              <div className="flex-1 max-w-lg">
                <Card className="card-gradient shadow-gls-md">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <span>Programme détaillé</span>
                    </CardTitle>
                    <CardDescription>Modules couverts dans cette formation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {formation.modules.map((module, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{module}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4 border-t space-y-3">
                      <div>
                        <h5 className="font-medium text-sm mb-1">Certification :</h5>
                        <p className="text-sm text-muted-foreground">{formation.certification}</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-sm mb-1">Prérequis :</h5>
                        <p className="text-sm text-muted-foreground">{formation.prerequisites}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gradient">Avis de nos Stagiaires</h2>
            <p className="text-xl text-muted-foreground">Ce que disent ceux qui ont suivi nos formations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-gradient">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="italic text-muted-foreground">&ldquo;{testimonial.testimonial}&rdquo;</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center space-y-8 p-12 hero-gradient text-white rounded-2xl">
          <GraduationCap className="h-16 w-16 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold">Développez Votre Expertise</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Rejoignez plus de 200 professionnels formés par nos experts. 
            Inscrivez-vous dès maintenant à nos prochaines sessions de formation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-gls-blue hover:bg-white/90">
              <Phone className="mr-2 h-5 w-5" />
              Nous Contacter
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gls-blue">
              <Calendar className="mr-2 h-5 w-5" />
              Voir le Calendrier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;