import React from 'react';
import servicesHero from '../../assets/servicesHero.png';

const AboutHero = () => {
    return (
        <div className="hero-section">
            <div className="container hero-container">
                <div className="row hero-row">
                    <div className="col-md-6 hero-left-content">
                        <h4>Residitonal</h4>
                        <h1>Our<br /> Astonishing <br /> Services</h1>
                    </div>
                    <div className="col-md-6 hero-right-content">
                        <img src={servicesHero} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHero;
