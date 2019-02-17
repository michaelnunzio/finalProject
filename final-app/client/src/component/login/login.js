import React from "react";
import "./login.css";

function login(){
    return(
        <div className="container">
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" name="Email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" name="Password" id="inputPassword" class="form-control" placeholder="Password" required/>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>
        </div>
    );
}

export default login;