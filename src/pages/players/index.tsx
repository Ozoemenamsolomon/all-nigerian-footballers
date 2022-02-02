import { Link } from 'gatsby';
import React from 'react';
import Layout from '../../components/layout';

const Players = () => {
  return (
    <Layout>
      <h1>Hello from players page</h1>
      <p>Great things are on the way</p>
      <ul>
        <li>
          <Link className="styled-link" to="/players/men">
            Men
          </Link>
        </li>
        <li>
          <Link className="styled-link" to="/players/women">
            Women
          </Link>
        </li>
        <li>
          <Link className=" styled-link" to="/players/u-17">
            Under 17
          </Link>
        </li>
        <li>
          <Link className=" styled-link" to="/players/legends">
            Hall of fame
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Players;
