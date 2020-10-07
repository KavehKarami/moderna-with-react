import React from 'react';

const TestimonilasItem = (props) => {
  return (
    <div className="testimonial-item">
      <img src={props.imgURL} className="testimonial-img" alt="" />
      <h3>{props.name}</h3>
      <h4>{props.job}</h4>
      <p>
        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
        {props.children}
        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
      </p>
    </div>
  );
}

export default TestimonilasItem;