import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Languages from './components/Languages';
import Footer from './components/Footer';
import BackgroundWrapper from './components/BackgroundWrapper';
import Symbols from './components/Symbols';
import './App.css';

function App() {
  return (
    <BackgroundWrapper>
      <Symbols />
      <Header />
      <Hero />
      <About />
      <Education />
      <Languages />
      <Footer />
    </BackgroundWrapper>
  );
}

export default App;
