import React from 'react';
import logo from '../../assets/images/feetwingslogo.png';
import './header.scss';
import {motion} from 'framer-motion';
const Header =(props)=>{

    const logoVariant={
        hidden:{
            opacity:0,
            scale:0,
            x:50
        },
        visible:
        {
            opacity:1,
            scale:1,
            x:0
        }
    }
    return (
        <motion.div variants={logoVariant} initial="hidden" animate="visible" transition={{type:'spring',duration:0.7,stiffness:80,delay:0.2}} className="header-logo">
            <a href="/">
                <img src={logo} alt="logo" height="45px"></img>
            </a>
        </motion.div>
    );
}

export default Header;