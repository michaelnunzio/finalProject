import React from "react";
import "./homepage.css";
import NavBar from '../navbar/navBar';

function homePage(){
    return(
        <React.Fragment>
            <NavBar/>
            <div className="jumbotron center">
                <div className="container">
                    <h1 className="display-3">Welcome to JobHuntr</h1>
                    <p>With JobHuntr we made you job easy to search for an opportunity. Swipe left or right, just
                        like Tinder, on the job you like. In order to get started, please login!
                    </p>
                    <p><a className="btn btn-primary btn-lg" href="#!" role="button">Learn more &raquo;</a></p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default homePage;