import React from 'react';
import Preloader from '../components/preloader';
import ContactHero from '../components/contactComponents/contactHero';
import ContactForm from '../components/contactComponents/contactForm';


const Contact = () => {
    return (
        <>
            <Preloader/>
            <ContactHero />
            <ContactForm />
        </>
    )
}

export default Contact;
