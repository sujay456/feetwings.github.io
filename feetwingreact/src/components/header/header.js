import React from 'react';
import logo from '../../assets/images/feetwingslogo.png';
import './header.scss';
const Header =(props)=>{

    return (
        <div className="header-logo">
            <a href="/">
                <img src={logo} alt="logo" height="45px"></img>
            </a>
        </div>
    );
}

export default Header;