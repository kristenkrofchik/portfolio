import React from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import { Heading } from 'grommet';

const Connect = () => {
    return (
        <>
            <NavBar />
            <Heading level="2" responsive="true" textAlign="left">Connect</Heading>
            <SiteFooter />
        </>
    )
};

export default Connect;