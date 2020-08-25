import React from 'react';
import aboutHero from '../../assets/aboutHero.png';

const AboutHero = () => {
    return (
        <div className="hero-section">
            <div className="container hero-container">
                <div className="row hero-row">
                    <div className="col-md-6 hero-left-content">
                        <h4>Residitonal</h4>
                        <h1>About <br /> our <br /> Agency</h1>
                    </div>
                    <div className="col-md-6 hero-right-content">
                        <img src={aboutHero} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero;
