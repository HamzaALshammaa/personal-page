import React, { useEffect } from 'react';
import './Hero.css';
import myImage from '../asset/images/photo_2024-07-24_12-23-51.jpg';

const Hero = () => {
    useEffect(() => {
        const symbols = document.querySelectorAll('.symbol');
        symbols.forEach(symbol => {
            const randomX = Math.random() * 2 - 1; // -1 to 1
            const randomY = Math.random() * 2 - 1; // -1 to 1
            symbol.style.setProperty('--randomX', randomX);
            symbol.style.setProperty('--randomY', randomY);
        });
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const symbols = document.querySelectorAll('.symbol');
            const { clientX, clientY } = e;
            symbols.forEach(symbol => {
                const move = symbol.getAttribute('data-speed');
                const x = (window.innerWidth - clientX * move) / 100;
                const y = (window.innerHeight - clientY * move) / 100;
                symbol.style.transform = `translateX(${x}px) translateY(${y}px)`;
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

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
            <div className="symbols">
                <div className="symbol" data-speed="3">{'C++'}</div>
                <div className="symbol" data-speed="4">{'JS'}</div>
                <div className="symbol" data-speed="1">{'Py'}</div>
                <div className="symbol" data-speed="2">{'PHP'}</div>
                <div className="symbol" data-speed="3">{'{}'}</div>
                <div className="symbol" data-speed="4">{';'}</div>
                <div className="symbol" data-speed="1">{'&&'}</div>
                <div className="symbol" data-speed="1">{'Py'}</div>
                <div className="symbol" data-speed="2">{'PHP'}</div>
                <div className="symbol" data-speed="2">{'</>'}</div>
                <div className="symbol" data-speed="2">{'HTML'}</div>
                <div className="symbol" data-speed="4">{'JS'}</div>
                <div className="symbol" data-speed="3">{'{}'}</div>
                <div className="symbol" data-speed="1">{'Py'}</div>
                <div className="symbol" data-speed="2">{'PHP'}</div>
                <div className="symbol" data-speed="1">{'&&'}</div>
                <div className="symbol" data-speed="3">{'C++'}</div>
                <div className="symbol" data-speed="4">{';'}</div>
            </div>
        </section>
    );
};

export default Hero;
