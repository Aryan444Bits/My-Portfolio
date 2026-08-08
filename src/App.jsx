import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import './App.css';
import GalaxyBackground from './components/GalaxyBackground';
import Navbar from './components/Navbar';
import AIChatBot from './components/AIChatBot';

const SKILLS_DATA = {
  languages: {
    title: "Core Programming Languages",
    description: "Foundational syntaxes and paradigms utilized for systems architecture, logical engineering, and relational processing.",
    items: [
      {
        name: "Java",
        level: 5,
        levelText: "Advanced / Core Systems",
        desc: "Core Java, OOP principles, multi-threading, Servlet, JSP, JDBC, Spring Boot, Collections, and algorithmic performance.",
        projects: ["Grass Tech Intern", "Data Structures & Algorithms"],
        details: "Strong foundations in memory hierarchy, concurrency primitives, MVC architecture, and design patterns."
      },
      {
        name: "JavaScript (ES6+)",
        level: 5,
        levelText: "Advanced",
        desc: "Event-loop, asynchronous runtime patterns, DOM API architecture, closures, promises, and functional program flow.",
        projects: ["NOVA Voice Controller", "AI Chat Bot", "Moody Music Player"],
        details: "Proficient in performance-sensitive frontend execution, async workflows, and modules."
      },
      {
        name: "SQL",
        level: 4,
        levelText: "Proficient",
        desc: "Relational database queries, complex JOIN operations, query indexing, constraints, and data isolation levels.",
        projects: ["Grass Tech Java Apps", "Backend-Journey"],
        details: "Designing queries for data integrity and optimized execution paths in analytical scenarios."
      },
      {
        name: "HTML5 & CSS3",
        level: 5,
        levelText: "Advanced",
        desc: "Semantic markups, responsive page flows, Flexbox & Grid layouts, and custom CSS variables/animations.",
        projects: ["My Portfolio", "Moody Music Player"],
        details: "Building accessible (a11y), responsive structures with smooth layout flow and hardware-accelerated animations."
      }
    ]
  },
  frontend: {
    title: "Frontend Architecture",
    description: "Client-side library suites and build tooling deployed for fluid UI components, state machines, and responsive layouts.",
    items: [
      {
        name: "React.js",
        level: 5,
        levelText: "Advanced",
        desc: "Hooks, Context API, component reconciliation lifecycle, state management, and Virtual DOM rendering optimization.",
        projects: ["AI Chat Bot (RAG)", "Moody Music Player", "Crop Advisory"],
        details: "Developing decoupled components, managing complex global state, and debugging render bottlenecks."
      },
      {
        name: "Tailwind CSS",
        level: 5,
        levelText: "Advanced",
        desc: "Utility-first design composition, layout scaling systems, custom theme configuration, and responsive interfaces.",
        projects: ["Moody Music Player", "NOVA Voice Controller"],
        details: "Crafting modern, bespoke user interfaces rapidly while keeping production bundle sizes minimal."
      },
      {
        name: "Bootstrap & Responsive Web",
        level: 4,
        levelText: "Proficient",
        desc: "Responsive grids, UI component blueprints, styling overrides, DOM manipulation, and cross-browser alignment.",
        projects: ["Crop Advisory & Yield Prediction"],
        details: "Building responsive grids for hackathon dashboards and customized enterprise layouts."
      },
      {
        name: "Axios & WebSockets",
        level: 5,
        levelText: "Advanced",
        desc: "Asynchronous HTTP clients, WebSocket real-time communication, error interceptors, and sub-second data streaming.",
        projects: ["NOVA AI Controller", "AI Chat Bot"],
        details: "Real-time socket streams and structured REST API data fetching across client applications."
      }
    ]
  },
  backend: {
    title: "Backend Engineering",
    description: "Server architectures, RESTful API design, state authentication schemes, and performance caching layers.",
    items: [
      {
        name: "Node.js & Express.js",
        level: 5,
        levelText: "Advanced",
        desc: "Asynchronous I/O routing, middleware execution pipelines, error handling, and modular app structures.",
        projects: ["NOVA Voice Assistant", "Moody Music Player", "IBM PBEL E-Commerce"],
        details: "Handling event loops, scalable microservice communication, and secure request validation."
      },
      {
        name: "Spring Boot & Java Backend",
        level: 5,
        levelText: "Advanced",
        desc: "Spring Boot framework, Servlet, JSP, JDBC, MVC architecture, OOP principles, and enterprise Java backend modules.",
        projects: ["Grass Tech Technology Intern"],
        details: "Built 4 full-stack Java projects implementing 10+ CRUD modules and clean OOP structures."
      },
      {
        name: "Redis Caching & Load Balancer",
        level: 4,
        levelText: "Proficient",
        desc: "In-memory key-value caching, performance tuning, data invalidation, load balancing, and reducing primary DB stress.",
        projects: ["IBM PBEL E-Commerce", "Moody Music Player"],
        details: "Spearheaded query load reductions of 60% and API response speed boosts of 40% during IBM internship."
      },
      {
        name: "JWT, OAuth & Microservices",
        level: 5,
        levelText: "Advanced",
        desc: "Stateless security authorization, microservices architecture, signature validations, and bearer token guard rails.",
        projects: ["IBM PBEL E-Commerce", "Backend-Journey"],
        details: "Enforcing role-based access controls and cookie/header bearer token storage strategies."
      }
    ]
  },
  databases: {
    title: "Database Administration & Design",
    description: "Non-relational schemas, relational mapping, data integrity schemas, and collection indexing strategies.",
    items: [
      {
        name: "MongoDB & CouchDB",
        level: 5,
        levelText: "Advanced",
        desc: "Document modeling, schema validation, aggregation pipelines, complex indexing, Mongoose ORM, and CouchDB.",
        projects: ["IBM PBEL E-Commerce", "Moody Music Player"],
        details: "Formulating queries, modeling relationships without SQL, and fine-tuning aggregation performance."
      },
      {
        name: "MySQL & Relational DBs",
        level: 4,
        levelText: "Proficient",
        desc: "Schema normalizing (3NF), relational references, JDBC integration, transaction rollbacks, and views.",
        projects: ["Grass Tech Java Projects", "Backend-Journey"],
        details: "Drafting scalable structures, table relationships, and optimizing transaction rollbacks."
      },
      {
        name: "Pinecone (Vector Database)",
        level: 4,
        levelText: "Proficient",
        desc: "Vector embeddings, similarity search, RAG contextual retrieval, and high-dimensional index management.",
        projects: ["AI Chat Bot (RAG Platform)"],
        details: "Storing and querying dense vector representations for retrieval-augmented LLM generation."
      }
    ]
  },
  tools: {
    title: "AI Tools & Operations",
    description: "Version controls, AI/ML orchestration tools, deployment platforms, and developer IDEs.",
    items: [
      {
        name: "LangChain, RAG & Vector Embeddings",
        level: 5,
        levelText: "Advanced",
        desc: "LangChain framework, RAG pipelines, OpenRouter API, Ollama, vector embeddings, and MCP Server.",
        projects: ["NOVA Voice Controller", "AI Chat Bot"],
        details: "Building autonomous voice assistants and RAG-powered conversational AI platforms."
      },
      {
        name: "Cloud & Deployment (Vercel/Render/Netlify)",
        level: 5,
        levelText: "Advanced",
        desc: "PaaS cloud deployment pipelines, environment configuration, automated CI/CD builds, and domain mapping.",
        projects: ["All Portfolio Web Projects"],
        details: "Deploying full-stack web applications and microservice backends on Render, Vercel, and Netlify."
      },
      {
        name: "Git & GitHub (25+ Repos)",
        level: 5,
        levelText: "Advanced",
        desc: "Version tracking, branch structures, resolving merge conflicts, PR code reviews, and remote syncing across 25+ repos.",
        projects: ["25+ GitHub Repositories"],
        details: "Structuring clean commits, working with collaborative workflows, and open-source project maintenance."
      },
      {
        name: "Developer Tools (Postman, IntelliJ, VS Code)",
        level: 5,
        levelText: "Advanced",
        desc: "Postman API collections, IntelliJ IDEA, Eclipse, Spring Initializr, VS Code, and NPM tooling.",
        projects: ["All Systems Engineering"],
        details: "Configuring Java/Node development environments and creating integration API testing suites."
      }
    ]
  }
};

