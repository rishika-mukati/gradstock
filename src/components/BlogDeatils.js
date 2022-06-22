import React from 'react'
import photo from "../images/photo-14.jpg";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function BlogDeatils() {
    return (
        <Container className='blog'>
            <div class="blog-one">
                <div class="row">
                    <div class="col-md-4">
                        <div class="prepared-img" data-aos="fade-in" data-aos-duration="500">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="ab-desc">
                            <div class="ab-head">
                                Lorem Ipsum <span>heading</span>
                            </div>
                            <div class="ab-short-desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>
                            <div class="blog-date-time">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="blog-date">
                                            Dec 31, 2019, <span>01:10 PM</span>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="blog-readmore-btn">
                                            <Link to="/singleblog" class="btn">Continue Reading <i class="fas fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-one">
                <div class="row">
                    <div class="col-md-4">
                        <div class="prepared-img" data-aos="fade-in" data-aos-duration="500">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="ab-desc">
                            <div class="ab-head">
                                Lorem Ipsum <span>heading</span>
                            </div>
                            <div class="ab-short-desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>
                            <div class="blog-date-time">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="blog-date">
                                            Dec 31, 2019, <span>01:10 PM</span>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="blog-readmore-btn">
                                            <Link to="/singleblog" class="btn">Continue Reading <i class="fas fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blog-one">
                <div class="row">
                    <div class="col-md-4">
                        <div class="prepared-img" data-aos="fade-in" data-aos-duration="500">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="ab-desc">
                            <div class="ab-head">
                                Lorem Ipsum <span>heading</span>
                            </div>
                            <div class="ab-short-desc">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </div>
                            <div class="blog-date-time">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="blog-date">
                                            Dec 31, 2019, <span>01:10 PM</span>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="blog-readmore-btn">
                                            <Link to="/singleblog" class="btn">Continue Reading <i class="fas fa-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default BlogDeatils
