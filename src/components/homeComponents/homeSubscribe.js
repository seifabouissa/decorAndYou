import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

const HomeSubscribe = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <>
            <div className="separation-line"></div>
            <div className="subscribe-section between">
                <div className="container subscribe-container">
                    <div data-aos="fade-up" className="row subscribe-row">
                        <div className="col-md-12 subscribe-inner">
                            <div class="subscribe-input">
                                <input type="email" class="form-control" placeholder="Enter your email" />
                                <span class="subscribe-btn">
                                    <button class="btn btn-theme" type="submit">Subscribe</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeSubscribe;
