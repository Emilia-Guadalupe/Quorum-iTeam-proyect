import React from 'react';
import './navBar.css';

function NavBar(){
    return(
        <nav className="nav-styles">
            <a href="#main-container" className="option">ARTFOL</a>
            <a href="#questions-container" className="option">FAQ</a>
        </nav>
    )
}

export default NavBar;