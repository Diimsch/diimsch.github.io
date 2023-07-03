import { CardProps } from '../components/Card';
import habitus from './habitus.png';
import getthebachelor from './getthebachelor.png';
import papertrade from './papertrade.png';
import tableCube from './tableCube.png';

export const projects: CardProps[] = [
  {
    title: 'Habitus',
    href: 'https://github.com/adrianmxb/habitus-public',
    description:
      'Mobile App to track Habits in a gamified way. Habits can be created and monitored. Completing Habits is rewarded with currency and Stats that can be used to Personalize a character. Together with your digital version you can challenge known historical figures to battles in a turn based combat system.',
    image: habitus,
    tags: [
      'React Native',
      'Node.js',
      'TypeScript',
      'Prisma',
      'GraphQL',
      'Docker',
    ],
  },
  {
    title: 'Get the Bachelor',
    href: 'https://github.com/Diimsch/hsaa-bachelor-game',
    description:
      'Small platformer inspired by the game celeste built for a University course.',
    image: getthebachelor,
    tags: ['C#', 'Unity'],
  },
  {
    title: 'TableCube',
    href: 'https://github.com/Diimsch/tablecube',
    image: tableCube,
    description:
      'Proof of concept for a digital Table management system for Restaurants. Customers can check in at Tables with dedicated QR codes. Additionlaly restaurant owners and waiters receive a digital overview of all Tables in the restaurant.',
    tags: [
      'Flutter',
      'Node.js',
      'TypeScript',
      'Prisma',
      'GraphQL',
      'Docker',
      'SCSS',
      'Python',
    ],
  },
  {
    title: 'Papertrading hub',
    image: papertrade,
    description:
      'Platform to receive latest crypto news and trends aswell as Papertrade those currencies with fake money.',
    href: 'https://github.com/Diimsch/crypto-papertrading-hub',
    tags: ['React', 'Go', 'TypeScript', 'Docker', 'MongoDB'],
  },
];
