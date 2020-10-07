import React from 'react';

const Home = () => {
  return (
    <React.Fragment>

      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top header-transparent">
        <div className="container">

          <div className="logo float-left">
            <h1 className="text-light"><a href="index.html"><span>Moderna</span></a></h1>
            {/* <!-- Uncomment below if you prefer to use an image logo --> */}
            {/* <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}
          </div>

          <nav className="nav-menu  float-right d-none d-lg-block">
            <ul>
              <li className="active"><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li className="drop-down"><a href="/">Drop Down</a>
                <ul>
                  <li><a href="/#">Drop Down 1</a></li>
                  <li className="drop-down"><a href="/#">Drop Down 2</a>
                    <ul>
                      <li><a href="/#">Deep Drop Down 1</a></li>
                      <li><a href="/#">Deep Drop Down 2</a></li>
                      <li><a href="/#">Deep Drop Down 3</a></li>
                      <li><a href="/#">Deep Drop Down 4</a></li>
                      <li><a href="/#">Deep Drop Down 5</a></li>
                    </ul>
                  </li>
                  <li><a href="/#">Drop Down 3</a></li>
                  <li><a href="/#">Drop Down 4</a></li>
                  <li><a href="/#">Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}

        </div>
      </header>
      {/* <!-- End Header --> */}

      {/* <!-- ======= Hero Section ======= --> */}
      <section id="hero" className="d-flex justify-cntent-center align-items-center">
        <div id="heroCarousel" className="container carousel carousel-fade" data-ride="carousel">

          {/* <!-- Slide 1 --> */}
          <div className="carousel-item active">
            <div className="carousel-container">
              <h2 className="animated fadeInDown">Welcome to <span>Moderna</span></h2>
              <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="/" className="btn-get-started animated fadeInUp">Read More</a>
            </div>
          </div>

          {/* <!-- Slide 2 --> */}
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animated fadeInDown">Lorem Ipsum Dolor</h2>
              <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="/" className="btn-get-started animated fadeInUp">Read More</a>
            </div>
          </div>

          {/* <!-- Slide 3 --> */}
          <div className="carousel-item">
            <div className="carousel-container">
              <h2 className="animated fadeInDown">Sequi ea ut et est quaerat</h2>
              <p className="animated fadeInUp">Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.</p>
              <a href="/" className="btn-get-started animated fadeInUp">Read More</a>
            </div>
          </div>

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
      {/* <!-- End Hero --> */}

      <main id="main">

        {/* <!-- ======= Services Section ======= --> */}
        <section className="services">
          <div className="container">

            <div className="row">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
                <div className="icon-box icon-box-pink">
                  <div className="icon"><i className="bx bxl-dribbble"></i></div>
                  <h4 className="title"><a href="/">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
                <div className="icon-box icon-box-cyan">
                  <div className="icon"><i className="bx bx-file"></i></div>
                  <h4 className="title"><a href="/">Sed ut perspiciatis</a></h4>
                  <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box icon-box-green">
                  <div className="icon"><i className="bx bx-tachometer"></i></div>
                  <h4 className="title"><a href="/">Magni Dolores</a></h4>
                  <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
                <div className="icon-box icon-box-blue">
                  <div className="icon"><i className="bx bx-world"></i></div>
                  <h4 className="title"><a href="/">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>

            </div>

          </div>
        </section>
        {/* <!-- End Services Section --> */}

        {/* <!-- ======= Why Us Section ======= --> */}
        <section className="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
          <div className="container">

            <div className="row">
              <div className="col-lg-6 video-box">
                <img src={require("../../assets/img/why-us.jpg")} className="img-fluid" alt="" />
                <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox hide-text play-btn mb-4" data-vbtype="video" data-autoplay="true">""</a>
              </div>

              <div className="col-lg-6 d-flex flex-column justify-content-center p-5">

                <div className="icon-box">
                  <div className="icon"><i className="bx bx-fingerprint"></i></div>
                  <h4 className="title"><a href="/">Lorem Ipsum</a></h4>
                  <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>

                <div className="icon-box">
                  <div className="icon"><i className="bx bx-gift"></i></div>
                  <h4 className="title"><a href="/">Nemo Enim</a></h4>
                  <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>

              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Why Us Section --> */}

        {/* <!-- ======= Features Section ======= --> */}
        <section className="features">
          <div className="container">

            <div className="section-title">
              <h2>Features</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img src={require("../../assets/img/features-1.svg")} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7 pt-4">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
          </p>
                <ul>
                  <li><i className="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                </ul>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img src={require("../../assets/img/features-2.svg")} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">
                <h3>Corporis temporibus maiores provident</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
          </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
          </p>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5">
                <img src={require("../../assets/img/features-3.svg")} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7 pt-5">
                <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                <ul>
                  <li><i className="icofont-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="icofont-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="icofont-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                </ul>
              </div>
            </div>

            <div className="row" data-aos="fade-up">
              <div className="col-md-5 order-1 order-md-2">
                <img src={require("../../assets/img/features-4.svg")} className="img-fluid" alt="" />
              </div>
              <div className="col-md-7 pt-5 order-2 order-md-1">
                <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                <p className="font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
          </p>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
          </p>
              </div>
            </div>

          </div>
        </section>
        {/* <!-- End Features Section --> */}

      </main>
      {/* <!-- End #main --> */}

      {/* <!-- ======= Footer ======= --> */}
      <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

        <div className="footer-newsletter">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
              </div>
              <div className="col-lg-6">
                <form action="" method="post">
                  <input type="email" name="email" /><input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-top">
          <div className="container">
            <div className="row">

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Home</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">About us</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Services</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Terms of service</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Privacy policy</a></li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Web Design</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Web Development</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Product Management</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Marketing</a></li>
                  <li><i className="bx bx-chevron-right"></i> <a href="/#">Graphic Design</a></li>
                </ul>
              </div>

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

        <div className="container">
          <div className="copyright">
            &copy; Copyright <strong><span>Moderna</span></strong>. All Rights Reserved
    </div>
          <div className="credits">
            {/* <!-- All the links in the footer should remain intact. --> */}
            {/* <!-- You can delete the links only if you purchased the pro version. --> */}
            {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
            {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-bootstrap-template-corporate-moderna/ --> */}
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      {/* <!-- End Footer --> */}

      <a href="/#" className="back-to-top"><i className="icofont-simple-up"></i></a>

    </React.Fragment>

  );
}

export default Home;