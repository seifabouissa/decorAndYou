import React from 'react';
import hero3 from '../../assets/hero3.png';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="container hero-container">
                <div className="row hero-row">
                    <div className="col-md-6 hero-left-content">
                        <h4>Residitonal</h4>
                        <h1>Redsign <br /> Interior For <br /> Villa</h1>
                        <a href="#">Explore More <i class="far fa-arrow-alt-circle-right"></i></a>
                        <div className="hero-slogan-border"></div>
                    </div>
                    <div className="col-md-6 hero-right-content">
                        <img src={hero3} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
