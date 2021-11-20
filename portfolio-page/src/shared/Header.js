import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
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
        </header>
    );
}

export default Header;