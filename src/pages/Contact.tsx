import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageCircle,
  Calendar,
  Shield,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message envoyé !",
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const services = [
    'Vidéosurveillance',
    'Alarme Anti-intrusion',
    'Clôture Électrique',
    'Motorisation Portail',
    'Contrôle d\'Accès',
    'Formation',
    'Maintenance',
    'Autre'
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Cocody, Angré carrefour des Oscars\nAbidjan, Côte d\'Ivoire',
      action: 'Voir sur la carte'
    },
    {
      icon: Phone,
      title: 'Téléphones',
      content: '(+225) 05 07 20 87 90\n(+225) 27 22 49 51 91',
      action: 'Appeler maintenant'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'gls.ciabj@gmail.com',
      action: 'Envoyer un email'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 8h-18h\nSam: 8h-16h\nSupport 24h/7j',
      action: 'Service d\'urgence'
    }
  ];

  const features = [
    'Réponse garantie sous 2h',
    'Devis gratuit et sans engagement',
    'Équipe certifiée et expérimentée',
    'Service après-vente inclus'
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient">Contactez-nous</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre équipe d'experts est à votre disposition pour étudier vos besoins 
            et vous proposer la solution de sécurité la plus adaptée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-gradient shadow-gls-md">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  <span>Demande de Devis Gratuit</span>
                </CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et nous vous recontacterons rapidement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Votre nom et prénom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+225 XX XX XX XX XX"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service demandé</Label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Objet de votre demande"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez vos besoins en détail..."
                      rows={6}
                      required
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      className="btn-gradient flex-1" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Envoi en cours...</>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Envoyer ma demande
                        </>
                      )}
                    </Button>
                    <a href="tel:+2250507208790">
                      <Button variant="outline" className="w-full sm:w-auto">
                        <Phone className="mr-2 h-4 w-4" />
                        Appel direct
                      </Button>
                    </a>
                  </div>
                </form>

                {/* Features */}
                <div className="mt-8 pt-6 border-t">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    Pourquoi nous choisir ?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-gradient hover:shadow-gls-md transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                      <p className="text-muted-foreground text-sm whitespace-pre-line mb-3">
                        {info.content}
                      </p>
                      <Button variant="outline" size="sm">
                        {info.action}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <Card className="hero-gradient text-white">
              <CardContent className="p-6 text-center space-y-4">
                <Calendar className="h-8 w-8 mx-auto" />
                <h3 className="font-bold text-lg">Intervention d'Urgence</h3>
                <p className="text-sm opacity-90">
                  Service d'intervention 24h/24 et 7j/7 pour toute urgence sécuritaire
                </p>
                <a href="tel:+2250507208790">
                  <Button className="bg-white text-gls-blue hover:bg-white/90 w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    Appel d'urgence
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-muted/50 p-12 text-center">
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Notre Localisation</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Retrouvez-nous facilement à Cocody, Angré au carrefour des Oscars. 
                  Parking disponible pour nos visiteurs.
                </p>
                <Button variant="outline" size="lg">
                  Ouvrir dans Google Maps
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;