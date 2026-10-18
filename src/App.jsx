import React, { useState } from 'react';
import './App.css';
import profile from './images/profile.jpeg';
import html from './images/html.png';
import css from './images/css.png';
import js from './images/js.png';
import react from './images/react.png';
import ui from './images/ui.png';
import python from './images/python.png';
import java from './images/java.png';
import git from './images/git.png';
import vs from './images/vs.png';
import prompt from './images/prompt.png';
import power from './images/powerbi.png';
import sql from './images/sql.png';
import excel from './images/excel.png';
import project1 from './images/portfolio.png';
import project2 from './images/uiux.jpeg';
import resume from '../public/SaiparansothiResume.pdf';


// Simple data — edit these to update your content
const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const SKILLS = [
  { name: 'HTML', level: 95, color: '#fe00db', icon: html },
  { name: 'CSS', level: 85, color: '#5000fe', icon: css },
  { name: 'JavaScript', level: 60, color: '#00bdfe', icon: js },
  { name: 'React', level: 60, color: '#00fe3c', icon: react },
  { name: 'UI/UX Design', level: 60, color: '#ffffff', icon: ui },
  { name: 'Python', level: 40, color: '#ff4d5e', icon: python },
  { name: 'Java', level: 40, color: '#e1fe00', icon: java },
  { name: 'Git & GitHub', level: 70, color: '#00fed4', icon: git },
  { name: 'Visual Studio', level: 90, color: '#ff5d6e', icon: vs },
  { name: 'Prompt Engineering', level: 75, color: '#fe8300', icon: prompt },
  { name: 'Power Bi', level: 75, color: '#fe8300', icon: power },
  { name: 'SQL', level: 75, color: '#fe8300', icon: sql },
  { name: 'Excel', level: 75, color: '#fe8300', icon: excel },
];

const PROJECTS = [
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio built to showcase my skills and projects.',
    tech: ['React', 'CSS'],
    image: project1,
    githubLink: 'https://github.com/SilverKnight02/Portfolio',
    liveLink: 'https://silverknight02.github.io/Portfolio/'
  },

    {
    title: 'Personal Finance & Expense Tracker UI',
    description: 'A responsive mobile UI for a personal finance app, featuring daily routine tracking, detailed spending reports, and an easy-to-use expense entry system.',
    tech: ['Figma'],
    image: project2,
    // githubLink: 'https://github.com/SilverKnight02/Portfolio',
    liveLink: 'https://www.figma.com/proto/s6mq4WZU4yNogIpmeZ7qIr/Sample?node-id=0-1&t=nmB9vn7Ba5A4VTid-1'
  }
];

const CONTACT_INFO = [
  { title: 'Email', text: 'saiparansothi02@gmail.com', href: 'mailto:saiparansothi02@gmail.com', icon: '📧' },
  { title: 'Phone', text: '+91 6383369005', href: 'tel:+916383369005', icon: '📱' },
  { title: 'LinkedIn', text: 'linkedin.com/in/saiparansothi', href: 'https://www.linkedin.com/in/saiparansothi/', icon: '📍' }
];

function AboutSection() {
  return (
    <div className="section-content">
      <h2>About Me</h2>

      <div className="about-grid">
        <div className="profile-card">
          <img className="profile-image" src={profile} alt="S. Saiparansothi" />
          <h3>S. Saiparansothi</h3>
          <p className="role">Front End Developer</p>
          <a
            href="https://github.com/SilverKnight02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            🐈‍⬛ View GitHub
          </a>
        </div>

        <div className="about-text">
          <p>
            Front-end developer focused on building responsive, user-friendly interfaces.
            Comfortable with HTML, CSS, JavaScript and React, with a growing interest in
            AI-assisted development workflows.
          </p>
          <p>
            I care about clean structure and interfaces that are simple to use, and I enjoy
            turning ideas into working, polished products.
          </p>
          <a href={resume}
             download="SaiparansothiResume.pdf"
             className="btn btn-outline"
             >
              📝Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="section-content">
      <h2>My Skills</h2>
      <p className="section-description">
        Technologies and tools I work with regularly.
      </p>

      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div key={skill.name} className="skill-card" style={{ '--skill-color': skill.color }}>
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.name} icon`} />
            </div>
            <div className="skill-card-top">
              <h3>{skill.name}</h3>
              <span className="skill-level" style={{ color: skill.color }}>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%`, background: skill.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectsSection() {
  return (
    <div className="section-content">
      <h2>Projects</h2>
      <p className="section-description">
        A project that shows how I structure and build front-end interfaces.
      </p>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-banner">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-solid"
                >
                  🔗 Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  🐈‍⬛ View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <div className="section-content">
      <h2>Contact</h2>
      <p className="section-description">
        Have a project in mind? Reach out and let's talk about it.
      </p>

      <div className="contact-grid">
        <div className="contact-info">
          {CONTACT_INFO.map((info) => (
            <a key={info.title} href={info.href} target="_blank" rel="noopener noreferrer" className="info-card">
              <div className="info-icon">{info.icon}</div>
              <div>
                <h3>{info.title}</h3>
                <p>{info.text}</p>
              </div>
            </a>
          ))}

          <div className="availability">
            <span className="status-dot" />
            <span>Available for freelance work</span>
          </div>
        </div>

        <form
          className="contact-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="John Doe" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="john@example.com" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" rows="4" placeholder="Tell me about your project..." />
          </div>
          <button type="submit" className="btn btn-solid submit-btn">
            ✉️ Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/SilverKnight02" target="_blank" rel="noopener noreferrer" aria-label="GitHub">🐈‍⬛</a>
        <a href="https://www.linkedin.com/in/saiparansothi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">📍</a>
        <a href="mailto:saiparansothi02@gmail.com" aria-label="Email">📧</a>
      </div>
      <p className="copyright">© {new Date().getFullYear()} S. Saiparansothi. All rights reserved.</p>
    </footer>
  );
}

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <div className="portfolio-container">
        <header className="header">
          <div className="logo">PORTFOLIO</div>
          <nav className="nav-buttons">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section.id}
                className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </header>

        <main className="main-content" key={activeSection}>
          {renderContent()}
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
