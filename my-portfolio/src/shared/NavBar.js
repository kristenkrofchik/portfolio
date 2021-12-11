import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Header} from 'grommet';

const NavBar = () => {
    return (
        <Header pad="medium">
            <Box direction="row" align="center" gap="small">
                <div className='logo'>
                        <Link to='/'>Kristen Krofchik</Link>
                </div>
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
            </Box>
        </Header>
    );
};

export default NavBar;