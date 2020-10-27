import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../creative-agency-resources/images/logos/logo.png';
import './Nav.css';

const Nav = () => {

    const handleCategories = () => {
        //apply css for active page
        var categoryLink = document.querySelector('.nav_Ul_container');
        var nav_link = categoryLink.getElementsByClassName("nav-link");

        for (var i = 0; i < 4; i++) {
            nav_link[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });

        }
    }
    return (
       <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link className="navbar-brand" to='/'>
                    <img className='img-fluid logo' src={logo} alt="home"/>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse nav_Ul_container" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li>
                            <Link onClick={handleCategories} className="nav-link" to='#'>Our Portfolio</Link>
                        </li>
                        <li>
                            <Link onClick={handleCategories} className="nav-link" to='#'>Our Team</Link>
                        </li>
                        <li>
                            <Link onClick={handleCategories} className="nav-link" to='#'>Contact Us</Link>
                        </li>
                        <li>
                            <Link onClick={handleCategories} className="btn_brand" to='#'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
       </div>
    );
};

export default Nav;