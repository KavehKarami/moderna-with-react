import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioContainer = () => {
  return (
    <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
      <PortfolioItem className="filter-app" title="App 1" imgURL={require("../../../assets/img/portfolio/portfolio-1.jpg")} />
      <PortfolioItem className="filter-web" title="Web 3" imgURL={require("../../../assets/img/portfolio/portfolio-2.jpg")} />
      <PortfolioItem className="filter-app" title="App 2" imgURL={require("../../../assets/img/portfolio/portfolio-3.jpg")} />
      <PortfolioItem className="filter-card" title="Card 2" imgURL={require("../../../assets/img/portfolio/portfolio-4.jpg")} />
      <PortfolioItem className="filter-web" title="Web 2" imgURL={require("../../../assets/img/portfolio/portfolio-5.jpg")} />
      <PortfolioItem className="filter-app" title="App 3" imgURL={require("../../../assets/img/portfolio/portfolio-6.jpg")} />
      <PortfolioItem className="filter-card" title="Card 1" imgURL={require("../../../assets/img/portfolio/portfolio-7.jpg")} />
      <PortfolioItem className="filter-card" title="Card 3" imgURL={require("../../../assets/img/portfolio/portfolio-8.jpg")} />
      <PortfolioItem className="filter-web" title="Web 1" imgURL={require("../../../assets/img/portfolio/portfolio-9.jpg")} />
    </div>
  );
}

export default PortfolioContainer;