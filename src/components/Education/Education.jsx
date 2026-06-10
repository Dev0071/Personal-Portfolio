import React from 'react';
import './education.css';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="Education">
      <h5>My Academic Background</h5>
      <h2>Education</h2>

      <div className="container education__container">
        <article className="education__item">
          <FaGraduationCap className="education__icon" />
          <div>
            <h3>M.S. Computer Science</h3>
            <h4>University of Louisville · Expected 2026</h4>
            <p>
              Thesis: Tamper-evident forensic logging and causal attribution
              for auditable AI decision systems.
            </p>
          </div>
        </article>

        <article className="education__item">
          <FaGraduationCap className="education__icon" />
          <div>
            <h3>B.S. Computer Science</h3>
            <h4>Kirinyaga University · Kenya</h4>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Education;
