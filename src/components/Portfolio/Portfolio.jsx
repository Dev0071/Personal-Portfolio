import React from 'react';
import './portfolio.css';
import Img3 from '../../assets/portfolio.png';
import Img4 from '../../assets/Buglens.png';
import Img5 from '../../assets/AutoApply.png';

const Portfolio = () => {
  return (
    <section id="Portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image ">
            <img src={Img4} alt="BugLens" />
          </div>
          <h3>BugLens</h3>
          <p className="portfolio__item-desc">
            AI-powered bug triage and incident attribution platform.
            Integrates with Sentry, Slack, Microsoft Teams, and Jira.
          </p>
          <h4>skills: Claude API, FastAPI, Next.js, OAuth 2.0</h4>
          <div className="portfolio__item-cta">
            <a
              href="https://staging.buglens.co"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Staging
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image ">
            <img src={Img5} alt="AutoApply" />
          </div>
          <h3>AutoApply</h3>
          <p className="portfolio__item-desc">
            AI-powered job application automation system. Finds, filters, and
            applies to jobs through an end-to-end agentic pipeline, from job
            discovery to form submission.
          </p>
          <h4>
            skills: FastAPI, Playwright, Celery, Redis, PostgreSQL, Claude
            API, Next.js
          </h4>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image portfolio__item-placeholder">
            <span className="portfolio__badge">Research / Build</span>
          </div>
          <h3>AI Code Governance Platform</h3>
          <p className="portfolio__item-desc">
            Detects and attributes AI-generated code in enterprise
            repositories, scoring security and compliance risk relevant to EU
            AI Act compliance.
          </p>
          <h4>skills: Python, XGBoost, SHAP, stylometry-based feature extraction</h4>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img3} alt="Personal Portfolio" />
          </div>

          <h3>Personal Portfolio</h3>
          <h4>skills: ReactJs, Css3</h4>
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
              href="https://john-gacheru-dev0071.vercel.app"
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
