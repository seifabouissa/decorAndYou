import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import decor1 from '../../assets/decor1.jpg';
import decor2 from '../../assets/decor2.jpg';
import decor3 from '../../assets/decor3.jpg';
import decor4 from '../../assets/decor4.jpg';
import decor5 from '../../assets/decor5.jpg';
import decor6 from '../../assets/decor6.jpg';
import decor7 from '../../assets/decor7.jpg';
import decor8 from '../../assets/decor8.jpg';

const GalleryCards = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div className="separation-line"></div>
            <div className="galleryCards-section between">
                <div className="container galleryCards-container">
                    <div data-aos="fade-up" className="row galleryCards-row">
                        <div className="col-md-6 card-container">
                            <div className="singleCard">
                                <div className="cardContent">
                                    <div className="sideOne">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="cardImg">
                                                    <img src={decor1} />
                                                    <h4>Triangle Concrete House On Lake</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sideTwo">
                                        <div className="card">
                                            <div className="card-body text-center mt-5">
                                                <h4>Triangle Concrete House On Lake</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo explicabo commodi architecto, eligendi totam, et dolorem tempore veritatis inventore, sapiente mollitia praesentium enim? Expedita libero porro incidunt necessitatibus tempore nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 card-container">
                            <div className="singleCard">
                                <div className="cardContent">
                                    <div className="sideOne">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="cardImg">
                                                    <img src={decor2} />
                                                    <h4>Rectangular House Near Italy</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sideTwo">
                                        <div className="card">
                                            <div className="card-body text-center mt-5">
                                                <h4>Rectangular House Near Italy</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo explicabo commodi architecto, eligendi totam, et dolorem tempore veritatis inventore, sapiente mollitia praesentium enim? Expedita libero porro incidunt necessitatibus tempore nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 card-container">
                            <div className="singleCard">
                                <div className="cardContent">
                                    <div className="sideOne">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="cardImg">
                                                    <img src={decor3} />
                                                    <h4>Milko Co-Working Building</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sideTwo">
                                        <div className="card">
                                            <div className="card-body text-center mt-5">
                                                <h4>Milko Co-Working Building</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo explicabo commodi architecto, eligendi totam, et dolorem tempore veritatis inventore, sapiente mollitia praesentium enim? Expedita libero porro incidunt necessitatibus tempore nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 card-container">
                            <div className="singleCard">
                                <div className="cardContent">
                                    <div className="sideOne">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="cardImg">
                                                    <img src={decor4} />
                                                    <h4>Redesign Interior For Villa</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sideTwo">
                                        <div className="card">
                                            <div className="card-body text-center mt-5">
                                                <h4>Redesign Interior For Villa</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo explicabo commodi architecto, eligendi totam, et dolorem tempore veritatis inventore, sapiente mollitia praesentium enim? Expedita libero porro incidunt necessitatibus tempore nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 card-container">
                            <div className="singleCard">
                                <div className="cardContent">
                                    <div className="sideOne">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="cardImg">
                                                    <img src={decor5} />
                                                    <h4>Wooden Hozirontal Villa</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sideTwo">
                                        <div className="card">
                                            <div className="card-body text-center mt-5">
                                                <h4>Wooden Hozirontal Villa</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo explicabo commodi architecto, eligendi totam, et dolorem tempore veritatis inventore, sapiente mollitia praesentium enim? Expedita libero porro incidunt necessitatibus tempore nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 card-container">
                            <div className="singleCard">
                                <div className="cardContent">
                                    <div className="sideOne">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="cardImg">
                                                    <img src={decor6} />
                                                    <h4>Small House Near Wroclaw</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sideTwo">
                                        <div className="card">
                                            <div className="card-body text-center mt-5">
                                                <h4>Small House Near Wroclaw</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo explicabo commodi architecto, eligendi totam, et dolorem tempore veritatis inventore, sapiente mollitia praesentium enim? Expedita libero porro incidunt necessitatibus tempore nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 card-container">
                            <div className="singleCard">
                                <div className="cardContent">
                                    <div className="sideOne">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="cardImg">
                                                    <img src={decor7} />
                                                    <h4>The luxury residence in forest</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sideTwo">
                                        <div className="card">
                                            <div className="card-body text-center mt-5">
                                                <h4>The luxury residence in forest</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo explicabo commodi architecto, eligendi totam, et dolorem tempore veritatis inventore, sapiente mollitia praesentium enim? Expedita libero porro incidunt necessitatibus tempore nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 card-container">
                            <div className="singleCard">
                                <div className="cardContent">
                                    <div className="sideOne">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <div className="cardImg">
                                                    <img src={decor8} />
                                                    <h4>Cubic Inter Mesuem In Rome</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sideTwo">
                                        <div className="card">
                                            <div className="card-body text-center mt-5">
                                                <h4>Cubic Inter Mesuem In Rome</h4>
                                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo explicabo commodi architecto, eligendi totam, et dolorem tempore veritatis inventore, sapiente mollitia praesentium enim? Expedita libero porro incidunt necessitatibus tempore nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryCards;