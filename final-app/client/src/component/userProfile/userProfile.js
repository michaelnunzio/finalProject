import React from "react";
import "./userProfile.css";
import NavBar from '../navbar/navBar';

function homePage(){
    return(
        <React.Fragment>
            <NavBar />
            <div className="jumbotron center">
                <div className="container">
                    <h1 className="display-3">Welcome User</h1>
                    <p>Welcome to your profile
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default homePage;