import React from "react";
import "./compHome.css";

function compHome(){
    return(
        <div class="jumbotron center">
            <div class="container">
                <h1 class="display-3">Welcome to your COMPANY profile Page</h1>

                <h2 class="display-6">you may edit your COMPANY profile here</h2>

                

                <p>Editing options are as follows</p>

                    <ol>Company Name</ol>
                    <ol>Address</ol>
                    <ol>E-mail</ol>
                    <ol>Phone Number</ol>
                    <ol>Job Listings</ol>
                    

                <p><a class="btn btn-primary btn-lg" href="/" role="button">Learn more &raquo;</a></p>
            </div>
        </div>
    )
}

export default compHome;