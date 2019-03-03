import React, {Component} from "react";
import NavBar from "../nav/navBar"
import "./homepage.css";
import axios from 'axios';




export default class HomePage extends Component{

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

        // const styleLogout = this.state.showMenu ? {} : {display: 'none'};
        const otherBtn = this.state.showMenu ? {display: 'none'} : {};

        return(
            <React.Fragment>
                <NavBar/>

                <div className="jumbotron center homeJtron">
                    <div className="container">
                        <h1 className="display-3 jHin">Welcome to JobHuntr</h1>


                        <ul>With JobHuntr we make your job search easy with unlimited opportunities</ul>
                        <ul>Swipe left or right, on the job you like!</ul> 
                        <ul style={otherBtn}>In order to get started, please login!</ul> 
                        
                        <p><a className="btn btn1" href="/register/employer" role="button" style={otherBtn}>Sign Up as Employer</a>
                        <a className="btn btn1" href="/register/candidate" role="button" style={otherBtn}>Sign Up as Job Seeker</a></p>

                    </div>
                </div>
            </React.Fragment>

        )
    }
}
