import React from "react";
import WorkCard from "./WorkCard";
import "../styles/ProjectsSection.css";

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="cards-grid">
        <WorkCard
          className="project-card"
          title="Cake Ordering Website"
          description={
            <>
              <strong>Description: </strong> <br /> <br />
              A full-stack web application that allows customers to browse
              cakes, customize selections, and place pickup orders online. It
              features a smooth checkout flow, reusable components, user
              authentication, secure API endpoints, and transaction logging for
              reliability.
              <br /> <br />
              <strong>Tech Stack</strong>
              <br /> <br />
              <strong>Frontend:</strong> React, React Context, Axios
              <br /> <br />
              <strong>Backend:</strong> Java, Spring Boot
              <br /> <br />
              <strong>Database:</strong> PostgreSQL
              <br /> <br />
              <strong>Architecture:</strong> Service-based
              <br /> <br />
              <strong>Other Features:</strong> Reusable components, secure API,
              user authentication, transaction logging
            </>
          }
        />
        <WorkCard
          className="project-card"
          title="Personal Portfolio Website"
          description={
            <>
              <strong>Description:</strong>
              <br />
              <br />
              A fully responsive website built to showcase my development
              projects and technical background. Designed with a focus on clean
              component architecture and maintainable code.
              <br />
              <br />
              <strong>Frontend:</strong> React and CSS
              <br />
              <br />
              <strong>Other Features: </strong>
              Custom radial gradients, draggable project cards using{" "}
              react-draggable, reusable components, and smooth user interactions
              for an engaging layout that reflects both technical skills and
              design sensibility.
            </>
          }
        />
        <WorkCard
          className="project-card"
          title="Vending Machine CLI App"
          description={
            <>
              <strong>Description:</strong>
              <br />
              <br />
              A Java-based console application that simulates a vending machine.
              It manages inventory from an input file, accepts payments,
              dispenses items, calculates change, and logs transactions
              securely. Automatically restocks on each run for consistent
              testing and use.
              <br />
              <br />
              <strong>BackEnd:</strong>
              <br />
              Java, File I/O, Object-Oriented Programming (OOP), Exception
              Handling
              <br />
              <br />
              <strong>Other Features:</strong>
              <br />
              Automated restocking, transaction logging for audit trails, and
              robust unit testing using JUnit to ensure reliability and
              edge-case coverage.
            </>
          }
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
