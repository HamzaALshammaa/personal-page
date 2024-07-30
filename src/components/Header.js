import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <div className="navbar-brand">
                <a className="navbar-brand" href="#">Hamza AL-Shammaa</a>
            </div>
            <button className="burger-icon" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#education">Education</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;
