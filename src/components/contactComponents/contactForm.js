import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

const ContactForm = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="separation-line"></div>
            <div className="contactForm-section between">
                <div className="container contactForm-container">
                    <div data-aos="fade-up" className="row contactForm-row">
                        <div className="col-md-12 contactFrom-content">
                            <form>
                                <div className="row contact-wrapper">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name :" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email :" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Phone Number :" />
                                    </div>
                                    <div className="form-group">
                                        <textarea class="form-control" placeholder="Your Message :" />
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" name="btnSubmit" class="btnContact" value="Send Message" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactForm;
