import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';

const Education = () => {
    const timelineItems = [
        {
            title: 'Bachelor of Science in Software Engineering',
            institution: 'Mosul University, Mosul, Iraq',
            date: 'Dec 2019 - May 2024',
            icon: 'fa-graduation-cap',
            side: 'left'
        },
        {
            title: 'Database Engineering Certification',
            institution: 'META',
            date: 'Dec 2023 - Mar 2024',
            icon: 'fa-database',
            side: 'right'
        },
        {
            title: 'TOT (Trainer Of Trainers)',
            institution: 'Doinc For BD & Consulting, Mosul',
            date: 'May 2023 - Dec 2023',
            icon: 'fa-chalkboard-teacher',
            side: 'left'
        },
        {
            title: 'EF SET English Certificate (C1 Advanced)',
            institution: 'Score: 61/100',
            date: 'Dec 2017 - Jul 2019',
            icon: 'fa-language',
            side: 'right'
        }
    ];

    return (
        <div className="education-section" id="education">
            <div className="container">
                <h2>Education & Certifications</h2>
                <div className="timeline">
                    {timelineItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`timeline-item ${item.side}`}
                            initial={{ opacity: 0, x: item.side === 'left' ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <h3>{item.title}</h3>
                                <span>{item.institution} | {item.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Education;
