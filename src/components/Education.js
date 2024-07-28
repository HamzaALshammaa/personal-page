import React from 'react';
import './Education.css';
import { FaGraduationCap, FaChalkboardTeacher, FaDatabase, FaLanguage } from 'react-icons/fa';

function Education() {
    return (
        <div className="education-section">
            <div className="education-container">
                <h2>Education & Certifications</h2>
                <ul className="timeline">
                    <li className="timeline-item" style={{ animationDelay: '0.2s' }}>
                        <h3><FaGraduationCap className="icon" /> Bachelor of Science in Software Engineering</h3>
                        <p className="institution">Mosul University, Mosul, Iraq</p>
                        <p className="dates">Dec 2019 - May 2024</p>
                    </li>
                    <li className="timeline-item" style={{ animationDelay: '0.4s' }}>
                        <h3><FaChalkboardTeacher className="icon" /> TOT (Trainer Of Trainers)</h3>
                        <p className="institution">Doinc For BD & Consulting, Mosul</p>
                        <p className="dates">Dec 2017 - Jul 2019</p>
                    </li>
                    <li className="timeline-item" style={{ animationDelay: '0.6s' }}>
                        <h3><FaDatabase className="icon" /> Database Engineering Certification</h3>
                        <p className="institution">META</p>
                        <p className="dates">Dec 2023 - Mar 2024</p>
                    </li>
                    <li className="timeline-item" style={{ animationDelay: '0.8s' }}>
                        <h3><FaLanguage className="icon" /> EF SET English Certificate (C1 Advanced)</h3>
                        <p className="score">Score: 61/100</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Education;
