import React from 'react';

const Form = (props) => {
  return (
    <form className={props.formClassName}>
      {props.children}
      <div className={props.btnClassName}><button type="submit">{props.btnText}</button></div>
    </form>
  );
}

export default Form;