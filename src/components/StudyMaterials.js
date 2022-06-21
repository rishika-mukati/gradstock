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
    <div class="materials-section">
    <div class="container">
      <div class="materials-inn">
        <div class="section-head" data-aos="fade-down" data-aos-duration="600">
          <h2><span>Study</span> Materials</h2>
          <p>Lorem ipsum, or lipsum as it is sometimes known copy 4</p>
        </div>
        <div class="materials-slider-section">
            <Slider {...settings} class="owl-carousel materials-slider">
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img1} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Quantum physics</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 149.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img2} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Biology</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 211.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img3} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Chemistry</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 199.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img1} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Quantum physics</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 149.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img2} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Biology</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 211.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img3} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Chemistry</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 199.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img1} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Quantum physics</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 149.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img2} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Biology</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 211.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="materials-item">
                  <div class="materials-item-inn card">
                    <div class="materials-item-img card-img">
                      <a href="product_detail_page.html"><img src={img3} alt=""/></a>
                    </div>
                    <div class="materials-item-cont card-body">
                      <div class="materials-item-name card-title">
                        <a href="#">Chemistry</a>
                      </div>
                      <div class="materials-rt-ct">
                        <div class="materials-price-rt">
                          <div class="materials-price">$ 199.00</div>
                          <div class="materials-rt">
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star active"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                          </div>
                        </div>
                        <div class="materials-cart">
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
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
