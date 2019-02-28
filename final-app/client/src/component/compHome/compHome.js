import React from "react";
import "./compHome.css";

function compHome(){
    return(
        <div class="jumbotron center">
            <div class="container">
                <h1 class="display-3">Welcome to your Company page</h1>

                <h2 class="display-6">you may edit your profile here</h2>

                

                <p>Editing options as follows</p>

                <p><a class="btn btn-primary btn-lg" href="/" role="button">Learn more &raquo;</a></p>
            </div>
        </div>
    )
}

export default compHome;