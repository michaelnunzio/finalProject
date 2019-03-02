import React, { Component } from 'react';

export default class NavBar extends Component {

    render() {
        return (
       <div className="wrapper">
      <header>
         
          <ul id="dropdown1" class="dropdown-content">
              <li><a href="/register/employer">Register as Employer</a></li>
              <li class="divider"></li>
              <li><a href="/register/candidate">Register as Job Seeker</a></li>
          </ul>
          <ul id="dropdown2" class="dropdown-content">
              <li><a href="/login/employer">Login as Employer</a></li>
              <li class="divider"></li>
              <li><a href="/login/candidate">Login as Job Seeker</a></li>
          </ul>
          <nav>
              <div class="nav-wrapper">
              <a href="/" class="brand-logo"><i class="material-icons">cloud</i>JobHuntr</a>
              <ul class="right hide-on-med-and-down">
                  <li><a href="/"><i class="material-icons left">home</i>Home</a></li>
                  
                  <li><a class="dropdown-trigger" href="#!" data-target="dropdown2"><i class="material-icons left">assignment_ind</i>Login<i class="material-icons right">arrow_drop_down</i></a></li>
                  <li><a href="'/logout'"><i class="material-icons left">lock</i>Logout</a></li>
                  <li><a class="dropdown-trigger" href="#!" data-target="dropdown1"><i class="material-icons left">assignment</i>Register<i class="material-icons right">arrow_drop_down</i></a></li>

              </ul>
              </div>
          </nav>
      </header>
    </div>
        )
    }
  }
  