import React from 'react';
import "./Portfolio.css";
import data from '../Portfolio/Portfolio_Info.js';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article key='1' className='portfolio__item'>
          <div className='portfolio__item-image'>
            <iframe height="215" src="https://www.youtube.com/embed/MnRG7I0gwlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>PriceRadar - Web Scrapper</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/shruti072003/price-radar' className='btn' target='_blank'>Github</a>
            <a href='https://price-radar.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className='portfolio__item-image'>
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className='portfolio__item-cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>


    </section>
  )
}

export default Portfolio