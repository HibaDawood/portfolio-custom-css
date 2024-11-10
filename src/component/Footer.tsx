// components/Footer.jsx

import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; 
import '/src/app/globals.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text">
          © {new Date().getFullYear()} Hiba. All rights reserved.
        </p>
        <div className="socialIcons">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
