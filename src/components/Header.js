import React from 'react';
import logo from '../images/logo.png'
import { Container, Row } from 'react-bootstrap';
import '../css/menu.css';
const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Row>
                    <div class="col-md-3">
                        <div class="main-logo">
                            <img src={logo} className="" alt="logo" />
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="header-right">
                            <div class="header-top">
                                <div class="search-area">
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                            <select class="form-control">
                                                <option selected="" value="">Select Option...</option>
                                                <option value="">Fiction Book</option>
                                                <option value="">Non-Fiction Book</option>
                                                <option value="">Text Book</option>
                                            </select>
                                        </div>
                                        <input type="text" class="form-control" placeholder="Search here..." />
                                            <div class="input-group-btn">
                                                <button class="btn btn-default" type="submit">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                    </div>
                                </div>
                                <div class="tutorHelp">
                                    <a href="tutor-my-question.html">Tutor Help <i class="far fa-question-circle" data-toggle="tooltip" title="" data-original-title="Get an Expert Tutor to help you with your homework"></i></a>
                                </div>
                            </div>
                            <div class="header-menus">
                                <div class="menus">
                                    <button class="nav-toggle">
                                        <div class="icon-menu">
                                            <span class="line line-1"></span>
                                            <span class="line line-2"></span>
                                            <span class="line line-3"></span>
                                        </div>
                                    </button>
                                    <div class="nav nav-container">
                                        <ul class="links">
                                            <li class="active"><a href="school-list.html" class="parent">School</a>
                                                <ul>
                                                    <li class="">
                                                        <a href="#">
                                                            <p>Liberty University</p>
                                                            <div class="sub-img"><img src="images/liberty-university.jpg" alt="" /></div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <p>Biology</p>
                                                            <div class="sub-img"><img src="images/biology.jpg" alt="" /></div>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <p>Business Textbook</p>
                                                            <div class="sub-img"><img src="images/businessTextbook.jpg" alt="" /></div>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li class=""><a href="fiction-book.html">Subject</a></li>
                                            <li class=""><a href="books-page.html">Books</a></li>
                                            <li class=""><a href="tutor-list.html">Ask Tutors</a></li>
                                            <li class=""><a href="blog.html">Blog</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="header-sign">
                                    <ul>
                                        <li><a href="#" class="login-btn btn" data-toggle="modal" data-target="#myModal">Login</a></li>
                                        <li><a href="#" class="signup-btn btn" data-toggle="modal" data-target="#myModal">Sign up</a></li>
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