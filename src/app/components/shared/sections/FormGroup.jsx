import React from 'react';

const FormGroup = (props) => {
  return (
    <div class={`${props.className} form-group`}>
      {props.children}
      <div class="validate"></div>
    </div>
  );
}

export default FormGroup;