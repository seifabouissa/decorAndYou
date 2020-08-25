import React from 'react';
import Preloader from '../components/preloader';
import AboutHero from '../components/aboutComponents/aboutHero';
import AboutMvv from '../components/aboutComponents/aboutMvv';
import AboutTeam from '../components/aboutComponents/aboutTeam';
import AboutContact from '../components/aboutComponents/aboutContact';

const About = () => {
    return (
        <>
            <Preloader/>
            <AboutHero />
            <AboutMvv />
            <AboutTeam />
            <AboutContact />
        </>
    )
}

export default About;
