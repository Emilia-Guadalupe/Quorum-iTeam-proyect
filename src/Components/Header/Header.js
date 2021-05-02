import React from 'react';
import './header-styles.css';

//Images
import MainLogo from '../../Images/logo-full 1.png';
import GooglePlay from '../../Images/image 1.png';
import AppStore from '../../Images/image 2.png';
import Cellphone from '../../Images/preview 1phone.png';

function Header(){
    return(
        <div id="main-container">
            <div className="elements-container">
                <div className="logo-and-name">
                    <img className="main-logo-style"  src={MainLogo} alt="main logo" />
                    <h1 className="main-title">THE SOCIAL MEDIA APP TO KICKSTART YOUR ART JOURNEY</h1>
                </div>
                <div className="store-links">
                    <img className="appStore-link" src={GooglePlay} alt="Google Play link" />
                    <img className="appStore-link" src={AppStore} alt="App Store link" />
                </div>
            </div>
            <div className="elements-container">
                <img className="cellphone-photo" src={Cellphone} alt="Cellphone" />
            </div>
        </div>
    )
}

export default Header; 

/*
<div className="first-elements-container">
                <img className="main-logo-style"  src={MainLogo} alt="main logo" />
                <h1 className="main-title">THE SOCIAL MEDIA APP TO KICKSTART YOUR ART JOURNEY</h1>
                <div className="stores-container">
                    <img className="appStore-link" src={GooglePlay} alt="Google Play link" />
                    <img className="appStore-link" src={AppStore} alt="App Store link" />
                </div>
            </div>
            <div className="second-elements-container">
                <img className="cellphone-photo" src={Cellphone} alt="Cellphone" />
            </div>
    
*/ 