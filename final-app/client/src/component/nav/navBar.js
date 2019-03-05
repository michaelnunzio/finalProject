import React, {Component} from "react";
import "./navBar.css";
import logo from './images/LogoMakr_4T9LLy.png'; // Tell Webpack this JS file uses this image
import axios from 'axios';


function handleLogout(){
    axios.get('/logout').then(function(data){
        console.log(data);
        console.log('logged out');
    })
}

export default class NavBar extends Component{

    constructor(){
        super();

        this.state = {
            showMenu: false
        };
    }

    componentWillMount(){
        axios.get('/auth/user').then((data)=>{
            this.setState({showMenu: data.data.auth})
            console.log('nav button status: '+this.state.showMenu);
        })
    }

    render(){

        const styleLogout = this.state.showMenu ? {} : {display: 'none'};
        const otherBtn = this.state.showMenu ? {display: 'none'} : {};

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
                        <a href="/" className="brand-logo"><img className="responsive-img jHlogo" alt='logo' src={logo} /></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="/"><i className="material-icons left">home</i>Home</a></li>                    
                            <li><a className="dropdown-trigger" href="/" data-target="dropdown2" style={otherBtn}><i className="material-icons left">assignment_ind</i>Login<i className="material-icons right">arrow_drop_down</i></a></li>
                            <li><a href="/" id="logout" onClick={handleLogout} style={styleLogout}><i className="material-icons left">lock</i>Logout</a></li>
                            <li><a className="dropdown-trigger" href="/" data-target="dropdown1" style={otherBtn}><i className="material-icons left">assignment</i>Register<i className="material-icons right">arrow_drop_down</i></a></li>

                        </ul>
                        </div>
                    </nav>
                </header>
                </div>
        </React.Fragment>
        )
    }
}
