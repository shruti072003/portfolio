import React from 'react';
import "./Skills.css";
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
    <h5>What Skills I Have</h5>
    <h2>My Experience</h2>

    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>SASS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>React & React Query</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
        </div>
      </div>

      <div className='experience__backend'>
      <h3>Backend Development</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Express JS</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Oracle</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          {/* <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <h4>Django</h4>
            <small className='text-light'>Intermediate</small>
          </article> */}
        </div>
      </div>
    </div>
    </section>
  )
}

export default Skills