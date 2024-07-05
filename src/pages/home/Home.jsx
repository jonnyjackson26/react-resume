import React from 'react';
import './Home.css'
import Button from '../../components/button/Button';
import Projects from '../../components/Projects/Projects'


const Home = () => {
    return (
        <>
            <h1>Jonny Jackson</h1>
            <Button text="Contact" to="/contact" />
            <Projects />
        </>
    );
};

export default Home;