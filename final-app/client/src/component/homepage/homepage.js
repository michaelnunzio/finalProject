import React from "react";
import NavBar from "../nav/navBar"
import "./homepage.css";




function HomePage(){
        return(
        <React.Fragment>
                <NavBar/>

                <div className="jumbotron center homeJtron">
                <div className="container">
                    <h1 className="display-3 jHin">Welcome to JobHuntr</h1>


                    <ul>With JobHuntr we make your job search easy with unlimited opportunities</ul>
                    <ul>Swipe left or right, on the job you like!</ul> 
                    <ul>In order to get started, please login!</ul> 
                    
                    <p><a className="btn btn1" href="/" role="button">Sign Up</a></p>
                </div>
            </div>
    </React.Fragment>

        )
    }



export default HomePage;