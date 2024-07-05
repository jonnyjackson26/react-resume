import React from 'react';
import './Project.css';

const Project = ({ image, name, date, description, links }) => {
    return (
        <div className="project">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{date}</p>
            <p>{description}</p>
            <div className="project-links">
                {links.map((link, index) => (
                    <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
                ))}
            </div>
        </div>
    );
};

export default Project;
