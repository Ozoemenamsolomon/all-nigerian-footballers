import { graphql, Link, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React, { FC } from 'react';
import Layout from '../../components/layout';

interface TeamsProps {
  allImageSharp: { nodes: { gatsbyImageData: IGatsbyImageData }[] };
}

const Teams: FC<PageProps<TeamsProps>> = ({ data }) => {
  const image = data.allImageSharp.nodes[0].gatsbyImageData;

  const teams = [
    {
      title: "Men's team",
      slug: 'men',
      thumbnail: image,
    },
    {
      title: "Women's team",
      slug: 'women',
      thumbnail: image,
    },
    {
      title: 'Under 17',
      slug: 'u-17',
      thumbnail: image,
    },
    {
      title: 'Legends',
      slug: 'legends',
      thumbnail: image,
    },
  ];

  return (
    <Layout>
      <ul className=" py-4 space-y-8 md:space-y-0 md:gap-8 md:grid md:grid-cols-2">
        {teams.map(({ slug, title, thumbnail }) => (
          <li className="group flex aspect-video md:aspect-[2.2] rounded-lg overflow-hidden bg-9jaGreen/10 relative hofowi:-translate-y-1 hofowi:shadow-[0px_33px_15px_-29px_rgba(0,0,0,0.3)] transition duration-500">
            <GatsbyImage
              className="absolute rounded-lg -z-10 inset-0 transition-transform ease-out duration-1000 group-hover:scale-105 group-focus-within:scale-110"
              image={thumbnail}
              alt={'undefined'}
            ></GatsbyImage>
            <Link
              className="flex items-end justify-end text-white hocus:underline hocus:decoration-white w-full p-2 rounded-lg"
              to={`/teams/${'men'}`}
            >
              <p className="text-right font-bold text-2xl relative before:bg-black before:-z-10 before:opacity-50 before:blur-md before:absolute before:w-full before:h-full">
                {title} <span className="">&#8594;</span>
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Teams;

export const query = graphql`
  {
    allImageSharp {
      nodes {
        gatsbyImageData(layout: FULL_WIDTH, sizes: "70vw", placeholder: BLURRED)
      }
    }
  }
`;
