import React from 'react';
import './footer.css';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        @GacheruKabiru
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Service">Services</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#Contact">Contacts</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Dev0071" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kabiru-gacheru-493bb7242"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://twitter.com/KabiruGacheru?t=qLnWpopPqMs8U0u68mBFjg&s=09"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kabiru Gacheru. All rights reserverd</small>
      </div>
    </footer>
  );
};

export default Footer;
