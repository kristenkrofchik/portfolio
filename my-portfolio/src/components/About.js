import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import AboutText from './AboutText.js';
import AboutImage from './AboutImage.js';
import { Grid } from 'grommet';

const About = () => {
    return (
        <>
            <NavBar />
            <Grid columns={{ count: 2, size: 'auto' }} gap='small'>
                <AboutText />
                <AboutImage />
            </Grid>
            <SiteFooter />
        </>
    )
};

export default About;