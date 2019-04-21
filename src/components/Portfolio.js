import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = (props) => {
    console.log(props);

    return (
        <div>
            <h1>My Work</h1>
            <p>Checkout the stuff I've done: </p>
            <Link to="/portfolio/1">Project One</Link>
            <Link to="/portfolio/2">Project Two</Link>
        </div>
    );
}

export default Portfolio;