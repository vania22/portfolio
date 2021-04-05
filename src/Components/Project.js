import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Project = ({ item }) => {
    return (
        <div className='project' key={item.id}>
            <div className='image-data'>
                <img src={item.image} alt='' />
                <div className='hover-items'>
                    <a href={item.githubLink} target='_blank' rel='noreferrer' className='icon-holder'>
                        <FontAwesomeIcon icon={faGithub} className='icon gh' />
                    </a>
                </div>
            </div>
            <h5>{item.title}</h5>
            <p>{item.description}</p>
        </div>
    );
};

export default Project;
