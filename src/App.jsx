import React from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import GalaxyBackground from './components/GalaxyBackground';

function App() {
  return (
    <div className="portfolio">
      <GalaxyBackground />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="reveal-text">Aryan Baranwal</h1>
          <div className="reveal-subtext">
            <Typewriter
              options={{
                strings: [
                  'Full Stack Web Developer',
                  'MERN Specialist',
                  'Java Developer'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </div>
          <div className="contact-bar">
            <a href="mailto:baranwalaryan33@gmail.com">Email</a>
            <a href="https://github.com/aryan444bits" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/aryan-baranwal-12a1b8301/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/FAANGPath_Simple_Template.pdf" download="Aryan_Baranwal_Resume.pdf" className="download-btn">Resume</a>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section">
        <div className="content">
          <span className="label">// Education</span>
          <h2>Academic Journey</h2>
          <div className="edu-item">
            <h3>Babu Banarasi Das Northern India Institute of Technology</h3>
            <p className="sub">B.Tech in Computer Science and Engineering | 2023 – 2027</p>
          </div>
          <div className="edu-item">
            <h3>Sheryians Coding School</h3>
            <p className="sub">Full Stack Web Development Bootcamp | 2025</p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="content">
          <span className="label">// Technical Arsenal</span>
          <h2>Expertise</h2>
          <div className="skills-grid">
            <div className="skill-cat"><strong>Languages:</strong> Java, JavaScript (ES6+), SQL, HTML5, CSS3</div>
            <div className="skill-cat"><strong>Frontend:</strong> React.js, Tailwind CSS, Bootstrap, DOM</div>
            <div className="skill-cat"><strong>Backend:</strong> Node.js, Express.js, JWT, OAuth, REST APIs</div>
            <div className="skill-cat"><strong>Databases:</strong> MongoDB, MySQL, DB Design</div>
            <div className="skill-cat"><strong>Tools:</strong> Git, Docker, Kubernetes, Postman, Linux</div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section">
        <div className="content">
          <span className="label">// Experience</span>
          <h2>Professional Path</h2>
          <div className="exp-item">
            <div className="exp-header">
              <h3>Full Stack Development Head</h3>
              <span>GeeksforGeeks Chapter - BBDNIIT</span>
            </div>
            <ul>
              <li>Led 15+ developers building full-stack apps for 500+ students.</li>
              <li>Architected MERN event system reducing coordination time by 60%.</li>
            </ul>
          </div>
          <div className="exp-item">
            <div className="exp-header">              <h3>Freelance Developer</h3>
              <span>Self-Employed</span>
            </div>
            <ul>
              <li>Launched live e-commerce platform for fashion brand with secure checkout.</li>
              <li>Integrated payment gateways, reducing manual handling by 80%.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <div className="content">
          <span className="label">// Projects</span>
          <h2>Nebula Works</h2>
          <div className="grid">
            <div className="project-card">
              <div className="card-info">
                <h3>Zorvyn-Assignment</h3>
                <p>Finance Data Processing & Access Control Backend built with MERN stack. Features secure JWT authentication and role-based access.</p>
              </div>
              <div className="card-actions">
                <a href="https://github.com/Aryan444Bits/Zorvyn-Assignment" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub Repo</a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-info">
                <h3>Crop Advisory & Yield Prediction</h3>
                <p>AI-powered Agricultural Advice system built for hackathons to predict crop yield using machine learning.</p>
              </div>
              <div className="card-actions">
                <a href="https://github.com/Aryan444Bits/Last-Night-Coder_Ai-Crop-Advisory---Yeild-Prediction-System" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub Repo</a>
                <a href="https://ai-crop-advisory-yeild-prediction-system.onrender.com/" target="_blank" rel="noopener noreferrer" className="btn-sm btn-live">Live Demo</a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-info">
                <h3>Short-Term-Memory-ChatBot</h3>
                <p>AI assistant for student management, simplifying access to courses, timetables, and results.</p>
              </div>
              <div className="card-actions">
                <a href="https://github.com/Aryan444Bits/Short-Term-Memory-ChatBot" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub Repo</a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-info">
                <h3>Moody Music Player</h3>
                <p>Full-stack web application that plays music based on selected mood using YouTube Data API.</p>
              </div>
              <div className="card-actions">
                <a href="https://github.com/Aryan444Bits/Moody-Music-Player-Full_Stack_Project-" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub Repo</a>
                <a href="https://moody-music-aryan.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-sm btn-live">Live Demo</a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-info">
                <h3>Backend-Journey</h3>
                <p>A hands-on repository documenting deep learning in Node.js, Express, and REST APIs.</p>
              </div>
              <div className="card-actions">
                <a href="https://github.com/Aryan444Bits/Backend-Journey" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub Repo</a>
              </div>
            </div>
            <div className="project-card">
              <div className="card-info">
                <h3>AI-Chat-Bot</h3>
                <p>ChatGPT-clone built for learning conversational AI interactions and prompt engineering.</p>
              </div>
              <div className="card-actions">
                <a href="https://github.com/Aryan444Bits/AI-Chat-Bot" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub Repo</a>
                <a href="https://ai-chat-bot-smrg.onrender.com" target="_blank" rel="noopener noreferrer" className="btn-sm btn-live">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER / CONTACT */}
      <section className="section">
        <div className="content central">
          <span className="label">// Transmission</span>
          <h2>Let's build the future.</h2>
          <div className="contact-links">
            <a href="#" className="btn">Download Resume</a>
            <a href="https://www.linkedin.com/in/aryan-baranwal-12a1b8301/" target="_blank" className="btn secondary">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;