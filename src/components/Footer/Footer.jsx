import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
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
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#expirience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#tesimonials">Testiimonials</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
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
        <a href="https://instagram.com " target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kabiru Gacheru. All rights reserverd</small>
      </div>
    </footer>
  );
};

export default Footer;
