import React from 'react';
import Features from '../components/home/features/Features'
import HeroMain from '../components/home/heroSlider/HeroMain';
import Services from '../components/shared/sections/services/Services';
import WhyUs from '../components/shared/sections/whyUs/WhyUs';

const Home = () => {
  return (
    <React.Fragment>
      <HeroMain />

      <main id="main">
        <Services />
        <WhyUs />
        <Features />
      </main>

    </React.Fragment>

  );
}

export default Home;