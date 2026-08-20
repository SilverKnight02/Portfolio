import React, { useState } from 'react';
import './App.css';
import profile from './images/profile.jpeg';

// Simple data — edit these to update your content
const NAV_SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

const SKILLS = [
  { name: 'HTML', level: 95, color: '#fe00db', icon: '📝' },
  { name: 'CSS', level: 85, color: '#5000fe', icon: '🎨' },
  { name: 'JavaScript', level: 60, color: '#00bdfe', icon: '🤖' },
  { name: 'React', level: 60, color: '#00fe3c', icon: '⚛️' },
  { name: 'UI/UX Design', level: 60, color: '#ffffff', icon: '🎨' },
  { name: 'Python', level: 40, color: '#ff4d5e', icon: '🐍' },
  { name: 'Java', level: 40, color: '#e1fe00', icon: '☕' },
  { name: 'Git & GitHub', level: 70, color: '#00fed4', icon: '🐈‍⬛' },
  { name: 'Visual Studio', level: 90, color: '#ff4d5e', icon: '⚙️' },
  { name: 'Prompt Engineering', level: 75, color: '#fe8300', icon: '⚙️' }
];

const PROJECTS = [
  {
    title: 'Portfolio Website',
    description: 'Responsive personal portfolio built to showcase my skills and projects.',
    tech: ['React', 'CSS'],
    emoji: '💻',
    githubLink: 'https://github.com/SilverKnight02/Portfolio',
    liveLink: 'https://silverknight02.github.io/Portfolio/'
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
            <div className="skill-icon">{skill.icon}</div>
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
              <span className="project-emoji">{project.emoji}</span>
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
          <div className="logo">✦ PORTFOLIO</div>
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
