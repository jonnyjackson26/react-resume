import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Project.css';

const Project = ({ image, name, date, description, links, link }) => {
    const getIcon = (label) => {
        if (label.toLowerCase().includes('github')) return faGithub;
        if (label.toLowerCase().includes('youtube')) return faYoutube;
        return faGlobe;
    };

    return (
        <div className="project">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className="project-date">{date}</p>
            <p className="project-description">{description}</p>
            <div className="project-links">
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={getIcon(link.label)} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Project;
