import React from "react";
import "./login.css";
import NavBar from "../nav/navBar"



function login(){
    return(
        <React.Fragment>
        <NavBar/>
        <div className="container">
            <form className="form-signin" method="post" action="/login/candidate">
            
            <div className='col l8 offset-l2'>
                <h1 className="h3">Welcome Candidate! Please Sign In</h1>
            </div>

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
}

export default login;