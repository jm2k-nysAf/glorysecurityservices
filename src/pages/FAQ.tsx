import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  HelpCircle, 
  Phone, 
  MessageCircle, 
  Clock, 
  Euro, 
  Settings, 
  Shield,
  Camera,
  Zap
} from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const faqCategories = [
    {
      id: 'general',
      name: 'Questions Générales',
      icon: HelpCircle,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: 'tarifs',
      name: 'Tarifs & Devis',
      icon: Euro,
      color: 'bg-green-100 text-green-800'
    },
    {
      id: 'installation',
      name: 'Installation & Maintenance',
      icon: Settings,
      color: 'bg-orange-100 text-orange-800'
    },
    {
      id: 'technique',
      name: 'Questions Techniques',
      icon: Camera,
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  const faqs = [
    {
      category: 'general',
      question: 'Quels sont les délais d\'intervention pour une urgence ?',
      answer: 'Nous intervenons dans un délai maximum de 2 heures pour toute urgence sécuritaire. Notre équipe technique est disponible 24h/24 et 7j/7 pour répondre à vos besoins urgents.'
    },
    {
      category: 'general',
      question: 'Dans quelles zones intervenez-vous ?',
      answer: 'Nous intervenons principalement sur le grand Abidjan et ses environs. Pour les autres régions de Côte d\'Ivoire, nous étudions chaque demande au cas par cas. N\'hésitez pas à nous contacter pour vérifier notre couverture dans votre zone.'
    },
    {
      category: 'tarifs',
      question: 'Le devis est-il gratuit ?',
      answer: 'Oui, tous nos devis sont entièrement gratuits et sans engagement. Nous nous déplaçons sur site pour évaluer vos besoins et vous proposer la solution la plus adaptée à votre budget.'
    },
    {
      category: 'tarifs',
      question: 'Quels sont vos modes de paiement acceptés ?',
      answer: 'Nous acceptons les paiements en espèces, par chèque, virement bancaire et mobile money (Orange Money, MTN Money, Moov Money). Des facilités de paiement peuvent être accordées pour les gros projets.'
    },
    {
      category: 'tarifs',
      question: 'Proposez-vous des garanties sur vos installations ?',
      answer: 'Oui, nous offrons une garantie de 2 à 5 ans selon le type d\'équipement installé. Cette garantie couvre les défauts de fabrication et notre main d\'œuvre. La maintenance préventive est incluse la première année.'
    },
    {
      category: 'installation',
      question: 'Combien de temps dure une installation complète ?',
      answer: 'Cela dépend du projet : 1-2 jours pour un système basique, 3-5 jours pour une installation complète avec plusieurs services. Nous vous donnons un planning précis lors du devis.'
    },
    {
      category: 'installation',
      question: 'Faut-il être présent pendant toute l\'installation ?',
      answer: 'Votre présence n\'est pas requise en permanence, mais nous recommandons d\'être disponible au début pour les explications et à la fin pour la réception et la formation sur l\'utilisation des équipements.'
    },
    {
      category: 'installation',
      question: 'Que comprend votre service de maintenance ?',
      answer: 'Notre maintenance inclut : vérification des équipements, nettoyage des caméras, mise à jour logiciels, test des systèmes, remplacement des pièces défectueuses et rapport détaillé. Fréquence : trimestrielle ou semestrielle selon le contrat.'
    },
    {
      category: 'technique',
      question: 'Puis-je accéder à mes caméras depuis mon smartphone ?',
      answer: 'Oui, tous nos systèmes de vidéosurveillance moderne permettent l\'accès à distance via smartphone, tablette ou ordinateur. Nous configurons l\'application et vous formons à son utilisation.'
    },
    {
      category: 'technique',
      question: 'Vos systèmes fonctionnent-ils en cas de coupure électrique ?',
      answer: 'Oui, nos systèmes sont équipés de batteries de secours qui permettent un fonctionnement de 6 à 12 heures selon la configuration. Pour une autonomie plus longue, nous proposons des solutions avec groupes électrogènes ou panneaux solaires.'
    },
    {
      category: 'technique',
      question: 'Comment sont stockées les images de vidéosurveillance ?',
      answer: 'Les images sont stockées localement sur des enregistreurs numériques (NVR/DVR) et peuvent également être sauvegardées dans le cloud pour plus de sécurité. La durée de conservation est configurable selon vos besoins (généralement 30 à 90 jours).'
    },
    {
      category: 'technique',
      question: 'Vos clôtures électriques sont-elles dangereuses ?',
      answer: 'Nos clôtures électriques sont parfaitement sécurisées et respectent toutes les normes internationales. Elles délivrent une impulsion dissuasive mais non dangereuse. Tous nos équipements sont certifiés CE et installés selon les règles de l\'art.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const quickActions = [
    {
      title: 'Appel Direct',
      description: 'Parlez directement à un expert',
      icon: Phone,
      action: 'tel:+2250507208790',
      variant: 'default'
    },
    {
      title: 'Chat en Ligne',
      description: 'Discussion instantanée',
      icon: MessageCircle,
      action: '#',
      variant: 'outline'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">FAQ - Questions Fréquentes</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trouvez rapidement les réponses à vos questions sur nos services de sécurité électronique.
            Si vous ne trouvez pas ce que vous cherchez, n'hésitez pas à nous contacter.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Rechercher dans les questions fréquentes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <Card className="card-gradient sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  <span>Catégories</span>
                </CardTitle>
                <CardDescription>Filtrer par sujet</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {faqCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant="ghost"
                    className="w-full justify-start p-3 h-auto"
                  >
                    <category.icon className="h-4 w-4 mr-3" />
                    <span className="text-sm">{category.name}</span>
                  </Button>
                ))}
                
                <div className="pt-4 border-t space-y-3">
                  <h4 className="font-medium text-sm">Besoin d'aide ?</h4>
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant={action.variant as any}
                      size="sm"
                      className="w-full justify-start"
                      asChild
                    >
                      <a href={action.action}>
                        <action.icon className="h-4 w-4 mr-2" />
                        <div className="text-left">
                          <div className="text-xs font-medium">{action.title}</div>
                          <div className="text-xs opacity-70">{action.description}</div>
                        </div>
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            {searchTerm && (
              <div className="mb-6">
                <p className="text-muted-foreground">
                  {filteredFaqs.length} résultat{filteredFaqs.length > 1 ? 's' : ''} trouvé{filteredFaqs.length > 1 ? 's' : ''} pour "{searchTerm}"
                </p>
              </div>
            )}

            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const category = faqCategories.find(cat => cat.id === faq.category);
                return (
                  <AccordionItem key={index} value={`item-${index}`} className="border-0">
                    <Card className="card-gradient hover:shadow-gls-md transition-all">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="flex items-start space-x-3 text-left">
                          <div className="flex-shrink-0 mt-1">
                            {category && <category.icon className="h-5 w-5 text-primary" />}
                          </div>
                          <div className="space-y-2">
                            <div className="font-medium text-base">{faq.question}</div>
                            {category && (
                              <Badge variant="secondary" className={category.color}>
                                {category.name}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <div className="pl-8 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </div>
                      </AccordionContent>
                    </Card>
                  </AccordionItem>
                );
              })}
            </Accordion>

            {filteredFaqs.length === 0 && searchTerm && (
              <Card className="card-gradient text-center p-12">
                <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Aucun résultat trouvé</h3>
                <p className="text-muted-foreground mb-6">
                  Essayez avec d'autres mots-clés ou contactez-nous directement
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={() => setSearchTerm('')} variant="outline">
                    Effacer la recherche
                  </Button>
                  <Button className="btn-gradient">
                    <Phone className="mr-2 h-4 w-4" />
                    Nous contacter
                  </Button>
                </div>
              </Card>
            )}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20">
          <Card className="hero-gradient text-white text-center">
            <CardContent className="p-12">
              <MessageCircle className="h-16 w-16 mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Notre équipe d'experts est là pour répondre à toutes vos questions spécifiques. 
                Contactez-nous dès maintenant !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+2250507208790">
                  <Button size="lg" className="bg-white text-gls-blue hover:bg-white/90">
                    <Phone className="mr-2 h-5 w-5" />
                    Appeler un Expert
                  </Button>
                </a>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gls-blue">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Chat en Ligne
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FAQ;