import React from 'react';
import './header.css';
import Cta from './Cta';
import Me from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>
          John Gacheru <span className="header__nickname">"Kabs"</span>
        </h1>
        <h5 className="text-light">
          QA Automation Engineer & Full-Stack Developer
        </h5>
        <p className="header__location">
          Louisville, KY · Open to relocation
        </p>
        <p className="header__tagline">
          Building reliable software systems — from test automation to
          AI-powered tooling.
        </p>
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