const CATEGORIES = [
  {
    id: 'languages',
    label: 'Languages',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" className="cat-icon">
        <path fill="currentColor" d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
      </svg>
    )
  },
  {
    id: 'frontend',
    label: 'Frontend',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" className="cat-icon">
        <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
      </svg>
    )
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" className="cat-icon">
        <path fill="currentColor" d="M19 15H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-3c0-1.1-.9-2-2-2zm0-12H5c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 6H5V5h14v4zm0 10H5v-4h14v4z"/>
      </svg>
    )
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" className="cat-icon">
        <path fill="currentColor" d="M12 2C6.48 2 2 4 2 6.5v11C2 20 6.48 22 12 22s10-2 10-4.5v-11C22 4 17.52 2 12 2zm0 2c4.82 0 8 1.51 8 2.5S16.82 9 12 9s-8-1.51-8-2.5S7.18 4 12 4zm8 13.5c0 .99-3.18 2.5-8 2.5s-8-1.51-8-2.5V13.7c1.86 1.08 4.75 1.8 8 1.8s6.14-.72 8-1.8v3.8zm0-5c0 .99-3.18 2.5-8 2.5s-8-1.51-8-2.5V8.7c1.86 1.08 4.75 1.8 8 1.8s6.14-.72 8-1.8v3.8z"/>
      </svg>
    )
  },
  {
    id: 'tools',
    label: 'Tools & DevOps',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" className="cat-icon">
        <path fill="currentColor" d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    )
  }
];

