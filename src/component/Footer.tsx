// components/Footer.jsx

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import "/src/app/globals.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="text" >
          © {new Date().getFullYear()} Hiba. All rights reserved.
        </p>
        <div className="socialIcons" >
          <a
            href="https://github.com/HibaDawood"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon1"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/hiba-m-dawood/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon2"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/chengsong722?igsh=YzljYTk1ODg3Zg=="
            target="_blank"
            rel="noopener noreferrer"
            className="icon icon3"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
