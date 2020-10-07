import React from 'react';
import IconBox from '../../IconBox';

const ServiceItem = (props) => {
  return (
    <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={props.delay || "0"}>
      <IconBox iconBoxClass={props.iconBoxClass} iconClass={props.iconClass} title={props.title} description={props.description} />
    </div>
  );
}

export default ServiceItem;