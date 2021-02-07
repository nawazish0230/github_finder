import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const  Navbar = ({icon, title}) =>  {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarToggler">
                <a class="navbar-brand" href="#"><Link to="/"><i className={icon}></i><span>{title}</span></Link></a>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/search">Search</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                </ul>
            </div>
        </nav>
    )
};

Navbar.defaultProps = {
    title: 'Github Find',
    icon: 'fa fa-github'
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    // icon: PropTypes.string.isRequired
};
export default Navbar;
