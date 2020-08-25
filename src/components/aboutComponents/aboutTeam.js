import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import team1 from '../../assets/team1.jpg';
import team2 from '../../assets/team2.jpg';
import team3 from '../../assets/team3.jpg';
import team4 from '../../assets/team4.jpg';
import team5 from '../../assets/team5.jpg';


const AboutTeam = () => {
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
        <div className="aboutTeam-section between">
            <div className="container aboutTeam-container">
                <div data-aos="fade-up" className="row aboutTeam-row">
                    <div className="col-md-12 aboutTeam-carousel">
                        <OwlCarousel className="owl-theme" {...options}>
                            <div className="team-item">
                                <div class="team-bg-hover"></div>
                                <div class="team-text">
                                    <h3>Alexandria</h3>
                                    <p>GRAPHIC DESIGNER</p>
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                                <div class="team-img">
                                    <img src={team1} />
                                </div>
                            </div>

                            <div className="team-item">
                                <div class="team-bg-hover"></div>
                                <div class="team-text">
                                    <h3>Jason Rant</h3>
                                    <p>FOUNDER</p>
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                                <div class="team-img">
                                    <img src={team2} />
                                </div>
                            </div>

                            <div className="team-item">
                                <div class="team-bg-hover"></div>
                                <div class="team-text">
                                    <h3>Soley</h3>
                                    <p>3DS MAX Designer</p>
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                                <div class="team-img">
                                    <img src={team3} />
                                </div>
                            </div>

                            <div className="team-item">
                                <div class="team-bg-hover"></div>
                                <div class="team-text">
                                    <h3>Ray Novascotia</h3>
                                    <p>CO-FOUNDER</p>
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                                <div class="team-img">
                                    <img src={team4} />
                                </div>
                            </div>

                            <div className="team-item">
                                <div class="team-bg-hover"></div>
                                <div class="team-text">
                                    <h3>Foiza Nova</h3>
                                    <p>MARKETING MANAGER</p>
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                        <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
                                    </ul>
                                </div>
                                <div class="team-img">
                                    <img src={team5} />
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

export default AboutTeam; 