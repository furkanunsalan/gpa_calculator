// eslint-disable-next-line no-unused-vars
import React from 'react';
import social_icon from '../assets/pp.jpeg'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-[#313c41] text-white py-4">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div className="social-links">
            <a href="https://github.com/furkanunsalan" target="_blank" rel="noopener noreferrer">
              <img src={social_icon} alt="Social Media" className="w-8 h-8" />
            </a>
          </div>
          <p>&copy; {currentYear} Your Website Name. All rights reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;
