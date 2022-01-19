import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import { Link } from 'react-router-dom';
import { Box, Button, Heading, Main} from 'grommet';
import './Homepage.css';

const Homepage = () => {
    return (
        <>
            <NavBar />
            <div className="main-container">
                <Main pad="medium">
                    <Box align="center">
                        <Heading className="home-heading heading" level="1" responsive="true" textAlign="center" color="neutral-1" >Hello!<br></br>I'm Kristen Krofchik,<br></br>a Full Stack Software Developer.</Heading>
                    </Box>
                    <Box align="center" pad="medium">
                        <Link to='/about'>
                            <Button>
                                Learn More
                            </Button>
                        </Link>
                    </Box>
                </Main>
            </div>
            <SiteFooter />
        </>
    )
};

export default Homepage;