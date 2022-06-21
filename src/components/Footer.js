import React from 'react'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <footer class="footer">
      <div class="main-footer">
        <div class="container">
          <div class="main-footer-inn">
            <div class="footer-logo">
              <span><img src={logo} className="" alt="logo" /></span>
            </div>
            <div class="footer-menu">
              <ul>
                <li><a href="about-us.html">About Us</a></li>
                <li><a href="terms-and-services.html">Terms and Services</a></li>
                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                <li><a href="#">How it works</a></li>
                <li><a href="#">Trust and Quality</a></li>
                <li><a href="blog.html">Blog</a></li>
              </ul>
            </div>
            <div class="footer-social">
              <ul>
                <li class="facebook"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li class="twitter"><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li class="linkedin"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                <li class="google-plus"><a href="#"><i class="fab fa-google-plus-g"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="copy-right-footer">
        <div class="container">
          <div class="copy-ftr">
            Your copy right address here
          </div>
        </div>
      </div>
      {/* <div class="privacy-popup">
        <div class="container">
          <div class="row">
            <div class="col-md-10">
              <div class="privacy-cont">
                <h2>Your privacy is important to us</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>
            <div class="col-md-2">
              <div class="privacy-btns">
                <ul>
                  <li><a href="JavaScript:Void(0);" class="btn privacy-close">Ok</a></li>
                  <li><a href="#" class="btn">More Info</a></li>
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
