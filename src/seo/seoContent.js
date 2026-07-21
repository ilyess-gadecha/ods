// Single source of truth for per-language SEO metadata + FAQ structured data.
// Imported by both the runtime <SEOHead> component and the build-time
// prerender script (scripts/prerender-langs.mjs), so the two never drift.

export const BASE_URL = 'https://ordering-dashboard-solution.com'

export const LOCALE_PATHS = {
  en: `${BASE_URL}/`,
  fr: `${BASE_URL}/fr/`,
  de: `${BASE_URL}/de/`
}

export const OG_LOCALES = { en: 'en_US', fr: 'fr_FR', de: 'de_DE' }
export const HTML_LANG = { en: 'en', fr: 'fr', de: 'de' }
export const META_LANGUAGE = { en: 'English', fr: 'French', de: 'German' }

export const SEO_CONTENT = {
  en: {
    title: 'ODS - Restaurant Platform | Pay-First QR Ordering, AI Menus & Analytics',
    description: 'Run a modern restaurant with ODS: beautiful QR menu templates, pay-first checkout (get paid the moment guests order via Stripe), built-in AI for menu videos, food photos & invoice capture, plus analytics, inventory and the ODS Print app. Start your free trial today!',
    keywords: 'restaurant management software, pay-first ordering, QR code ordering, Stripe restaurant payments, AI menu generator, AI food photography, menu video generator, restaurant POS system, order management, restaurant analytics, menu templates, inventory management, kitchen printing software, thermal receipt printer app, loyalty program, restaurant CRM, contactless ordering, digital menu, online ordering system'
  },
  fr: {
    title: 'ODS - Plateforme Restaurant | Commande QR Paiement à la Commande, Menus IA',
    description: "Gérez un restaurant moderne avec ODS : superbes modèles de menu QR, paiement à la commande (encaissez dès que le client commande via Stripe), IA intégrée pour vidéos de plats, photos et capture de factures, plus analytique, stocks et l'appli ODS Print. Essai gratuit !",
    keywords: 'logiciel de gestion de restaurant, paiement à la commande, commande QR code, paiements Stripe restaurant, générateur de menu IA, photographie culinaire IA, générateur de vidéo menu, système POS restaurant, gestion des commandes, analytique restaurant, modèles de menu, gestion des stocks, logiciel impression cuisine, appli imprimante thermique, programme de fidélité, CRM restaurant, commande sans contact, menu numérique'
  },
  de: {
    title: 'ODS - Restaurant-Plattform | QR-Bestellung mit Bezahlung bei Bestellung, KI-Menüs',
    description: 'Führen Sie ein modernes Restaurant mit ODS: schöne QR-Menüvorlagen, Bezahlung bei Bestellung (kassieren Sie im Moment der Bestellung via Stripe), integrierte KI für Menü-Videos, Food-Fotos & Rechnungserfassung, plus Analytik, Lager und die ODS-Print-App. Jetzt kostenlos testen!',
    keywords: 'Restaurant-Management-Software, Bezahlung bei Bestellung, QR-Code-Bestellung, Stripe-Zahlungen Restaurant, KI-Menü-Generator, KI-Food-Fotografie, Menü-Video-Generator, Kassensystem Restaurant, Bestellverwaltung, Restaurant-Analytik, Menüvorlagen, Lagerverwaltung, Küchendruck-Software, Thermodrucker-App, Treueprogramm, Restaurant-CRM, kontaktlose Bestellung, digitale Speisekarte'
  }
}

