import React, {Component} from "react";
import NavBar from '../nav/navBar'
import axios from 'axios';


export default class candPro extends Component{

    render(){
        return(
        <React.Fragment>
            <NavBar/>
                <h2>Edit Profile</h2>
        </React.Fragment>
        )
    }
}
