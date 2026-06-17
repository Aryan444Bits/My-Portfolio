import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';

function App() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("baranwalaryan33@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="portfolio">
      <GalaxyBackground />
      <Navbar />

      <main className="main-content">
        {/* HERO SECTION */}
        <section id="home" className="hero">
          <div className="hero-content glass-card">
            <div className="hero-badge">Available for Opportunities</div>
            <h1 className="reveal-text">Aryan Baranwal</h1>
            <div className="reveal-subtext">
              <Typewriter
                options={{
                  strings: [
                    'Full Stack Web Developer',
                    'MERN Specialist',
                    'Java Developer',
                    'Open Source Contributor'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </div>
            
            <div className="contact-bar">
              <button onClick={copyEmail} className="contact-btn email-btn">
                <span className="btn-icon">📧</span>
                <span className="btn-text">{copied ? 'Email Copied!' : 'Copy Email'}</span>
              </button>
              
              <a href="https://github.com/aryan444bits" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <svg className="svg-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>GitHub</span>
              </a>
              
              <a href="https://www.linkedin.com/in/aryan-baranwal-12a1b8301/" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <svg className="svg-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a href="/FAANGPath_Simple_Template.pdf" download="Aryan_Baranwal_Resume.pdf" className="contact-btn download-btn">
                <span className="btn-icon">📄</span>
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          <div className="scroll-indicator" onClick={() => document.getElementById('education').scrollIntoView({ behavior: 'smooth' })}>
            <span className="scroll-text">Explore Journey</span>
            <div className="mouse">
              <div className="wheel"></div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="section">
          <div className="content">
            <span className="label">// Education</span>
            <h2>Academic Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <span className="timeline-date">2023 – 2027</span>
                  <h3>Babu Banarasi Das Northern India Institute of Technology</h3>
                  <p className="timeline-sub">B.Tech in Computer Science and Engineering</p>
                  <p className="timeline-desc">Specializing in systems development, core algorithms, and enterprise software engineering. Maintaining a solid foundation in computer science principles.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <span className="timeline-date">2025</span>
                  <h3>Sheryians Coding School</h3>
                  <p className="timeline-sub">Full Stack Web Development Bootcamp</p>
                  <p className="timeline-desc">Acquired hands-on engineering experience building scalable backend architectures, complex UI layers, and RESTful database systems.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="content">
            <span className="label">// Technical Arsenal</span>
            <h2>Expertise</h2>
            <div className="skills-grid">
              <div className="skill-card glass-card">
                <div className="skill-card-icon">💻</div>
                <h3>Languages</h3>
                <div className="tech-tags">
                  <span className="tech-pill">Java</span>
                  <span className="tech-pill">JavaScript (ES6+)</span>
                  <span className="tech-pill">SQL</span>
                  <span className="tech-pill">HTML5</span>
                  <span className="tech-pill">CSS3</span>
                </div>
              </div>

              <div className="skill-card glass-card">
                <div className="skill-card-icon">🎨</div>
                <h3>Frontend</h3>
                <div className="tech-tags">
                  <span className="tech-pill">React.js</span>
                  <span className="tech-pill">Tailwind CSS</span>
                  <span className="tech-pill">Bootstrap</span>
                  <span className="tech-pill">DOM</span>
                  <span className="tech-pill">Vite</span>
                </div>
              </div>

              <div className="skill-card glass-card">
                <div className="skill-card-icon">⚙️</div>
                <h3>Backend</h3>
                <div className="tech-tags">
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">Express.js</span>
                  <span className="tech-pill">JWT</span>
                  <span className="tech-pill">OAuth</span>
                  <span className="tech-pill">REST APIs</span>
                </div>
              </div>

              <div className="skill-card glass-card">
                <div className="skill-card-icon">🗄️</div>
                <h3>Databases</h3>
                <div className="tech-tags">
                  <span className="tech-pill">MongoDB</span>
                  <span className="tech-pill">MySQL</span>
                  <span className="tech-pill">DB Design</span>
                </div>
              </div>

              <div className="skill-card glass-card">
                <div className="skill-card-icon">🛠️</div>
                <h3>Tools</h3>
                <div className="tech-tags">
                  <span className="tech-pill">Git</span>
                  <span className="tech-pill">Docker</span>
                  <span className="tech-pill">Kubernetes</span>
                  <span className="tech-pill">Postman</span>
                  <span className="tech-pill">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="content">
            <span className="label">// Experience</span>
            <h2>Professional Path</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <span className="timeline-date">Jan 2026 – Mar 2026</span>
                  <div className="exp-header">
                    <h3>Full Stack Development Intern</h3>
                    <span className="company-tag">IBM PBEL</span>
                  </div>
                  <ul className="exp-details">
                    <li>Engineered a production-grade full-stack e-commerce web application using MERN stack with Razorpay payment gateway integration and 3+ microservices for modular scalability.</li>
                    <li>Designed Redis caching, reducing average API response time by 40% and decreasing database query load by 60%.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <span className="timeline-date">Nov 2025 – Dec 2025</span>
                  <div className="exp-header">
                    <h3>Full Stack Development Intern</h3>
                    <span className="company-tag">CodeTech IT Solutions</span>
                  </div>
                  <ul className="exp-details">
                    <li>Architected and deployed 5+ React and Node.js modules used cross client projects, improving feature delivery timelines by 20%.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="content">
            <span className="label">// Projects</span>
            <h2>Nebula Works</h2>
            <div className="grid">
              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Backend System</span>
                  <h3>Zorvyn-Assignment</h3>
                  <p>Finance Data Processing & Access Control Backend built with MERN stack. Features secure JWT authentication and role-based access.</p>
                  <div className="project-tech">
                    <span className="tech-tag">MERN Stack</span>
                    <span className="tech-tag">JWT</span>
                    <span className="tech-tag">Express.js</span>
                    <span className="tech-tag">MongoDB</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/Zorvyn-Assignment" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                </div>
              </div>

              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Artificial Intelligence</span>
                  <h3>Crop Advisory & Yield Prediction</h3>
                  <p>AI-powered Agricultural Advice system built for hackathons to predict crop yield using machine learning.</p>
                  <div className="project-tech">
                    <span className="tech-tag">ML Models</span>
                    <span className="tech-tag">Flask</span>
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">Python</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/Last-Night-Coder_Ai-Crop-Advisory---Yeild-Prediction-System" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                  <a href="https://ai-crop-advisory-yeild-prediction-system.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn-sm btn-live">Live Demo</a>
                </div>
              </div>

              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Natural Language Processing</span>
                  <h3>Short-Term-Memory-ChatBot</h3>
                  <p>AI assistant for student management, simplifying access to courses, timetables, and results.</p>
                  <div className="project-tech">
                    <span className="tech-tag">NLP</span>
                    <span className="tech-tag">OpenAI API</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Express</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/Short-Term-Memory-ChatBot" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                </div>
              </div>

              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Web Multimedia</span>
                  <h3>Moody Music Player</h3>
                  <p>Full-stack web application that plays music based on selected mood using YouTube Data API.</p>
                  <div className="project-tech">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">YouTube API</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">Tailwind</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/Moody-Music-Player-Full_Stack_Project-" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                  <a href="https://moody-music-aryan.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-sm btn-live">Live Demo</a>
                </div>
              </div>

              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Developer Reference</span>
                  <h3>Backend-Journey</h3>
                  <p>A hands-on repository documenting deep learning in Node.js, Express, and REST APIs.</p>
                  <div className="project-tech">
                    <span className="tech-tag">REST APIs</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">Security</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/Backend-Journey" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                </div>
              </div>

              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Conversational AI</span>
                  <h3>AI-Chat-Bot</h3>
                  <p>ChatGPT-clone built for learning conversational AI interactions and prompt engineering.</p>
                  <div className="project-tech">
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">Gemini API</span>
                    <span className="tech-tag">CSS Grid</span>
                    <span className="tech-tag">Node.js</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/AI-Chat-Bot" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                  <a href="https://ai-chat-bot-smrg.onrender.com" target="_blank" rel="noopener noreferrer" className="btn-sm btn-live">Live Demo</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT & TRANSMISSION SECTION */}
        <section id="contact" className="section">
          <div className="content central glass-card">
            <span className="label">// Transmission</span>
            <h2>Let's build the future.</h2>
            <p className="contact-pitch">
              I am always excited to collaborate on new systems engineering tasks, full-stack web architectures, or open-source initiatives. Let's start a conversation.
            </p>
            <div className="contact-links">
              <button onClick={copyEmail} className="btn contact-action-btn">
                <span>{copied ? '✓ Email Copied' : '📧 Copy Email Address'}</span>
              </button>
              <a 
                href="https://www.linkedin.com/in/aryan-baranwal-12a1b8301/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn secondary contact-action-btn"
              >
                <span>🔗 LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="portfolio-footer">
        <div className="footer-content">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Aryan Baranwal. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/aryan444bits" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/aryan-baranwal-12a1b8301/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;