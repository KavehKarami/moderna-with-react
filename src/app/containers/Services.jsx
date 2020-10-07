import React from 'react';
import Pricing from '../components/services/pricing/Pricing';
import ServiceDetails from '../components/services/serviceDetails/ServiceDetails';
import Breadcrumb from "../components/shared/sections/Beadcrumb"
import OurServices from "../components/shared/sections/services/OurServices"
import WhyUs from '../components/shared/sections/whyUs/WhyUs';

const Services = () => {
  return (
    <main id="main">

      <Breadcrumb name="Our Services" />

      <OurServices />

      <WhyUs />

      <ServiceDetails />

      <Pricing />

    </main>
  );
}

export default Services;