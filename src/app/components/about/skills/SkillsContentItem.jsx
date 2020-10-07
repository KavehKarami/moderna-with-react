import React from 'react';

const SkillsContent = (props) => {
  return (
    <div className="skills-content">

      <div className="progress">
        <div className={`progress-bar ${props.bgClass}`} role="progressbar" aria-valuenow={props.value} aria-valuemin="0" aria-valuemax="100">
          <span className="skill">{props.skill} <i className="val">{props.value}%</i></span>
        </div>
      </div>

    </div>
  );
}

export default SkillsContent;