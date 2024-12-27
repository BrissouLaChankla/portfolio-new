import GridLogos from "../ui/GridLogos";
const projects = [
  { slug: "lol-tracker", link: "https://lol-tracker.com", name: "Lol-Tracker", description: "Obtenez des stats, des évaluations détaillées et un historique de jeu pour booster les performances de votre équipe en Flex 5", tools: ["NextJS", "DaisyUI", "Clerk"] },
  { slug: "nekjeu", link: "https://nekjeu.fr", name: "Nekjeu", description: "Jeu web en temps réel où l'on défie un ami sur la discographie de l'artiste Nekfeu. Le premier à trouver l'album de la musique diffusée gagne des points.", tools: ["VueJS", "Laravel", "SocketIO"] },
  { slug: "bananegames", link: "https://bananegames.brice-eliasse.com/", name: "Banane Games", description: "Site vitrine avec un CMS personnalisé développé en Laravel pour gérer le site et publier des articles. J'ai aussi développé deux jeux éducatifs web en VueJS.", tools: ["Laravel", "VueJS", "Bootstrap"] },
  { slug: "g2", link: "https://g2detonate.com", name: "G2 Detonate", description: "Application qui détourne et positionne automatiquement une image sur un fond d'explosion. Elle permet aux fans de l'équipe G2 Esports de montrer leur soutien sur les réseaux sociaux.", tools: ["Laravel", "PhotoRoom"] },
  { slug: "cdc", link: "https://chiensdechasse.agency/", name: "Chiens de chasse", description: "Site vitrine pour présenter les chiens de chasse, avec deux passionnés du web prêts à mettre leur technique et créativité à votre service.", tools: ["Wordpress", "Elementor"] },
  { slug: "qoffee", link: "https://headless-next14.vercel.app/", name: "Qoffee", description: "Projet pour former mes élèves à scraper des blogs Wordpress et à découvrir les premiers pas sur Next14 avec le nouveau système de routing.", tools: ["NextJS", "WordPres", "DaisyUI"] },
  { slug: "clement", link: "https://clement-fraissinet.fr", name: "Portfolio Clément", description: "Portfolio créé entièrement avec Vanilla JS et Bootstrap pour un développeur ami.", tools: ["HTML", "CSS", "Bootstrap"] },
  { slug: "cours", link: "https://perso-forma.vercel.app/", name: "Cours en ligne", description: "Futur site internet pour donner cours en ligne", tools: ["Stripe", "NextJS", "DaisyUI"] },
  { slug: "fuchs", link: "https://game.all-images.ai", name: "All images", description: "Jeu web pour All-images où les participants doivent déterminer si une image affichée est une vraie photo ou générée par IA.", tools: ["NextJS", "DaisUI"] },
  { slug: "krai", link: "https://krai.brice-eliasse.com/", name: "Krai", description: "Site créé pour approfondir mes connaissances en Laravel et pour pratiquer l'intégration en Bootstrap avec un effet Parallax.", tools: ["Laravel", "Boostrap"] },
  { slug: "legends-fusion", link: "https://legends-fusion.com", name: "Legends Fusion", description: "Jeu web permettant de construire un personnage de League of Legends en combinant les compétences de personnages choisis aléatoirement.", tools: ["NextJS", "DaisyUI"] },
  { slug: "mvp", link: "https://mvptracker.brice-eliasse.com/", name: "MVP Tracker", description: "Site en Vanilla JS pour apprendre à utiliser ChartJS. Il scrappe les données de OPGG avec Puppeteer, les stocke et en extrait des informations.", tools: ["VanillaJS", "Puppeteer", "ChartJS"] },
  { slug: "pokedex", link: "https://pokedex.brice-eliasse.com/", name: "Pokédex", description: "Projet pour entraîner mes élèves à utiliser des services web, à intégrer et à programmer en Vanilla JS.", tools: ["HTML", "Bootstrap", "VanillaJS"] },
  { slug: "replay", link: "#", name: "Replay", description: "Site permettant à mes amis d'uploader des vidéos, de taguer un jeu et des personnes pour conserver les meilleurs moments de jeu.", tools: ["NextJS", "Cloudinary", "DaisyUI"] },
  { slug: "ronronnerie", link: "https://la-ronronnerie.com/", name: "La Ronronnerie", description: "Site vitrine pour un café à chats situé au centre de Nice.", tools: ["WordPress", "Elementor", "jQuery"] },
  { slug: "supdecours", link: "https://supdecours.brice-eliasse.com/", name: "SupdeCours", description: "CMS fait maison pour la création de cours par les professeurs et la mise à disposition de ressources en ligne pour les élèves.", tools: ["Laravel", "TinyMCE", "Bootstrap"] },
  { slug: "quizbrain", link: "https://quiz-brain-opal.vercel.app/", name: "QuizBrain", description: "Exercices avec Next14 et webservice pour mes élèves. Le but étant de travailler avec les pages dynamiques et le SSR", tools: ["NextJS", "Tailwind CSS", "DaisyUI"] },
  { slug: "trouve-mot", link: "https://trouve-mot.fr/", name: "Trouve mot", description: "API Laravel gratuite de mots aléatoires permettant de récupérer des mots triés ou non par catégories.", tools: ["Laravel", "Bootstrap"] },
  { slug: "monacotraduction", link: "https://www.monacotraduction.mc/fr", name: "Monaco Traduction", description: "Site vitrine multilingue réalisé pour une agence de traduction basée à Monaco.", tools: ["WordPress", "Elementor", "PolyLang"] },
  { slug: "about", link: "https://about-lime.vercel.app/", name: "Portfolio", description: "Portfolio développé pour pratiquer avec Tailwind CSS et DaisyUI.", tools: ["NextJS", "TailwindCSS", "DaisyUI"] },
];


export default function Projects() {

  return (
    <div className="section grid grid-cols-12 items-center gap-8 lg:gap-14" id="projects">
      <GridLogos data={projects} src="projects" />
      <div className="col-span-12 md:col-span-6 flex flex-col gap-6">
        <h2>Désolé mais j'adore <br /><span className="text-primary">polluer le web</span></h2>
        <p>Découvrez quelques une de mes dernières réalisations, certaines sont des side projects innachevés et d'autres sont des projets réalisés en Freelance pour mes clients. Chaque projet est codé seul et se trouve quelque part sur mon Github. Bien sûr d'autres projets plus gros mais privés ne sont pas présents </p>
        <div className="flex gap-3">
          {/* <div className="btn btn-neutral btn-sm">Learn about Views</div> */}
          <a href="https://github.com/BrissouLaChankla" target="_blank" className="btn btn-outline btn-sm">Voir mon Github <svg className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></a>
        </div>
      </div>
    </div>
  )
}

