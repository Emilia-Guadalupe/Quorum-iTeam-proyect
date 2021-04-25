import React from 'react';
//import './gallery-styles.css';

function GalleryContainer({photo, text}){
    return(
        <>
        <div className="photos-container">
            <div className="photo-and-text">
                <img className="art" src={photo} alt="art" />
                <div className="p-container">
                <p className="art-text">{text}</p>
                </div>
            </div> 
            <div id="hover-container">
            <p id="name">{text}</p>
            <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
        </div>
        </>
    )
}

export default GalleryContainer;