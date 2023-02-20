import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg'
import Img2 from '../../assets/portfolio2.jpg'
import Img3 from '../../assets/portfolio3.jpg'
import Img4 from '../../assets/portfolio4.jpg'
import Img5 from '../../assets/portfolio5.png'
import Img6 from '../../assets/portfolio6.jpg'



const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
            <h3>Thesee is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
            <h3>Thesee is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
            <h3>Thesee is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
            <h3>Thesee is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'target='_blank' rel='noreferrer'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'rel='noreferrer'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
            <h3>Thesee is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="" />
          </div>
            <h3>Thesee is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn'>Github</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
