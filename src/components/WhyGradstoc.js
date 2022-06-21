import React from 'react';
import photo from '../images/photo-151.jpg'

function WhyGradstoc() {
  return (
    <div className="gradstoc-section">
    <div className="container">
      <div className="gradstoc-inn">
        <div className="section-head" data-aos="fade-down" data-aos-duration="600">
          <h2><span>Why</span> Gradstoc?</h2>
          <p>Lorem ipsum, or lipsum as it is sometimes known copy 4</p>
        </div>
        <div className="gradstoc-main-section">
          <div className="gradstoc-img">
            <img src={photo} alt="" />
          </div>
          <div className="gradstoc-cont">
            <div className="gradstoc-cont-inn">
              <h2>Lorem Ipsum is simply dummy text of the printing</h2>
              <div className="rt-i">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
                Lorem Ipsum has been the industry's standard dummy text ever.</p>
              <h3>From Start to Finish</h3>
              <div className="gradstoc-btn">
                <a href="#" className="btn">How It Works</a>
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
