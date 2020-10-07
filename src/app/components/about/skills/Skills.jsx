import React from 'react';
import SkillsContentItem from './SkillsContentItem';
import SkillsTitle from './SkillsTitle';

const Skills = () => {
  return (
    <section className="skills" data-aos="fade-up">
      <div className="container">

        <SkillsTitle />

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