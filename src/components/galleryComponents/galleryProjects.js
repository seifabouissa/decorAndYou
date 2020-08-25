import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import decor1 from '../../assets/decor1.jpg';
import decor2 from '../../assets/decor2.jpg';
import decor3 from '../../assets/decor3.jpg';
import decor4 from '../../assets/decor4.jpg';
import decor5 from '../../assets/decor5.jpg';
import decor6 from '../../assets/decor6.jpg';
import decor7 from '../../assets/decor7.jpg';
import decor8 from '../../assets/decor8.jpg';
import { motion } from 'framer-motion';


const GalleryProjects = () => {
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
                items: 3,
            },
            1000: {
                items: 3,

            }
        },
    };
    return (
        <>

            <div className="separation-line"></div>
            <div className="galleryProjects-section between">
                <div className="container galleryProjects-container">
                    <div className="row galleryProjects-row">
                        <div className="col-md-12 galleryProjects-content">
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
                                        <img src={decor5} />
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
                                        <img src={decor6} />
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
                                        <img src={decor7} />
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
                                        <img src={decor8} />
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryProjects;


