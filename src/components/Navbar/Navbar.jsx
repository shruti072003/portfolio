import React from 'react';
import "./Navbar.css";
import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {VscTools} from "react-icons/vsc";
import { useState } from 'react';

const Navbar = () => {
  const [activateNav, setActivateNav] = useState("#");
  
  return (
    <nav>
      <a href='#' onClick={() => setActivateNav('#')} className={activateNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActivateNav('#about')} className={activateNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#skills' onClick={() => setActivateNav('#skills')} className={activateNav === "#skills" ? 'active' : ''}><VscTools/></a>
      <a href='#portfolio' onClick={() => setActivateNav('#portfolio')} className={activateNav === "#portfolio" ? 'active' : ''}><BiBook/></a>
      <a href='#contact' onClick={() => setActivateNav('#contact')} className={activateNav === "#contact" ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar