import React from "react";
import "./homepage.css";

function homePage(){
    return(
        <div class="jumbotron center">
            <div class="container">
                <h1 class="display-3">Welcome to JobHuntr</h1>
                <p>With JobHuntr we made you job easy to search for an opportunity. Swipe left or right, just
                    like Tinder, on the job you like. In order to get started, please login!
                </p>
                <p><a class="btn btn-primary btn-lg" href="/" role="button">Learn more &raquo;</a></p>
            </div>
        </div>
    )
}

export default homePage;