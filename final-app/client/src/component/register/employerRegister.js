import React from "react";
import "./register.css";
import NavBar from '../navbar/navBar';

function employerRegister(){
    return(
        <React.Fragment>
            <NavBar />
            <div className="container">
                <form className="form-signin" method="post" action="/register/employer">
                    <h1 className="h3 mb-3 font-weight-normal">Register as a Employer</h1>
                    <label htmlFor="inputFirstName" className="sr-only">First Name</label>
                    <input type="text" name="FirstName" id="inputFirstName" className="form-control" placeholder="First Name" required autoFocus/>
                    <label htmlFor="inputLastName" className="sr-only">Last Name</label>
                    <input type="text" name="LastName" id="inputLastName" className="form-control" placeholder="Last Name" required autoFocus/>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" name="Email" id="inputEmail" className="form-control" placeholder="Email address" />
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" name="Password" id="inputPassword" className="form-control" placeholder="Password" />
                    <label htmlFor="inputPassword2" className="sr-only"> Confirm Password</label>
                    <input type="password" name="Password2" id="inputPassword2" className="form-control" placeholder="Confirm Password"/>
                    <label htmlFor="inputCompany" className="sr-only">Company Name</label>
                    <input type="text" name="Company" id="inputCompany" className="form-control" placeholder="Company Name" />
                    <label htmlFor="inputIndustry" className="sr-only">Industry</label>
                    <input type="text" name="Industry" id="inputIndustry" className="form-control" placeholder="Industry" />
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
                </form>
            </div>
        </React.Fragment>
    );
}

export default employerRegister;