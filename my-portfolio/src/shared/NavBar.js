import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Nav, Header} from 'grommet';

const NavBar = () => {
    return (
        <Header pad="medium">
            <Box direction="row" align="center" gap="small">
                <div className='logo'>
                        <Link to='/'>Kristen Krofchik</Link>
                </div>
            </Box>
            <Nav direction="row">
                <ul className="header-nav">
                    <li>
                        <Link to='/'>
                            Home
                        </Link> 
                    </li>
                    <li>
                        <Link to='/about'>
                            About
                        </Link> 
                    </li>
                    <li>
                        <Link to='/projects'>
                            Projects
                        </Link> 
                    </li>
                    <li>
                        <Link to='/connect'>
                            Connect
                        </Link> 
                    </li>
                </ul>
            </Nav>
        </Header>
    );
};

export default NavBar;