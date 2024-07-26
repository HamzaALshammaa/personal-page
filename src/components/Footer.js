import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <p>© 2024 Hamza AL-Shammaa. All Rights Reserved.</p>
                <ul className="social-links">
                    <li><a href="https://www.linkedin.com/in/hamza-alshammaa/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/HamzaALshammaa" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="mailto:hamza9ayman@gmail.com">Email</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
