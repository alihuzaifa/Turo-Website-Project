import React, { useRef } from "react";
import Slider from "react-slick";
import first from "../images/Second-slider/first.jpg";
import second from "../images/Second-slider/second.jpg";
import third from "../images/Second-slider/third.jpg";
import fourth from "../images/Second-slider/fourth.jpg";
import fifth from "../images/Second-slider/fifth.jpg";
import sixth from "../images/Second-slider/six.jpg";


export default function PlaceFinderSlider() {

    const customeSlider = useRef();

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const previousBtn = () => {
        customeSlider.current.slickPrev()
    }
    const nextBtn = () => {
        customeSlider.current.slickNext()
    }
    return (
        <div className="body">
            <div className="container">
                <div className="row">
                    <div className="col my-2 text-end">
                        <svg width="22px" height="22px" onClick={previousBtn} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1o6k71p arrow" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z" fill="#121214" /></svg>
                        <svg width="22px" height="22px" onClick={nextBtn} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1grs31x arrow" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z" fill="#121214" /></svg>
                    </div>
                </div>
            </div>
            {/* <h2> Multiple items </h2> */}
            <Slider ref={customeSlider} {...settings2}>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <img src={first} alt="car" className="second-slider-image" />
                            </div>
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <h2 className="second-slider-text">Find the perfect car <span className="change-design">to</span></h2>
                                <h2 className="second-slider-text change-design">conquer the great outdoors</h2>
                                <p className="second-slick-slider-text my-1">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                                <button className="second-slider-btns">Browse car</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <img src={second} alt="car" className="second-slider-image" />
                            </div>
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <h2 className="second-slider-text">Find the perfect car <span className="change-design">to</span></h2>
                                <h2 className="second-slider-text change-design">unwind for the weekend</h2>
                                <p className="second-slick-slider-text my-1">From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p>
                                <button className="second-slider-btns">Browse car</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <img src={third} alt="car" className="second-slider-image" />
                            </div>
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <h2 className="second-slider-text my-1">Find the perfect car <span className="change-design">to</span></h2>
                                <h2 className="second-slider-text change-design">upgrade your vacation plans</h2>
                                <p className="second-slick-slider-text my-1">Skip the rental car counter and find the perfect car to complement your vacation vibe.</p>
                                <button className="second-slider-btns">Browse car</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <img src={fourth} alt="car" className="second-slider-image" />
                            </div>
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <h2 className="second-slider-text">Find the perfect car <span className="change-design">for</span></h2>
                                <h2 className="second-slider-text change-design">scenic corners & curves</h2>
                                <p className="second-slick-slider-text my-1">Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.</p>
                                <button className="second-slider-btns">Browse car</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <img src={fifth} alt="car" className="second-slider-image" />
                            </div>
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <h2 className="second-slider-text">Find the perfect car <span className="change-design">to try</span></h2>
                                <h2 className="second-slider-text change-design">before you buy</h2>
                                <p className="second-slick-slider-text my-1">Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.</p>
                                <button className="second-slider-btns">Browse car</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <img src={sixth} alt="car" className="second-slider-image" />
                            </div>
                            <div className="col-12 col-sm-10 offset-1 offset-md-0 col-md-6 col-lg-6 mt-4">
                                <h2 className="second-slider-text">Find the perfect car <span className="change-design">to make</span></h2>
                                <h2 className="second-slider-text change-design">errand day easier</h2>
                                <p className="second-slick-slider-text">Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.</p>
                                <button className="second-slider-btns">Browse car</button>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div >
    );
}
