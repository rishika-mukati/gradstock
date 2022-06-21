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
        <div class="section-banner-studySmarter">

            <div class="main-banner">
                <Slider {...settings} class="owl-carousel banner-slider">
                    <div>
                        <div class="item">
                            <div class="banner-slider-item">
                                <div class="banner-slider-img">
                                    <img src={Banner2} alt="" />
                                </div>
                                <div class="banner-slider-cont">
                                    <div class="container">
                                        <div class="banner-slider-cont-inn">
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
                        <div class="item">
                            <div class="banner-slider-item">
                                <div class="banner-slider-img">
                                    <img src={TipsBanner2} alt="" />
                                </div>
                                <div class="banner-slider-cont">
                                    <div class="container">
                                        <div class="banner-slider-cont-inn">
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

            <div class="studySmarter">
                <div class="container">
                    <div class="studySmarter-inn">
                        <div class="studySmarter-head">
                            <h2>Study Smarter</h2>
                            <p>Study documents for all your classes</p>
                        </div>
                        <div class="studySmarter-form-div">
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="studySmarter-form field form-group">
                                        <label class="form-label" for="fullname">School</label>
                                        <input type="text" class="form-control" placeholder="Enter a school" />
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="studySmarter-form field form-group">
                                        <label class="form-label" for="fullname">Course</label>
                                        <input type="text" class="form-control" placeholder="Enter a course" />
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="studySmarter-form">
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
