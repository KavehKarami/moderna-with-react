import React from 'react';

const HeroItem = (props) => {
  return (
    <div className={`carousel-item ${props.className}`}>
      <div className="carousel-container">
        <h2 className="animated fadeInDown">{props.title}</h2>
        <p className="animated fadeInUp">{props.text}</p>
        <a href="/" className="btn-get-started animated fadeInUp">Read More</a>
      </div>
    </div>
  );
}

export default HeroItem;