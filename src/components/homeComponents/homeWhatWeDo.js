import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import building from '../../assets/building.png';
import sofa from '../../assets/sofa.png';
import sketch from '../../assets/sketch.png';

const HomeWhatWeDo = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="separation-line"></div>
            <div className="whatWeDo-section between">
                <div className="container whatWeDo-container">
                    <div data-aos="fade-up" className="row whatWeDo-row">
                        <div className="col-md-4 building-col">
                            <img src={building} />
                            <h4>Architecture</h4>
                        </div>
                        <div className="col-md-4 sofa-col">
                            <img src={sofa} />
                            <h4>Interior Design</h4>
                        </div>
                        <div className="col-md-4 sketch-col">
                            <img src={sketch} />
                            <h4>Plants</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeWhatWeDo;