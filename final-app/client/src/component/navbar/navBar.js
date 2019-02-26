import React, {Component} from 'react';
import axios from 'axios';

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

function handleLogout(){
    axios.get('/logout').then(function(data){
        console.log(data);
        console.log('logged out');
    })
}

export default class NavBar extends Component {

    state = {
        redirectToReferrer: false
    }
    render() {

        return(
            <React.Fragment>
                <div className="wrapper">
                    <header>
                        <ul id="dropdown1" className="dropdown-content">
                            <li><a href="/register/employer">Register as Employer</a></li>
                            <li className="divider"></li>
                            <li><a href="/register/candidate">Register as Job Seeker</a></li>
                        </ul>
                        <ul id="dropdown2" className="dropdown-content">
                            <li><a href="/login/employer">Login as Employer</a></li>
                            <li className="divider"></li>
                            <li><a href="/login/candidate">Login as Job Seeker</a></li>
                        </ul>
                        <nav>
                            <div className="nav-wrapper">
                            <a href="#!" className="brand-logo"><i className="material-icons">cloud</i>JobHuntr</a>
                            <ul className="right hide-on-med-and-down">
                                <li><a href="/"><i className="material-icons left">home</i>Home</a></li>
                                <li><a className="dropdown-trigger" href="#!" data-target="dropdown2"><i className="material-icons left">assignment_ind</i>Login<i className="material-icons right">arrow_drop_down</i></a></li>
                                <li><a href="/" id="logout" onClick={handleLogout}><i className="material-icons left">lock</i>Logout</a></li>
                                <li><a className="dropdown-trigger" href="#!" data-target="dropdown1"><i className="material-icons left">assignment</i>Register<i className="material-icons right">arrow_drop_down</i></a></li>
                            </ul>
                            </div>
                        </nav>
                    </header>
                </div>
            </React.Fragment>    
        )
    }
} 
