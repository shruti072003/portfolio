import React from 'react'
import "./About.css";
import ME from "../../assets/me-about.jpeg";
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='about-me'></img>
          </div>
        </div>

        <div className='about__content'>
          <p>
          Hello, I'm Shruti, a passionate web developer that relishes taking on new challenges and is constantly seeking ways to advance. I'm currently a third-year student at the Technological University of Panama pursuing a degree in Software Engineering. I aspire to a career in which I can make use of my technical and analytical skills to produce stunning software experiences.          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About