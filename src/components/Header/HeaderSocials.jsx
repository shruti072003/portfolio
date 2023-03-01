import React from 'react';
import {BsLinkedin, BsGithub, BsFillEnvelopeFill} from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/shruti-tewaney-3b5010230/" target="_blank"><BsLinkedin/></a> 
        <a href="https://github.com/shruti072003" target="_blank"><BsGithub/></a>
        <a href="mailto:shruti072003@gmail.com" target="_blank"><BsFillEnvelopeFill/></a>
    </div>
  )
}

export default HeaderSocials