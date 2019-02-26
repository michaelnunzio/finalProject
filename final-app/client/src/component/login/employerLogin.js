
import React from "react";
import NavBar from "../nav/navBar"
import React, {Component} from "react";
import "./login.css";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


function login(){
    return(
        <React.Fragment>
                            <NavBar/>
        <div className="container">
            <form className="form-signin" method="post" action="/login/employer">
                <h1 className="h3 mb-3 font-weight-normal">Employer- Please sign in</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" name="username" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>
        </div>
        </React.Fragment>
    );
};


export default login;