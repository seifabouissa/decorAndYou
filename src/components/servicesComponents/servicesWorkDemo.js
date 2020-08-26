import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import decor1 from '../../assets/decor1.jpg';
import decor2 from '../../assets/decor2.jpg';
import decor3 from '../../assets/decor3.jpg';
import decor4 from '../../assets/decor4.jpg';


const ServicesWorkDemo = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const options = {
        margin: 30,
        responsiveClass: true,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        smartSpeed: 200,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 2,
            },
            1000: {
                items: 3,

            }
        },
    };
    return (
        <>

            <div className="separation-line"></div>
            <div className="servicesWorkDemo-section between">
                <div className="container servicesWorkDemo-container">
                    <div data-aos="fade-up" className="row servicesWorkDemo-row">
                        <div className="col-md-12 servicesWorkDemo-content">
                            <OwlCarousel className="owl-theme" {...options}>
                                <div className="team-item">
                                    <div class="team-bg-hover"></div>
                                    <div class="team-text">
                                        <h3>Triangle Concrete House On Lake</h3>
                                        <p>by: Ethan Hunt</p>
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-img">
                                        <img src={decor1} />
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div class="team-bg-hover"></div>
                                    <div class="team-text">
                                        <h3>Rectangular House Near Italy</h3>
                                        <p>by: John Doe</p>
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-img">
                                        <img src={decor2} />
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div class="team-bg-hover"></div>
                                    <div class="team-text">
                                        <h3>Milko Co-Working Building</h3>
                                        <p>by: william hunt</p>
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-img">
                                        <img src={decor3} />
                                    </div>
                                </div>

                                <div className="team-item">
                                    <div class="team-bg-hover"></div>
                                    <div class="team-text">
                                        <h3>Redesign Interior For Villa</h3>
                                        <p>by: fozia nova</p>
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                        </ul>
                                    </div>
                                    <div class="team-img">
                                        <img src={decor4} />
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                        <div className="col-md-12 servicesWorkDemo-button">
                            <Link to="./gallery" class="subscribe-btn">
                                <button class="btn btn-theme" type="submit">View All Projects</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesWorkDemo;
