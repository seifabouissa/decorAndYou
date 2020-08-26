import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import mission from '../../assets/mission.png';
import vision from '../../assets/eye.png';
import value from '../../assets/diamond.png';

const AboutMvv = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
        <div className="separation-line"></div>
        <div className="aboutMvv-section between">
            <div className="container aboutMvv-container">
                <div data-aos="fade-up" className="row aboutMvv-row">
                    <div className="col-md-4 aboutMvv-content">
                        <img src={mission} />
                        <h4>Mission</h4>
                        <p className="paragraphStyling">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt vel non, eligendi dolore animi itaque alias assumenda error dolorem soluta.</p>
                    </div>
                    <div className="col-md-4 aboutMvv-content">
                        <img src={vision} />
                        <h4>Vision</h4>
                        <p className="paragraphStyling">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt vel non, eligendi dolore animi itaque alias assumenda error dolorem soluta.</p>
                    </div>
                    <div className="col-md-4 aboutMvv-content">
                        <img src={value} />
                        <h4>Value</h4>
                        <p className="paragraphStyling">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt vel non, eligendi dolore animi itaque alias assumenda error dolorem soluta.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutMvv;