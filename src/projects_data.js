import project1 from './img/projectImages/bookstore.jpg';
import project2 from './img/projectImages/commerceJS.jpg';
import project3 from './img/projectImages/gatsby_blog.jpg';
import project4 from './img/projectImages/netflix.jpg';
import project5 from './img/projectImages/pizza.jpg';
import project6 from './img/projectImages/reddit.jpg';
import project7 from './img/projectImages/socialmedia.jpg';
import project8 from './img/projectImages/todo.jpg';
import project9 from './img/projectImages/codepen.jpg';
import project10 from './img/projectImages/whatsapp.jpg';
import placeholder from './img/projectImages/port1.jpg';

const projects = [
    {
        id: 1,
        githubLink: 'https://github.com/vania22/bookstore/wiki/How-Bookstore-looks-like-%5E_%5E',
        image: project1,
        title: 'Bookstore (Fullstack)',
        description: "ReactJS, Router, Formik, Bootstrap, Node, Express, MongoDB. Bookstore has it's own admin panel.",
    },
    {
        id: 2,
        githubLink: 'https://github.com/vania22/commercejs-store',
        image: project2,
        title: 'Tiny Commerce.js website',
        description: 'React, Commerce.JS, Stripe, Material UI ',
    },
    {
        id: 3,
        githubLink: 'https://github.com/vania22/gatsby-blog/',
        image: project3,
        title: 'IT Blog',
        description: 'React, Gatsby,  SCSS, Bootstrap',
    },
    {
        id: 4,
        githubLink: 'https://github.com/vania22/instagram-backend',
        image: placeholder,
        title: 'Instagram Back-end',
        description: 'Typescript, Node, Express, GraphQL, PostgreSQL, TypeORM',
    },
    {
        id: 5,
        githubLink: 'https://github.com/vania22/netflix-clone',
        image: project4,
        title: 'Netflix Clone',
        description: 'React, Router, Styled-Components, Firebase',
    },
    {
        id: 6,
        githubLink: 'https://github.com/vania22/react-pizza',
        image: project5,
        title: 'React Pizza',
        description: 'React, Router, Redux (Thunk), Fake JSON Server',
    },
    {
        id: 7,
        githubLink: 'https://github.com/vania22/reddit-clone',
        image: project6,
        title: 'Reddit Clone (Fullstack)',
        description: 'TypeScript, NextJS, Router, TailwindCSS, Apollo, Node, GraphQL, PostgreSQL, TypeORM',
    },
    {
        id: 8,
        githubLink: 'https://github.com/vania22/social-media',
        image: project7,
        title: 'Social Media (Fullstack)',
        description: 'React, Router, Apollo, MaterialUI, Node, GraphQL, MongoDB',
    },
    {
        id: 9,
        githubLink: 'https://github.com/vania22/todo-list-advanced',
        image: project8,
        title: 'Advanced To-Do List',
        description: 'React, Router, SCSS, Fake JSON',
    },
    {
        id: 10,
        githubLink: 'https://github.com/vania22/code-editor',
        image: project9,
        title: 'CodePen Clone',
        description: 'TypeScript, React, Router, Redux',
    },
    {
        id: 11,
        githubLink: 'https://github.com/vania22/whatsapp-clone',
        image: project10,
        title: 'WhatsUp Clone (Real-Time chat)',
        description: 'NextJS, Firebase, MaterialUI, Styled-Components',
    },
];

export default projects;
