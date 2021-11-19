import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='footer'>
            {year} © Kristen Krofchik
        </div>
    );
}

export default Footer;