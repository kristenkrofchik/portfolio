import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
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
        </nav>
    );
}

export default Header;