import React from 'react';
import Features from '../components/home/features/Features'
import HeroMain from '../components/home/heroSlider/HeroMain';
import OurServices from '../components/shared/sections/services/OurServices';
import WhyUs from '../components/shared/sections/whyUs/WhyUs';

const Home = () => {
  return (
    <React.Fragment>
      <HeroMain />

      <main id="main">
        <OurServices />
        <WhyUs />
        <Features />
      </main>

    </React.Fragment>

  );
}

export default Home;