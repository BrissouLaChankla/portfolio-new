import {
  GEO_HERO_WEBP,
  GEO_ABOUT_ASIDE_WEBP,
} from "@/data/geoDeveloperLandings";

/**
 * Contenu par zone × langue.
 *
 * Image hero : `GEO_HERO_WEBP` (+ surcharge `heroImageSrc`).
 * Illustration « à propos » : `GEO_ABOUT_ASIDE_WEBP` (+ surcharge `aboutAsideImageSrc`).
 */

const SVC_FR = [
  {
    title: "Site vitrine qui donne confiance",
    description:
      "Un site clair et pro, qui rassure et qui aide à remonter sur Google.",
  },
  {
    title: "E-commerce qui fait vendre",
    description:
      "Une boutique prête à l’emploi : pages produit propres, parcours d’achat simple, admin pour gérer le reste.",
  },
  {
    title: "Application mobile (App Store & Google Play)",
    description:
      "Une app iOS + Android quand l’usage est vraiment mobile (souvent React Native).",
  },
  {
    title: "Web app, partout sans installer",
    description:
      "Une web app dans le navigateur, plus simple à maintenir, dispo sur tous les supports.",
  },
];

const SVC_EN = [
  {
    title: "A brochure site that builds trust",
    description:
      "A clean, professional site that builds trust and helps you rank on Google.",
  },
  {
    title: "E-commerce built to sell",
    description:
      "A ready-to-run store: solid product pages, simple checkout, admin for day-to-day updates.",
  },
  {
    title: "Mobile app (App Store & Google Play)",
    description:
      "An iOS + Android app when mobile is truly core (often React Native).",
  },
  {
    title: "Web app in the browser",
    description:
      "A browser-based web app, easier to maintain, usable on desktop, tablet, and mobile.",
  },
];

function faqProjectsFr() {
  return {
    question: "Quels types de projets je réalise ?",
    answer:
      "Surtout des sites vitrines et des landings pour des PME, des refontes, parfois un petit outil métier ou une appli légère. Les très gros programmes type grand groupe, ce n’est pas mon truc : je préfère des missions qu’on peut mener clairement, de bout en bout.",
  };
}

function faqProjectsEn() {
  return {
    question: "What kinds of projects do I take on?",
    answer:
      "Brochure sites and landing pages for small businesses, refactors, sometimes a small internal tool or light web app. Huge enterprise programs aren’t my sweet spot; I prefer clear scopes I can actually deliver end to end.",
  };
}

function faqSeoFr() {
  return {
    question: "Est-ce que je peux aussi aider sur le référencement ?",
    answer:
      "Oui, dans le concret : structure des pages, textes, liens internes, vitesse et bonnes pratiques. L’idée, ce sont des bases solides, pas du code jeté sans réfléchir au référencement.",
  };
}

function faqSeoEn() {
  return {
    question: "Can you help with SEO too?",
    answer:
      "Yes, in a practical way: page structure, copy, internal links, speed, and sensible technical SEO. The goal is clean foundations, not code with no search thought behind it.",
  };
}

