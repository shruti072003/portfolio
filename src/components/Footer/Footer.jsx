import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <footer id='footer'>
      <a href='#' className='footer__logo'>Shruti Tewaney</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__copyright'>
        <small>&copy; Shruti Tewaney. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer