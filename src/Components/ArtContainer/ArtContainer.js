import React from 'react';
import GalleryContainer from '../GalleryContainer/GalleryContainer';
import './artContainer.css';

//Images 
import FirstArt from '../../Images/first-art.png';
import SecondArt from '../../Images/second-art.png';
import ThirdArt from '../../Images/third-art.png';
import FourthArt from '../../Images/fourth-art.png';

function ArtContainer(){
    return(
        <div id="art-container-part">
            <div className="art-presentation">
                <h2 className="second-title">TAILORED FOR ARTISTS</h2>
                <p className="paragraph">As an artist centered app, we try our best to not limit the artists on our platform.</p>
            </div>
            <div className="gallery-container">
                <GalleryContainer photo={FirstArt} text={"GALLERY"} />
                <GalleryContainer photo={SecondArt} text={"CUSTOMIZATION"} />
                <GalleryContainer photo={ThirdArt} text={"CHALLENGES"} />
                <GalleryContainer photo={FourthArt} text={"NO COMPLICATED ALGHORITHMS"} />
            </div>
        </div>
    )
}

export default ArtContainer;