import React from 'react';
import './Home.css'
import Button from '../../components/button/Button';

const Home = () => {
    return (
        <>
            <h1>Jonny Jackson</h1>
            <Button text="Contact" to="/contact" />
        </>
    );
};

export default Home;