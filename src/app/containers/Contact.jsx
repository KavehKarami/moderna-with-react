import React from 'react';
import GoogleMap from '../components/contact/GoogleMap';
import Information from '../components/contact/Information';
import Form from '../components/shared/Form';
import Breadcrumb from "../components/shared/sections/Beadcrumb"

const Contact = () => {
  return (
    <main id="main">
      <Breadcrumb name="Contact" />

      <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
        <div class="container">
          <div class="row">

            <div class="col-lg-6">
              <div class="row">
                <Information className="col-md-12" classIcon="bx-map" title="Our Address" text={<p>A108 Adam Street, New York, NY 535022</p>} />
                <Information classIcon="bx-envelope" title="Email Us" text={<p>info@example.com<br />contact@example.com</p>} />
                <Information classIcon="bx-phone-call" title="Call Us" text={<p>+1 5589 55488 55<br />+1 6678 254445 41</p>} />
              </div>
            </div>

            <div class="col-lg-6">
              <Form formClassName="php-email-form" btnClassName="text-center" btnText="Send Message">

                <div class="form-row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div class="validate"></div>
                  </div>

                  <div class="col-md-6 form-group">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div class="validate"></div>
                  </div>
                </div>

                <div class="form-group">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                  <div class="validate"></div>
                </div>

                <div class="form-group">
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                  <div class="validate"></div>
                </div>

                <div class="mb-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>

              </Form>

            </div>
          </div>
        </div>
      </section>

      <GoogleMap />
    </main >

  );
}

export default Contact;