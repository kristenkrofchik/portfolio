import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Box, Nav, Header} from 'grommet';
import profile_photo from '../images/profile_photo.JPG'

const NavBar = () => {
    const src = '../images/profile_photo.JPG';
    return (
        <Header pad="medium">
            <Box direction="row" align="center" justify="left" gap="small">
                <Avatar src={profile_photo} />
            </Box>
            <Nav direction="row">
                <Link to='/'>
                    Home
                </Link> 
                <Link to='/about'>
                    About
                </Link> 
                <Link to='/projects'>
                    Projects
                </Link> 
                <Link to='/connect'>
                    Connect
                </Link> 
            </Nav>
        </Header>
    );
};

export default NavBar;