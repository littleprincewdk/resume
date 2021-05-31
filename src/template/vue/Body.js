import React from 'react';
import styles from './Body.less';
import skill from './config/skill.html';
import projectExperience from './config/projectExperience.html';
import workExperience from './config/workExperience.html';
import Section from './Section';

export default function Body() {
  return (
    <div className={styles.body}>
      <div className="row">
        <div className="col">
          <Section title="个人技能">{skill}</Section>
        </div>

        <div className="col">
          <Section title="工作经历">{workExperience}</Section>
        </div>
      </div>

      <Section title="项目经历">{projectExperience}</Section>
    </div>
  );
}
