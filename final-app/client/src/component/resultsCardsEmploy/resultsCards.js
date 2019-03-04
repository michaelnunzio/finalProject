import React from "react";


function ResultsCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong></strong> {props.company}
          </li>
          <li>
            <strong>Contact:</strong> {props.first} {props.last}
          </li>
          <li>
            <strong>Email:</strong> {props.email}
          </li>
          <li>
            <strong>Location:</strong> New York
          </li>
          <li>
            <strong>Industry:</strong> {props.industry}
          </li>
        </ul>
      </div>
      <span>
      </span>
    </div>
  );
}

export default ResultsCard;

