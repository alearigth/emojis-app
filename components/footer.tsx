import * as React from 'react';
import Layout from './layout';

const Footer = () => {
  return (
    <footer className="border-t border-gray-300 p-10">
      <div className="max-w-5xl mx-auto">
        <p className="text-center">
          Made with{' '}
          <span role="img" aria-label="heart" className="pr-1">
            ❤️
          </span>{' '}
          by{' '}

             Alearigth
        </p>
        <div className="grid md:grid-cols-2 mt-4">
          <a
            href="https://github.com/alearigth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bold text-blue-500 hover:text-blue-600"
          >
            <p>GitHub</p>
          </a>
          <a
            href="https://www.linkedin.com/in/alejandro-mogrovejo-martinez-316686237/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-bold text-blue-500 hover:text-blue-600"
          >
            <p>Linkedin</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;