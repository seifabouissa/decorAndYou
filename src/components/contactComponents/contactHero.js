import React from 'react';
import contactHero from '../../assets/contactHero.png';

const ContactHero = () => {
    return (
        <div className="hero-section">
            <div className="container hero-container">
                <div className="row hero-row">
                    <div className="col-md-6 hero-left-content">
                        <h4>Residitonal</h4>
                        <h1>Contact <br /> Us</h1>
                    </div>
                    <div className="col-md-6 hero-right-content">
                        <img className="gImg gImgg" src={contactHero} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHero;
