import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import aboutImg from '../../assets/aboutImg.png';


const HomeAbout = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className="separation-line"></div>
            <div className="about-section between">
                <div className="container about-container">
                    <div data-aos="fade-up" className="row about-row">
                        <div className="col-md-6 about-left-content">
                            <h1>We Are The Leader In The Architectural</h1>
                            <div className="paragraphStyling">
                                <p>For each project we establish relationships with partners who we know will help us create added value for your project. As well as bringing together the public and private sectors, we make sector-overarching links to gather knowledge and to learn from each other.</p>
                            </div>
                            <div className="exp-years">
                                <h2>20<span>Years Of Experiance</span></h2>
                            </div>
                        </div>
                        <div className="col-md-6 about-right-content">
                            <div className="dots-img">
                                <img src={aboutImg} />
                                <div className="dots"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeAbout;