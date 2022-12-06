import React, { useRef } from "react";
import Slider from "react-slick";
import img1 from "../images/Destination/ten.svg";
import img2 from "../images/Destination/eleven.svg";
import img3 from "../images/Destination/twelve.svg";
import img4 from "../images/Destination/thirteen.svg";
import img5 from "../images/Destination/forteen.svg";
import img6 from "../images/Destination/fifteen.svg";
import img7 from "../images/Destination/sixteen.svg";
import img8 from "../images/Destination/seventeen.svg";
import img9 from "../images/Destination/ninth.svg";


export default function BrowseInternationalDestination() {

    const customeSlider = useRef()

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // Previous Slider Button
    const previousBtn = () => {
        customeSlider.current.slickPrev()
    }

    // Next Slider Button
    const nextBtn = () => {
        customeSlider.current.slickNext()
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0 d-flex justify-content-between mt-5 mb-3">
                        <h2 className="all-slider-top-name">Browse by international destination</h2>
                        <div className="browse-destination">
                            <svg width="22px" height="22px" onClick={previousBtn} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1o6k71p arrow" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z" fill="#121214" /></svg>
                            <svg width="22px" height="22px" onClick={nextBtn} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1grs31x arrow" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z" fill="#121214" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            <Slider ref={customeSlider} {...settings} className="px-5 browse-destination-slider mb-5">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img1} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">Honolulu</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img2} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">San Fransico</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img3} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">Orlando</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img4} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">Chicago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img5} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">London</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img6} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">Los Angeles</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img7} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">Miami</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img8} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">Boston</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="card shadow">
                                    <div className="image py-3">
                                        <img src={img9} alt="browse-destination-images" className="browse-destination-image img-fluid mx-auto" />

                                    </div>
                                    <div className="h4 browse-destination-name">Manchester</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div >
    );
}
