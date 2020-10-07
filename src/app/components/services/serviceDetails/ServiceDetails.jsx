import React from 'react';
import ServiceDetailsItem from './ServiceDetailsItem';

const ServiceDetails = () => {
  return (
    <section className="service-details">
      <div className="container">
        <div className="row">
          <ServiceDetailsItem title="Our Mission" imgURL={require("../../../../assets/img/service-details-1.jpg")} text="Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat" />
          <ServiceDetailsItem title="Our Plan" imgURL={require("../../../../assets/img/service-details-2.jpg")} text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo" />
          <ServiceDetailsItem title="Our Vision" imgURL={require("../../../../assets/img/service-details-3.jpg")} text="Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia magni dolores eos qui ratione voluptatem sequi nesciunt Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet" />
          <ServiceDetailsItem title="Our Care" imgURL={require("../../../../assets/img/service-details-4.jpg")} text="Nostrum eum sed et autem dolorum perspiciatis. Magni porro quisquam laudantium voluptatem. In molestiae earum ab sit esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil aut incidunt aut" />
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;