import React from 'react';

const Form = (props) => {
  return (
    <form class={props.className}>
      {props.children}
      <div class="text-center"><button type="submit">Send Message</button></div>
    </form>
  );
}

export default Form;