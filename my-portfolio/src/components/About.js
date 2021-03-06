import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import profile_photo from '../images/profile_photo.JPG'
import { Box, Grid, Heading, Image, Paragraph } from 'grommet';


const About = () => {
    return (
            <>
                <NavBar />
                <Heading level="2" responsive="true" textAlign="left" className="heading" color="neutral-1">About Me</Heading>
                <Grid rows={{ count: 2, size: 'auto' }} gap='medium' responsive="true"> 
                    <Box align="center" justify="center">
                        <Box height="medium" width="medium" align="center">
                            <Image className="profile-image" fit="cover" opacity="strong" src={profile_photo} />
                        </Box>
                    </Box>
                    <Box justify="center" align="center">
                        <Paragraph margin={{ top:'medium' }} color="neutral-1">
                        I am a full stack software developer passionate about using my technical skills to build a better world. After studying development on my own for several years, I recently completed a rigorous 1+ year software engineering coding bootcamp with Springboard, where I designed, built, tested and launched full stack web applications and APIs with JavaScript, Node.js, React, Python, Flask, PSQL and more. 
                        </Paragraph>
                        <Paragraph margin={{ top:'small' }} color="neutral-1">
                        When I am not coding, I run a vintage e-commerce business with my mother, where I have learned how to balance several roles to create a respected brand and a high-quality experience for my customers. Before that, I worked in the restaurant industry for over a decade. In hospitality, clear communication and constant collaboration are everything! I use these invaluable skills to meaningfully contribute to a team from the start. 
                        </Paragraph>
                        <Paragraph margin={{ top:'small', bottom:'large' }} color="neutral-1">
                        I would love to work with you! View my resume <a className="link" href="https://drive.google.com/file/d/1R_lyI_Uh2rnLAnFA6Nx2Rc6QGoXyl7vO/view?usp=sharing">here</a>
                        </Paragraph>
                    </Box>
                </Grid>
                <SiteFooter />
            </>
    )
};

export default About;