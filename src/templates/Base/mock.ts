import { BaseTemplateProps } from '.';

const settingJSON = {
  id: '1',
  blogName: 'Samuel Carvalho',
  blogDescription: 'A descrição do blog',
  footer: '<p>Desenvolvido por Samuel Carvalho</p>',
  logo: {
    id: '1',
    alternativeText: 'logo blog',
    url: 'https://res.cloudinary.com/dw08nx3ad/image/upload/v1672354764/kisspng_logo_phoenix_art_5afffc96c60439_6819225615267257828111_ec42539444.png',
  },
  menuLink: [
    {
      id: 'link-1',
      link: '/home/1',
      newTab: false,
      text: 'My Jobs',
    },
    {
      id: 'link-2',
      link: '/home/2',
      newTab: false,
      text: 'About Me',
    },
    {
      id: 'link-3',
      link: '/home/3',
      newTab: false,
      text: 'Services',
    },
    {
      id: 'link-4',
      link: '/home/4',
      newTab: false,
      text: 'External Link',
    },
    {
      id: 'link-5',
      link: '/home/5',
      newTab: false,
      text: 'JavaScript',
    },
    {
      id: 'link-6',
      link: '/home/6',
      newTab: false,
      text: 'Ruby',
    },
    {
      id: 'link-7',
      link: '/home/7',
      newTab: false,
      text: '.Net',
    },
    {
      id: 'link-8',
      link: '/home/8',
      newTab: false,
      text: 'Assassins Creed',
    },
    {
      id: 'link-9',
      link: '/home/9',
      newTab: false,
      text: 'Ark: Survival Evovlved',
    },
    {
      id: 'link-10',
      link: '/home/10',
      newTab: false,
      text: 'Code',
    },
  ],
};

export default {
  settings: settingJSON,
  children: 'Olá mundo',
} as BaseTemplateProps;
