import React, { useEffect } from 'react';
import Aos from 'aos';

const AboutContact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="separation-line"></div>
            <div className="aboutContact-section between">
                <div className="container aboutContact-container">
                    <div data-aos="fade-up" className="row aboutContact-row">
                        <div className="col-md-12 aboutContact-content">
                            <h2>We are happy to <br/> hear from you</h2>
                            <div className="col-md-12 servicesWorkDemo-button">
                                <a href="./contact" class="subscribe-btn">
                                    <button class="btn btn-theme" type="submit">Contact Us</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutContact;
