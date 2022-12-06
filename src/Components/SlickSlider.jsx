import React, { useRef } from "react";
import Slider from "react-slick";
import jeep from "../images/jeep.jpg";
import Tesla from "../images/tesla.jpg"
import Subaru from "../images/subaru.jpg";
import Porsche from "../images/porsche.jpg";
import BMW from "../images/bmw.jpg"
import Mercedes from "../images/mercedes.jpg";
import Toyata from "../images/toyota.jpg";
import Nissan from "../images/nissan.jpg";
import Lamborghini from "../images/lamborghini.jpg";
import Ford from "../images/ford.jpg"



export default function MultipleItems() {

    const customeSlider = useRef();
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const nextBtn = () => {
        customeSlider.current.slickNext()
    }

    const previousBtn = () => {
        customeSlider.current.slickPrev()
    }

    return (
        <div className="mb-5">
            <div className="container">
                <div className="row">
                    <div className="col d-flex justify-content-between mt-5 mb-3">
                        <h2 className="all-slider-top-name">Browse Car</h2>
                        <div className="browse-destination">
                            <svg width="22px" height="22px" onClick={previousBtn} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1o6k71p arrow" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M9.522 14a.75.75 0 0 1-.555-.245l-4.773-5.25a.754.754 0 0 1 0-1.01l4.773-5.25a.75.75 0 0 1 1.11 1.01L5.764 8l4.315 4.745A.75.75 0 0 1 9.521 14Z" fill="#121214" /></svg>
                            <svg width="22px" height="22px" onClick={nextBtn} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="seo-pages-1grs31x arrow" role="img" version="1.1"><path fillRule="evenodd" clipRule="evenodd" d="M6.48 14a.75.75 0 0 0 .555-.245l4.773-5.25a.754.754 0 0 0 0-1.01l-4.773-5.25a.75.75 0 0 0-1.11 1.01L10.239 8l-4.314 4.745A.75.75 0 0 0 6.48 14Z" fill="#121214" /></svg>
                        </div>
                    </div>
                </div>
            </div>
            <Slider ref={customeSlider} {...settings} className="slider-body px-5">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100">
                                    <img src={jeep} className="card-img-top slider" alt="Jeep" />
                                    <div className="card-body">
                                        <h3 className="card-title">Jeep</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100">
                                    <img src={Tesla} className="card-img-top slider" alt="Tesla" />
                                    <div className="card-body">
                                        <h3 className="card-title">Tesla</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100">
                                    <img src={Subaru} className="card-img-top slider" alt="Subaru" />
                                    <div className="card-body">
                                        <h3 className="card-title">Subaru</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100">
                                    <img src={Porsche} className="card-img-top slider" alt="Porsche" />
                                    <div className="card-body">
                                        <h3 className="card-title">Porsche</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100">
                                    <img src={BMW} className="card-img-top slider" alt="BMW" />
                                    <div className="card-body">
                                        <h3 className="card-title">BMW</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100" style={{ width: '18rem' }}>
                                    <img src={Mercedes} className="card-img-top slider" alt="Mercedes" />
                                    <div className="card-body">
                                        <h3 className="card-title">Mercedes</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100" style={{ width: '18rem' }}>
                                    <img src={Toyata} className="card-img-top slider" alt="Toyata" />
                                    <div className="card-body">
                                        <h3 className="card-title">Toyata</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100" style={{ width: '18rem' }}>
                                    <img src={Nissan} className="card-img-top slider" alt="Nissan" />
                                    <div className="card-body">
                                        <h3 className="card-title">Nissan</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100" style={{ width: '18rem' }}>
                                    <img src={Lamborghini} className="card-img-top slider" alt="Lamborghini" />
                                    <div className="card-body">
                                        <h3 className="card-title">Lamborghini</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="card w-100" style={{ width: '18rem' }}>
                                    <img src={Ford} className="card-img-top slider" alt="Ford" />
                                    <div className="card-body">
                                        <h3 className="card-title">Ford</h3>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>

    )
}

