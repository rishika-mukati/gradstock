import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-footer">
        <div className="container">
          <div className="main-footer-inn">
            <div className="footer-logo">
              <span><img src={logo} className="" alt="logo" /></span>
            </div>
            <div className="footer-menu">
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/terms-and-service">Terms and Services</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/how-it-works">How it works</Link></li>
                <li><Link to="/trust-and-quality">Trust and Quality</Link></li>
                <li><Link to="/blog">Blog</Link></li>
              </ul>
            </div>
            <div className="footer-social">
              <ul>
                <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="linkedin"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                <li className="google-plus"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-footer">
        <div className="container">
          <div className="copy-ftr">
            Your copy right address here
          </div>
        </div>
      </div>
      {/* <div className="privacy-popup">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="privacy-cont">
                <h2>Your privacy is important to us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="privacy-btns">
                <ul>
                  <li><a href="JavaScript:Void(0);" className="btn privacy-close">Ok</a></li>
                  <li><a href="#" className="btn">More Info</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </footer>
  )
}

export default Footer
