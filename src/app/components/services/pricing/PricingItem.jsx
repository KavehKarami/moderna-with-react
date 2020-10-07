import React from 'react';

const PricingItem = (props) => {
  return (
    <div className={`col-lg-4 ${props.className}`}>
      <h3>{props.mode}</h3>
      <h4>${props.cost}<span>{props.payDuration}</span></h4>
      {props.children}
      <a href="/services/#" className="get-started-btn">Get Started</a>
    </div>
  );
}

export default PricingItem;