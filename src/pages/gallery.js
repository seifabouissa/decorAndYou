import React from 'react';
import Preloader from '../components/preloader';
import GalleryHero from '../components/galleryComponents/galleryHero';
import GalleryCards from '../components/galleryComponents/galleryCards';
import AboutContact from '../components/aboutComponents/aboutContact';


const Gallery = () => {
    return (
        <>
            <Preloader/>
            <GalleryHero />
            <GalleryCards />
            <AboutContact />
        </>
    )
}

export default Gallery;
