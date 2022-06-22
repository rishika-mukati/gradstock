import React from 'react'
import Modal from 'react-bootstrap/Modal';

function Forgot(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='modal-forgot-in'>
      <Modal.Header closeButton>
        <Modal.Title className="modal-sign-head" id="contained-modal-title-vcenter">
          <h2>Forgot Password</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="modal-sign-body">
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
                          <input type="submit" className="btn" value="Send" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
      </Modal.Body>
      </div>
    </Modal>
  )
}

export default Forgot
