import React from 'react';

const FeaturesItem = (props) => {
  return (
    <div className="row" data-aos="fade-up">
      <div className={props.imgSide === "left" ? "col-md-5" : "col-md-5 order-1 order-md-2"}>
        <img src={props.imgURL} className="img-fluid" alt="" />
      </div>
      <div className={props.imgSide === "left" ? "col-md-7 pt-4" : "col-md-7 pt-5 order-2 order-md-1"}>
        <h3>{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
}

export default FeaturesItem;