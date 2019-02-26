import React, {Component} from "react";
// import "./userProfile.css";
import NavBar from "../navbar/navBar";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    signout(cb){
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
}

// login = () => {
//     fakeAuth.isAuthenticated(() => {
//         this.setState({redirectToReferrer: true});
//     });
// };

export default class companyHomePage extends Component{

    state = {
        redirectToReferrer: false,
        isAuthenticated: false
    }

    componentDidMount(){
        
    }

    render(){

        // if(!fakeAuth.isAuthenticated) {
        //     // return <Redirect to = '/' />
        // }

        return(
            <React.Fragment>
                <NavBar />
                <div className="jumbotron center">
                    <div className="container">
                        <h1 className="display-3">Welcome Company</h1>
                        <p>Welcome to your company profile
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

// export default companyHomePage;