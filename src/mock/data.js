import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thibault Drevon, Product designer / Front developer',
  lang: 'en, fr',
  description: 'Hi, my name is Thibault Drevon and this is my Portfolio',
};

// HERO DATA
export const heroData = {
  titleSection: 'About me',
  text:"I am passionate about technology. I learned to code when I was working in a digital lab. After that, I decided to learn UX by taking a master's degree in ergonomics and design. These days, I like to create intuitive interfaces that match the needs and passions of users."
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'nicecactus.jpg',
    title: 'Nicecactus',
    info: 'All-in-one esport platform',
    tag: 'Product design',
    url: '/projects/Nicecactus/',
  },
  {
    id: nanoid(),
    img: 'glory4gamers.jpg',
    title: 'Smah4glory',
    info: 'Weekly LAN',
    tag: 'Identity',
    url: '/projects/Glory4gamers/',
  },
  {
    id: nanoid(),
    img: 'glory4gamers.jpg',
    title: 'Glory4gamers',
    info: 'Daily online esports tournaments',
    tag: 'Product design',
    url: '/projects/Glory4gamers/',
  },
  {
    id: nanoid(),
    img: 'happ-e.jpg',
    title: 'Happ-e',
    info: 'The 100% online electricity subscription',
    tag: 'Identity, website design',
    url: '/projects/Happ-e/',
  },
  {
    id: nanoid(),
    img: 'happ-e.jpg',
    title: 'Happ-e, the 100% online electricity subscription',
    info: 'I worked on the user interface of an existing website and create visual content to promote events on the social media.',
    url: '/projects/Happ-e/',
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
  text: 'You are looking for a creative designer ?',
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
