import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';

const About = () => {
    return (
        <>
            <NavBar />
            <div class="content">
                            <p>
                            I am a full stack software developer eager to grow in the technology industry. I have spent years learning to code in my personal time, and have now completed Springboard’s Software Engineering bootcamp to make software development my professional career. I have experience building websites and web applications with JavaScript, Python, Flask, SQL, PostgreSQL, Node.js, and ReactJS.
                            </p>
                            <p>
                            I am currently the co-founder and operator of a thriving online vintage and antiques resale business. Before that, I spent several years in the vibrant fine dining restaurant industry in Chicago, IL, where I learned to think on my feet, solve problems quickly, and work with a varied team. I am thrilled to work in fields marked by constant learning and new experiences and am happy I can continue to do so as a software developer.
                            </p>
                            <p>
                            I graduated magna cum laude from Northwestern University with a BA in history. I chose to study history because I enjoyed discovering, analyzing, and communicating the various forces that shaped historical events. The analytical skills I gained as a student have served me well as a software developer.
                            </p>
                        </div>
            <SiteFooter />
        </>
    )
};

export default About;