import React from 'react';
import './Home.css'
import Button from '../../components/button/Button';
import Projects from '../../components/Projects/Projects'


const Home = () => {
    return (
        <>
            <h1>Jonny Jackson</h1>
            <Button text="Contact" to="/contact" />
            <Button text="See all projects" to="/contact" />
            <Button text="Youtube" to="/contact" />
            <Button text="Github" to="/contact" />
            <Button text="PDF Resume" to="/contact" />
            <Button text="About me" to="/contact" />
            <Projects />
        </>
    );
};

export default Home;