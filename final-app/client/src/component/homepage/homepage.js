import React, {Component} from "react";
import NavBar from "../nav/navBar"
import "./homepage.css";
// import Image from './pictures/picFive.png'
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
                {/* <img className='imgUno' src={Image}/> */}
                <div className="center homeJtron">
                    <div className="container-fluid">
                    {/* <div class="row"> */}
                    {/* <div className='col l6 offset-l6 disCont'> */}
                        <h1 className="display-3 jHin">Welcome to JobHuntr</h1>

                        <ul>With JobHuntr we make your job search easy with unlimited opportunities</ul>
                        <ul>Swipe left or right, on the job you like!</ul> 
                        <ul>In order to get started, please login!</ul> 
                        
                        <p><a className="btn btn1" href="/" role="button">Sign Up</a></p>
                    {/* </div> */}
                    {/* </div> */}
                    </div>
                </div>
                
                <div className='row word'>
                    <div className='col l6 offset-l3'>
                        <div className='word2'><i>Swipe</i></div> 
                    </div>
                </div>
            </React.Fragment>

        )
    }
}
