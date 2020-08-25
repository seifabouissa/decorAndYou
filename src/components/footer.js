import React from 'react'
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <>
            <div className="separation-line"></div>
            <div className="footer-section between-footer">
                <div className="container footer-container">
                    <div className="row footer-row">
                        <div className="col-md-4 left-footer-content">
                            <div className="footer-social-media">
                                <ul>
                                    <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fab fa-behance"></i></a></li>
                                    <li><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 right-footer-content">
                            <img src={logo} />
                        </div>
                        <div className="col-md-4 copyright-footer-content">
                            <h6>© 2020 Decore & You. All Rights Resevered</h6>
                        </div>
                        <div className="col-md-12 copyright-footer-content mt-5">
                            <h6>© 2020 Decore & You Crafted By <a href="#">Eplango</a></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;