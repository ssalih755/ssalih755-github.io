import React from 'react';
import WorkCard from './WorkCard';
import '../styles/ProjectsSection.css';

function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="cards-grid">
        <WorkCard className="project-card"
          title="Cake Ordering Website"
          description="A full-stack web application for customers to browse cakes, customize selections, and place pickup orders online. Built with React for the frontend and Axios 
          for API integration. Backend developed using Java and Spring Boot with a PostgreSQL database to manage products, orders, and user accounts securely. Implements a 
          service-based architecture, React Context for state management, and reusable components for a smooth checkout and order summary experience. Includes user authentication, 
          secure API endpoints, and transaction logging for reliability.A full-stack site for browsing and ordering custom cakes. Built with React, Java, Spring Boot, PostgreSQL."
        />
        <WorkCard className="project-card"
          title="Personal Portfolio Website"
          description="A fully responsive portfolio site built with React and CSS to showcase my development projects and technical skills. 
          Implements modern UI features like custom radial gradients, draggable project cards with react-draggable, and clean component architecture. Focused on maintainable code, reusable components, and an engaging user experience."
        />
        <WorkCard className="project-card"
          title="Vending Machine App"
          description="A fully functional console-based vending machine built with Java. This project handles product inventory from an input file, accepts customer payments, 
          dispenses items, calculates change, and securely logs all transactions. It restocks automatically on each run and is thoroughly tested with JUnit to ensure robust 
          performance."
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
