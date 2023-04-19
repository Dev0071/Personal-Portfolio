import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="Service">
      <h5>What I Offer</h5>
      <h2>Experience</h2>
      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User interface design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User experience design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual design.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prototyping.</p>
            </li>
          </ul>
        </article>
        {/* end of UI/UX Design */}

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Developing responsive and dynamic user interfaces.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing designs from UX/UI designers into code .</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Usefront-end frameworks such as React.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integrating front-end code with backend systems and APIs.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Writing modular and reusable code.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing responsive web design principles .</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>collaboratinf with UX/UI designers & back-end developers.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT*/}

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content optimization.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content distribution.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content analysis.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content management.</p>
            </li>
          </ul>
        </article>
        {/* CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
