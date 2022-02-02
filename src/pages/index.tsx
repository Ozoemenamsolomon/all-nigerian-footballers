import { ReactElement } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

function IndexPage(): ReactElement {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-4xl font-bold font-sans mb-6">Hi people</h1>
      <p className="mb-6">
        Welcome to your new Gatsby site with Typescript {'&'} Tailwind CSS.
      </p>
      <p className="mb-6">Now go build something great.</p>
    </Layout>
  );
}

export default IndexPage;
