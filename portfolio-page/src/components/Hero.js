import React from 'react';
import { withRouter } from 'react-router-dom';
import './Hero.css';

const Hero = ({ history }) => {
    let headline = `Hello! I am Kristen Krofchik \n A Full Stack Software Developer`;
    return (
        <section className='hero'>
            <div className='hero-body'>
                <h1 className='hero-title'>
                {headline}
                </h1>
                <div className='learn-more-btn'>
                    <button onClick={()=> history.push('/about')}>
                        Learn More 
                    </button>
                </div>
            </div>
        </section>
    );
}

export default withRouter(Hero);