import React from 'react';

const Form = (props) => {
  return (
    <form class={props.formClassName}>
      {props.children}
      <div class={props.btnClassName}><button type="submit">{props.btnText}</button></div>
    </form>
  );
}

export default Form;