import React from 'react';
import Project from '../project/Project';
import './Projects.css';
const projectData = [
    {
        image: 'src/assets/projects-preview/bookofmormonlanguages.png',
        name: 'Read and Annotate the Book of Mormon in every language',
        date: 'May 2024',
        description: 'With Django and React JS, seamlessly translate between languages and any starred verses will appear in every langauge, not just the language they were starred in.',
        links: [
            { label: 'View Online', url: 'https://example.com/project1' },
            { label: 'GitHub', url: 'https://github.com/YOUR_GITHUB/project1' },
            { label: 'YouTube', url: 'https://youtube.com/project1' },
        ],
    },
    {
        image: 'src/assets/projects-preview/restotourswebsite.png',
        name: 'Restoration Tour Group Website',
        date: 'July 2024',
        description: 'Website where clients can learn about tours and register for them, as well as contact the owner.',
        links: [
            { label: 'View Online', url: 'https://restorationtourgroup.com/' },
            { label: 'GitHub', url: 'https://github.com/jonnyjackson26/reactRestoTours' },
        ],
    },
    // Add more projects as needed
];

const Projects = () => {
    return (
        <div className="projects">
            {projectData.map((project, index) => (
                <Project
                    key={index}
                    image={project.image}
                    name={project.name}
                    date={project.date}
                    description={project.description}
                    links={project.links}
                />
            ))}
        </div>
    );
};

export default Projects;
