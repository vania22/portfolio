import React from 'react';
import ProjectsContainer from '../Components/ProjectsContainer';
import Tittle from '../Components/Tittle';
import projects from '../projects_data';
// import { useState } from 'react';

//const allCategories = ['All', ...new Set(projects.map((item) => item.category))];

function ProjectsPage() {
    // const [categories, setCategories] = useState(allCategories);
    // const [menuItems, setMenuItems] = useState(projects);

    // const filter = (category) => {
    //     if (category === 'All') {
    //         setMenuItems(projects);
    //         return;
    //     }
    //     const filteredData = projects.filter((item) => {
    //         return item.category === category;
    //     });
    //     setMenuItems(filteredData);
    // };

    return (
        <div className='ProjectsPage'>
            <div className='title'>
                <Tittle title={'Projects'} span={'projects'} />
            </div>
            <div className='projects-data'>
                {/* <Categories filter={filter} categories={categories} /> */}
                <ProjectsContainer menuItem={projects} />
            </div>
        </div>
    );
}

export default ProjectsPage;
