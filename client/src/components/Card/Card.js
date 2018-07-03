import React from "react";

const Card = props => (
  <div className="card mt-4">
    <div className="card-header">
      <h3>
        <strong>
          <i className={`fa fa-${props.icon}`} aria-hidden="true" />{" "}
          {props.title}
        </strong>
      </h3>
    </div>
    <div className="card-body">{props.children}</div>
  </div>
);

export default Card;
