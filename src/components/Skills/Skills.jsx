import React from 'react';
import './skills.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';

const skillGroups = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'Python', 'C#', 'SQL'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Next.js', 'FastAPI', 'Node.js'],
  },
  {
    title: 'Testing',
    skills: ['Selenium', 'Playwright', 'Cypress', 'Cucumber/BDD'],
  },
  {
    title: 'CI/CD',
    skills: ['GitHub Actions', 'Azure DevOps'],
  },
  {
    title: 'Tools',
    skills: ['Jira', 'Docker', 'REST APIs', 'OAuth 2.0'],
  },
  {
    title: 'AI / ML',
    skills: ['Claude API', 'Prompt Engineering', 'LLM Integration'],
  },
  {
    title: 'Certifications',
    skills: ['Certified Scrum Master (CSM)', 'ISTQB CTFL (in progress)'],
  },
];

const Skills = () => {
  return (
    <section id="Skills">
      <h5>What I Work With</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        {skillGroups.map(({ title, skills }) => (
          <div className="skills__group" key={title}>
            <h3>{title}</h3>
            <div className="skills__content">
              {skills.map((skill) => (
                <article className="skills__details" key={skill}>
                  <BsFillPatchCheckFill className="skills__detail-icon" />
                  <h4>{skill}</h4>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
