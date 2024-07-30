import React from 'react';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-section" data-aos="fade-in">
            <div className="container">
                <h1 className="hero-title" data-aos="fade-up" data-aos-delay="200">Hamza AL-Shammaa</h1>
                <p className="hero-subtitle" data-aos="fade-up" data-aos-delay="400">Energetic back-end developer</p>
                <a href="#about" className="hero-button" data-aos="fade-up" data-aos-delay="600">Learn More</a>
            </div>
        </div>
    );
}

export default Hero;
