import React from 'react';
import AboutCompany from '../components/about/AboutCompany';
import Fact from '../components/about/fact/Fact';
import Skills from '../components/about/skills/Skills';
import Testimonilas from '../components/about/testimonials/Testimonilas';
import Breadcrumb from '../components/shared/sections/Beadcrumb';

const About = () => {
  return (
    <main id="main">
      <Breadcrumb name="About Us" />

      <AboutCompany />

      <Fact />

      <Skills />

      <Testimonilas />

    </main>
  );
}

export default About;