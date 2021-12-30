import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Nav, Header} from 'grommet';
import './Navbar.css';

const NavBar = () => {
    return (
        <Header pad="medium" responsive="yes" background="brand" color="neutral-1"> 
            <Box direction="row" align="center" justify="left" gap="small">
                <Link className='link' to='/'>
                    Home
                </Link> 
            </Box>
            <Nav direction="row">
                <Link className='link' to='/about'>
                    About
                </Link> 
                <Link className='link' to='/projects'>
                    Projects
                </Link> 
                <Link className='link' to='/connect'>
                    Connect
                </Link> 
            </Nav>
        </Header>
    );
};

export default NavBar;