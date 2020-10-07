import React from 'react';
import FactItem from './FactItem';

const Fact = () => {
  return (
    <section className="facts section-bg" data-aos="fade-up">
      <div className="container">
        <div className="row counters">
          <FactItem counter="232" name="Clients" />
          <FactItem counter="521" name="Projects" />
          <FactItem counter="1,463" name="Hours Of Support" />
          <FactItem counter="15" name="Hard Workers" />
        </div>
      </div>
    </section>
  );
}

export default Fact;