import { Link } from 'gatsby';
import { FC } from 'react';
import { PlayerType } from '../pages/teams/men';
type PlayerCardProps = {
  player: PlayerType;
};

const PlayerCard: FC<PlayerCardProps> = ({
  player: { firstName, lastName, number, href },
}) => {
  return (
    <div className="group rounded-lg transition hofowi:shadow-2xl shadow-md duration-500 overflow-hidden aspect-[0.9]">
      <Link className="flex flex-col h-full w-full" to={href}>
        <img
          className="w-full flex-1 object-cover transition-transform ease-out duration-1000 group-hover:scale-105 group-focus-within:scale-105"
          src="https://cdn.dribbble.com/users/37585/screenshots/6394786/helm_shot396_4x.png?compress=1&resize=300x225&vertical=top"
          alt=""
        />
        <div className="p-2 flex space-x-2 items-center aspect-[4]">
          <p className="text-9jaGreen/25 font-bold text-2xl">#{number}</p>
          <hr className="h-full w-[1px] bg-9jaGreen" />
          <div>
            <h4>{firstName}</h4>
            <h3
              style={{ WebkitTextStroke: '.7px rgb(0 135 83 / 1)' }}
              className="text-transparent outline font-extrabold tracking-wide uppercase text-2xl stroke-black"
            >
              {lastName}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PlayerCard;
