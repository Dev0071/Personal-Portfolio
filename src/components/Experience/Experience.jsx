import React from 'react';
import './experience.css';
import { BsBriefcaseFill } from 'react-icons/bs';

const Experience = () => {
  return (
    <section id="Experience">
      <h5>My Journey</h5>
      <h2>Work Experience</h2>

      <div className="container experience__container">
        <article className="experience__item">
          <div className="experience__item-header">
            <BsBriefcaseFill className="experience__icon" />
            <div>
              <h3>QA Lead & Scrum Master</h3>
              <h4>Griffin Global Technologies · 2024 – 2025</h4>
            </div>
          </div>
          <ul className="experience__list">
            <li>Led a team of 2 QA engineers and 5 developers</li>
            <li>
              Owned QA strategy and quality standards for financial
              applications (Howard Capital Management)
            </li>
            <li>
              Led automation work using Selenium, Playwright, and Cypress
            </li>
            <li>
              Certified Scrum Master (CSM); ran sprint planning,
              retrospectives, and daily standups
            </li>
          </ul>
        </article>

        <article className="experience__item">
          <div className="experience__item-header">
            <BsBriefcaseFill className="experience__icon" />
            <div>
              <h3>QA Engineer</h3>
              <h4>The Jitu · 2022 – 2024</h4>
            </div>
          </div>
          <ul className="experience__list">
            <li>
              Built automated test suites using Selenium, Cucumber/BDD, and C#
            </li>
            <li>Worked across web and API testing with REST integrations</li>
            <li>
              Contributed to CI/CD pipelines using GitHub Actions and Azure
              DevOps
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Experience;
