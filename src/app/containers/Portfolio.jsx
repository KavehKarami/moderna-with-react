import React from 'react';

const Portfolio = () => {
  return (
    <main id="main">

      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Our Portfolio</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Our Portfolio</li>
            </ol>
          </div>

        </div>
      </section>

      <section className="portfolio">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <ul id="portfolio-flters">
                <li data-filter="*" className="filter-active">All</li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div className="row portfolio-container" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">

            <div className="col-lg-4 col-md-6 filter-app">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-1.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1">App 1</a></h3>
                  <a href="assets/img/portfolio/portfolio-1.jpg" data-gall="portfolioGallery" className="venobox" title="App 1"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 filter-web">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-2.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3">Web 3</a></h3>
                  <a href="assets/img/portfolio/portfolio-2.jpg" data-gall="portfolioGallery" className="venobox" title="Web 3"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 filter-app">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-3.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2">App 2</a></h3>
                  <a href="assets/img/portfolio/portfolio-3.jpg" data-gall="portfolioGallery" className="venobox" title="App 2"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 filter-card">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-4.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2">Card 2</a></h3>
                  <a href="assets/img/portfolio/portfolio-4.jpg" data-gall="portfolioGallery" className="venobox" title="Card 2"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 filter-web">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-5.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2">Web 2</a></h3>
                  <a href="assets/img/portfolio/portfolio-5.jpg" data-gall="portfolioGallery" className="venobox" title="Web 2"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 filter-app">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-6.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3">App 3</a></h3>
                  <a href="assets/img/portfolio/portfolio-6.jpg" data-gall="portfolioGallery" className="venobox" title="App 3"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 filter-card">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-7.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1">Card 1</a></h3>
                  <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox" title="Card 1"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 filter-card">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-8.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3">Card 3</a></h3>
                  <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox" title="Card 3"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 filter-web">
              <div className="portfolio-item">
                <img src={require("../../assets/img/portfolio/portfolio-9.jpg")} className="img-fluid" alt="" />
                <div className="portfolio-info">
                  <h3><a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 1">Web 1</a></h3>
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox" title="Web 1"><i className="icofont-plus"></i></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>

  );
}

export default Portfolio;