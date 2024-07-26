import React, { useEffect } from 'react';
import './Hero.css';
import myImage from '../assets/images/photo_2024-07-24_12-23-51.jpg';

const Hero = () => {
    useEffect(() => {
        const symbols = document.querySelectorAll('.symbol');
        const symbolData = Array.from(symbols).map(symbol => {
            const randomX = Math.random() * (window.innerWidth - 100); // Adjust for symbol size
            const randomY = Math.random() * (window.innerHeight - 100); // Adjust for symbol size
            const speedX = (Math.random() * 2 - 1) * 2; // Random speed between -2 and 2
            const speedY = (Math.random() * 2 - 1) * 2; // Random speed between -2 and 2
            const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            symbol.style.left = `${randomX}px`;
            symbol.style.top = `${randomY}px`;
            symbol.style.color = randomColor;
            return { element: symbol, speedX, speedY };
        });

        const moveSymbols = () => {
            symbolData.forEach(data => {
                let { element, speedX, speedY } = data;
                let rect = element.getBoundingClientRect();
                let newX = rect.left + speedX;
                let newY = rect.top + speedY;

                // Reverse direction if the symbol hits the edge
                if (newX <= 0 || newX >= window.innerWidth - rect.width) {
                    data.speedX *= -1;
                }
                if (newY <= 0 || newY >= window.innerHeight - rect.height) {
                    data.speedY *= -1;
                }

                element.style.left = `${newX}px`;
                element.style.top = `${newY}px`;
            });
        };

        const intervalId = setInterval(moveSymbols, 30); // Adjust the interval for smooth movement

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
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
        </>
    );
};

export default Hero;
