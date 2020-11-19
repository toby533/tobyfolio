import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Thibault Drevon ⎢ Portfolio',
  lang: 'en, fr',
  description: 'a simple portfolio to present my work',
};

// HERO DATA
export const heroData = {
  titleSection: 'About me',
  text:"I'm passionate of technology. I learned to code when I was working in a digital lab. After that, I decided to learn UX by taking a master's degree in ergonomics and design. These days, I like to create intuitive interfaces that match the needs and passions of users."
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
    img: 'smash4glory.jpg',
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
    img: 'StarDrive.jpg',
    title: 'Star Drive',
    info: 'Pay how you drive',
    tag: 'App design',
    url: '/projects/badgee/',
  },
  {
    id: nanoid(),
    img: 'France-TV_360.jpg',
    title: 'France-TV 360',
    info: 'Explore television',
    tag: 'Identity, website design',
    url: '/projects/France-TV_360/',
  },
  {
    id: nanoid(),
    img: 'badgee.jpg',
    title: 'Badgee',
    info: 'Easy secure access',
    tag: 'App design',
    url: '/projects/badgee/',
  },
];

// CONTACT DATA
export const contactData = {
  text: 'You have a question ?',
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
