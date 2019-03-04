import React from "react";
import NavBar from "../nav/navBar"
import "./homepage.css";
// import Image from './pictures/picFive.png'




function HomePage(){
        return(
        <React.Fragment>
                <NavBar/>
                {/* <img className='imgUno' src={Image}/> */}
            <div className="jumbotron center homeJtron">
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



export default HomePage;