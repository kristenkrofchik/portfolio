import React, { useState } from 'react';
import NavBar from '../shared/NavBar';
import SiteFooter from '../shared/SiteFooter';
import { Box, Button, Form, FormField, Heading, TextArea, TextInput } from 'grommet';

const defaultValue = {
    name: '',
    email: '',
    message: '',
};

const Connect = () => {
    return (
        <>
            <NavBar />
            <Heading level="2" responsive="true" textAlign="left" className="heading">Connect</Heading>
            <SiteFooter />
        </>
    )
};

export default Connect;