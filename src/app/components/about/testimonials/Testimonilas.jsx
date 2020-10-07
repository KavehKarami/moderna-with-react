import React from 'react';
import SectionTitle from '../../shared/sections/SectionTitle';
import TestimonilasCarousel from './TestimonilasCarousel';

const Testimonilas = () => {
  return (
    <section className="testimonials" data-aos="fade-up">
      <SectionTitle title="Tetstimonials" description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
      <div className="container">
        <TestimonilasCarousel />
      </div>
    </section>
  );
}

export default Testimonilas;