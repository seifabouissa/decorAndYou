import React from 'react';
import Preloader from '../components/preloader';
import Hero from '../components/homeComponents/hero';
import About from '../components/homeComponents/homeAbout';
import WhatWeDo from '../components/homeComponents/homeWhatWeDo';
import OurClients from '../components/homeComponents/homeOurClients';
import Subscribe from '../components/homeComponents/homeSubscribe';

const Home = () => {
    return (
        <>
        <Preloader/>
        <Hero/>
        <About/>
        <WhatWeDo/>
        <OurClients/>
        <Subscribe/>
        </>
    )
}

export default Home;
