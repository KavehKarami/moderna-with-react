import React from 'react';
import SectionTitle from '../../shared/sections/SectionTitle';
import PricingItem from './PricingItem';

const Pricing = () => {
  return (
    <section className="pricing section-bg" data-aos="fade-up">
      <div className="container">

        <SectionTitle title="Pricing" description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />

        <div className="row no-gutters">
          <PricingItem className="box" mode="Free" cost="0" duration="per month" >
            <ul>
              <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
              <li className="na"><i className="bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
              <li className="na"><i className="bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
            </ul>
          </PricingItem>

          <PricingItem className="box featured" mode="Business" cost="29" duration="per month" >
            <ul>
              <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
              <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
              <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
            </ul>
          </PricingItem>

          <PricingItem className="box" mode="Developer" cost="49" duration="per month" >
            <ul>
              <li><i className="bx bx-check"></i> Quam adipiscing vitae proin</li>
              <li><i className="bx bx-check"></i> Nec feugiat nisl pretium</li>
              <li><i className="bx bx-check"></i> Nulla at volutpat diam uteera</li>
              <li><i className="bx bx-check"></i> Pharetra massa massa ultricies</li>
              <li><i className="bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
            </ul>
          </PricingItem>

        </div>
      </div>
    </section>
  );
}

export default Pricing;