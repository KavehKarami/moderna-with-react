import React from 'react';
import HeroItem from './HeroItem';

const HeroMain = () => {
  return (
    <section id="hero" className="d-flex justify-cntent-center align-items-center">
      <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">

        <HeroItem className="active" title="Welcome to Moderna" text="Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto." />
        <HeroItem title="Lorem Ipsum Dolor" text="Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto." />
        <HeroItem title="Sequi ea ut et est quaerat" text="Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto." />

        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>

      </div>
    </section>
  );
}

export default HeroMain;