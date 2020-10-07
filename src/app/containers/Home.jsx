import React from 'react';
import HeroMain from '../components/heroSlider/HeroMain';
import Features from '../components/shared/sections/features/Features';
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

      <a href="/#" className="back-to-top"><i className="icofont-simple-up"></i></a>
    </React.Fragment>

  );
}

export default Home;