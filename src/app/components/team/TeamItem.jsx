import React from 'react';

const TeamItem = (props) => {
  return (
    <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
      <div class="member">
        <div class="member-img">
          <img src={props.imgURL} class="img-fluid" alt="" />
          <div class="social">
            <a href=""><i class="icofont-twitter"></i></a>
            <a href=""><i class="icofont-facebook"></i></a>
            <a href=""><i class="icofont-instagram"></i></a>
            <a href=""><i class="icofont-linkedin"></i></a>
          </div>
        </div>
        <div class="member-info">
          <h4>{props.person}</h4>
          <span>{props.job}</span>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamItem;