import React from 'react';

const ServiceDetailsItem = (props) => {
  return (
    <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
      <div className="card">
        <div className="card-img">
          <img src={props.imgURL} alt="..." />
        </div>
        <div className="card-body">
          <h5 className="card-title"><a href="/services/#">{props.title}</a></h5>
          <p className="card-text">{props.text}</p>
          <div className="read-more"><a href="/services/#"><i className="icofont-arrow-right"></i> Read More</a></div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetailsItem;