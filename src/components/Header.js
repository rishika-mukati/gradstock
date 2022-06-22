import React,{useState} from 'react';
import logo from '../images/logo.png'
import university from "../images/liberty-university.jpg";
import biology from "../images/biology.jpg";
import businessTextbook from "../images/businessTextbook.jpg";
import { Container, Row, Button } from 'react-bootstrap';
import '../css/menu.css';
import { Link, NavLink } from 'react-router-dom';
import Login from '../auth/Login'
import Signup from '../auth/Signup'
const Header = () => {
    const [modalShow, setModalShow] = useState(false);
    const [modalShowsignup, setModalShowsignup] = useState(false);
    return (
        <header className='header'>
            <Container>
                <Row>
                    <div className="col-md-3">
                        <div className="main-logo">
                            <Link to="/"><img src={logo} className="" alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="header-right">
                            <div className="header-top">
                                <div className="search-area">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <select className="form-control">
                                                <option defaultValue="" value="">Select Option...</option>
                                                <option value="">Fiction Book</option>
                                                <option value="">Non-Fiction Book</option>
                                                <option value="">Text Book</option>
                                            </select>
                                        </div>
                                        <input type="text" className="form-control" placeholder="Search here..." />
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="tutorHelp">
                                    <a href="tutor-my-question.html">Tutor Help <i className="far fa-question-circle" data-toggle="tooltip" title="" data-original-title="Get an Expert Tutor to help you with your homework"></i></a>
                                </div>
                            </div>
                            <div className="header-menus">
                                <div className="menus">
                                    <button className="nav-toggle">
                                        <div className="icon-menu">
                                            <span className="line line-1"></span>
                                            <span className="line line-2"></span>
                                            <span className="line line-3"></span>
                                        </div>
                                    </button>
                                    <div className="nav nav-container">
                                        <ul className="links">
                                            <li className="active"><NavLink to="/school-list" className="parent">School</NavLink>
                                                <ul>
                                                    <li className="">
                                                        <a href="#">
                                                            <p>Liberty University</p>
                                                            <div className="sub-img"><img src={university} alt="" /></div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <p>Biology</p>
                                                            <div className="sub-img"><img src={biology} alt="" /></div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <p>Business Textbook</p>
                                                            <div className="sub-img"><img src={businessTextbook} alt="" /></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=""><NavLink to="/subject">Subject</NavLink></li>
                                            <li className=""><NavLink to="/books">Books</NavLink></li>
                                            <li className=""><NavLink to="/tutor-list">Ask Tutors</NavLink></li>
                                            <li className=""><NavLink to="/blog">Blog</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-sign">
                                    <ul>
                                        <li>
                                            <Button className='login-btn btn' onClick={() => setModalShow(true)}>
                                                Login
                                            </Button>
                                        </li>
                                        <li>
                                            <Button className="signup-btn btn" onClick={() => setModalShowsignup(true)}>Sign up</Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Signup
                show={modalShowsignup}
                onHide={() => setModalShowsignup(false)}
            />
        </header>
    )
}

export default Header;