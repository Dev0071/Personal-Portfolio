import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/kabiru-gacheru-493bb7242"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Dev0071" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/KabiruGacheru?t=qLnWpopPqMs8U0u68mBFjg&s=09"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
