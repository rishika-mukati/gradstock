import React from 'react'
import Slider from "react-slick";
import img1 from '../images/photo-151.jpg';
import img2 from "../images/Feynman_Lectures.jpg";
import img3 from "../images/photo-151.jpg";


// function SampleNextArrow(props) {
// const { className, style, onClick } = props;
// return (
//     <div
//     className={className}
//     onClick={onClick}
//     ></div>
// );
// }

// function SamplePrevArrow(props) {
// const { className, style, onClick } = props;
// return (
//     <div
//     className={className}
//     style={{ ...style, display: "block", background: "green" }}
//     onClick={onClick}
//     />
// );
// }

function StudyMaterials() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        autoplaySpeed:1500,
        arrow:true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />
    };
  return (
    <div className="materials-section">
    <div className="container">
      <div className="materials-inn">
        <div className="section-head" data-aos="fade-down" data-aos-duration="600">
          <h2><span>Study</span> Materials</h2>
          <p>Lorem ipsum, or lipsum as it is sometimes known copy 4</p>
        </div>
        <div className="materials-slider-section">
            <Slider {...settings} className="owl-carousel materials-slider">
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img1} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Quantum physics</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 149.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img2} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Biology</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 211.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img3} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Chemistry</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 199.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img1} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Quantum physics</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 149.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img2} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Biology</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 211.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img3} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Chemistry</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 199.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img1} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Quantum physics</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 149.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img2} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Biology</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 211.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="materials-item">
                  <div className="materials-item-inn card">
                    <div className="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img3} alt=""/></a>
                    </div>
                    <div className="materials-item-cont card-body">
                      <div className="materials-item-name card-title">
                        <a href="#">Chemistry</a>
                      </div>
                      <div className="materials-rt-ct">
                        <div className="materials-price-rt">
                          <div className="materials-price">$ 199.00</div>
                          <div className="materials-rt">
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star active"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <div className="materials-cart">
                          <a href="#"><i className="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StudyMaterials
