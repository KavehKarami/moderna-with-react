import React from 'react';

const Information = (props) => {
  return (
    <div class={props.className || "col-md-6"}>
      <div class="info-box">
        <i class={`bx ${props.classIcon}`}></i>
        <h3>{props.title}</h3>
        {props.text}
      </div>
    </div>
  );
}

export default Information;