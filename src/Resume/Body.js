import React from 'react';
import styles from './Body.less';
import skill from '../resume.config/skill.md';
import workExperience from '../resume.config/workExperience.md';
import projectExperience from '../resume.config/projectExperience.md';
import Section from './Section';

const [left, right] = projectExperience.split('<hr>');

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
