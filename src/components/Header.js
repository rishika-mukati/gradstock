import React from 'react';
import logo from '../images/logo.png'
import { Container, Row } from 'react-bootstrap';
import '../css/menu.css';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
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
                                            <li className="active"><a href="school-list.html" className="parent">School</a>
                                                <ul>
                                                    <li className="">
                                                        <a href="#">
                                                            <p>Liberty University</p>
                                                            <div className="sub-img"><img src="images/liberty-university.jpg" alt="" /></div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <p>Biology</p>
                                                            <div className="sub-img"><img src="images/biology.jpg" alt="" /></div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <p>Business Textbook</p>
                                                            <div className="sub-img"><img src="images/businessTextbook.jpg" alt="" /></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className=""><a href="fiction-book.html">Subject</a></li>
                                            <li className=""><a href="books-page.html">Books</a></li>
                                            <li className=""><a href="tutor-list.html">Ask Tutors</a></li>
                                            <li className=""><NavLink to="/blog">Blog</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="header-sign">
                                    <ul>
                                        <li><a href="#" className="login-btn btn" data-toggle="modal" data-target="#myModal">Login</a></li>
                                        <li><a href="#" className="signup-btn btn" data-toggle="modal" data-target="#myModal">Sign up</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;