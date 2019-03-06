import React from "react";
import "./register.css";
import NavBar from "../nav/navBar";



function register(){
    return(
      
        <React.Fragment>
        <NavBar/>

            
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
        <div className="container">
            <form className="form-signin" method="post" action="/register/candidate">
                <h1 className="h3 mb-3 font-weight-normal">Employee Registration</h1>
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
                <label htmlFor="inputTitle" className="sr-only">Title</label>
                <input type="text" name="Title" id="inputTitle" className="form-control" placeholder="Title" />
                <label htmlFor="inputDescription" className="sr-only">Description/background</label>
                <input type="text" name="Description" id="inputDescription" className="form-control" placeholder="Description" />
                <label htmlFor="inputTechnologies" className="sr-only">Technologies</label>
                <input type="text" name="Technologies" id="inputTechnologies" className="form-control" placeholder="Technologies" />
                <label htmlFor="inputGithub" className="sr-only">Github/Portfolio</label>
                <input type="text" name="Github" id="inputGithub" className="form-control" placeholder="Github/Portfolio" autofocus/>
                <label htmlFor="inputProject" className="sr-only">Last 2 Employers or Favorite Projects</label>
                <input type="text" name="Project" id="inputProject" className="form-control" placeholder="Last 2 Employers or Projects" autofocus/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>
        </div>
        </React.Fragment>
    );
}

export default register;