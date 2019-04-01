import React from "react";
import './sideNav.css'


function candSideNav() {
  return (
  <React.Fragment>
  <ul id="slide-out" className="sidenav sidenav-fixed">
  <li><a href="/userProfile/JobCard">Swipe!</a></li>
  <li><a href="/userProfile/results">Matches</a></li>
  <li><a href="/editProfile">Edit Profile</a></li>

  </ul>
<a href="#" data-target="slide-out" class="sidenav-trigger"></a>
</React.Fragment>
  )
}

export default candSideNav;
