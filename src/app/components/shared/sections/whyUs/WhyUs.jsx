import React from 'react';
import IconBox from '../../IconBox';

const WhyUs = () => {
  return (
    <section className="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
      <div className="container">

        <div className="row">
          <div className="col-lg-6 video-box">
            <img src={require('../../../../../assets/img/why-us.jpg')} className="img-fluid" alt="" />
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox text-hide play-btn mb-4" data-vbtype="video" data-autoplay="true">asd</a>
          </div>

          <div className="col-lg-6 d-flex flex-column justify-content-center p-5">
            <IconBox iconClass="bx bx-fingerprint" title="Lorem Ipsum" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
            <IconBox iconClass="bx bx-gift" title="Nemo Enim" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;