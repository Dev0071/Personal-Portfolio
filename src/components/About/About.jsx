import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
const About = () => {
  return (
    <section id='About'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
          <FaAward />
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <h5>Experience</h5>
              <small>2+ Yearrs of Work</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
