import React from 'react';
import PortfolioContainer from './PortfolioContainer';
import PortfolioFilter from './PortfolioFilter';

const PortfolioMain = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <PortfolioFilter />
        <PortfolioContainer />
      </div>
    </section>
  );
}

export default PortfolioMain;