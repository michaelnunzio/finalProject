import React from "react";
import "./register.css";

function register(){
    return(
        <div className="container">
            <form class="form-signin">
                <h1 class="h3 mb-3 font-weight-normal">Register as a Candidate</h1>
                <label for="inputFirstName" class="sr-only">First Name</label>
                <input type="text" name="FirstName" id="inputFirstName" class="form-control" placeholder="First Name" required autofocus/>
                <label for="inputLastName" class="sr-only">Last Name</label>
                <input type="text" name="LastName" id="inputLastName" class="form-control" placeholder="Last Name" required autofocus/>
                <label for="inputEmail" class="sr-only">Email address</label>
                <input type="email" name="Email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                <label for="inputPassword" class="sr-only">Password</label>
                <input type="password" name="Password" id="inputPassword" class="form-control" placeholder="Password" required/>
                <label for="inputTitle" class="sr-only">Title</label>
                <input type="text" name="Title" id="inputTitle" class="form-control" placeholder="Title" required autofocus/>
                <label for="inputDescription" class="sr-only">Description/background</label>
                <input type="text" name="Description" id="inputDescription" class="form-control" placeholder="Description" required autofocus/>
                <label for="inputTechnologies" class="sr-only">Technologies</label>
                <input type="text" name="Technologies" id="inputTechnologies" class="form-control" placeholder="Technologies" required autofocus/>
                <label for="inputGithub" class="sr-only">Github/Portfolio</label>
                <input type="text" name="Github" id="inputGithub" class="form-control" placeholder="Github/Portfolio" autofocus/>
                <label for="inputProject" class="sr-only">Last 2 Employers or Favorite Projects</label>
                <input type="text" name="Project" id="inputProject" class="form-control" placeholder="Last 2 Employers or Projects" autofocus/>
                <button class="btn btn-lg btn-primary btn-block" type="submit">Submit</button>
                <p class="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>
        </div>
    );
}

export default register;