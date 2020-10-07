import React from 'react';
import PortfolioMain from '../components/portfolio/PortfolioMain';
import Breadcrumb from '../components/shared/sections/Beadcrumb';

const Portfolio = () => {
  return (
    <main id="main">
      <Breadcrumb name="Our Portfolio" />
      <PortfolioMain />
    </main>

  );
}

export default Portfolio;