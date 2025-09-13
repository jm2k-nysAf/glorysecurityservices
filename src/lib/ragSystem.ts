// RAG System for FAQ knowledge base
export interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

export const faqKnowledgeBase: FAQItem[] = [
  // Questions Générales
  {
    category: 'general',
    question: 'Quels sont vos services principaux ?',
    answer: 'Nous proposons : vidéosurveillance, alarmes anti-intrusion, clôtures électriques, motorisation de portails, contrôle d\'accès et formation.'
  },
  {
    category: 'general',
    question: 'Quels sont les délais d\'intervention pour une urgence ?',
    answer: 'Nous intervenons dans un délai maximum de 2 heures pour toute urgence sécuritaire. Notre équipe technique est disponible 24h/24 et 7j/7 pour répondre à vos besoins urgents.'
  },
  {
    category: 'general',
    question: 'Dans quelles zones intervenez-vous ?',
    answer: 'Nous intervenons principalement sur le grand Abidjan et ses environs. Pour les autres régions de Côte d\'Ivoire, nous étudions chaque demande au cas par cas.'
  },
  {
    category: 'general',
    question: 'En combien de temps installez-vous un système ?',
    answer: 'En moyenne 48h à 72h selon la complexité du site.'
  },
  {
    category: 'general',
    question: 'Offrez-vous un service après-vente ?',
    answer: 'Oui, un service après-vente et une maintenance préventive sont inclus dans nos contrats.'
  },
  {
    category: 'general',
    question: 'Donnez-vous des formations ?',
    answer: 'Oui, nous proposons des formations en sécurité électronique, vidéosurveillance et contrôle d\'accès.'
  },
  {
    category: 'general',
    question: 'Comment demander un devis ?',
    answer: 'Vous pouvez remplir le formulaire sur la page Contact ou nous écrire via WhatsApp au (+225) 05 07 20 87 90.'
  },

  // Tarifs & Devis
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

  // Installation & Maintenance
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

  // Questions Techniques
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

// Simple similarity calculation function
function calculateSimilarity(query: string, text: string): number {
  const queryWords = query.toLowerCase().split(' ');
  const textWords = text.toLowerCase().split(' ');
  
  let matches = 0;
  queryWords.forEach(queryWord => {
    if (queryWord.length > 2) { // Ignore very short words
      textWords.forEach(textWord => {
        if (textWord.includes(queryWord) || queryWord.includes(textWord)) {
          matches++;
        }
      });
    }
  });
  
  return matches / queryWords.length;
}

// RAG search function
export function searchFAQ(query: string, maxResults: number = 3): FAQItem[] {
  const results = faqKnowledgeBase.map(faq => {
    const questionSimilarity = calculateSimilarity(query, faq.question);
    const answerSimilarity = calculateSimilarity(query, faq.answer);
    const score = Math.max(questionSimilarity, answerSimilarity * 0.8);
    
    return {
      ...faq,
      score
    };
  });

  return results
    .filter(result => result.score > 0.1)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map(({ score, ...faq }) => faq);
}

// Generate bot response using RAG
export function generateRAGResponse(userMessage: string): string {
  const relevantFAQs = searchFAQ(userMessage, 2);
  
  if (relevantFAQs.length === 0) {
    return `Je n'ai pas trouvé d'information spécifique sur votre question. Pour obtenir une réponse personnalisée, vous pouvez :
    
📞 Nous appeler au (+225) 05 07 20 87 90
💬 Nous écrire sur WhatsApp 
📧 Nous contacter via le formulaire

Notre équipe d'experts sera ravie de vous aider !`;
  }

  if (relevantFAQs.length === 1) {
    return `${relevantFAQs[0].answer}
    
Pour plus d'informations, n'hésitez pas à nous contacter au (+225) 05 07 20 87 90 !`;
  }

  let response = `Voici ce que je peux vous dire :\n\n`;
  relevantFAQs.forEach((faq, index) => {
    response += `${index + 1}. **${faq.question}**\n${faq.answer}\n\n`;
  });
  
  response += `Pour des informations plus détaillées, contactez-nous au (+225) 05 07 20 87 90 !`;
  
  return response;
}