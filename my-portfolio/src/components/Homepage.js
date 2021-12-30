import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import { Box, Button, Heading, Main} from 'grommet';
import './Homepage.css';

const Homepage = () => {
    return (
        <>
            <NavBar />
            <div className="main-container">
                <Main pad="medium">
                    <Heading className="heading" level="1" responsive="true" textAlign="center" color="neutral-1" >Hello! I am Kristen Krofchik,<br></br> a Full Stack Software Developer.</Heading>
                    <Box align="center" pad="medium">
                        <Button label="Learn More" href="/about" />
                    </Box>
                </Main>
            </div>
            <SiteFooter />
        </>
    )
};

export default Homepage;