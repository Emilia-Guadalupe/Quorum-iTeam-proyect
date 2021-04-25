import React from 'react';
import './footerStyles.css';

//Images
import Twitter from '../../Images/Vector.png';
import Instagram from '../../Images/Ig-logo.png';

function Footer(){
    return(
        <footer>
            <div>
                <img className="ig-logo" src={Instagram} alt="Instagram Logo" />
                <img className="tw-logo" src={Twitter} alt="Twitter Logo" />
            </div> 
            <div>
                <p className="copy">@Copyrigth 2021. Artfol Ltd. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;