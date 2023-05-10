import React from "react";
import './navbar.css';
import '../navbutton/navbutton.js';
import BrandName from "../brandname/brandname";
import Navbutton from "../navbutton/navbutton.js";
import {Link } from "react-router-dom";

function Navbar (){

    return (   

<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">

        {/* brand button */}
        <BrandName className="navbar-brand" />
        
        {/* button controls for hamburger menu*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            {/* icon for hamburger menu */}
            <span className="navbar-toggler-icon"></span>

        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid" id='navlinkcont'>

                {/* nav link */}
                <li className="nav-item">
                    <Link to="/"><Navbutton navtitle='Home' id='projectmenulabel'/></Link>
                </li>

                {/* drop down menu */}
                <li className="nav-item dropdown">
                    
                    <button className="nav-link dropdown-toggle projectmenulabel" data-bs-toggle="dropdown" aria-expanded="false">
                    <Navbutton navtitle='Projects'/>
                    </button>

                    {/* items on drop down menu for projects */}
                    <ul className="dropdown-menu">

                        <li><Link to='/gallery' className="galleryButton"><button className="dropdown-item">Gallery</button></Link></li>

                        {/* divider for drop down list */}
                        <li><hr className="dropdown-divider" /></li>

                        <li><a className="dropdown-item" href="https://soft-longma-6bf6bc.netlify.app/" target="_blank" rel="noopener noreferrer">The Spark App</a></li>
                        <li><a className="dropdown-item" href="https://tomking1983.github.io/wayfaring/" target="_blank" rel="noopener noreferrer">Wayfaring App</a></li>
                        <li><a className="dropdown-item" href="https://ncstorey.github.io/Weather-App-WC8/" target="_blank" rel="noopener noreferrer">Weather App</a></li>
                        <li><a className="dropdown-item" href="https://ncstorey.github.io/CalenderApp-WC7/" target="_blank" rel="noopener noreferrer">Work Calendar</a></li>
                        <li><a className="dropdown-item" href="https://github.com/NCStorey/Team-profile-generator-WC12.git" target="_blank" rel="noopener noreferrer">Team Generator</a></li>
                        <li><a className="dropdown-item" href="https://ncstorey.github.io/PasswordGenerator-WC5/" target="_blank" rel="noopener noreferrer">Password Generator</a></li>
                        <li><a className="dropdown-item" href="https://ncstorey.github.io/Code-Quiz---WC6/" target="_blank" rel="noopener noreferrer">Code Quiz</a></li>

                    </ul>
                </li>

                <li className="nav-item">
                    <Link to='aboutme'><Navbutton navtitle='About Me'/></Link>
                </li>

                <li className="nav-item">
                    <Link to='contact'><Navbutton navtitle='Contact'/></Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

)}

export default Navbar;