import React from 'react';
import Copyright from '../shared/Copyright';
import FooterLinks from './footer/FooterLinks';

const Footer = () => {
  return (
    <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

      <div className="footer-newsletter">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h4>Our Newsletter</h4>
              <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            </div>
            <div className="col-lg-6">
              <form method="post">
                <input type="email" name="email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-top">
        <div className="container">
          <div className="row">
            <FooterLinks title="Useful Links" >
              {["Home", "About us", "Services", "Terms of service", "Privacy policy"]}
            </FooterLinks>

            <FooterLinks title="Our Services" >
              {["Web Design", "Web Development", "Product Management", "Marketing", "Graphic Design"]}
            </FooterLinks>

            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022<br />
                United States <br /><br />
                <strong>Phone:</strong> +1 5589 55488 55<br />
                <strong>Email:</strong> info@example.com<br />
              </p>

            </div>

            <div className="col-lg-3 col-md-6 footer-info">
              <h3>About Moderna</h3>
              <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
              <div className="social-links mt-3">
                <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
                <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
                <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Copyright />
    </footer>

  );
}

export default Footer;