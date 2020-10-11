import React from 'react';

const FormGroup = (props) => {
  return (
    <div className={`${props.className} form-group`}>
      {props.children}
      <div className="validate"></div>
    </div>
  );
}

export default FormGroup;