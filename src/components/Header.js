import React from 'react';
import './Header.css';

const Header = () => (
    <nav className="navbar navbar-expand-lg header" role="navigation">
        <a className="navbar-brand" href="#" role='button'>Hamza AL-Shammaa</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
                {['about', 'experience', 'education', 'skills', 'contact'].map(item => (
                    <li key={item} className="nav-item">
                        <a className="nav-link" href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
);

export default Header;
