import React from 'react';
import './About.css';
import ME from '../../assets/john.jpg';
import { FaAward, FaGraduationCap } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years in QA & Software Engineering</small>
            </article>

            <article className="about__card">
              <FaGraduationCap className="about__icon" />
              <h5>Education</h5>
              <small>M.S. Computer Science, U of L (2026)</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Building</h5>
              <small>BugLens, AutoApply & AI Tooling</small>
            </article>
          </div>

          <p>
            I'm a QA Automation Engineer and full-stack developer with 3+ years
            of experience spanning QA automation, full-stack development, and
            AI-assisted software engineering.
            <br /> I'm currently pursuing an M.S. in Computer Science at the
            University of Louisville (expected 2026), with thesis research on
            tamper-evident forensic logging and causal attribution for
            auditable AI decision systems.
            <br /> Right now I'm building BugLens, an AI-powered bug triage and
            incident attribution platform, alongside other AI-driven tooling.
            Feel free to reach out if you'd like to collaborate or chat about
            QA, AI, or software engineering!
          </p>

          <a href="#Contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
