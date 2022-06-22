import React from 'react'
import Modal from 'react-bootstrap/Modal';

function Signup(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className='modal-sign-up'>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-sign-head" id="contained-modal-title-vcenter">
                        <h2>Create a FREE account now to get started</h2>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-sign-body">
                        <div className="currently-div">
                            <p>I am currently a</p>
                            <ul>
                                <li>
                                    <label>
                                        <input type="radio" name="currently" />
                                        <span><i className="fas fa-chalkboard-teacher"></i> Student</span>
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="radio" name="currently" />
                                        <span><i className="fas fa-user-graduate"></i> Tutor</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="sign-form">
                            <form action="" className="register-form">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>First Name <span>*</span></label>
                                            <input type="text" className="form-control" placeholder="First Name" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Last Name <span>*</span></label>
                                            <input type="text" className="form-control" placeholder="Last Name" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Profile photo <span>*</span></label>
                                            <input type="file" name="file-1[]" id="file-1" className="inputfile inputfile-1" data-multiple-caption="{count} files selected" multiple />
                                            <label className="inputfile-label" htmlFor="file-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" fill="#2c2f8c" viewBox="0 0 20 17">
                                                    <path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z" />
                                                </svg>
                                                <span>Select photo</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Email <span>*</span></label>
                                            <input type="email" className="form-control" placeholder="Email" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Password <span>*</span></label>
                                            <input type="password" className="form-control" placeholder="Password" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Confirm password <span>*</span></label>
                                            <input type="password" className="form-control" placeholder="Confirm password" value="" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <span className="checkbox-accept">
                                                <label>
                                                    <input type="checkbox" name="" value="" />
                                                    <span></span>
                                                </label>
                                            </span>
                                            <label>I have read and accept the <a href="#">Terms & Conditions</a></label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input type="submit" className="btn" value="Sign Up" />
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
        </Modal>
    )
}

export default Signup
