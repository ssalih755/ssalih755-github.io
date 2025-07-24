import React from 'react';
import '../styles/HeroSection.css';
import WorkCard from './WorkCard';

function HeroSection() {
  return (
    <section className="heroCard">
    <WorkCard
    title="Hello and Welcome!"
    description={
      <>
      I'm a Full Stack Java Developer with a proven background as a Software Quality Assurance Lead. I recently completed an intensive coding bootcamp at Tech Elevator, where I built full-stack applications using Java, Spring Boot, PostgreSQL, JavaScript, React, and Bootstrap.
    <br /><br />
    What sets me apart is my foundation in quality-first thinking. With years of experience leading QA efforts across production systems, I bring a deep understanding of how to build software that is robust, testable, and user-focused. I anticipate edge cases, design for maintainability, and approach development with a disciplined, collaborative mindset.
    <br /><br />
    In transitioning to a full-stack role, I've combined my strengths in testing, problem-solving, and team communication with hands-on development experience. My projects reflect not only technical ability but also a strong attention to detail and a commitment to delivering reliable, scalable solutions.
    <br /><br />
    If my background or work resonates with you, feel free to explore my portfolio or connect—I'm always open to thoughtful conversations about technology, development, and building better software.
    "
    </>
    }
    />
    </section>
  );
}

export default HeroSection;
