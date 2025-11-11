export const projects = [
  {
    title: "De la conception au déploiement",
    image: "projet7.webp",
    description: `
      <p>
        Mon premier projet Full Stack, conçu avec une architecture maintenable et évolutive, facilitant le debugging et la future migration vers des plateformes plus performantes. Cette approche me permet d’économiser du temps de développement à long terme et convient particulièrement aux startups souhaitant démarrer avec un coût minimal.
      </p>
      <ul>
        <li>
          <strong>Côté Back-end :</strong> API Routes avec Next.js (TypeScript), connecté à une base SQL et compatible avec un environnement Node.js.
        </li>
        <li>
          <strong>Côté Front-end :</strong> Maquette Figma intégrée avec React et TailwindCSS pour un développement rapide.
        </li>
      </ul>
      <p>
        J’ai également mis en place l’authentification OAuth via Supabase, les paiements Stripe et l’envoi automatisé d’emails avec Resend.
      </p>
    `,
    skills: ["Architecture MVP", "Next.js", "API Routes", "PostgreSQL", "Authentification", "RLS", "Compte Client", "Paiement en Ligne"],
    link: { text: "Un peu plus loin", url: "https://github.com/Kaymoll/Projet-COC" }
  },
  {
    image: "projet6.webp",
    title: "Application Portfolio",
    description: "Grâce à Create React App, j'ai fait mes premiers pas en React où j'ai pu concevoir ce portfolio. La principale difficulté ici a été de comprendre en profondeur le fonctionnement de React, et de maitriser son fonctionnement afin de développer un code solide et le plus automatisé possible.",
    skills: [
      "React Community",
      "JavaScript",
      "Tailwind",
      "Mobile First",
      "Git",
      "CI/CD"
    ],
    link: { text: "Voir le code", url: "https://github.com/Kaymoll/-Portfolio-react-" }
  },
  {
    image: "projet5.webp",
    title: "Un peu de Back-end !",
    description: "Il s'agissait ici de s'entraîner à apprendre la programmation orientée objet en Java depuis un IDE pro. L'objectif était de créer une application simple en utilisant les concepts de POO dans de bonnes conditions : produire un code clair, maintenable et réutilisable",
    skills: [
      "J2E",
      "IntelliJ IDEA",
      "Test/Debug",
      "POO"
    ],
    link: { text: "Un peu plus loin", url: "https://github.com/Kaymoll/Apprentissage-JAVA" }
  },
  {
    image: "projet4.webp",
    title: "Que du Front-end",
    description: "Projet d'une durée de 3 jours qui consistait à créer une page d'accueil responsive et animée avec quelques fonctionnalitées. J'ai également pu apprendre quelques bonnes pratiques sur git.",
    skills: [
      "HTML5/CSS3 & JS",
      "WebStorm IDE",
      "Responsive Design",
      "Git"
    ],
    link: { text: "Voir le code", url: "https://github.com/Kaymoll/CvCam" }
  },
  {
    image: "projet3.webp",
    title: "Générateur de Mot de Passe",
    description: "Une application web qui permet de générer des mots de passe, en utilisant des algorithmes de génération aléatoire et de m'améliorer en CSS. J'ai également générer des icones en SVG afin de l'adapter à mon style.",
    skills: [
      "JavaScript",
      "HTML5/CSS3",
      "Dessins SVG"
    ],
    link: { text: "Découvrir", url: "https://kaymoll.github.io/Smalls-Projects/generateurMDP/generateurMDP.html" }
  },
  {
    image: "projet2.webp",
    title: "Brick Breaker",
    description: "Un niveau classique de casse-briques développé en JavaScript. Ce projet avait pour but de développer le dynamisme et l'interaction entre l'utilisateur et l'application. Le plus compliqué a été de gérer les collisions entre la balle, la raquette et les briques. L'IA m'as bien aider pour ça, je l'avoue.",
    skills: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "LLM"
    ],
    link: { text: "Voir le jeu", url: "https://kaymoll.github.io/Smalls-Projects/casseBrique/casseBrique.html" }
  },
  {
    image: "projet1.webp",
    title: "Calculatrice",
    description: "Ici le but était de créer les fonctionnalités en JavaScript d'une calculatrice à partir de fichiers HTML et CSS existants et sous une durée de 3 heures. Cela m'a permis de travailler à la fois la logique, mais aussi l'écriture et l'expression en programmation.",
    skills: [
      "Algorithmie",
      "JavaScript"
    ],
    link: { text: "Voir l'application", url: "https://kaymoll.github.io/Smalls-Projects/calculatrice/calculatrice.html" }
  }
];
