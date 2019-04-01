import React from "react";
import "./login.css";
import NavBar from "../nav/navBar"



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

        {/* <div className="container">
        <div className='row newNn'>
            <NavBar/>
        </div>
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
        </div> */}

                <div class="valign-wrapper row login-box">
                <div class="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form className="form-signin" method="post" action="/login/candidate">
                        <div class="card-content">
                            <span class="card-title">Enter Employee Credentials</span>
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
}

export default login;