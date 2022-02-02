import React from 'react';

const Footer = () => {
  return (
    <footer className=" py-4">
      <div className="container ">
        &copy; {new Date().getFullYear()}, Built by{' '}
        <a
          className="text-purple-600 underline hover:text-purple-800 active:text-purple-800 font-sans"
          href="https://solozo.page"
        >
          Solozo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
