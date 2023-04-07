import React from "react";
import './navbar.css';
import '../navbutton/navbutton.js';
import Navbutton from "../navbutton/navbutton.js";


function Navbar (){

    return (   

<nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">

        {/* brand button */}
        <a className="navbar-brand" href="#">Nathalie Storey</a>

        {/* button controls for hamburger menu*/}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

            {/* icon for hamburger menu */}
            <span className="navbar-toggler-icon"></span>

        </button>


        <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                {/* nav link */}
                <li className="nav-item">
                    <Navbutton />
                </li>

                {/* drop down menu */}
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                    </a>

                    {/* items on drop down menu for projects */}
                    <ul className="dropdown-menu">

                        <li><a className="dropdown-item" href="#">Gallery</a></li>

                        {/* divider for drop down list */}
                        <li><hr className="dropdown-divider" /></li>

                        <li><a className="dropdown-item" href="#">The Spark App</a></li>
                        <li><a className="dropdown-item" href="#">Wayfaring App</a></li>
                        <li><a className="dropdown-item" href="#">Weather App</a></li>
                        <li><a className="dropdown-item" href="#">Work Calendar</a></li>
                        <li><a className="dropdown-item" href="#">Team Generator</a></li>
                        <li><a className="dropdown-item" href="#">Password Generator</a></li>
                        <li><a className="dropdown-item" href="#">Code Quiz</a></li>

                    </ul>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">About me</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

)}

export default Navbar;