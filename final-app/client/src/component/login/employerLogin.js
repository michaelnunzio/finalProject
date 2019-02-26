import React, {Component} from "react";
import "./login.css";
import NavBar from '../navbar/navBar';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

login = () => {
    fakeAuth.isAuthenticated(() => {
        this.setState({isAuthenticated: true});
    });
};

export default class login extends Component{

    constructor(props){        
        super(props);
    }
    state = {
        redirectToReferrer: false,
        isAuthenticated: false
    }
    render(){

        const {from} = this.props.location.state || {from: {pathname: '/'}}
        const {redirectToReferrer} = this.state;

        // if(!fakeAuth.isAuthenticated) {
        //     return <Redirect to = '/' />
        // }

        return(
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <form className="form-signin" method="post" action="/login/employer">
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" name="username" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.login}>Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

// export default login;