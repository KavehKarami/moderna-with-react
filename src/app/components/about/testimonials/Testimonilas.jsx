import React from 'react';
import TestimonilasCarousel from './TestimonilasCarousel';
import TestimonilasTitle from './TestimonilasTitle';

const Testimonilas = () => {
  return (
    <section className="testimonials" data-aos="fade-up">
      <TestimonilasTitle />
      <div className="container">
        <TestimonilasCarousel />
      </div>
    </section>
  );
}

export default Testimonilas;