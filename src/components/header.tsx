import { ReactElement } from 'react';
import { Link } from 'gatsby';
interface HeaderProps {
  siteTitle: string;
}

function Header({ siteTitle }: HeaderProps): ReactElement {
  return (
    <header className="bg-9jaGreen  text-white ">
      <div className=" container flex justify-between">
        <Link className="text-white no-underline py-2" to="/">
          <h1 className="m-0 text-lg font-bold font-sans">{siteTitle}</h1>
        </Link>
        <nav>
          <Link to="/players">Players</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
