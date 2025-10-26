// src/App.js
import React from 'react';
import './App.css';

function App() {
  const projects = [
    {
      title: "Booky",
      description: "A full-stack web application for cataloging, sharing, and reviewing books. Features secure authentication, personal libraries, and social features with real-time UI updates. Integrates the Google Books API for metadata and cover art, with a PostgreSQL database managing complex user and book data across 30+ API endpoints.",
      tech: ["Java Spring Boot", "PostgreSQL", "React", "Google Books API"],
      link: "https://github.com/stepper1029/booky"
    },
    {
      title: "Time Off Tracker",
      description: "Company-wide time-off management application serving 120 employees at Van Dyk Recycling Solutions. Architected SQL schema with 10+ major tables to handle employee rosters, leave history, and audit logs. Automated administrative workflows using Microsoft's Power Platform, saving employees 5+ hours weekly and improving operational efficiency.",
      tech: ["Microsoft SQL Server", "Microsoft Power Platform", "Power Apps"],
      link: null
    },
    {
      title: "Portfolio Website",
      description: "Responsive portfolio website showcasing projects and skills with modern web standards. Features dynamic content and a consistent, adaptable interface optimized for both desktop and mobile users without losing functionality.",
      tech: ["React", "CSS", "JavaScript"],
      link: "https://github.com/stepper1029/portfolio"
    }
  ];

  return (
      <div className="app-container">

        {/* Name */}
        <h2 className="name">OLIVIA STEPPER</h2>

        {/* Social Links */}
        <div className="social-links">
          <a
              href="https://www.linkedin.com/in/olivia-stepper"
              target="_blank"
              rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
          >
            RESUME
          </a>
        </div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Software engineer based in NYC</h1>
            <h1>Designing impactful software solutions</h1>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <div className="projects-container">
            <h2>Projects</h2>

            <div className="projects-list">
              {projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <div className="project-left">
                      <h3>{project.title}</h3>
                      <div className="tech-tags">
                        {project.tech.map((tech, i) => (
                            <span key={i} className="tech-tag">
        {tech}
      </span>
                        ))}
                      </div>
                      {project.link && (
                          <a href={project.link} className="project-link">
                            View Project →
                          </a>
                      )}
                    </div>
                    <div className="project-right">
                      <p>{project.description}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-container">
            <div className="contact-left">
              <h2>Let's Connect</h2>
              <p>
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>
            <div className="contact-right">
              <a
                  href="mailto:olivian.stepper@gmail.com"
                  className="contact-button"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
  );
}

export default App;