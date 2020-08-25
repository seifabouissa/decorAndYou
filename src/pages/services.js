import React, {useState} from 'react';
import Preloader from '../components/preloader';
import ServicesHero from '../components/servicesComponents/servicesHero';
import ServicesWorkDemo from '../components/servicesComponents/servicesWorkDemo';
import ServicesDetails from '../components/servicesComponents/servicesDetails';


const Services = () => {
    return (
        <>
        <Preloader/>
        <ServicesHero/>
        <ServicesDetails/>
        <ServicesWorkDemo />
        </>
    )
}

export default Services;
