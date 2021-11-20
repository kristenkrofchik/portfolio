import React from 'react';
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            {year} © Kristen Krofchik
        </div>
    );
}

export default Footer;