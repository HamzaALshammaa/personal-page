import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Languages from './components/Languages';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Symbols from './components/Symbols';
import './App.css';
import './components/background.css';
// add subtle animation to all the sections in the code
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Symbols />
      <section className="main">
        <section className="about-section" id="about">
          <div className="container">
            <About />
          </div>
        </section>
        <section className="languages-section" id="languages">
          <div className="container">
            <Languages />
          </div>
        </section>
        <section className="education-section" id="education">
          <div className="container">
            <Education />
          </div>
        </section>
        <section className="experience-section" id="experience">
          <div className="container">
            <Experience />
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
