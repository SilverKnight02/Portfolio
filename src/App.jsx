import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';
import profile from './images/profile.png';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('dark');

  const sections = [
    { id: 'about', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Set initial theme on body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      boxShadow: "0 20px 40px rgba(138, 43, 226, 0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    },
    tap: {
      scale: 0.95
    }
  };

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const pageVariants = {
    initial: { 
      opacity: 0,
      x: -50,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      x: 50,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      y: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut"
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      scale: {
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  const renderContent = () => {
    switch(activeSection) {
      case 'about':
        return (
          <motion.div
            key="about"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section-content"
          >
            <motion.h2 variants={itemVariants}>About Me</motion.h2>
            
            <div className="about-content">
              <motion.div 
                className="profile-card"
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
                animate={floatingAnimation}
              >
                <img className="profile-image" src={profile}></img>

                <motion.h3 
                  variants={itemVariants}
                  animate={pulseAnimation}
                >
                  S.SAIPARANSOTHI
                </motion.h3>
                <motion.p 
                  className="role"
                  variants={itemVariants}
                >
                  Front End Developer
                </motion.p>
              </motion.div>
              
              <motion.div 
                className="about-text"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  Highly skilled front-end developer with a passion for crafting responsive, user-friendly interfaces. Proficient in HTML, CSS, JavaScript, and modern frameworks like React. Dedicated to delivering high-quality solutions that exceed expectations.
                </motion.p>

                <motion.button
                        href="https://github.com/SilverKnight02"  // Add your project URL here
                        target="_blank"  // Opens in new tab
                        rel="noopener noreferrer"  // Security for external links
                        className="project-link github "
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 5px 15px rgba(138, 43, 226, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                </motion.button>  
                
                {/* <motion.p variants={itemVariants}>
                  My journey in tech started with a Computer Science degree and has evolved through various roles in startups and tech companies. I love turning complex problems into simple, beautiful designs.
                </motion.p> */}
                
                {/* <motion.div 
                  className="stats"
                  variants={containerVariants}
                >
                  {[
                    { value: '50+', label: 'Projects' },
                    { value: '5+ Years', label: 'Experience' },
                    { value: '100%', label: 'Satisfaction' }
                  ].map((stat, index) => (
                    <motion.div 
                      key={index}
                      className="stat"
                      variants={cardVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <motion.h4 
                        animate={{
                          scale: [1, 1.2, 1],
                          transition: {
                            delay: index * 0.2,
                            duration: 0.5
                          }
                        }}
                      >
                        {stat.value}
                      </motion.h4>
                      <p>{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div> */}
              </motion.div>
            </div>
          </motion.div>
        );
      
      case 'skills':
        const skills = [
          { name: 'HTML', level: 95, color: '#61DAFB', icon: '📝' },
          { name: 'CSS', level: 85, color: '#FF6B6B', icon: '🎨' },
          { name: 'JAVA SCRIPT', level: 70, color: '#68A063', icon: '🤖' },
          { name: 'REACT', level: 70, color: '#FFD166', icon: '⚛️' },
          { name: 'PYTHON', level: 40, color: '#118AB2', icon: '🐍' },
          { name: 'JAVA', level: 40, color: '#F15BB5', icon: '☕' },
          { name: 'GIT & GITHUB', level: 75, color: 'purple', icon: '🐈‍⬛' },
          { name: 'VISUAL STUDIO', level: 90, color: 'blue', icon: '⚙️' },
          { name: 'PROMPT ENGINEERING', level: 75, color: 'RED', icon: '⚙️' },
        ];

        return (
          <motion.div
            key="skills"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section-content"
          >
            <motion.h2 variants={itemVariants}>My Skills</motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="section-description"
            >
              I specialize in modern web technologies and have extensive experience across the front end.
            </motion.p>
            
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  className="skill-card"
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div 
                    className="skill-icon"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      transition: {
                        delay: index * 0.2,
                        duration: 0.5
                      }
                    }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3>{skill.name}</h3>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress" 
                      variants={skillBarVariants}
                      custom={skill.level}
                      initial="hidden"
                      animate="visible"
                      style={{ backgroundColor: skill.color }}
                    />
                  </div>
                  <motion.span 
                    className="skill-level"
                    animate={{
                      scale: [1, 1.2, 1],
                      transition: {
                        delay: 1 + index * 0.1,
                        duration: 0.3
                      }
                    }}
                  >
                    {skill.level}%
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 'projects':
        const projects = [
          // {
          //   title: 'E-Commerce Platform',
          //   description: 'A full-featured online shopping platform with React frontend and Node.js backend',
          //   tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
          //   emoji: '🛒',
          //   liveLink:  ,
          //   githubLink:
          // },
          // {
          //   title: 'Task Management App',
          //   description: 'Collaborative task management application with real-time updates',
          //   tech: ['React', 'Firebase', 'Material-UI'],
          //   emoji: '📋'
          // },
          // {
          //   title: 'Weather Dashboard',
          //   description: 'Real-time weather application with interactive maps and forecasts',
          //   tech: ['React', 'OpenWeather API', 'Chart.js'],
          //   emoji: '☁️'
          // },
          {
            title: 'Portfolio Website',
            description: 'Responsive portfolio website with 3D animations and dark theme',
            tech: ['React', 'Three.js', 'Framer Motion'],
            emoji: '💻'
          }
        ];

        return (
          <motion.div
            key="projects"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section-content"
          >
            <motion.h2 variants={itemVariants}>My Projects</motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="section-description"
            >
              Here are some of my recent projects that showcase my skills and experience.
            </motion.p>
            
            <div className="projects-grid">
              {projects.map((project, index) => (
                <motion.div 
                  key={project.title}
                  className="project-card"
                  variants={cardVariants}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                  transition={{ delay: index * 0.15 }}
                >
                  <motion.div 
                    className="project-image"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div 
                      className="project-emoji"
                      animate={floatingAnimation}
                    >
                      {project.emoji}
                    </motion.div>
                  </motion.div>
                  
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    
                    <div className="project-tech">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={tech}
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* <div className="project-links">
                      <motion.button 
                        className="project-link"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 5px 15px rgba(138, 43, 226, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                      </motion.button>
                      <motion.button 
                        className="project-link secondary"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Code
                      </motion.button>
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      
      case 'contact':
        return (
          <motion.div
            key="contact"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="section-content"
          >
            <motion.h2 variants={itemVariants}>Get In Touch</motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="section-description"
            >
              Have a project in mind? Let's work together to bring your ideas to life.
            </motion.p>
            
            <div className="contact-grid">
              <motion.div 
                className="contact-info"
                variants={containerVariants}
              >
                {[
                  { icon: '📧', title: 'Email', text: 'saiparansothi02@gmail.com',path:"mailto:saiparansothi02@gmail.com" },
                  { icon: '📱', title: 'Phone', text: '+91 6383369005' },
                  { icon: '📍', title: 'LinkedIn', text: 'https://www.linkedin.com/in/saiparansothi/',link: 'https://www.linkedin.com/in/saiparansothi/'  }
                ].map((info, index) => (
                  <motion.div 
                    key={info.title}
                    className="info-card"
                    variants={cardVariants}
                    whileHover="hover"
                    whileTap="tap"
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div 
                      className="info-icon"
                      animate={pulseAnimation}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <h3>{info.title}</h3>
                      {info.title === 'Email' ? (
                         <a href="mailto:saiparansothi02@gmail.com" style={{color: 'inherit', textDecoration: 'none'}}>
                          {info.text}
                        </a>
                        ) : (
                      <p>{info.text}</p>
                        )}
                    </div>
                  </motion.div>
                ))}
                
                <motion.div 
                  className="availability"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.div 
                    className="status-dot"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                      transition: {
                        repeat: Infinity,
                        duration: 2
                      }
                    }}
                  />
                  <span>Available for freelance work</span>
                </motion.div>
              </motion.div>
              
              <motion.form 
                href="mailto:"
                className="contact-form"
                variants={itemVariants}
              >
                {[
                  { label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                  { label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                  { label: 'Your Message', type: 'textarea', placeholder: 'Tell me about your project...' }
                ].map((field, index) => (
                  <motion.div 
                    key={field.label}
                    className="form-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <label>{field.label}</label>
                    {field.type === 'textarea' ? (
                      <motion.textarea
                        placeholder={field.placeholder}
                        rows="4"
                        whileFocus={{ 
                          scale: 1.02,
                          borderColor: "var(--primary)",
                          boxShadow: "0 0 0 3px rgba(138, 43, 226, 0.1)"
                        }}
                      />
                    ) : (
                      <motion.input
                        type={field.type}
                        placeholder={field.placeholder}
                        whileFocus={{ 
                          scale: 1.02,
                          borderColor: "var(--primary)",
                          boxShadow: "0 0 0 3px rgba(138, 43, 226, 0.1)"
                        }}
                      />
                    )}
                  </motion.div>
                ))}
                
                <motion.button 
                  type="submit" 
                  className="submit-btn"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(138, 43, 226, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    background: [
                      'linear-gradient(45deg, var(--primary), var(--secondary))',
                      'linear-gradient(45deg, var(--secondary), var(--primary))',
                      'linear-gradient(45deg, var(--primary), var(--secondary))'
                    ],
                    transition: {
                      duration: 3,
                      repeat: Infinity
                    }
                  }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        );
      
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div className={`app ${theme}`}>
      <div className="portfolio-container">
        <motion.header 
          className="header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="logo"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              textShadow: [
                "0 0 0px rgba(138, 43, 226, 0)",
                "0 0 20px rgba(138, 43, 226, 0.5)",
                "0 0 0px rgba(138, 43, 226, 0)"
              ],
              transition: {
                duration: 2,
                repeat: Infinity
              }
            }}
          >
            PORTFOLIO
          </motion.div>
          
          <nav className="nav-buttons">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => setActiveSection(section.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.1,
                  y: -3,
                  boxShadow: "0 10px 20px rgba(138, 43, 226, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
          </nav>
          
          <motion.button 
            className="theme-toggle" 
            onClick={toggleTheme}
            whileHover={{ 
              rotate: 180,
              scale: 1.1,
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
            animate={floatingAnimation}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </motion.button>
        </motion.header>
        
        <main className="main-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="section-wrapper"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>
        
        <motion.footer 
          className="footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="social-links">
  {[
    { icon: '🐈‍⬛', link: 'https://github.com/SilverKnight02' },
    { icon: '💼', link: 'https://www.linkedin.com/in/saiparansothi/' },
    { icon: '📧', link: 'mailto:saiparansothi02@gmail.com?subject=Portfolio Inquiry' }
  ].map((social, index) => (
    <motion.a 
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ 
        scale: 1.2,
        y: -5,
        rotate: 10
      }}
      whileTap={{ scale: 0.9 }}
      animate={{
        y: [0, -5, 0],
        transition: {
          delay: index * 0.2,
          duration: 1,
          repeat: Infinity
        }
      }}
    >
      {social.icon}
    </motion.a>
  ))}
</div>
          <motion.p 
            className="copyright"
            animate={{
              opacity: [0.7, 1, 0.7],
              transition: {
                duration: 2,
                repeat: Infinity
              }
            }}
          >
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </motion.p>
        </motion.footer>
      </div>
    </div>
  );
}

export default App;