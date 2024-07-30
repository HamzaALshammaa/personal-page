import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            className="about-section"
            id="about"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container">
                <h2>About Me</h2>
                <p>
                    Energetic back-end developer with a Software Engineering degree from Mosul University and a Database Engineering certification from META. Successfully developed a debt-tracking database for Barakat Al-Iraq and organized the Innovation Hub. Proficient in project management and team collaboration, with experience in creating innovative software solutions. Advanced English proficiency (C1) and dedicated to continuous learning and development.
                </p>
            </div>
        </motion.div>
    );
}

export default About;
