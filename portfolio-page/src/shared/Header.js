import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className='logo'>
                <Link to='/'>Kristen Krofchik</Link>
            </div>
            <ul>
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
        </header>
    );
}

export default Header;