import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import { Box, Button, Heading, Main} from 'grommet';
import './Homepage.css';

const Homepage = () => {
    return (
        <>
            <NavBar />
            <Main pad="medium" className="main-image">
                <Heading level="1" responsive="true" textAlign="center">Hello! I am Kristen Krofchik,<br></br> a Full Stack Software Developer.</Heading>
                <Box align="center" pad="medium">
                    <Button label="Learn More" href="/about" />
                </Box>
            </Main>
            <SiteFooter />
        </>
    )
};

export default Homepage;