const CERTIFICATIONS_DATA = [
  {
    title: "GFG Campus Ambassador",
    issuer: "GeeksforGeeks",
    date: "2026",
    credentialUrl: "https://drive.google.com/file/d/1-qZLr5NOyPEk2GTjA91QlGKM1pubXT9n/view?usp=drive_link",
    description: "Represented GeeksforGeeks as Campus Ambassador at BBDNIIT. Organized 10+ workshops, training 200+ students in web development and algorithms.",
    badge: "Leadership",
    skills: ["Web Dev", "Community Leadership", "Workshops", "Mentorship"]
  },
  {
    title: "Golden Batch in DSA Solving",
    issuer: "HackerRank",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/1IlNtBX3IIZF-oOcsNSYSvfFejmOQABDA/view?usp=drive_link",
    description: "Excellence certification award earned for consistent top performance in Data Structures and Algorithms challenges.",
    badge: "DSA Core",
    skills: ["Java", "Data Structures", "Algorithms", "Optimization"]
  },
  {
    title: "Full Stack Development Intern",
    issuer: "IBM PBEL",
    date: "2026",
    credentialUrl: "https://drive.google.com/file/d/1-qZLr5NOyPEk2GTjA91QlGKM1pubXT9n/view?usp=drive_link",
    description: "Hands-on internship experience designing microservices, configuring Redis cache architectures, and integrating Razorpay payment gateways.",
    badge: "Internship 1",
    skills: ["MERN Stack", "Redis", "Razorpay", "Microservices"]
  },
  {
    title: "Full Stack Java Developer Intern",
    issuer: "Grass Tech Technology",
    date: "2026",
    credentialUrl: "https://drive.google.com/file/d/1BAjy7xXIMzB4yqxDf_lVBtZEI4AWSvEL/view?usp=drive_link",
    description: "Built 4 full-stack Java projects using Core Java, Servlet, JSP, JDBC, Spring Boot, and MySQL, implementing 10+ CRUD modules.",
    badge: "Internship 2",
    skills: ["Core Java", "Spring Boot", "Servlet/JSP", "MySQL", "MVC"]
  },
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "Sheryians Coding School",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/12D1cV2aJRqDlogxAbdQmw3UWxnsYq8-g/view?usp=drive_link",
    description: "Intensive live engineering bootcamp covering component state lifecycle, custom state hooks, MVC server structures, and secure cookie/header session controls.",
    badge: "Bootcamp",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "OAuth"]
  },
  {
    title: "Smart Agriculture Hackathon",
    issuer: "Hackathon Board",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/1J4NbAL88CwZkrv7Hhrk7gUhAE97p6SR_/view?usp=drive_link",
    description: "Engineered and presented ML prediction models for agricultural advisory and yield prediction, connecting frontend dashboards to Python predictive scripts.",
    badge: "Hackathon 1",
    skills: ["Python", "Machine Learning", "Flask", "React"]
  },
  {
    title: "Moody Music Player Hackathon",
    issuer: "Tech Hackathon Group",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/1cmjgR9gabgypLcWKFGM5FyhD7U5XFk5t/view?usp=drive_link",
    description: "Designed a responsive emotion-aware music client fetching mood-tailored playlists using Face API, Tailwind alignments, and dynamic audio streams playback.",
    badge: "Hackathon 2",
    skills: ["React.js", "Face API", "Tailwind CSS", "Cloudinary"]
  },
  {
    title: "Conversational AI ChatBot Hackathon",
    issuer: "AI Tech Challenge",
    date: "2025",
    credentialUrl: "https://drive.google.com/file/d/1I2mP_Mwt0HlSxmIDx_mYcCyfwOLhZV_5/view?usp=drive_link",
    description: "Constructed RAG chatbot assistant leveraging LangChain, vector embeddings, OpenRouter APIs, and Socket.io state tracking.",
    badge: "Hackathon 3",
    skills: ["LangChain", "RAG", "Vector DB", "Socket.io"]
  }
];

