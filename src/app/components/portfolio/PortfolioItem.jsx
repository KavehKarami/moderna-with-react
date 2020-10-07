import React from 'react';

const PortfolioItem = (props) => {
  return (
    <div className={`col-lg-4 col-md-6 ${props.className}`}>
      <div className="portfolio-item">
        <img src={props.imgURL} className="img-fluid" alt="" />
        <div className="portfolio-info">
          <h3><a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title={props.title}>{props.title}</a></h3>
          <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title={props.title}><i className="icofont-plus"></i></a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;