import React from 'react';
import './Header.css';

const Header = () => (
    <nav className="navbar navbar-expand-lg header">
        <a className="navbar-brand" href="#">Hamza AL-Shammaa</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#experience">Experience</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#education">Education</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Header;
