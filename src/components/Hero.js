import React from 'react';
import Typewriter from 'typewriter-effect';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Hamza AL-Shammaa</h1>
                <p className="hero-subtitle">
                    <Typewriter
                        options={{
                            strings: ['Back-end developer', 'Software Engineer', 'Database Engineer'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 50,
                        }}
                    />
                </p>
            </div>
        </section>
    );
};

export default Hero;
