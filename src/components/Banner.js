import React from 'react';
import Slider from "react-slick";
import Banner2 from "../images/study-tips-banner2.jpg";
import TipsBanner2 from "../images/study-tips-banner2.jpg";

function Banner() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="section-banner-studySmarter">

            <div className="main-banner">
                <Slider {...settings} className="owl-carousel banner-slider">
                    <div>
                        <div className="item">
                            <div className="banner-slider-item">
                                <div className="banner-slider-img">
                                    <img src={Banner2} alt="" />
                                </div>
                                <div className="banner-slider-cont">
                                    <div className="container">
                                        <div className="banner-slider-cont-inn">
                                            <h2>Your heading</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                                nascetur ridiculus mus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="item">
                            <div className="banner-slider-item">
                                <div className="banner-slider-img">
                                    <img src={TipsBanner2} alt="" />
                                </div>
                                <div className="banner-slider-cont">
                                    <div className="container">
                                        <div className="banner-slider-cont-inn">
                                            <h2>Your heading</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                                                eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                                nascetur ridiculus mus.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>

            <div className="studySmarter">
                <div className="container">
                    <div className="studySmarter-inn">
                        <div className="studySmarter-head">
                            <h2>Study Smarter</h2>
                            <p>Study documents for all your classes</p>
                        </div>
                        <div className="studySmarter-form-div">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="studySmarter-form field form-group">
                                        <label className="form-label" htmlFor="fullname">School</label>
                                        <input type="text" className="form-control" placeholder="Enter a school" />
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="studySmarter-form field form-group">
                                        <label className="form-label" htmlFor="fullname">Course</label>
                                        <input type="text" className="form-control" placeholder="Enter a course" />
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="studySmarter-form">
                                        <input type="submit" value="FInd Course" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Banner
