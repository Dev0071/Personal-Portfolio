import React from 'react';
import './portfolio.css';
import Img1 from '../../assets/cocktail.png';
import Img2 from '../../assets/cryptoApp.png';
import Img3 from '../../assets/portfolio.png';
import Img4 from '../../assets/landingpage.png';

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img2} alt="" />
          </div>
          <h3>CrptoApp</h3>
          <h4>skills: ReactJs, antd-design, chartsJs, linecharts</h4>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Dev0071/cyrpto-app"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://react-cyrpto-app.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img3} alt="" />
          </div>

          <h3>My Portfolio</h3>
          <h4>skills: ReactJs, Css3, React-toastify, EmailJs</h4>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Dev0071/Personal-Portfolio"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://personal-portfolio-dev0071.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img4} alt="" />
          </div>

          <h3>HooBank Landingpage</h3>
          <h4>skills: ReactJs, Css3, Jsx, TailwindCss</h4>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Dev0071/react-payment-landing-page"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://react-payment-landing-page.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>

          <h3>Cockails App</h3>
          <h4>skills: ReactJs, RestAPIs, Css3, React-router</h4>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Dev0071/react-cocktails-app"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://cocktails-app-seven.vercel.app"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
