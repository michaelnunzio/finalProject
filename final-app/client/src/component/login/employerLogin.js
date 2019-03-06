
import React from "react";
import NavBar from "../nav/navBar"
// import React, {Component} from "react";
import "./login.css";
// import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

function login(){
    return(

        <React.Fragment>
            <NavBar/>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {/* <div className="container empLog">
                <form className="form-signin" method="post" action="/login/employer">
                    <h1 className="h3 mb-3 font-weight-normal">Employer- Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" name="username" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                    <button className="btn btn-lg btn-primary btn-block subBtn" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
                </form>
            </div> */}

            <div class="valign-wrapper row login-box">
                <div class="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form className="form-signin" method="post" action="/login/employer">
                        <div class="card-content">
                            <span class="card-title">Enter Company credentials</span>
                            <div class="row">
                                <div class="input-field col s12">
                                    <label htmlFor="inputEmail" className="sr-only">Email address</label> Email:
                                    <input type="email" name="username" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                                </div>
                                <div class="input-field col s12">
                                    <label htmlFor="inputPassword" className="sr-only">Password </label> Password:
                                    <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                </div>
                            </div>
                        </div>
                        <div class="card-action right-align">
                            <input type="reset" id="reset" class="btn-flat grey-text waves-effect"></input>
                            <button className="btn btn-lg btn-primary btn-block subBtn" type="submit">Log In </button>
                        </div>
                    </form>
                </div>
            </div>

        </React.Fragment>
    );
};

export default login;