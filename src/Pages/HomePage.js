import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='HomePage'>
            <header className='hero'>
                <h1 className='hero-text'>
                    Hi, I am
                    <span> Ivan Krupskyi.</span>
                </h1>
                <p className='h-sub-text'>
                    I am a webdeveloper and I specialise in creating websites with technologies such as HTML, CSS,
                    JavaScript, React - and many more
                </p>
                <p className='h-small-text'>Psss. I know some back-end too :)</p>
                <div className='icons'>
                    <Link to='test' className='icon-holder'>
                        <FontAwesomeIcon icon={faFacebook} className='icon fb' />
                    </Link>
                    <Link to='test' className='icon-holder'>
                        <FontAwesomeIcon icon={faGithub} className='icon gh' />
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
