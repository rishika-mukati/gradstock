import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import pic from "../images/demo-pic.png";

function TutorList() {
  return (
    <div className='middle-section'>
      <div className="page-title">
        <div className="container">
          <div className="page-title-in">
            <h2>Tutor List</h2>
          </div>
        </div>
      </div>
      <Container>
        <div class="tutor-list-section">
          <div class="uploads-right-top">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Tutor Search..." value="" />
              <button class="btn">Search</button>
            </div>
          </div>
          <div class="tutor-list-items">
          <div class="tutor-list-item">
                    <ul>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="tutor-list-inn card card-body box-sh">
                                <div class="tutor-list-img">
                                    <img src={pic} alt="" />
                                </div>
                                <div class="tutor-list-cont">
                                    <h2><a href="#">John Doe</a></h2>
                                    <p>Subject :- English</p>
                                    <div class="reviews-stars">
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star active"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </div>
                                <div class="tutor-list-btn">
                                    <Link to="/tutor-profile" class="btn">View More</Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            <div class="item-pagination">
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#"><i class="fas fa-chevron-left"></i></a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#"><i class="fas fa-chevron-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TutorList
