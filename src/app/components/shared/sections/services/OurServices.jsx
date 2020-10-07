import React from 'react';
import ServiceItem from './ServiceItem';

const OurServices = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="row">

          <ServiceItem iconBoxClass="icon-box-pink" iconClass="bx bxl-dribbble" title="Lorem Ipsum" description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident" />
          <ServiceItem delay="100" iconBoxClass="icon-box-cyan" iconClass="bx bx-file" title="Sed ut perspiciatis" description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur" />
          <ServiceItem delay="200" iconBoxClass="icon-box-green" iconClass="bx bx-tachometer" title="Magni Dolores" description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" />
          <ServiceItem delay="200" iconBoxClass="icon-box-blue" iconClass="bx bx-world" title="Nemo Enim" description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque" />

        </div>
      </div>
    </section>
  );
}

export default OurServices;