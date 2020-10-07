import React from 'react';
import SectionTitle from '../../shared/sections/SectionTitle';
import SkillsContentItem from './SkillsContentItem';

const Skills = () => {
  return (
    <section className="skills" data-aos="fade-up">
      <div className="container">

        <SectionTitle title="Our Skills" description="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />

        <div className="skills-content">
          <SkillsContentItem bgClass="bg-success" value="100" skill="REACT" />
          <SkillsContentItem bgClass="bg-info" value="60" skill="CSS" />
          <SkillsContentItem bgClass="bg-warning" value="70" skill="JavaScript" />
          <SkillsContentItem bgClass="bg-danger" value="40" skill="Photoshop" />
        </div>

      </div>
    </section>
  );
}

export default Skills;