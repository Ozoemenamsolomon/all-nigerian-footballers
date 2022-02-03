import React from 'react';
import Layout from '../../components/layout';
import PlayerCard from '../../components/PlayerCard';

export type PlayerType = {
  firstName: string;
  lastName: string;
  number: number;
  slug: string;
};
const samplePlayers = [
  {
    firstName: 'Maduka',
    lastName: 'Okoye',
    number: 1,
    slug: 'maduka-okoye-1',
  },
  {
    firstName: 'Francis',
    lastName: 'Uzoho',
    number: 23,
    slug: 'francis-uzoho-23',
  },
];

const teamPositions: {
  title: string;
  players: PlayerType[];
}[] = [
  {
    title: 'Goalkeepers',
    players: [
      {
        firstName: 'Maduka',
        lastName: 'Okoye',
        number: 1,
        slug: 'maduka-okoye-1',
      },
      {
        firstName: 'Francis',
        lastName: 'Uzoho',
        number: 23,
        slug: 'francis-uzoho-23',
      },
      ...Array(1).fill(samplePlayers).flat(),
    ],
  },
  {
    title: 'Defenders',
    players: [...Array(3).fill(samplePlayers).flat()],
  },
  {
    title: 'Midfielders',
    players: [...Array(2).fill(samplePlayers).flat()],
  },
  {
    title: 'Strikers',
    players: [...Array(4).fill(samplePlayers).flat()],
  },
  {
    title: 'Manager',
    players: [...Array(1).fill(samplePlayers).flat()],
  },
];

const Men = () => {
  return (
    <Layout>
      <ul className="grid gap-12">
        {teamPositions.map(({ players, title }) => (
          <li>
            <h2 className="font-bold mb-1 text-2xl">{title}</h2>
            <hr />
            <div className="md:grid md:grid-cols-2 lg:grid-cols-4 mt-4 space-y-4 md:space-y-0 md:gap-4">
              {players.map((player) => (
                <PlayerCard player={player} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Men;
