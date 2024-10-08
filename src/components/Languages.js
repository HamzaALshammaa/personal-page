import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faPython, faPhp, faJsSquare, faHtml5, faCss3Alt, faLaravel } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import './Languages.css';

const languages = [
    {
        name: 'HTML5',
        description: 'The standard markup language for documents designed to be displayed in a web browser.',
        icon: faHtml5,
        link: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5'
    },
    {
        name: 'CSS3',
        description: 'A style sheet language used for describing the presentation of a document written in HTML or XML.',
        icon: faCss3Alt,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
        name: 'JavaScript',
        description: 'A versatile programming language primarily used for web development.',
        icon: faJsSquare,
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
        name: 'Node.js',
        description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
        icon: faNodeJs,
        link: 'https://nodejs.org/'
    },
    {
        name: 'React',
        description: 'A JavaScript library for building user interfaces.',
        icon: faReact,
        link: 'https://reactjs.org/'
    },
    {
        name: 'Python',
        description: 'A programming language that lets you work quickly and integrate systems more effectively.',
        icon: faPython,
        link: 'https://www.python.org/'
    },
    {
        name: 'PHP',
        description: 'A popular general-purpose scripting language that is especially suited to web development.',
        icon: faPhp,
        link: 'https://www.php.net/'
    },
    {
        name: 'Laravel',
        description: 'A PHP framework for web artisans.',
        icon: faLaravel,
        link: 'https://laravel.com/'
    },
    {
        name: 'MySQL',
        description: 'A popular open-source relational database management system.',
        icon: faDatabase,
        link: 'https://www.mysql.com/'
    },
    {
        name: 'PostgreSQL',
        description: 'An advanced, open-source relational database system.',
        icon: faDatabase,
        link: 'https://www.postgresql.org/'
    },
];

const Languages = () => (
    <div className="languages">
        <div className="container">
            <h2>Languages & Frameworks</h2>
            <div className="cards-list">
                {languages.map((language, index) => (
                    <div className="card" key={index}>
                        <div className="card_image">
                            <FontAwesomeIcon icon={language.icon} size="4x" />
                        </div>
                        <div className="card_body">
                            <h3 className="card_title">{language.name}</h3>
                            <p className="card_text">{language.description}</p>
                            <a href={language.link} className="card_link" target="_blank" rel="noopener noreferrer">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default Languages;
