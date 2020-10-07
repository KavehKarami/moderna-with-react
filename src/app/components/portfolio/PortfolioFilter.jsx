import React from 'react';

const PortfolioFilter = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <ul id="portfolio-flters">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioFilter;