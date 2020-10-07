import React from 'react';

const ServiceItem = (props) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={props.delay || "0"}>
      <div className={`icon-box ${props.iconBoxClass}`}>
        <div className="icon"><i className={props.iconClass}></i></div>
        <h4 className="title"><a href="/">{props.title}</a></h4>
        <p className="description">{props.description}</p>
      </div>
    </div>
  );
}

export default ServiceItem;