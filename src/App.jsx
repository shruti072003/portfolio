import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio"
import Contacts from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
  <>
    <Header />
    <Navbar />
    <About />
    <Skills />
    <Portfolio />
    <Contacts />
    <Footer />
  </>
  )
}

export default App