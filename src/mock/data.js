import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thibault Drevon | UX Designer',
  lang: 'en, fr',
  description: 'Hi, my name is Thibault Drevon and this is my Portfolio',
};

// HERO DATA
export const heroData = {
  img:'thibault-profil.jpg',
  titleSection: 'About me',
  firstName :'Thibault',
  lastName:'Drevon',
  title_en: 'UX Designer',
  title_fr: "Concepteur d'expérience",
  text_en: "Born in 1995 near from Paris, i lived in differents places in France before coming back to study in the Capital. I worked for 3 years in an big insurance company, then several month as a consultant before joining a start-up specialized in the video game industry.",
  text_fr: "Né en 1995 près de Paris, j'ai vécu dans plusieurs régions en France avant de revenir faire mes études sur la Capitale. J'ai depuis travaillé 3 ans dans un grand groupe d'assurance, puis quelques mois en tant que consultant avant de rejoindre une start-up spécialisé dans le milieu des jeux vidéo.",
  cta: 'Explore project',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nicecactus.jpg',
    title: 'Nicecactus, the all-in-one esports platform',
    info: 'I led the user experience creation of 3 websites including workflow navigation, wireframes and user inteface design.',
    url: '/projects/Nicecactus/',
  },
  {
    id: nanoid(),
    img: 'glory4gamers.jpg',
    title: 'Glory4gamers, daily online esports tournaments',
    info: 'I worked on the user interface of an existing website and create visual content to promote events on the social media.',
    url: '/projects/Glory4gamers/',
  },
  {
    id: nanoid(),
    img: 'happ-e.jpg',
    title: 'Happ-e, the 100% online electricity subscription',
    info: 'I worked on the user interface of an existing website and create visual content to promote events on the social media.',
    url: '/projects/Happ-e/',
  },
];

// CONTACT DATA
export const contactData = {
  cta_en: 'Would you like to have a chat ?',
  cta_fr:'Vous souhaitez discutez ?',
  btn: "Let's Talk",
  email: 'thibault.drevon@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thibaultdrevon/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/toby533/tobyfolio',
    },
  ],
};
