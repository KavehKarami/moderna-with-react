import React from 'react';
import GoogleMap from '../components/contact/GoogleMap';
import Information from '../components/contact/Information';
import Loading from '../components/contact/Loading';
import Form from '../components/shared/Form';
import Breadcrumb from "../components/shared/sections/Beadcrumb"
import FormGroup from '../components/shared/sections/FormGroup';

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
                  <FormGroup className="col-md-6">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  </FormGroup>

                  <FormGroup className="col-md-6">
                    <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  </FormGroup>
                </div>

                <FormGroup>
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                </FormGroup>

                <FormGroup>
                  <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                </FormGroup>

                <Loading />

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