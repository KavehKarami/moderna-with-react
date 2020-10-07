import React from 'react';

const IconBox = (props) => {
  return (
    <div className={`icon-box ${props.iconBoxClass}`}>
      <div className="icon"><i className={props.iconClass}></i></div>
      <h4 className="title"><a href="/">{props.title}</a></h4>
      <p className="description">{props.description}</p>
    </div>
  );
}

export default IconBox;