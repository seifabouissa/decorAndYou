import React from 'react';
import galleryHero from '../../assets/galleryHero.png';

const GalleryHero = () => {
    return (
        <div className="hero-section">
            <div className="container hero-container">
                <div className="row hero-row">
                    <div className="col-md-6 hero-left-content">
                        <h4>Residitonal</h4>
                        <h1>Our <br /> Gallery</h1>
                    </div>
                    <div className="col-md-6 hero-right-content">
                        <img className="gImg" src={galleryHero} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryHero;
