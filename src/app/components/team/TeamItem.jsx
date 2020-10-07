import React from 'react';

const TeamItem = (props) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div className="member">
        <div className="member-img">
          <img src={props.imgURL} className="img-fluid" alt="" />
          <div className="social">
            <a href="/team/#"><i className="icofont-twitter"></i></a>
            <a href="/team/#"><i className="icofont-facebook"></i></a>
            <a href="/team/#"><i className="icofont-instagram"></i></a>
            <a href="/team/#"><i className="icofont-linkedin"></i></a>
          </div>
        </div>
        <div className="member-info">
          <h4>{props.person}</h4>
          <span>{props.job}</span>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;