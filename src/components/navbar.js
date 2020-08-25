import React, { useRef, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import gsap from 'gsap';


const Navbar = props => {
    const { menuState, setMenuState } = props;
    let navbarMenu = useRef(null);
    let navbarMenuOverlay = useRef(null);
    let menuLayer = useRef(null);
    let menuTimeline = useRef(null);

    useEffect(() => {
        menuTimeline.current = gsap.timeline({ paused: true });
        menuTimeline.current.fromTo([navbarMenuOverlay, menuLayer, navbarMenu], {
            duration: 0,
            x: "100%"
        }, {
            duration: 0.75,
            x: "0%",
            ease: "Power3.inOut",
            stagger: {
                amount: 0.5
            }
        });
    }, []);

    useEffect(() => {
        menuState ? menuTimeline.current.play() : menuTimeline.current.reverse()
    }, [menuState]);

    useEffect(() => {
        const { history } = props;
        history.listen(() => setMenuState(false));
    });
    return (
        <div className="container">
            <div className="navbar-overlay" ref={el => (navbarMenuOverlay = el)} onClick={() => setMenuState(false)}>
                <div className="nav-wrapper">
                    <div className="menu-layer" ref={el => (menuLayer = el)}></div>
                    <nav className="navbar-menu" ref={el => (navbarMenu = el)}>
                        <div className="navbar-top">
                            <div className="links-wrapper">
                                <Link className="navbar-link" to="/">Home</Link>
                                <Link className="navbar-link" to="/about">About</Link>
                                <Link className="navbar-link" to="/services">Services</Link>
                                <Link className="navbar-link" to="/gallery">Gallery</Link>
                                <Link className="navbar-link" to="/contact">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar);


/*
<div className="navbar-bottom">
                            <ul className="info-links">
                                <li className="link-item">
                                    <div className="link-title">Email</div>
                                    <a href="#">info@decore&you.com</a>
                                </li>
                                <li className="link-item">
                                    <div className="link-title">Find Us</div>
                                    <span>57, Arch Road</span>
                                    <span>Middleton</span>
                                </li>
                                <li className="link-item">
                                    <div className="link-title">Follow Us</div>
                                    <div className="social-media-links">
                                        <a href="#" className="social-link">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="social-link">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="social-link">
                                            <i className="fab fa-google"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
*/
