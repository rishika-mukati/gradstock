import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Forgot from './Forgot';

function Login(props) {
  const [forgotShow, setForgotShow] = React.useState(false);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='modal-sign-in'>
      <Modal.Header closeButton>
        <Modal.Title className="modal-sign-head" id="contained-modal-title-vcenter">
          <h2>Log In to Your Account</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-sign-body">
          <div className="social-div">
            <ul>
              <li><a href="#"><i className="fab fa-facebook-f"></i> <span>Login with facebook</span></a></li>
              <li><a href="#"><i className="fab fa-google-plus-g"></i> <span>Login with google</span></a></li>
            </ul>
          </div>
          <div className="sign-or"><span>OR</span></div>
          <div className="sign-form">
            <form action="" className="signin-form">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Email Address <span>*</span></label>
                    <input type="email" className="form-control" placeholder="Enter your email address..." value="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Password <span>*</span></label>
                    <input type="password" className="form-control" placeholder="Password" value="" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <span className="checkbox-accept">
                      <label>
                        <input type="checkbox" name="" value="" />
                        <span></span>
                        Keep me logged in
                      </label>
                    </span>

                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group forgotP">
                    <label>
                      <a href="#" className="forgotPbtn" onClick={() => setForgotShow(true)}>Forgot Password?</a></label>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input type="submit" className="btn" value="Login" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="modal-sign-footer">
          <p>New to Gradstoc? <a href="#" className="footer-sign-up">Sign Up</a></p>
        </div>
      </Modal.Footer>
      </div>
    <Forgot
              show={forgotShow}
              onHide={() => setForgotShow(false)}
          />
    </Modal>
  )
}

export default Login
