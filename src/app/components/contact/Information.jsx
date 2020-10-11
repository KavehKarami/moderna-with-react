import React from 'react';

const Information = (props) => {
  return (
    <div className={props.className || "col-md-6"}>
      <div className="info-box">
        <i className={`bx ${props.classIcon}`}></i>
        <h3>{props.title}</h3>
        {props.text}
      </div>
    </div>
  );
}

export default Information;