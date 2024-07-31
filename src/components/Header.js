import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    return (
        <header>
            <div className="navbar-brand"><a href='#'>Hamza AL-Shammaa</a></div>
            <div className="burger-icon" onClick={toggleNav}>
                ☰
            </div>
            <nav className={`nav-links ${navOpen ? 'open' : ''}`}>
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
