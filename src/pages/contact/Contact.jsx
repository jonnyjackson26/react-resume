import React from 'react';
import './Contact.css'
import Button from '../../components/button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <>
            <Button text="Back Home" to="/" />
            <div className="contact">
                <h1>Contact Me</h1>
                <div className="contact-icons">
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                    <a href="mailto:jrsjackson26@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
                    <a href="tel:+12163336625"><FontAwesomeIcon icon={faPhone} /></a>
                </div>
                <div className="contact-details">
                    <p>Email: <a href="mailto:jrsjackson26@gmail.com">jrsjackson26@gmail.com</a></p>
                    <p>Phone: <a href="tel:+12163336625">(216) 333-6625</a></p>
                </div>
            </div>
        </>
    );
};

export default Contact;
