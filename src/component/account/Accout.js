import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class Accout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirectLog: false,
            isRedirectRegis: false,
            fullname: "",
            uname: "",
            pswd: "",
            email: ""

        }
    }
    // đăng ký
    sumbmitFromRegis = () => {
        this.preventDefault();
        this.setState({
            isRedirectRegis: true
        });
    }
    // đăng nhập
    submitFromLog = () => {
        this.preventDefault(); //stop, ko cho chạy lại trang
        this.setState({
            isRedirectLog:true
        });
    }
    // nhận ký tự của from đăng ký
    isChange = (event) => {
        const Name = event.target.name;
        const Value = event.target.value;
        // console.log(Name);
        // console.log(Value);
        this.setState({
            [Name]: Value
        });
    }
    // lấy nội dung thông tin
    getValue = () => {
        var Content = "";
        Content += "Full name is: " + this.state.fullname;
        Content += "/ Name is: " + this.state.uname;
        Content += "/ Passwourd is: " + this.state.pswd;
        Content += "/ Email is: " + this.state.email;
        return Content;
    }
        
    
    render() {
        if(this.state.isRedirectRegis){
            console.log(this.getValue());
            return <Redirect to="/"/>;
        }
        
        if(this.state.isRedirectLog){
            console.log(this.getValue());
            return <Redirect to="/"/>;
        }
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
                            <form action="/" className="needs-validation" noValidate>
                                <div className="form-group">
                                <label htmlFor="uname" style={{fontFamily: 'serif'}}>Username:</label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="pwd" style={{fontFamily: 'serif'}}>Password:</label>
                                <input onChange={(event) => this.isChange(event)} type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <button onClick={() => this.submitFromLog()} type="submit" className="btn btn-primary" style={{backgroundColor: '#00a99d'}}>Sign In</button>
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
                            <form className="needs-validation" noValidate>
                                <div className="form-group">
                                <label htmlFor="Fullname" style={{fontFamily: 'serif'}}>full name:</label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" id="uname" placeholder="Enter full name" name="fullname" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="uname" style={{fontFamily: 'serif'}}>Username:</label>
                                <input onChange={(event) => this.isChange(event)} type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="pwd" style={{fontFamily: 'serif'}}>Password:</label>
                                <input onChange={(event) => this.isChange(event)} type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="pwd" style={{fontFamily: 'serif'}}>Enter the Password:</label>
                                <input onChange={(event) => this.isChange(event)} type="password" className="form-control" id="pwd" placeholder="Enter the password" name="pswd" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <div className="form-group">
                                <label htmlFor="email" style={{fontFamily: 'serif'}}>Email:</label>
                                <input onChange={(event) => this.isChange(event)} type="email" className="form-control" id="email" placeholder="Enter email" name="email" required />
                                <div className="valid-feedback">Valid.</div>
                                <div className="invalid-feedback">Please fill out this field.</div>
                                </div>
                                <button onClick={() => this.sumbmitFromRegis()} type="submit" className="btn btn-primary" style={{backgroundColor: '#00a99d'}}>Create</button>
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