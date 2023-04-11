import React from "react";
import { motion } from "framer-motion"
import './navbutton.css'

function Navbutton (props){
    return (
        <>
        <motion.button className="navbutton"
        whileTap={{ scale: 0.6 }}>
            {props.navtitle}
            </motion.button>
        </>
    )
}

export default Navbutton;