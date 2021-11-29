import React from 'react';
import Layout from '../shared/Layout';
import './About.css';

const About = () => {
    return (
        <Layout>
            <div class="about-me-page">
                <div class="container">
                    <div class="content-section">
                        <div class="title">
                            <h1>About Me</h1>
                        </div>
                        <div class="content">
                            <p>
                            I am a junior software developer eager to learn and grow in the technology industry. I have spent years learning to code in my personal time, and have now completed Springboard’s Software Engineering bootcamp to make software development my professional career. I have experience building websites and web applications with JavaScript, CSS, HTML, Python, Flask, SQL, Node.js, and ReactJS.
                            
                            I am currently the co-founder and operator of a thriving online vintage and antiques resale business. Before that, I spent several years in the vibrant fine dining restaurant industry in Chicago, IL, where I learned to think on my feet, solve problems quickly, and work with a varied team. I am thrilled to work in fields marked by constant learning and new experiences and am happy I can continue to do so as a software developer.

                            I graduated magna cum laude from Northwestern University with a BA in history. I chose to study history because I enjoyed discovering, analyzing, and communicating the various forces that shaped historical events. The analytical skills I gained as a student have served me well as a software developer.
                            </p>
                        </div>
                        <div class="social">
                            <a href="https://github.com/kristenkrofchik">GitHub</a>
                            <a href="https://www.linkedin.com/in/kristenkrofchik/">LinkedIn</a>
                        </div>
                    </div>
                    <div class="image-section">
                        <img src="../images/profile_photo.jpg" alt="Kristen Krofchik, website owner" />
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export default About;