/** @type {Record<string, Record<'fr'|'en', object>>} */
export const GEO_PAGE_CONTENT = {
  nice: {
    fr: {
      metaTitle:
        "Développeur web freelance à Nice | SEO, WordPress & sites | Brice Eliasse",
      metaDescription:
        "Brice Eliasse, développeur web freelance : j’ai grandi à Nice, j’y vis souvent, on peut se voir sur place si besoin. Sites, WordPress, SEO, petites applis. Avignon, déplacements ou 100 % distance.",
      keywords: [
        "développeur web freelance nice",
        "développeur web nice",
        "seo nice",
        "wordpress nice",
        "site internet nice",
        "brice eliasse",
      ],
      ogTitle: "Développeur web freelance à Nice | Brice Eliasse",
      ogDescription:
        "Nice, ma ville d’origine : sites, SEO et accompagnement sur place ou à distance.",
      twitterDescription:
        "Freelance web à Nice : sites, WordPress, SEO, rencontres possibles sur la Côte d’Azur.",
      ogImageAlt:
        "Brice Eliasse, développeur web freelance à Nice",
      jsonLdDescription:
        "Développeur web freelance à Nice (ville d’origine) : sites, WordPress, SEO, petites applis. Côte d’Azur, Avignon, remote. Brice Eliasse.",
      breadcrumbLabel: "Développeur web Nice",
      badgeLocation: "📍 Nice, Alpes-Maritimes",
      badgeSecondary: "Freelance, plutôt PME & indépendants",
      h1Line1: "Développeur web à Nice.",
      h1Highlight: "Des sites clairs, soignés, utiles.",
      heroLead:
        "Je fais des sites pour des petites structures qui veulent quelque chose de pro sans se ruiner : lisible, agréable à utiliser, et surtout aligné avec ce que vous vendez vraiment.",
      heroSecondary:
        "J’ai grandi à Nice, la ville compte pour moi. J’y suis souvent entre deux séjours à Avignon ou ailleurs. Si un café ou un atelier sur place aide le projet, je viens. Sinon on avance très bien à distance, sans stress.",
      heroImageAlt: "Brice Eliasse, développeur web freelance à Nice",
      heroFigcaption:
        "Visuel représentatif du portfolio de Brice Eliasse, développeur web à Nice.",
      aboutKicker: "Développeur web freelance à Nice",
      aboutTitle:
        "Un site doit être beau, oui, mais surtout clair pour vos clients.",
      aboutParagraphs: [
        "Quand vous cherchez un dev à Nice, en général vous voulez quelqu’un qui capte votre activité et qui ne vous refourgue pas un template générique. Je préfère poser des questions, proposer une structure simple, et livrer quelque chose dont vous êtes content.",
        "Nice pour moi ce n’est pas qu’un mot-clé SEO : j’y ai grandi. J’aime bien qu’on se croise en vrai quand ça simplifie les choses. Le reste du temps, le remote marche très bien, sans blabla inutile.",
        "J’aime les interfaces sobres, les textes qui disent vraiment ce que vous faites, et les pages qui donnent envie d’écrire. Pas besoin d’animations partout pour avoir l’air sérieux.",
        "Je peux aussi vous aider à trancher : quoi mettre en avant en haut de page, quelles sections garder, comment être un minimum visible sur Google. Un mélange de technique, de bon sens et de goût.",
      ],
      services: SVC_FR,
      whyKicker: "Pourquoi moi",
      whyTitle: "Un freelance, pas une équipe de cinquante personnes",
      whyP1:
        "Je code, je m’occupe aussi du design quand il le faut, et j’ai un œil sur le référencement. Vous parlez à la personne qui fait le travail, ce qui évite beaucoup de pertes en route.",
      whyP2:
        "Peu de jargon, pas de promesses irréalistes. On définit un périmètre honnête pour une PME ou un indépendant, et on avance étape par étape.",
      points: [
        "Design sobre, pas de gadgets inutiles",
        "Délais qu’on peut tenir, avec le souci du détail",
        "Je pense à votre activité, pas qu’à la techno",
        "Bases SEO propres, sans bullshit",
        "On s’écrit ou on s’appelle directement",
        "Nice sur place si utile, sinon Avignon, ailleurs ou full remote",
      ],
      localKicker: "Nice & visibilité locale",
      localTitle:
        "Besoin d’un développeur web à Nice pour un site qui vous rend visible ?",
      localParagraphs: [
        "Un site joli mais flou ne sert pas grand-chose. Il vaut mieux quelque chose de clair, qui charge vite, et que vos clients et Google comprennent du premier coup d’œil.",
        "Nice pour moi c’est du vécu : j’ai grandi ici. Si vous voulez qu’on se voie pour lancer le projet ou faire un point, c’est possible. Sinon on fait tout à distance, sans drama.",
        "Cette page existe pour expliquer qui je suis et comment je travaille, pas pour remplir un trou. Si vous cherchez un développeur web à Nice, vous devriez savoir après lecture si ça peut matcher.",
      ],
      localKeywordBold: "développeur web Nice",
      useCases: [
        "Vous avez un site daté qui ne reflète plus votre niveau",
        "Vous lancez une activité et vous voulez une présence solide",
        "Vous avez besoin d’une landing page plus convaincante",
        "Vous voulez de meilleures bases SEO dès la création",
        "Vous cherchez un freelance réactif sans bâcler la qualité",
      ],
      faqs: [
        {
          question: "Pourquoi travailler avec un développeur web freelance à Nice ?",
          answer:
            "Un freelance expérimenté va souvent plus vite, reste flexible et garde une vision d’ensemble. Vous parlez à la personne qui conçoit et livre. À Nice, on peut en plus se voir et travailler en présentiel quand ça simplifie le projet.",
        },
        faqProjectsFr(),
        {
          question: "Est-ce que je travaille uniquement avec des clients à Nice ?",
          answer:
            "Non, j’ai des clients partout en France et à l’étranger en remote. Nice reste mon repère : j’y ai grandi et j’y suis souvent. C’est le plus simple pour un café ou un atelier sur la Côte d’Azur.",
        },
        faqSeoFr(),
      ],
    },
    en: {
      metaTitle:
        "Freelance web developer in Nice, France | SEO, WordPress & sites | Brice Eliasse",
      metaDescription:
        "Brice Eliasse, freelance web developer: grew up in Nice, there often, happy to meet on the Riviera when it helps. Sites, WordPress, SEO, small apps. Avignon, travel, or fully remote.",
      keywords: [
        "web developer nice",
        "freelance web developer nice",
        "wordpress developer nice",
        "seo nice",
        "brice eliasse",
      ],
      ogTitle: "Freelance web developer in Nice | Brice Eliasse",
      ogDescription:
        "Nice is home: websites, SEO, and in-person collaboration on the Riviera when it helps.",
      twitterDescription:
        "Nice-based freelance: sites, WordPress, SEO, Riviera meetups when useful.",
      ogImageAlt: "Brice Eliasse, freelance web developer in Nice",
      jsonLdDescription:
        "Freelance web developer in Nice (hometown): sites, WordPress, SEO, small apps. French Riviera, Avignon, remote. Brice Eliasse.",
      breadcrumbLabel: "Web developer in Nice",
      badgeLocation: "📍 Nice, French Riviera",
      badgeSecondary: "Freelance, mostly SMBs & independents",
      h1Line1: "Web developer in Nice.",
      h1Highlight: "Clear, polished, actually useful sites.",
      heroLead:
        "I build sites for small teams who want something professional without calling a huge agency: easy to read, pleasant to use, and aligned with what you actually sell.",
      heroSecondary:
        "Nice is home for me. I’m there a lot between stints in Avignon or elsewhere. Happy to grab coffee or run a workshop on site if it helps. Otherwise we keep it remote and low-drama.",
      heroImageAlt: "Brice Eliasse, freelance web developer in Nice",
      heroFigcaption: "Portfolio preview, Brice Eliasse.",
      aboutKicker: "Freelance web developer in Nice",
      aboutTitle:
        "A site should look good, but your clients need to get it fast.",
      aboutParagraphs: [
        "When you look for a dev in Nice, you usually want someone who gets your business and won’t hand you a generic template. I’d rather ask questions, propose a simple structure, and ship something you’re proud to share.",
        "Nice isn’t just an SEO keyword for me; I grew up here. I like meeting in person when it makes things easier. The rest of the time, remote works great without endless meetings.",
        "I like calm UI, copy that says what you do, and pages that make people want to reach out. You don’t need flashy animations to look legit.",
        "I can help you decide what goes first on the page, what to cut, and how to stay reasonably visible on Google. Tech, taste, and common sense.",
      ],
      services: SVC_EN,
      whyKicker: "Why work with me",
      whyTitle: "One freelancer, not a fifty-person agency",
      whyP1:
        "I write code, handle design when needed, and keep SEO basics in mind. You talk to the person doing the work, which saves a lot of back-and-forth.",
      whyP2:
        "Little jargon, no fairy-tale timelines. We scope something honest for a small business, then ship in sensible steps.",
      points: [
        "Clean UI, no gimmick overload",
        "Realistic timelines, still picky on details",
        "I care about your business, not only the stack",
        "Sensible SEO foundations",
        "Direct messages and calls",
        "Nice on site when useful; Avignon, travel, or fully remote",
      ],
      localKicker: "Nice & local visibility",
      localTitle:
        "Need a Nice-based developer for a site that actually gets found?",
      localParagraphs: [
        "A pretty but vague site doesn’t help much. Better something clear, quick to load, and obvious for both humans and Google.",
        "Nice is personal: I grew up here. We can meet to kick off or sync if you want. Otherwise everything works fine remotely.",
        "This page is here to explain how I work, not to pad the site. If you’re looking for a web developer in Nice, you should know after reading whether we’re a fit.",
      ],
      localKeywordBold: "web developer Nice",
      useCases: [
        "Your site no longer reflects your level",
        "You are launching and need a credible presence",
        "You need a more convincing landing page",
        "You want better SEO foundations from day one",
        "You need a responsive freelance partner without cutting corners",
      ],
      faqs: [
        {
          question: "Why hire a freelance web developer in Nice?",
          answer:
            "An experienced freelance developer can move faster, stay flexible, and keep product clarity. You talk to the person who builds. In Nice we can also meet in person when it helps.",
        },
        faqProjectsEn(),
        {
          question: "Do I only work with clients in Nice?",
          answer:
            "No, I work with clients across France and abroad remotely. Nice is still my home base: I grew up here and I’m around a lot. Easiest spot for a coffee or on-site time on the Riviera.",
        },
        faqSeoEn(),
      ],
    },
  },
  "alpes-maritimes": {
    fr: {
      metaTitle:
        "Développeur web freelance Alpes-Maritimes (06) | Sites & SEO | Brice Eliasse",
      metaDescription:
        "Sites et accompagnement web pour les PME et les indépendants dans les Alpes-Maritimes : WordPress, Next.js, SEO, petits outils. Brice Eliasse, basé vers Nice, déplacements dans le 06, distance ok.",
      keywords: [
        "développeur web alpes-maritimes",
        "développeur web 06",
        "freelance web nice",
        "création site alpes-maritimes",
        "seo alpes-maritimes",
      ],
      ogTitle: "Développeur web freelance | Alpes-Maritimes",
      ogDescription:
        "Sites et visibilité pour les boîtes du 06, du littoral aux vallées.",
      twitterDescription:
        "Freelance web dans le 06 : sites, SEO, sans prise de tête.",
      ogImageAlt: "Brice Eliasse, développeur web Alpes-Maritimes",
      jsonLdDescription:
        "Développeur web freelance pour les Alpes-Maritimes : sites, SEO, WordPress. Déplacements dans le 06, remote. Brice Eliasse.",
      breadcrumbLabel: "Développeur web Alpes-Maritimes",
      badgeLocation: "📍 Alpes-Maritimes (06)",
      badgeSecondary: "Freelance, plutôt PME",
      h1Line1: "Développeur web dans les Alpes-Maritimes.",
      h1Highlight: "Votre territoire, votre site.",
      heroLead:
        "J’accompagne des petites structures du 06 qui veulent un site honnête : lisible, crédible, sans promesses en l’air ni jargon incompréhensible.",
      heroSecondary:
        "J’ai des racines à Nice et je connais bien le département : je peux me déplacer pour des ateliers ou des missions sur site selon les besoins, tout en gardant une organisation fluide à distance.",
      heroImageAlt: "Brice Eliasse, développeur web Alpes-Maritimes",
      heroFigcaption: "Accompagnement web sur le 06.",
      aboutKicker: "Freelance dans le 06",
      aboutTitle: "Un site qui parle aux gens du coin, et à Google",
      aboutParagraphs: [
        "Sur le littoral comme dans l’arrière-pays, les activités changent : tourisme, santé, services, assos… Le site doit ressembler à votre vraie vie d’entreprise, pas à un modèle téléchargé.",
        "Je commence par comprendre ce que vous vendez, puis on construit quelque chose de maintenable. Le détail technique, c’est sur les fiches projet.",
        "Échanges simples, livrables concrets. Je ne vends pas la lune.",
      ],
      services: SVC_FR,
      whyKicker: "Pourquoi moi",
      whyTitle: "Je connais un peu le 06, je reste freelance",
      whyP1:
        "J’ai des racines à Nice et je roule dans le département. Ça aide pour cadrer un message local sans bullshit, que vous visiez le 06 ou plus loin.",
      whyP2:
        "Peu de jargon, des décisions assumées, un rythme de collaboration clair.",
      points: [
        "Sites orientés confiance et conversion",
        "SEO et structure pensés pour le long terme",
        "Déplacements possibles dans le département",
        "Organisation hybride sur place / distance",
        "Accompagnement direct avec le prestataire qui livre",
      ],
      localKicker: "Visibilité dans le 06",
      localTitle: "Être trouvé quand on cherche un pro dans les Alpes-Maritimes",
      localParagraphs: [
        "Beaucoup de gens cherchent « près de chez eux ». Votre site doit dire clairement où vous intervenez et pour qui, pas juste être en ligne.",
        "Une page sur le 06, c’est l’occasion d’expliquer comment je travaille dans le département. Utile pour vous et pour Google, si c’est écrit comme du vrai texte.",
        "Je ne recopie pas la même landing pour chaque ville : chaque page a un peu son angle.",
      ],
      localKeywordBold: "développeur web Alpes-Maritimes",
      useCases: [
        "Vous couvrez tout le 06 et voulez un site qui reflète votre zone d’intervention",
        "Vous passez d’un site vitrine obsolète à une présence crédible",
        "Vous lancez une offre et avez besoin d’une landing claire",
        "Vous voulez structurer votre contenu pour le référencement local",
      ],
      faqs: [
        {
          question:
            "Pourquoi un développeur web qui connaît les Alpes-Maritimes ?",
          answer:
            "Parce que les usages et les marchés varient entre littoral, Nice, Grasse ou l’arrière-pays. Un interlocuteur qui connaît le territoire gagne du temps sur le cadrage et sur les messages.",
        },
        faqProjectsFr(),
        {
          question: "Intervenez-vous hors du 06 ?",
          answer:
            "Oui, à distance pour la France et au-delà. Pour le département, je peux aussi me déplacer selon le projet. J’ai une base de vie à Nice et des périodes à Avignon ou en déplacement.",
        },
        faqSeoFr(),
      ],
    },
    en: {
      metaTitle:
        "Freelance web developer | Alpes-Maritimes (06), France | Brice Eliasse",
      metaDescription:
        "Web work for SMBs across the Alpes-Maritimes: sites, SEO, WordPress, small tools. Brice Eliasse, Riviera-based, travel in the 06, remote OK.",
      keywords: [
        "web developer alpes-maritimes",
        "freelance developer 06",
        "website france riviera",
        "seo alpes-maritimes",
      ],
      ogTitle: "Web developer | Alpes-Maritimes",
      ogDescription:
        "Websites and visibility for teams across the 06, coast to valleys.",
      twitterDescription: "Freelance web in the Alpes-Maritimes, low-drama SEO.",
      ogImageAlt: "Brice Eliasse, web developer Alpes-Maritimes",
      jsonLdDescription:
        "Freelance web developer for the Alpes-Maritimes: sites, SEO, WordPress. Travel in the 06, remote. Brice Eliasse.",
      breadcrumbLabel: "Web developer Alpes-Maritimes",
      badgeLocation: "📍 Alpes-Maritimes (06)",
      badgeSecondary: "Freelance, SMB-friendly",
      h1Line1: "Web developer in the Alpes-Maritimes.",
      h1Highlight: "Your territory, your site.",
      heroLead:
        "I work with small teams in the 06 who want a straight, credible site: readable, honest, no buzzword soup.",
      heroSecondary:
        "I’m rooted in Nice and know the department well. I can travel for workshops or on-site work when needed, while keeping remote collaboration smooth.",
      heroImageAlt: "Brice Eliasse, web developer Alpes-Maritimes",
      heroFigcaption: "Web support across the 06.",
      aboutKicker: "Freelance across the 06",
      aboutTitle: "A site that speaks to locals and to Google",
      aboutParagraphs: [
        "From the coast inland, businesses differ: tourism, healthcare, services, nonprofits. Your site should feel like your real company, not a downloaded template.",
        "I start from what you sell, then ship something maintainable. Technical detail lives on project pages.",
        "Simple communication, useful deliverables, no moonshot promises.",
      ],
      services: SVC_EN,
      whyKicker: "Why me",
      whyTitle: "I know the 06 a bit, still a one-person shop",
      whyP1:
        "I’m rooted near Nice and travel the department. That helps frame local messaging without fluff, whether you stay in the 06 or reach further.",
      whyP2:
        "Little jargon, clear decisions, a straightforward collaboration rhythm.",
      points: [
        "Sites built for trust and conversion",
        "SEO and structure with a long-term view",
        "Travel possible within the department",
        "Hybrid on-site / remote workflows",
        "You work directly with the person who ships",
      ],
      localKicker: "Visibility in the 06",
      localTitle: "Get found when people search in the Alpes-Maritimes",
      localParagraphs: [
        "Many people search locally. Your site should say where you work and for whom, not just sit online.",
        "A page about the 06 is a chance to explain how I work in the department, in real sentences.",
        "I don’t clone the same city pitch everywhere; each page has its own angle.",
      ],
      localKeywordBold: "web developer Alpes-Maritimes",
      useCases: [
        "You cover the whole 06 and need a site that reflects your coverage",
        "You are upgrading from an outdated brochure site",
        "You are launching and need a clear landing",
        "You want to structure content for local SEO",
      ],
      faqs: [
        {
          question: "Why a developer who knows the Alpes-Maritimes?",
          answer:
            "Markets differ between coast, Nice, Grasse, and inland areas. Someone who knows the territory saves time on messaging and scoping.",
        },
        faqProjectsEn(),
        {
          question: "Do you work outside the 06?",
          answer:
            "Yes, remotely across France and beyond. For the department I can travel when it helps. I’m usually around Nice, with time in Avignon or on the road.",
        },
        faqSeoEn(),
      ],
    },
  },
  antibes: {
    fr: {
      metaTitle:
        "Développeur web freelance Antibes & Juan-les-Pins | Brice Eliasse",
      metaDescription:
        "Sites et SEO pour PME à Antibes et Juan-les-Pins. Brice Eliasse, freelance, déplacements ouest du 06 possibles, distance ok.",
      keywords: [
        "développeur web antibes",
        "freelance web juan-les-pins",
        "création site antibes",
        "seo antibes",
      ],
      ogTitle: "Développeur web freelance | Antibes",
      ogDescription:
        "Sites et visibilité pour Antibes, Juan-les-Pins et l’ouest azuréen.",
      twitterDescription: "Freelance web à Antibes, sites et SEO sans blabla.",
      ogImageAlt: "Brice Eliasse, développeur web Antibes",
      jsonLdDescription:
        "Développeur web freelance Antibes / Juan-les-Pins : sites, SEO. Déplacements ouest 06, remote. Brice Eliasse.",
      breadcrumbLabel: "Développeur web Antibes",
      badgeLocation: "📍 Antibes & Juan-les-Pins",
      badgeSecondary: "Freelance web",
      h1Line1: "Développeur web à Antibes.",
      h1Highlight: "Clarté, crédibilité, résultats.",
      heroLead:
        "J’accompagne les entreprises et les indépendants d’Antibes et du bassin : des sites performants, professionnels, optimisés pour le SEO, responsive et ergonomiques.",
      heroSecondary:
        "Je passe régulièrement sur cette partie du littoral : si je suis dans le coin, on peut se voir sur place. Sinon, on avance très bien à distance. J’ai aussi un ancrage à Nice pour le 06 au sens large.",
      heroImageAlt: "Brice Eliasse, développeur web Antibes",
      heroFigcaption: "Accompagnement web Antibes & environs.",
      aboutKicker: "Antibes & ouest du 06",
      aboutTitle: "Un site à la hauteur du niveau d’exigence local",
      aboutParagraphs: [
        "Antibes et Juan attirent plein de boîtes sérieuses : services, commerce, tourisme, immo… Votre site peut être simple et quand même à la hauteur de ce que vous racontez aux clients.",
        "On part de votre message et de ce que vos clients doivent comprendre en 10 secondes. Ensuite seulement, on choisit les bons outils selon votre budget et vos besoins (WordPress, Next.js, etc.).",
        "Le but est simple : un site dont vous êtes fier, qui clarifie votre offre, et qui aide vraiment à être contacté.",
      ],
      services: SVC_FR,
      whyKicker: "Pourquoi moi",
      whyTitle: "Produit d’abord, technique ensuite",
      whyP1:
        "Je relie design, contenu et visibilité : important quand vous voulez capter une clientèle locale ou internationale sur la Côte.",
      whyP2:
        "Process clair, livrables concrets, communication sans surcharge.",
      points: [
        "Sites soignés pour marques et services locaux",
        "SEO et pages pensées pour la recherche locale",
        "Déplacements possibles Antibes / Juan / environs",
        "Collaboration hybride présentiel / distance",
      ],
      localKicker: "Antibes & recherche locale",
      localTitle: "Être visible quand on cherche un web à Antibes",
      localParagraphs: [
        "Les recherches « près de moi » et les requêtes avec le nom de la ville sont courantes : votre page doit répondre à l’intention avec franchise.",
        "Cette page explique comment je peux vous accompagner depuis ou vers Antibes, sans recopier les autres pages mot pour mot.",
      ],
      localKeywordBold: "développeur web Antibes",
      useCases: [
        "Refonte d’un site qui ne correspond plus à votre positionnement",
        "Nouvelle activité à Antibes ou Juan-les-Pins",
        "Landing pour une campagne ou un lancement local",
        "Amélioration de la visibilité sur Google dans le secteur",
      ],
      faqs: [
        {
          question: "Travaillez-vous uniquement à Antibes ?",
          answer:
            "Non, je couvre tout le 06 et le remote. Antibes et Juan, c’est une zone où je me déplace volontiers pour un café ou un atelier.",
        },
        faqProjectsFr(),
        {
          question: "Peut-on se rencontrer avant de lancer ?",
          answer:
            "Oui, c’est toujours mieux pour bien cadrer le besoin. Si je suis dans le coin, on peut faire ça sur place, sinon la visio marche très bien.",
        },
        faqSeoFr(),
      ],
    },
    en: {
      metaTitle: "Freelance web developer | Antibes & Juan-les-Pins | Brice Eliasse",
      metaDescription:
        "Websites and SEO for SMBs in Antibes and Juan-les-Pins. Brice Eliasse, freelance, western Riviera travel, remote OK.",
      keywords: [
        "web developer antibes",
        "freelance web juan-les-pins",
        "website antibes",
      ],
      ogTitle: "Web developer | Antibes",
      ogDescription: "Credibility and visibility for Antibes and the western Riviera.",
      twitterDescription: "Freelance web in Antibes, straightforward sites.",
      ogImageAlt: "Brice Eliasse, web developer Antibes",
      jsonLdDescription:
        "Freelance web developer Antibes / Juan-les-Pins. Travel western 06, remote. Brice Eliasse.",
      breadcrumbLabel: "Web developer Antibes",
      badgeLocation: "📍 Antibes & Juan-les-Pins",
      badgeSecondary: "Freelance web",
      h1Line1: "Web developer in Antibes.",
      h1Highlight: "Clarity, credibility, outcomes.",
      heroLead:
        "I help businesses and independents in Antibes and the surrounding area: fast, professional websites with solid SEO foundations, responsive layouts, and straightforward UX.",
      heroSecondary:
        "I travel to this part of the coast for meetings or short on-site work when useful; otherwise we keep momentum remotely. I’m also anchored in Nice for broader 06 coverage.",
      heroImageAlt: "Brice Eliasse, web developer Antibes",
      heroFigcaption: "Web support in Antibes & nearby.",
      aboutKicker: "Antibes & western 06",
      aboutTitle: "A site that matches local expectations",
      aboutParagraphs: [
        "Antibes and Juan have lots of solid businesses: services, retail, tourism, real estate. Your site can stay simple and still match how you talk to clients.",
        "We align messaging and structure before tooling. Technical depth stays on project pages.",
        "Goal: a site you’re proud of that actually drives contact.",
      ],
      services: SVC_EN,
      whyKicker: "Why me",
      whyTitle: "Product first, tooling second",
      whyP1:
        "I connect design, content, and visibility for local or international audiences on the Côte d’Azur.",
      whyP2: "Clear process, concrete deliverables, lightweight communication.",
      points: [
        "Polished sites for local brands and services",
        "SEO and pages tuned for local search",
        "Travel possible around Antibes / Juan",
        "Hybrid on-site / remote collaboration",
      ],
      localKicker: "Antibes & local search",
      localTitle: "Show up when people search for web help in Antibes",
      localParagraphs: [
        "Local searches are common. Your page should answer honestly what you do and where.",
        "This one explains Antibes-area support without cloning every other city page.",
      ],
      localKeywordBold: "web developer Antibes",
      useCases: [
        "Redesign a site that no longer matches your positioning",
        "New activity in Antibes or Juan-les-Pins",
        "Landing page for a campaign",
        "Improve Google visibility in the area",
      ],
      faqs: [
        {
          question: "Do you only work in Antibes?",
          answer:
            "No, I work across the 06 and remotely. Antibes and Juan are easy for me to visit for a coffee or workshop when it helps.",
        },
        faqProjectsEn(),
        {
          question: "Can we meet before starting?",
          answer:
            "Yes, it’s the easiest way to scope things. On-site or video, whatever fits.",
        },
        faqSeoEn(),
      ],
    },
  },
  monaco: {
    fr: {
      metaTitle:
        "Développeur web freelance Monaco & Riviera | Sites soignés | Brice Eliasse",
      metaDescription:
        "Sites et SEO pour marques et PME autour de Monaco : rendu pro, calme, sans usine à gaz. Brice Eliasse, freelance, organisation claire.",
      keywords: [
        "développeur web monaco",
        "freelance web monaco",
        "site internet monaco",
        "seo monaco",
      ],
      ogTitle: "Développeur web freelance | Monaco",
      ogDescription:
        "Sites soignés pour une zone exigeante, avec discrétion et rigueur.",
      twitterDescription: "Freelance web Monaco / Riviera, calme et carré.",
      ogImageAlt: "Brice Eliasse, développeur web Monaco",
      jsonLdDescription:
        "Développeur web freelance Monaco & Riviera : sites premium, SEO, WordPress. Brice Eliasse.",
      breadcrumbLabel: "Développeur web Monaco",
      badgeLocation: "📍 Monaco & Riviera",
      badgeSecondary: "Freelance, sites soignés",
      h1Line1: "Développeur web Monaco & Riviera.",
      h1Highlight: "Rigueur, discrétion, finition.",
      heroLead:
        "Autour de Monaco, les attentes sont hautes. Je livre des sites propres, des textes clairs et une navigation simple, avec le calme d’un freelance (pas le train-train d’une grosse agence).",
      heroSecondary:
        "Je peux me déplacer sur Monaco et la zone limitrophe pour des échanges en présentiel ; la suite du projet se pilote souvent avec des points réguliers et une documentation soignée, à distance ou sur place selon vos habitudes.",
      heroImageAlt: "Brice Eliasse, développeur web Monaco",
      heroFigcaption: "Accompagnement web Riviera / Monaco.",
      aboutKicker: "Monaco & exigence",
      aboutTitle: "Quand l’image et le détail comptent autant que la technique",
      aboutParagraphs: [
        "Les attentes en matière de qualité perçue, de temps de chargement et de clarté sont élevées. Je privilégie une exécution propre, des textes structurés et une navigation sans friction.",
        "La technique par mission, c’est sur les études de cas. Ici je parle surtout d’un livrable fiable et d’un projet qui se vit calmement.",
        "Confidentialité et communication maîtrisée : je sais travailler avec des interlocuteurs pressés et des calendriers serrés.",
      ],
      services: SVC_FR,
      whyKicker: "Pourquoi moi",
      whyTitle: "Calme, méthode, niveau de finition",
      whyP1:
        "J’ai l’habitude de projets où le détail visible compte : hiérarchie visuelle, micro-copies, performance perçue.",
      whyP2:
        "Peu de bruit, des engagements réalistes, un suivi transparent jusqu’à la mise en ligne.",
      points: [
        "Sites orientés image et conversion",
        "Performance et SEO traités sérieusement",
        "Déplacements Monaco / Riviera selon besoin",
        "Communication directe avec l’exécutant",
      ],
      localKicker: "Monaco & visibilité",
      localTitle: "Un site à la hauteur d’une présence monégasque ou rivière",
      localParagraphs: [
        "Les recherches liées à Monaco et à la zone sont compétitives : votre site doit être précis sur ce que vous proposez et pour qui.",
        "Cette page décrit mon accompagnement pour ce périmètre, sans recopier les autres landings mot à mot.",
      ],
      localKeywordBold: "développeur web Monaco",
      useCases: [
        "Site institutionnel ou marque à forte exigence visuelle",
        "Refonte pour aligner le digital sur votre positionnement",
        "Landing ou tunnel pour une offre spécifique",
        "Bases SEO pour une présence crédible sur la zone",
      ],
      faqs: [
        {
          question: "Intervenez-vous physiquement à Monaco ?",
          answer:
            "Oui, selon le projet : réunions, ateliers ou phases de lancement. Le reste peut être mené en hybride avec un cadre clair.",
        },
        faqProjectsFr(),
        {
          question: "Travaillez-vous avec des équipes internes ?",
          answer:
            "Oui, marketing, com ou direction : j’adapte le rythme et les livrables à vos habitudes.",
        },
        faqSeoFr(),
      ],
    },
    en: {
      metaTitle:
        "Freelance web developer | Monaco & French Riviera | Brice Eliasse",
      metaDescription:
        "Calm, polished web work for Monaco and Riviera teams: sites, SEO, WordPress. Brice Eliasse, experienced solo freelance, clear delivery.",
      keywords: [
        "web developer monaco",
        "freelance web monaco",
        "website monaco",
      ],
      ogTitle: "Web developer | Monaco",
      ogDescription:
        "Polished delivery for demanding areas, with discretion and rigor.",
      twitterDescription: "Freelance web Monaco / Riviera.",
      ogImageAlt: "Brice Eliasse, web developer Monaco",
      jsonLdDescription:
        "Freelance web developer Monaco & Riviera: premium sites, SEO. Brice Eliasse.",
      breadcrumbLabel: "Web developer Monaco",
      badgeLocation: "📍 Monaco & Riviera",
      badgeSecondary: "Polished freelance sites",
      h1Line1: "Web developer Monaco & Riviera.",
      h1Highlight: "Rigor, discretion, polish.",
      heroLead:
        "Expectations run high around Monaco. I ship clean sites, clear copy, and simple navigation, the calm way a freelancer works (not a giant agency machine).",
      heroSecondary:
        "I can meet in Monaco or nearby when it helps. Otherwise we keep a steady rhythm with short updates and clear docs, remote or hybrid, whatever fits you.",
      heroImageAlt: "Brice Eliasse, web developer Monaco",
      heroFigcaption: "High-standard web support.",
      aboutKicker: "Monaco & expectations",
      aboutTitle: "When perception and detail matter as much as execution",
      aboutParagraphs: [
        "Expectations around perceived quality, speed, and clarity are high. I focus on clean execution, structured copy, and frictionless navigation.",
        "Technical choices are documented per project. Here I focus on reliable delivery and a calm pace.",
        "Confidentiality and concise communication for busy stakeholders.",
      ],
      services: SVC_EN,
      whyKicker: "Why me",
      whyTitle: "Calm process, high finish",
      whyP1:
        "I’m used to work where visible detail matters: hierarchy, microcopy, perceived performance.",
      whyP2:
        "Low noise, realistic commitments, transparent delivery through launch.",
      points: [
        "Brand- and conversion-oriented sites",
        "Serious performance and SEO hygiene",
        "Travel in Monaco / Riviera when useful",
        "Direct access to the person shipping",
      ],
      localKicker: "Monaco & visibility",
      localTitle: "A site that matches a Monaco / Riviera presence",
      localParagraphs: [
        "Search around Monaco is competitive. Your site should say clearly what you offer and for whom.",
        "This page describes support for this perimeter without duplicating other city pages word-for-word.",
      ],
      localKeywordBold: "web developer Monaco",
      useCases: [
        "Institutional or brand site with high visual standards",
        "Redesign to align digital with positioning",
        "Landing for a specific offer",
        "SEO foundations for credible regional presence",
      ],
      faqs: [
        {
          question: "Do you work on-site in Monaco?",
          answer:
            "Yes when it helps: workshops, kickoffs, or launch phases. The rest can stay hybrid with a simple rhythm.",
        },
        faqProjectsEn(),
        {
          question: "Do you work with in-house teams?",
          answer:
            "Yes, marketing, comms, or leadership. I adapt rhythm and deliverables to how you already work.",
        },
        faqSeoEn(),
      ],
    },
  },
  "sophia-antipolis": {
    fr: {
      metaTitle:
        "Développeur web freelance Sophia Antipolis | SaaS & produit | Brice Eliasse",
      metaDescription:
        "Sites marketing et petits outils pour équipes près de Sophia Antipolis : freelance solo, remote et déplacements sur le plateau si besoin. Brice Eliasse.",
      keywords: [
        "développeur web sophia antipolis",
        "freelance web sophia",
        "site startup sophia antipolis",
        "développeur web valbonne",
      ],
      ogTitle: "Développeur web freelance | Sophia Antipolis",
      ogDescription:
        "Sites et produits web pour l’écosystème tech du plateau.",
      twitterDescription: "Freelance web Sophia Antipolis, sans bullshit produit.",
      ogImageAlt: "Brice Eliasse, développeur web Sophia Antipolis",
      jsonLdDescription:
        "Développeur web freelance Sophia Antipolis : sites produit, outils, SEO. Remote & plateau. Brice Eliasse.",
      breadcrumbLabel: "Développeur web Sophia Antipolis",
      badgeLocation: "📍 Sophia Antipolis",
      badgeSecondary: "Freelance web & produit",
      h1Line1: "Développeur web Sophia Antipolis.",
      h1Highlight: "Produit, clarté, exécution.",
      heroLead:
        "Avec les équipes tech, marketing et fondateurs du plateau, je fais des sites marketing qu’on comprend vite, des parcours simples et des bases SEO honnêtes. Toujours en mode freelance, avec un périmètre qu’on définit ensemble.",
      heroSecondary:
        "Je peux me rendre sur Sophia ou Valbonne pour des ateliers ou des points projet ; au quotidien, une organisation agile à distance fonctionne très bien avec les équipes produit.",
      heroImageAlt: "Brice Eliasse, développeur web Sophia Antipolis",
      heroFigcaption: "Accompagnement web près du plateau.",
      aboutKicker: "Écosystème Sophia",
      aboutTitle: "Parler la même langue que marketing et produit",
      aboutParagraphs: [
        "Près de Sophia, on mélange souvent pitch commercial et crédibilité technique. Je préfère qu’on parle de ce que vous voulez voir vivre sur le site, pas de la mode outillage du mois.",
        "Les choix d’implémentation sont sur les fiches projet. Ici, l’idée c’est un livrable utile pour vos décideurs et vos utilisateurs.",
        "Rythme raisonnable, docs lisibles, peu de friction entre les équipes.",
      ],
      services: SVC_FR,
      whyKicker: "Pourquoi moi",
      whyTitle: "Je parle tech et business sans en faire des tonnes",
      whyP1:
        "Je sais qu’il faut avancer, montrer quelque chose de crédible aux clients ou aux partenaires, et garder des parcours lisibles. Sans transformer chaque site en projet de trois ans.",
      whyP2:
        "Communication directe, critères de done clairs, pas de surengineering inutile.",
      points: [
        "Sites et pages orientés preuve & conversion",
        "Bases SEO pour acquisition et contenus",
        "Ateliers possibles sur le plateau",
        "Collaboration fluide avec le remote",
      ],
      localKicker: "Sophia & visibilité",
      localTitle:
        "Un site qui soutient votre narrative produit près de Sophia",
      localParagraphs: [
        "Le plateau attire des profils exigeants : votre site marketing doit être cohérent avec votre discours produit.",
        "Cette page vise les recherches autour de Sophia Antipolis sans dupliquer les autres pages géo.",
      ],
      localKeywordBold: "développeur web Sophia Antipolis",
      useCases: [
        "Site marketing pour une startup ou scale-up",
        "Refonte pour clarifier l’offre avant une levée ou une campagne",
        "Landing pour une vertical ou un segment B2B",
        "Amélioration SEO des pages clés",
      ],
      faqs: [
        {
          question: "Travaillez-vous avec des équipes uniquement sur place ?",
          answer:
            "Non : beaucoup de missions sont hybrides ou remote. Je me déplace sur le plateau quand un atelier ou un lancement le justifie.",
        },
        faqProjectsFr(),
        {
          question: "Pouvez-vous vous intégrer à un backlog existant ?",
          answer:
            "Oui, selon le besoin : site marketing, pages isolées, ou un peu plus produit. On cadrera le périmètre ensemble.",
        },
        faqSeoFr(),
      ],
    },
    en: {
      metaTitle:
        "Freelance web developer | Sophia Antipolis, France | Brice Eliasse",
      metaDescription:
        "Marketing sites and light tools for teams near Sophia Antipolis. Brice Eliasse, solo freelance, remote plus on-plateau when it helps.",
      keywords: [
        "web developer sophia antipolis",
        "freelance developer sophia",
        "startup website sophia antipolis",
      ],
      ogTitle: "Web developer | Sophia Antipolis",
      ogDescription: "Marketing sites and product-minded web for the tech cluster.",
      twitterDescription: "Freelance web Sophia Antipolis.",
      ogImageAlt: "Brice Eliasse, web developer Sophia Antipolis",
      jsonLdDescription:
        "Freelance web developer Sophia Antipolis: product sites, tools, SEO. Remote & on-site. Brice Eliasse.",
      breadcrumbLabel: "Web developer Sophia Antipolis",
      badgeLocation: "📍 Sophia Antipolis",
      badgeSecondary: "Freelance web & product",
      h1Line1: "Web developer Sophia Antipolis.",
      h1Highlight: "Product, clarity, execution.",
      heroLead:
        "With tech, marketing, and founder teams around the plateau I ship marketing sites people actually get, simple journeys, and honest SEO basics. Solo freelancer, scope we agree on together.",
      heroSecondary:
        "I can visit Sophia or Valbonne for workshops or project checkpoints; day-to-day, agile remote collaboration works well with product teams.",
      heroImageAlt: "Brice Eliasse, web developer Sophia Antipolis",
      heroFigcaption: "Web support near the tech cluster.",
      aboutKicker: "Sophia ecosystem",
      aboutTitle: "Speak the same language as marketing and product",
      aboutParagraphs: [
        "Projects here often mix pitch and technical credibility. I’d rather talk about what should live on the site than chase the tool hype of the week.",
        "Implementation detail lives on project pages. Here the focus is useful delivery for stakeholders and users.",
        "Reasonable pace, readable docs, low friction between teams.",
      ],
      services: SVC_EN,
      whyKicker: "Why me",
      whyTitle: "Tech and business without the theatre",
      whyP1:
        "You need to move, look credible to customers or partners, and keep flows readable. I’m not here to turn every marketing site into a multi-year program.",
      whyP2:
        "Direct communication, clear definitions of done, no unnecessary over-engineering.",
      points: [
        "Pages built for proof and conversion",
        "SEO foundations for acquisition content",
        "Workshops possible on the plateau",
        "Smooth remote collaboration",
      ],
      localKicker: "Sophia & visibility",
      localTitle: "A site that supports your product story near Sophia",
      localParagraphs: [
        "The cluster attracts sharp people. Your marketing site should match your product story without overbuilding.",
        "This page targets Sophia-related searches without duplicating other geo landings.",
      ],
      localKeywordBold: "web developer Sophia Antipolis",
      useCases: [
        "Marketing site for a startup or scale-up",
        "Redesign to clarify the offer before a raise or campaign",
        "Landing for a vertical or B2B segment",
        "SEO improvements for key pages",
      ],
      faqs: [
        {
          question: "Do you only work on-site?",
          answer:
            "No, many projects are hybrid or remote. I travel to the plateau when a workshop or launch needs it.",
        },
        faqProjectsEn(),
        {
          question: "Can you plug into an existing backlog?",
          answer:
            "Yes depending on scope: marketing site, isolated pages, or broader product work. We align on boundaries up front.",
        },
        faqSeoEn(),
      ],
    },
  },
};

export function getGeoPageContent(geoKey, locale) {
  const loc = locale === "en" ? "en" : "fr";
  const page = GEO_PAGE_CONTENT[geoKey]?.[loc] ?? null;
  if (!page) return null;
  return {
    ...page,
    heroImageSrc:
      page.heroImageSrc ?? GEO_HERO_WEBP[geoKey] ?? "/og-image.jpg",
    aboutAsideImageSrc:
      page.aboutAsideImageSrc ?? GEO_ABOUT_ASIDE_WEBP,
    aboutAsideImageAlt:
      page.aboutAsideImageAlt ??
      (loc === "fr"
        ? "Brice Eliasse, développeur web freelance"
        : "Brice Eliasse, freelance web developer"),
  };
}
