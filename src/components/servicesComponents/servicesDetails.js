import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import interiorDesign from '../../assets/interiorDesign.png';
import exteriorDesign from '../../assets/exteriorDesign.png';
import projectPlanning from '../../assets/projectPlanning.png';
import architecture from '../../assets/architecture.png';

const ServicesDetails = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="separation-line"></div>
            <div className="servicesDetails-section between">
                <div className="container servicesDetails-container">
                    <div data-aos="fade-up" className="row servicesDetails-row">
                        <div className="col-md-6 interior-vol">
                            <img src={interiorDesign} />
                            <h4>Interior Design</h4>
                            <p className="paragraphStyling">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt sequi numquam sint cum repellendus accusantium atque.</p>
                        </div>
                        <div className="col-md-6 exterior-vol">
                            <img src={exteriorDesign} />
                            <h4>Exterior Design</h4>
                            <p className="paragraphStyling">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt sequi numquam sint cum repellendus accusantium atque.</p>
                        </div>
                        <div className="col-md-6 planning-vol mt-5">
                            <img src={projectPlanning} />
                            <h4>Project Planning</h4>
                            <p className="paragraphStyling">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt sequi numquam sint cum repellendus accusantium atque.</p>
                        </div>
                        <div className="col-md-6 architecture-vol mt-5">
                            <img src={architecture} />
                            <h4>Architecture</h4>
                            <p className="paragraphStyling">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deserunt sequi numquam sint cum repellendus accusantium atque.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesDetails;
