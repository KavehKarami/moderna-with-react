import React from 'react';
import AboutCompany from '../components/about/AboutCompany';
import Fact from '../components/about/fact/Fact';
import Breadcrumb from '../components/shared/sections/Beadcrumb';

const About = () => {
  return (
    <main id="main">
      <Breadcrumb name="About Us" />

      <AboutCompany />

      <Fact />


      <section className="skills" data-aos="fade-up">
        <div className="container">

          <div className="section-title">
            <h2>Our Skills</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="skills-content">

            <div className="progress">
              <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                <span className="skill">HTML <i className="val">100%</i></span>
              </div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                <span className="skill">CSS <i className="val">90%</i></span>
              </div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <span className="skill">JavaScript <i className="val">75%</i></span>
              </div>
            </div>

            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                <span className="skill">Photoshop <i className="val">55%</i></span>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className="testimonials" data-aos="fade-up">
        <div className="container">

          <div className="section-title">
            <h2>Tetstimonials</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="owl-carousel testimonials-carousel">

            <div className="testimonial-item">
              <img src={require("../../assets/img/testimonials/testimonials-1.jpg")} className="testimonial-img" alt="" />
              <h3>Saul Goodman</h3>
              <h4>Ceo &amp; Founder</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>

            <div className="testimonial-item">
              <img src={require("../../assets/img/testimonials/testimonials-2.jpg")} className="testimonial-img" alt="" />
              <h3>Sara Wilsson</h3>
              <h4>Designer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>

            <div className="testimonial-item">
              <img src={require("../../assets/img/testimonials/testimonials-3.jpg")} className="testimonial-img" alt="" />
              <h3>Jena Karlis</h3>
              <h4>Store Owner</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>

            <div className="testimonial-item">
              <img src={require("../../assets/img/testimonials/testimonials-4.jpg")} className="testimonial-img" alt="" />
              <h3>Matt Brandon</h3>
              <h4>Freelancer</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>

            <div className="testimonial-item">
              <img src={require("../../assets/img/testimonials/testimonials-5.jpg")} className="testimonial-img" alt="" />
              <h3>John Larson</h3>
              <h4>Entrepreneur</h4>
              <p>
                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;