function App() {
  const [copied, setCopied] = useState(false);
  const [activeCategory, setActiveCategory] = useState('languages');

  const copyEmail = () => {
    navigator.clipboard.writeText("baranwalaryan22@gmail.com");
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
                    'MERN & Java Developer',
                    'Spring Boot Specialist',
                    'AI & RAG Solutions Architect'
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
              
              <a href="https://linkedin.com/in/aryanbaranwal" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <svg className="svg-icon" viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a href="https://leetcode.com/u/Aryan0x01" target="_blank" rel="noopener noreferrer" className="contact-btn">
                <span className="btn-icon">⚡</span>
                <span>LeetCode</span>
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
            
            <div className="skills-console-container glass-card">
              {/* Console Header */}
              <div className="console-header">
                <div className="status-indicator">
                  <span className="status-dot"></span>
                  <span className="status-text">SYSTEM STATUS: ACTIVE</span>
                </div>
                <div className="terminal-controls">
                  <span className="control-btn red"></span>
                  <span className="control-btn yellow"></span>
                  <span className="control-btn green"></span>
                </div>
              </div>

              <div className="skills-console">
                {/* Left Sidebar Menu */}
                <div className="console-sidebar">
                  <p className="sidebar-title">Categories</p>
                  <div className="console-nav">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category.id}
                        className={`console-tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category.id)}
                      >
                        <span className="tab-icon">{category.icon}</span>
                        <span className="tab-label">{category.label}</span>
                        {activeCategory === category.id && <span className="tab-glowing-indicator"></span>}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Display Panel */}
                <div className="console-display-panel">
                  <div className="panel-header animate-fade-in" key={activeCategory}>
                    <h3 className="panel-category-title">
                      {SKILLS_DATA[activeCategory].title}
                    </h3>
                    <p className="panel-category-desc">
                      {SKILLS_DATA[activeCategory].description}
                    </p>
                  </div>

                  <div className="console-items-grid animate-fade-in" key={`${activeCategory}-grid`}>
                    {SKILLS_DATA[activeCategory].items.map((skill, index) => (
                      <div className="console-skill-card" key={skill.name}>
                        <div className="skill-card-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-badge">{skill.levelText}</span>
                        </div>

                        {/* Level Indicator: 5 blocks */}
                        <div className="skill-level-indicator">
                          {[1, 2, 3, 4, 5].map((block) => (
                            <span 
                              key={block} 
                              className={`level-block ${block <= skill.level ? 'active' : ''}`}
                              style={{ transitionDelay: `${index * 50 + block * 30}ms` }}
                            ></span>
                          ))}
                        </div>

                        <p className="skill-desc">{skill.desc}</p>
                        
                        <div className="skill-meta">
                          <div className="skill-meta-item">
                            <span className="meta-label">Applied in:</span>
                            <div className="meta-projects">
                              {skill.projects.map((proj) => (
                                <span className="project-badge" key={proj}>{proj}</span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="skill-tooltip">
                            <span className="tooltip-title">Practical Application</span>
                            <span className="tooltip-desc">{skill.details}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
                    <li>Engineered a full-stack e-commerce web application using MERN stack with Razorpay payment gateway integration and 3+ microservices for modular scalability.</li>
                    <li>Designed Redis caching layer, reducing average API response time by 40% and decreasing database query load by 60%.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content glass-card">
                  <span className="timeline-date">June 2026 – Jul 2026</span>
                  <div className="exp-header">
                    <h3>Full Stack Java Developer Intern</h3>
                    <span className="company-tag">Grass Tech Technology</span>
                  </div>
                  <ul className="exp-details">
                    <li>Built 4 full-stack Java projects using Core Java, Servlet, JSP, JDBC, Spring Boot, and MySQL, implementing 10+ CRUD modules and MVC architecture following OOP principles.</li>
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
                  <span className="project-category">AI Voice & Systems</span>
                  <h3>NOVA – AI Voice & Controller</h3>
                  <p>Autonomous voice-controlled desktop assistant combining local rule engines with AI intent classification to execute 15+ Windows OS commands with sub-1s latency.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">WebSocket</span>
                    <span className="tech-tag">OpenRouter API</span>
                    <span className="tech-tag">Ollama</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/Nova-Autonomous-Agent" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                </div>
              </div>

              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Conversational AI</span>
                  <h3>AI Chat Bot (ChatGPT Clone)</h3>
                  <p>Architected a RAG-powered conversational AI platform using LangChain, vector embeddings, and Socket.io, supporting 100+ concurrent users with real-time context.</p>
                  <div className="project-tech">
                    <span className="tech-tag">RAG & LangChain</span>
                    <span className="tech-tag">Vector DB</span>
                    <span className="tech-tag">Socket.io</span>
                    <span className="tech-tag">React.js</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/AI-Chat-Bot" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                  <a href="https://ai-chat-bot-smrg.onrender.com" target="_blank" rel="noopener noreferrer" className="btn-sm btn-live">Live Demo</a>
                </div>
              </div>

              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Web Multimedia</span>
                  <h3>Moody Music Player</h3>
                  <p>Emotion-aware music recommendation app using Face API, React, Tailwind CSS, Redis, and Cloudinary, achieving 82% emotion-detection accuracy.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Face API</span>
                    <span className="tech-tag">React.js</span>
                    <span className="tech-tag">Tailwind CSS</span>
                    <span className="tech-tag">Redis</span>
                    <span className="tech-tag">Cloudinary</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/Moody-Music-Player-Full_Stack_Project-" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                  <a href="https://moody-music-aryan.netlify.app" target="_blank" rel="noopener noreferrer" className="btn-sm btn-live">Live Demo</a>
                </div>
              </div>

              <div className="project-card glass-card">
                <div className="card-info">
                  <span className="project-category">Artificial Intelligence</span>
                  <h3>Crop Advisory & Yield Prediction</h3>
                  <p>AI-powered Agricultural Advice system built for hackathons to predict crop yield using machine learning models.</p>
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
                  <p>AI assistant for student management, simplifying access to courses, timetables, and academic results.</p>
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
                  <span className="project-category">Enterprise Java & Node</span>
                  <h3>Backend-Journey</h3>
                  <p>A hands-on repository documenting deep learning in Core Java, Spring Boot, Node.js, Express, and REST APIs.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Java</span>
                    <span className="tech-tag">Spring Boot</span>
                    <span className="tech-tag">REST APIs</span>
                    <span className="tech-tag">MySQL</span>
                  </div>
                </div>
                <div className="card-actions">
                  <a href="https://github.com/Aryan444Bits/Backend-Journey" target="_blank" rel="noopener noreferrer" className="btn-sm btn-git">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS SECTION */}
        <section id="certifications" className="section">
          <div className="content">
            <span className="label">// Accredited Credentials</span>
            <h2>Certifications</h2>
            <div className="certifications-grid">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div className="cert-card glass-card" key={`${cert.title}-${cert.issuer}`}>
                  <div className="cert-badge-ribbon">
                    <span className="cert-ribbon-text">{cert.badge}</span>
                  </div>
                  <div className="cert-card-header">
                    <div className="cert-icon-container">
                      <svg className="cert-svg-icon" viewBox="0 0 24 24" width="22" height="22">
                        <path fill="currentColor" d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                      </svg>
                    </div>
                    <div className="cert-meta-info">
                      <span className="cert-issuer">{cert.issuer}</span>
                      <span className="cert-date">{cert.date}</span>
                    </div>
                  </div>
                  <div className="cert-card-body">
                    <h3 className="cert-title">{cert.title}</h3>
                    <p className="cert-desc">{cert.description}</p>
                  </div>
                  <div className="cert-card-footer">
                    <div className="cert-skills">
                      {cert.skills.map((skill) => (
                        <span className="cert-skill-tag" key={skill}>{skill}</span>
                      ))}
                    </div>
                    <a 
                      href={cert.credentialUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`cert-verify-link ${cert.credentialUrl === '#' ? 'placeholder-link' : ''}`}
                      onClick={(e) => { if(cert.credentialUrl === '#') e.preventDefault(); }}
                    >
                      Verify ↗
                    </a>
                  </div>
                </div>
              ))}
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

      {/* AI CHATBOT WIDGET */}
      <AIChatBot />
    </div>
  );
}

export default App;