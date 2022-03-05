import React from 'react';
import Layout from '../../components/layout';
import PlayerCard from '../../components/PlayerCard';

export type PlayerType = {
  firstName: string;
  lastName: string;
  number: number;
  slug: string;
  href: string;
};
const samplePlayers = [
  {
    firstName: 'Solomon Obinna',
    lastName: 'Ozoemenam',
    number: 7,
    slug: 'maduka-okoye-1',
    href: '/player/maduka-okoye-1',
  },
  {
    firstName: 'Francis',
    lastName: 'Uzoho',
    number: 23,
    slug: 'francis-uzoho-23',
    href: '/player/maduka-okoye-1',
  },
  {
    firstName: 'Maduka',
    lastName: 'Okoye',
    number: 1,
    slug: 'maduka-okoye-1',
    href: '/player/maduka-okoye-1',
  },
  {
    firstName: 'William',
    lastName: 'Troost-Ekong',
    number: 5,
    slug: 'william-troost-ekong',
    href: '/player/maduka-okoye-1',
  },
];

// const teamPositions: {
//   title: string;
//   players: PlayerType[];
// }[] = ;

const team = {
  title: "Men's team",
  positions: [
    {
      title: 'Goalkeepers',
      players: [
        {
          firstName: 'Maduka',
          lastName: 'Okoye',
          number: 1,
          slug: 'maduka-okoye-1',
          href: '/player/maduka-okoye-1',
        },
        {
          firstName: 'Francis',
          lastName: 'Uzoho',
          number: 23,
          slug: 'francis-uzoho-23',
          href: '/player/maduka-okoye-1',
        },
        {
          firstName: 'Daniel',
          lastName: 'Akpeyi',
          number: 16,
          slug: 'daniel-akpezi-16',
          href: '/player/maduka-okoye-1',
        },
        {
          firstName: 'John',
          lastName: 'Noble',
          number: 27,
          slug: 'john-noble-27',
          href: '/player/maduka-okoye-1',
        },
      ],
    },
    {
      title: 'Defenders',
      players: [
        {
          firstName: 'William',
          lastName: 'Troost-Ekong',
          number: 5,
          slug: 'william-troost-ekong-5',
          href: '/player/maduka-okoye-1',
        },
        ...Array(2).fill(samplePlayers).flat(),
      ],
    },
    {
      title: 'Midfielders',
      players: [...Array(2).fill(samplePlayers).flat()],
    },
    {
      title: 'Strikers',
      players: [...Array(3).fill(samplePlayers).flat()],
    },
    {
      title: 'Manager',
      players: [...Array(1).fill(samplePlayers).flat()],
    },
  ],
};

const Men = () => {
  return (
    <Layout>
      <h1 className="font-bold mb-8">{team.title}</h1>
      <div className="grid gap-12">
        {team.positions.map(({ players, title }) => (
          <section className="bg-gradient-to-t from-transparent to-gray-100 p-4">
            <h2 className="font-bold mb-1 text-2xl">{title}</h2>
            <hr className="border-1 bg-[#e5e7eb]" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 space-y-4 sm:space-y-0 sm:gap-4">
              {players.map((player) => (
                <PlayerCard player={player} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Men;
