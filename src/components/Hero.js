import React from 'react';
import './Hero.css';
import myImage from '../assets/images/photo_2024-07-24_12-23-51.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>I am Hamza AL-Shammaa</h1>
                <h2>Back-end Developer & Designer</h2>
                <a href="#contact" className="btn">Contact Me</a>
            </div>
            <div className="hero-image">
                <img src={myImage} alt="Hamza AL-Shammaa" />
            </div>
        </section>
    );
};

export default Hero;
