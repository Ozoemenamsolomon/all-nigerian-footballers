/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { ReactElement, ReactNode } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Header from './header';
import Footer from './Footer';
// import './layout.css';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps): ReactElement {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="min-h-screen flex flex-col">
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <main className="flex-1 py-4">
        <div className="container min-h-full accent-9jaGreen caret-9jaGreen pb-6">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
