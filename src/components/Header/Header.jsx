import React from 'react';
import './header.css';
import Cta from './Cta';
import Me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>John Gacheru</h1>
        <h5 className="text-light">
          A Front-end Developer with a degree in Computer Science from Kirinyaga
          University in Kenya.
        </h5>
        <Cta />
        <HeaderSocials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
