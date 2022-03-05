import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="container ">
        &copy; {new Date().getFullYear()}, Built with{' '}
        <a
          target="_blank"
          href="https://www.gatsbyjs.com/"
          className="text-purple-600 underline hover:text-purple-800 active:text-purple-800 font-sans"
        >
          Gatsby
        </a>
      </div>
    </footer>
  );
};

export default Footer;
