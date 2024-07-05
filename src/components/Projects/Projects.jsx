import React from 'react';
import Project from '../project/Project';
import 'Projects.css';
const projectData = [
    {
        image: 'image_url_1',
        name: 'Read and Annotate the Book of Mormon in every language',
        date: 'May 2024',
        description: 'With Django and React JS, I created a website to read the Book of Mormon and to seamlessly translate the language. Also, any starred verses will appear in every langauge, not just the language they were starred in.',
        links: [
            { label: 'View Online', url: 'https://example.com/project1' },
            { label: 'GitHub', url: 'https://github.com/YOUR_GITHUB/project1' },
            { label: 'YouTube', url: 'https://youtube.com/project1' },
        ],
    },
    {
        image: 'image_url_2',
        name: 'Project 2',
        date: 'February 2023',
        description: 'Short description of Project 2.',
        links: [
            { label: 'View Online', url: 'https://example.com/project2' },
            { label: 'GitHub', url: 'https://github.com/YOUR_GITHUB/project2' },
            { label: 'YouTube', url: 'https://youtube.com/project2' },
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
