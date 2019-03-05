import React from "react";
import './sideNav.css'


function CompSideNav() {
  return (
  <React.Fragment>
  <ul id="slide-out" className="sidenav sidenav-fixed">
  <li><a href="/compProfile/PeopleCard">Swipe!</a></li>
  <li><a href="/compProfile/results">Matches</a></li>
  <li><a href="/editCprofile">Edit Profile</a></li>

  </ul>
<a href="#" data-target="slide-out" class="sidenav-trigger"></a>;
</React.Fragment>
  )
}

export default CompSideNav;
