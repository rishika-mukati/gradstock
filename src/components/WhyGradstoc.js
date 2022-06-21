import React from 'react';
import photo from '../images/photo-151.jpg'

function WhyGradstoc() {
  return (
    <div class="gradstoc-section">
    <div class="container">
      <div class="gradstoc-inn">
        <div class="section-head" data-aos="fade-down" data-aos-duration="600">
          <h2><span>Why</span> Gradstoc?</h2>
          <p>Lorem ipsum, or lipsum as it is sometimes known copy 4</p>
        </div>
        <div class="gradstoc-main-section">
          <div class="gradstoc-img">
            <img src={photo} alt="" />
          </div>
          <div class="gradstoc-cont">
            <div class="gradstoc-cont-inn">
              <h2>Lorem Ipsum is simply dummy text of the printing</h2>
              <div class="rt-i">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                Lorem Ipsum has been the industry's standard dummy text ever.</p>
              <h3>From Start to Finish</h3>
              <div class="gradstoc-btn">
                <a href="#" class="btn">How It Works</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default WhyGradstoc
