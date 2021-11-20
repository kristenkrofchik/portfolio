import React from 'react';
import { withRouter } from 'react-router-dom';
import './Hero.css';

const Hero = ({ history }) => {
    return (
        <section className='hero'>
            <div className='hero-body'>
                <h1 className='hero-title'>
                Hello! I am Kristen Krofchik, a full stack software developer.
                </h1>
                <div className='learn-more-btn'>
                    <button onClick={()=> history.push('/about')}>
                        LEARN MORE 
                    </button>
                </div>
            </div>
        </section>
    );
}

export default withRouter(Hero);