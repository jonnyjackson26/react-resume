import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faLanguage, faMedal, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '../../components/button/Button';

const About = () => {
    return (
        <>
            <Button text="Back Home" to="/" />
            <div className="about-me">
                <h1>About Me</h1>

                <section className="section">
                    <h2><FontAwesomeIcon icon={faBriefcase} /> Work Experience</h2>
                    <div className="card">
                        <h3>Construction Worker</h3>
                        <p className="job-details"><a href="http://www.jurrusplasterandstucco.com/home.html" target="_blank" rel="noopener noreferrer">Jurrus Plaster and Stucco</a> (Summers 2019-2021)</p>
                        <p>Repairing and installing plaster and stucco, installing drywall</p>
                    </div>
                    <div className="card">
                        <h3>Route Manager</h3>
                        <p className="job-details"><a href="https://goaptive.com/" target="_blank" rel="noopener noreferrer">Aptive Pest Control</a> (May 2021 - Aug 2021)</p>
                        <p>Field Sales Representative. Optimized daily pest control routes for field technicians, resulting in timely and effective client service.</p>
                    </div>
                    <div className="card">
                        <h3>Maintenance Team</h3>
                        <p className="job-details"><a href="https://www.spireacademy.com/" target="_blank" rel="noopener noreferrer">Spire Institute and Academy</a> (Nov 2023 - Dec 2023)</p>
                        <p>Basic maintenance at Olympic Training Center. Preparing for large sporting events and banquets and subsequent cleanup.</p>
                    </div>
                    <div className="card">
                        <h3>Summer Camp Counselor</h3>
                        <p className="job-details"><a href="https://www.churchofjesuschrist.org/youth/childrenandyouth/fsy/about/youth?lang=eng" target="_blank" rel="noopener noreferrer">For the Strength of Youth church camp</a> (May 2024 - Aug 2024)</p>
                        <p>Cared for the safety of many groups of youth ages 14-18, led games and activities, and taught them about Jesus Christ.</p>
                    </div>
                </section>

                <section className="section">
                    <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
                    <div className="card">
                        <h3>Kirtland High School</h3>
                        <p>Graduated with High Honors (2021)</p>
                        <p>Graduated with First Honors (4.4 Weighted GPA)</p>
                        <p>Math club, 4 Year Varsity Cross Country Runner, 1 year team captain, 4 Year Varsity Track, Varsity Basketball player, Varsity Tennis</p>
                    </div>
                    <div className="card">
                        <h3>Lakeland Community College</h3>
                        <p>Associates of Science and Associates of Arts (2021)</p>
                        <p>Graduated with First Honors</p>
                        <p>3.5 GPA, Completed during High School</p>
                    </div>
                    <div className="card">
                        <h3>Utah State University</h3>
                        <p>Bachelors in Computer Science (Jan 2023 - Current)</p>
                        <p>3.5 GPA</p>
                    </div>
                </section>

                <section className="section">
                    <h2><FontAwesomeIcon icon={faMedal} /> Skills and Achievements</h2>
                    <div className="card">
                        <p>Fluent in Spanish</p>
                        <p>Eagle Scout (2020)</p>
                        <p>Served a mission for the Church of Jesus Christ of Latter-Day Saints in the Dominican Republic (Nov 2021-Nov 2023)</p>
                        <p>Skilled in Java, Python, C++, and JavaScript</p>
                    </div>
                </section>

                <section className="section">
                    <h2><FontAwesomeIcon icon={faInfoCircle} /> Personal Information</h2>
                    <div className="card">
                        <p>I'm from Kirtland, Ohio</p>
                        <p>I'm the oldest of 3 kids</p>
                        <p>I enjoy photo and video editing</p>
                        <p>I enjoy long-distance running and cycling</p>
                    </div>
                </section>
            </div>
        </>
    );
};

export default About;
