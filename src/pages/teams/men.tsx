import { Link } from 'gatsby';
import React from 'react';

const teamPositions = [
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
    ],
  },
  {
    title: 'Defenders',
    players: [],
  },
  {
    title: 'Midfielders',
    players: [],
  },
  {
    title: 'Strikers',
    players: [],
  },
  {
    title: 'Manager',
    players: [],
  },
];

const Men = () => {
  return (
    <div>
      <ul className="">
        {teamPositions.map(({ players, title }) => (
          <li>
            <h2>{title}</h2>
            <hr />
            <div className="grid grid-cols-4">
              {players.map((player) => (
                <div>
                  <Link to={`/player/${player.slug}`}>
                    <img src="" alt="" />
                    <h3>
                      {player.firstName}
                      <br />
                      {player.lastName}
                    </h3>
                  </Link>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Men;
