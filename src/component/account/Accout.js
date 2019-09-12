import React, { Component } from 'react';

class Accout extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="modal fade" id="exampleModalScrollable" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle" style={{letterSpacing: '3px', color: '#00a99d'}}>SIGN IN</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            </div>
                            <div className="modal-body">
                            <form action="/action_page.php" className="needs-validation" noValidate>
                                <div className="form-group">
                                <label htmlFor="uname" style={{fontFamily: 'serif'}}>Username:</label>
                                <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="pwd" style={{fontFamily: 'serif'}}>Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{backgroundColor: '#00a99d'}}>Sign In</button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Modal creater in account*/}
                    <div className="modal fade" id="exampleModalScrollable2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-scrollable" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle" style={{letterSpacing: '3px', color: '#00a99d'}}>CREATE AN ACCOUNT</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            </div>
                            <div className="modal-body">
                            <form action="/action_page.php" className="needs-validation" noValidate>
                                <div className="form-group">
                                <label htmlFor="Fullname" style={{fontFamily: 'serif'}}>full name:</label>
                                <input type="text" className="form-control" id="uname" placeholder="Enter full name" name="fullname" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="uname" style={{fontFamily: 'serif'}}>Username:</label>
                                <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="pwd" style={{fontFamily: 'serif'}}>Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="pwd" style={{fontFamily: 'serif'}}>Enter the Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter the password" name="pswd" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="email" style={{fontFamily: 'serif'}}>Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <button type="submit" className="btn btn-primary" style={{backgroundColor: '#00a99d'}}>Create</button>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Accout;