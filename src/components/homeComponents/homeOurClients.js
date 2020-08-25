import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import brand1 from '../../assets/brand11.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4 from '../../assets/brand4.png';
import brand5 from '../../assets/brand5.png';
import brand6 from '../../assets/brand6.png';

const OurClients = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className="separation-line"></div>
            <div className="ourClients-section between">
                <div className="container ourClients-container">
                    <div data-aos="fade-up" className="row ourClients-row">
                        <div className="col-md-2 clients-brands">
                            <img src={brand1} />
                        </div>
                        <div className="col-md-2 clients-brands">
                            <img src={brand2} />
                        </div>
                        <div className="col-md-2 clients-brands">
                            <img src={brand3} />
                        </div>
                        <div className="col-md-2 clients-brands">
                            <img src={brand4} />
                        </div>
                        <div className="col-md-2 clients-brands">
                            <img src={brand5} />
                        </div>
                        <div className="col-md-2 clients-brands">
                            <img src={brand6} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default OurClients;
