import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className='ImageSection'>
            <div className='img'>
                <img src={about} alt='' />
            </div>
            <div className='about-info'>
                <h4>
                    I am<span> Ivan Krupskyi</span>
                </h4>
                <p className='about-text'>
                    At the current period of time, I am actively studying web development field - especially JavaScript
                    and ReactJs, Node and Express. I am practicing every day on my own local projects and mastering new
                    skills.
                    <br /> I am open to any web-development opportunities.
                </p>
                <div className='about-details'>
                    <div className='left-section'>
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                    </div>
                    <div className='right-section'>
                        <p>: Ivan Krupskyi</p>
                        <p>: 22</p>
                        <p>: Ukrainian</p>
                        <p>: English, Ukrainian</p>
                        <p>: 36 Dunelm Grove, Norwood, London, UK. SE27 9JZ</p>
                    </div>
                </div>
                <a
                    href='https://drive.google.com/file/d/18UkycGc7reguwe8GTFQ1yceoX6I_0V0E/view?usp=sharing'
                    target='_blank'
                    rel='noreferrer'
                >
                    <button className='btn'>Download Cv</button>
                </a>
            </div>
        </div>
    );
}

export default ImageSection;
