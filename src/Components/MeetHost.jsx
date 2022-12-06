import React, { useRef } from "react";
import Slider from "react-slick";
import BasicRating from "./HostStarRating"
import image1 from "../images/Hosts/first.jpg";
import image2 from "../images/Hosts/second.jpg";
import image3 from "../images/Hosts/third.jpg";
import image4 from "../images/Hosts/fourth.jpg";
import image5 from "../images/Hosts/fifth.jpg";
import image6 from "../images/Hosts/sixth.png";


export default function MeetHost() {

    const customeSlider = useRef()

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
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
    }

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
                    <div className="col text-center meet-host">
                        Meet the hosts
                        <div className="meet-host-line"></div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1 col-md-10 offset-md-1 col-lg-10 offset-lg-1 col-xl-12 offset-xl-0 d-flex justify-content-between mt-5 mb-3">
                        <h2 className="all-slider-top-name">Top Hosts on Turo</h2>
                        <div className="browse-destination">
                            <svg width="22px" height="22px" onClick={previousBtn} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1o6k71p arrow" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z" fill="#121214" /></svg>
                            <svg width="22px" height="22px" onClick={nextBtn} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1grs31x arrow" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z" fill="#121214" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <Slider ref={customeSlider} {...settings} className="px-5 browse-experience-head">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="host-card border rounded">
                                <div className="header d-flex mt-2 ms-2">
                                    <div className="host-image">
                                        <img src={image1} alt="host-imege" className="img-fluid h-100 w-100 rounded-circle" />
                                    </div>
                                    <div className="host-name ms-2">
                                        <h5 className="host-person">Temi O</h5>
                                        <p className="host-star">All Star Hosts</p>
                                        <p className="host-join">1501 trip . Joined apr 2019</p>
                                    </div>
                                </div>
                                <div className="host-body mt-4 ms-2">
                                    <BasicRating />
                                </div>
                                <div className="host-detail ms-2">
                                    The Car worked perfectly
                                </div>
                                <div className="host-country ms-2 my-4">
                                    Alicia A, -Nov 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="host-card border rounded">
                                <div className="header d-flex mt-2 ms-2">
                                    <div className="host-image">
                                        <img src={image2} alt="host-imege" className="img-fluid h-100 w-100 rounded-circle" />
                                    </div>
                                    <div className="host-name ms-2">
                                        <h5 className="host-person">Big City Rentals. (</h5>
                                        <p className="host-star">All Star Hosts</p>
                                        <p className="host-join">76 trip . Joined jul 2022</p>
                                    </div>
                                </div>
                                <div className="host-body mt-4 ms-2">
                                    <BasicRating />
                                </div>
                                <div className="host-detail ms-2">
                                    Great car and great host
                                </div>
                                <div className="host-country ms-2 my-4">
                                    Adrien K -Nov 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="host-card border rounded">
                                <div className="header d-flex mt-2 ms-2">
                                    <div className="host-image">
                                        <img src={image3} alt="host-imege" className="img-fluid h-100 w-100 rounded-circle" />
                                    </div>
                                    <div className="host-name ms-2">
                                        <h5 className="host-person">Kash Z</h5>
                                        <p className="host-star">All Star Hosts</p>
                                        <p className="host-join">3606 trip . Joined jul 2017</p>
                                    </div>
                                </div>
                                <div className="host-body mt-4 ms-2">
                                    <BasicRating />
                                </div>
                                <div className="host-detail ms-2">
                                    The Car worked perfectly
                                </div>
                                <div className="host-country ms-2 my-4">
                                    Nathan -H, -Sep 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="host-card border rounded">
                                <div className="header d-flex mt-2 ms-2">
                                    <div className="host-image">
                                        <img src={image4} alt="host-imege" className="img-fluid h-100 w-100 rounded-circle" />
                                    </div>
                                    <div className="host-name ms-2">
                                        <h5 className="host-person">Edwige K</h5>
                                        <p className="host-star">All Star Hosts</p>
                                        <p className="host-join">357 trip . Joined aug 2020</p>
                                    </div>
                                </div>
                                <div className="host-body mt-4 ms-2">
                                    <BasicRating />
                                </div>
                                <div className="host-detail ms-2">
                                    The Car worked perfectly
                                </div>
                                <div className="host-country ms-2 my-4">
                                    JB. -Nov 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="host-card border rounded">
                                <div className="header d-flex mt-2 ms-2">
                                    <div className="host-image">
                                        <img src={image5} alt="host-imege" className="img-fluid h-100 w-100 rounded-circle" />
                                    </div>
                                    <div className="host-name ms-2">
                                        <h5 className="host-person">Ding Tak K.</h5>
                                        <p className="host-star">All Star Hosts</p>
                                        <p className="host-join">39 trip . Joined apr 2022.</p>
                                    </div>
                                </div>
                                <div className="host-body mt-4 ms-2">
                                    <BasicRating />
                                </div>
                                <div className="host-detail ms-2">
                                    The Car worked perfectly
                                </div>
                                <div className="host-country ms-2 my-4">
                                    Richard J. -Nov 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="host-card border rounded">
                                <div className="header d-flex mt-2 ms-2">
                                    <div className="host-image">
                                        <img src={image6} alt="host-imege" className="img-fluid h-100 w-100 rounded-circle" />
                                    </div>
                                    <div className="host-name ms-2">
                                        <h5 className="host-person">Shahid A.</h5>
                                        <p className="host-star">All Star Hosts</p>
                                        <p className="host-join">47 trip . Joined jun 2022</p>
                                    </div>
                                </div>
                                <div className="host-body mt-4 ms-2">
                                    <BasicRating />
                                </div>
                                <div className="host-detail ms-2">
                                    The Car worked perfectly.
                                </div>
                                <div className="host-country ms-2 my-4">
                                    Jolyee Y. -Sep 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}



