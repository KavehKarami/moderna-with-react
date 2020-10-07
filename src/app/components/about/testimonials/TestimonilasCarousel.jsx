import React from 'react';
import TestimonilasItem from './TestimonilasItem';

const TestimonilasCarousel = () => {
  return (
    <div className="owl-carousel testimonials-carousel">
      <TestimonilasItem name="Saul Goodman" job="Ceo &amp; Founder" imgURL={require("../../../../assets/img/testimonials/testimonials-1.jpg")} >
        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
      </TestimonilasItem>

      <TestimonilasItem name="Sara Wilsson" job="Designer" imgURL={require("../../../../assets/img/testimonials/testimonials-2.jpg")} >
        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
      </TestimonilasItem>

      <TestimonilasItem name="Jena Karlis" job="Store Ownerr" imgURL={require("../../../../assets/img/testimonials/testimonials-3.jpg")} >
        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
      </TestimonilasItem>

      <TestimonilasItem name="Matt Brandon" job="Freelancer" imgURL={require("../../../../assets/img/testimonials/testimonials-4.jpg")} >
        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
      </TestimonilasItem>

      <TestimonilasItem name="John Larson" job="Entrepreneur" imgURL={require("../../../../assets/img/testimonials/testimonials-5.jpg")} >
        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
      </TestimonilasItem>
    </div>
  );
}

export default TestimonilasCarousel;