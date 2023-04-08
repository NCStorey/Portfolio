import React from "react";
import { motion } from "framer-motion"
import './navbutton.css'

function Navbutton (props){
    return (
        <>
        <button className="navbutton">{props.navtitle}</button>
        </>
    )
}

export default Navbutton;