import React from 'react';
import Project from './Project';

function ProjectsContainer({ menuItem }) {
    return (
        <div className='projects'>
            {menuItem.map((item) => {
                return <Project key={item.id} item={item} />;
            })}
        </div>
    );
}

export default ProjectsContainer;
