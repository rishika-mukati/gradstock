import React from 'react';
import photo from "../images/photo-14.jpg";

const GetStarted = () => {
    return(
        <div className="started-section">
        <div className="container">
          <div className="prepared-inn">
            <div className="section-head" data-aos="fade-down" data-aos-duration="600">
              <h2><span>Get Started</span> Today</h2>
              <p>Lorem ipsum, or lipsum as it is sometimes known copy 4</p>
            </div>
            <div className="prepared-main-section">
               <div className="row">
                <div className="col-md-4">
                  <div className="prepared-img" data-aos="fade-in" data-aos-duration="500">
                    <img src={photo} alt=""/>
                  </div>
                 </div>
                 <div className="col-md-8">
                   <div className="prepared-text">
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishingard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetti..</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default GetStarted;