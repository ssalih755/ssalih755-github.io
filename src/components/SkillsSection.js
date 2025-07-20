import React from 'react';
import WorkCard from './WorkCard';
import '../styles/SkillsSection.css';

function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      {/* <h2>Skills</h2> */}
      <div className="cards-grid">
        <WorkCard className="skill-card"
          title="Skills"
          description="Java • Spring Boot • REST APIs • React • JavaScript • Bootstrap • HTML • CSS • Git • SQL • PostgreSQL • Microsoft SQL Server

          Cross-functional • Communication • Leadership • Quality Assurance • Problem Solving"
        />
        {/* <WorkCard className="skill-card"
          title="Skills"
          description="Cross-functional • Communication • Leadership • Quality Assurance • Problem Solving"
        /> */}

      </div>
    </section>
  );
}

export default SkillsSection;
