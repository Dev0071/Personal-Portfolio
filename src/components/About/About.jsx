import React from 'react';
import './About.css';
import ME from '../../assets/john.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
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
              <small>1+ Years of Work</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>
          </div>

          <p>
            I have been actively developing my skills for the past two years,
            and have constantly seeking new challenges and opportunities to push
            myself further.
            <br /> As a developer, I'm committed to producing high-quality code
            that is well-documented, maintainable, and scalable. I'm always
            looking for ways to optimize my code for better performance, and I
            enjoy collaborating with others to find creative solutions to
            complex problems.
            <br /> Thank you for checking out my portfolio, and feel free to
            reach out if you have any questions or would like to work together
            on a project!
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
