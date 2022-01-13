import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import profile_photo from '../images/profile_photo.JPG'
import { Anchor, Box, Grid, Heading, Image, Paragraph } from 'grommet';

const About = () => {
    return (
        <>
            <NavBar />
            <Heading level="2" responsive="true" textAlign="left" className="heading" color="neutral-1">About Me</Heading>
            <Grid columns={{ count: 2, size: 'auto' }} gap='medium'>
                <Box>
                    <Paragraph margin={{ top:'large', left: 'large' }} color="neutral-1">
                    I am a software developer eager to learn and grow in the technology industry. I have spent years learning to code in my personal time, and have now completed the Springboard Software Engineering bootcamp to make software development my professional career. I have experience building full stack websites and web applications with JavaScript, React, Node.js, Python, Flask, SQL, and more.
                    </Paragraph>
                    <Paragraph margin={{ top:'small', left: 'large' }} color="neutral-1">
                    I am the co-founder and operator of a thriving online vintage and antiques resale business, Pirate Chicks Vintage. Before that, I spent several years in the vibrant fine dining restaurant industry in Chicago, IL, where I learned to think on my feet, solve problems quickly, and work with a varied team. I am thrilled to work in fields marked by constant learning and new experiences and am happy I can continue to do so as a software developer.
                    </Paragraph>
                    <Paragraph margin={{ top:'small', left: 'large' }} color="neutral-1">
                    I graduated magna cum laude and Phi Beta Kappa from Northwestern University with a BA in history. I chose to study history because I enjoyed discovering, analyzing, and communicating the various forces that shaped historical events. The analytical skills I gained as a student have served me well as a software developer.
                    </Paragraph>
                    <Paragraph>
                    View my resume <a href="https://drive.google.com/file/d/1kJPcjDxJTT5eKYt4f7RecqjvBZQQt3pS/view?usp=sharing">here</a>
                    </Paragraph>
                </Box>
                <Box>
                    <Image fit="contain" src={profile_photo} margin={{ top:'large', left: 'medium', right: 'large', bottom:'medium' }}/>
                </Box>
            </Grid>
            <SiteFooter />
        </>
    )
};

export default About;