export const FAQ_CONTENT = {
  en: [
    {
      question: 'What is ODS?',
      answer: 'ODS (Ordering Dashboard Solution) is an all-in-one restaurant management platform. It combines QR-code ordering with pay-first Stripe checkout, beautiful menu design templates, built-in AI (menu videos, food photography, menu and supplier-invoice capture), inventory and cost management, loyalty and CRM, real-time analytics, and the free ODS Print desktop app for kitchen and receipt printing.'
    },
    {
      question: 'How much does ODS cost?',
      answer: "ODS is free for venues with 500 or more orders per month — you only pay a small per-order service fee that is added to the guest's total. For venues under 500 orders per month, the ODS Price Center sets one fair, fixed monthly price. All features are included in every plan, and there is a 7-day free trial with no credit card required."
    },
    {
      question: 'How do customers pay with ODS pay-first?',
      answer: "With pay-first, guests pay by card via Stripe the moment they order, before the order reaches the kitchen. Payments settle directly to the restaurant's own Stripe account with 0% commission charged to the restaurant. ODS collects only a small per-order service fee (from €0.20 up to €1.00 by ticket size) that is added to the guest's total."
    },
    {
      question: 'Does ODS have AI features?',
      answer: 'Yes. ODS includes shipped AI tools: AI menu-video reels generated from a dish photo, AI food photography for dishes, categories and ingredients, AI menu scanning that digitizes a paper menu, AI recipe composition from in-stock ingredients, and AI supplier-invoice capture that extracts line items, VAT and totals from a photo.'
    },
    {
      question: 'Does ODS work with receipt and kitchen printers?',
      answer: 'Yes, through the free ODS Print app for Windows. It connects your thermal printers to ODS and prints every incoming order automatically, routing price-less kitchen tickets and priced counter receipts to the right station. It supports network (LAN, port 9100), USB and any installed Windows printer.'
    },
    {
      question: 'What languages and countries does ODS support?',
      answer: "The ODS website and dashboard are available in English, French and German, and printed tickets support 7 languages including Arabic (right-to-left). Pay-first works in every Stripe-supported country and currency, with the service fee shown in the guest's local currency."
    }
  ],
  fr: [
    {
      question: "Qu'est-ce qu'ODS ?",
      answer: "ODS (Ordering Dashboard Solution) est une plateforme tout-en-un de gestion de restaurant. Elle combine la commande par QR code avec le paiement à la commande via Stripe, de superbes modèles de menu, une IA intégrée (vidéos de plats, photographie culinaire, capture de menus et de factures fournisseurs), la gestion des stocks et des coûts, la fidélité et le CRM, l'analytique en temps réel et l'application de bureau gratuite ODS Print pour l'impression en cuisine et au comptoir."
    },
    {
      question: 'Combien coûte ODS ?',
      answer: "ODS est gratuit pour les établissements réalisant 500 commandes ou plus par mois — vous ne payez qu'un petit frais de service par commande, ajouté au total du client. Pour les établissements réalisant moins de 500 commandes par mois, le Centre Tarifaire ODS fixe un prix mensuel juste et fixe. Toutes les fonctionnalités sont incluses dans chaque formule, et un essai gratuit de 7 jours est proposé sans carte bancaire."
    },
    {
      question: "Comment les clients paient-ils avec le paiement à la commande d'ODS ?",
      answer: "Avec le paiement à la commande, les clients paient par carte via Stripe dès qu'ils commandent, avant que la commande n'arrive en cuisine. Les paiements sont versés directement sur le compte Stripe du restaurant, avec 0 % de commission pour le restaurant. ODS ne perçoit qu'un petit frais de service par commande (de 0,20 € à 1,00 € selon le montant), ajouté au total du client."
    },
    {
      question: "ODS propose-t-il des fonctionnalités d'IA ?",
      answer: "Oui. ODS inclut des outils d'IA opérationnels : des vidéos de menu générées à partir d'une photo de plat, la photographie culinaire par IA pour les plats, catégories et ingrédients, la numérisation de menu par IA, la composition de recettes à partir des ingrédients en stock, et la capture de factures fournisseurs qui extrait les lignes, la TVA et les totaux à partir d'une photo."
    },
    {
      question: 'ODS fonctionne-t-il avec les imprimantes de tickets et de cuisine ?',
      answer: "Oui, grâce à l'application gratuite ODS Print pour Windows. Elle connecte vos imprimantes thermiques à ODS et imprime automatiquement chaque commande entrante, en dirigeant les tickets de cuisine sans prix et les reçus comptoir avec prix vers la bonne station. Elle prend en charge le réseau (LAN, port 9100), l'USB et toute imprimante Windows installée."
    },
    {
      question: 'Quelles langues et quels pays ODS prend-il en charge ?',
      answer: "Le site et le tableau de bord ODS sont disponibles en anglais, français et allemand, et les tickets imprimés prennent en charge 7 langues, dont l'arabe (de droite à gauche). Le paiement à la commande fonctionne dans tous les pays et devises pris en charge par Stripe, le frais de service étant affiché dans la devise locale du client."
    }
  ],
  de: [
    {
      question: 'Was ist ODS?',
      answer: 'ODS (Ordering Dashboard Solution) ist eine All-in-One-Plattform für das Restaurantmanagement. Sie verbindet QR-Code-Bestellung mit Bezahlung bei Bestellung über Stripe, schöne Menüvorlagen, integrierte KI (Menü-Videos, Food-Fotografie, Menü- und Lieferantenrechnungserfassung), Lager- und Kostenmanagement, Treue und CRM, Echtzeit-Analytik sowie die kostenlose Desktop-App ODS Print für den Druck in Küche und am Tresen.'
    },
    {
      question: 'Was kostet ODS?',
      answer: 'ODS ist kostenlos für Lokale mit 500 oder mehr Bestellungen pro Monat — Sie zahlen nur einen kleinen Servicebetrag pro Bestellung, der zum Gästetotal hinzugefügt wird. Für Lokale mit weniger als 500 Bestellungen pro Monat legt das ODS Preis-Center einen fairen, festen Monatspreis fest. Alle Funktionen sind in jeder Formel enthalten, und es gibt eine 7-tägige kostenlose Testphase ohne Kreditkarte.'
    },
    {
      question: 'Wie zahlen Kunden mit der Bezahlung bei Bestellung von ODS?',
      answer: 'Bei der Bezahlung bei Bestellung zahlen Gäste per Karte über Stripe im Moment der Bestellung, bevor die Bestellung die Küche erreicht. Zahlungen gehen direkt auf das eigene Stripe-Konto des Restaurants, mit 0 % Provision für das Restaurant. ODS erhebt nur einen kleinen Servicebetrag pro Bestellung (von 0,20 € bis 1,00 € je nach Bestellwert), der zum Gästetotal hinzugefügt wird.'
    },
    {
      question: 'Bietet ODS KI-Funktionen?',
      answer: 'Ja. ODS enthält einsatzbereite KI-Tools: KI-Menü-Videos aus einem Gerichtsfoto, KI-Food-Fotografie für Gerichte, Kategorien und Zutaten, KI-Menü-Scan, der eine Papier-Speisekarte digitalisiert, KI-Rezeptkomposition aus vorrätigen Zutaten und KI-Lieferantenrechnungserfassung, die Positionen, MwSt. und Summen aus einem Foto extrahiert.'
    },
    {
      question: 'Funktioniert ODS mit Bon- und Küchendruckern?',
      answer: 'Ja, über die kostenlose ODS-Print-App für Windows. Sie verbindet Ihre Thermodrucker mit ODS und druckt jede eingehende Bestellung automatisch, wobei preislose Küchenbons und Thekenbelege mit Preisen an die richtige Station geleitet werden. Sie unterstützt Netzwerk (LAN, Port 9100), USB und jeden installierten Windows-Drucker.'
    },
    {
      question: 'Welche Sprachen und Länder unterstützt ODS?',
      answer: 'Die ODS-Website und das Dashboard sind auf Englisch, Französisch und Deutsch verfügbar, und gedruckte Bons unterstützen 7 Sprachen, darunter Arabisch (von rechts nach links). Die Bezahlung bei Bestellung funktioniert in allen von Stripe unterstützten Ländern und Währungen, wobei der Servicebetrag in der lokalen Währung des Gastes angezeigt wird.'
    }
  ]
}
