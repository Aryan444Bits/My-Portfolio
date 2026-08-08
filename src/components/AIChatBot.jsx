import React, { useState, useRef, useEffect } from 'react';
import './AIChatBot.css';

const ARYAN_RESUME_CONTEXT = `
You are Aryan's AI Portfolio Assistant. You represent Aryan Baranwal, a passionate Full Stack Developer with hands-on experience in MERN Stack, Java, Spring Boot, and REST API development.
Your goal is to answer questions from recruiters, hiring managers, and visitors about Aryan's skills, experience, education, projects, certifications, and contact details based ONLY on the following updated resume data:

PERSONAL INFO:
- Name: Aryan Baranwal
- Primary Roles: Full Stack Web Developer, MERN & Java Developer, Spring Boot Specialist, AI & RAG Solutions Architect
- Location: Lucknow, India
- Phone: +91-8948656644
- Email: baranwalaryan22@gmail.com
- GitHub: https://github.com/aryan444bits (25+ repositories)
- LinkedIn: https://linkedin.com/in/aryanbaranwal
- LeetCode: https://leetcode.com/u/Aryan0x01
- Portfolio: https://aryan444bits.netlify.app
- Resume Download: Available on portfolio (file: FAANGPath_Simple_Template.pdf)

SUMMARY:
Full Stack Developer with hands-on experience in the MERN Stack, Java, Spring Boot, and REST API development, backed by two full-stack internships and 25+ GitHub repositories. Builds scalable, authenticated (JWT, OAuth) web applications with clean MVC architecture and strong OOP principles. Shipped AI-integrated applications using RAG and LangChain. Reduced API response time by 40% and database query load by 60% via Redis caching and query optimization. HackerRank Golden Batch in Data Structures & Algorithms; GFG Campus Ambassador.

EDUCATION:
- B.Tech in Computer Science and Engineering (Aug 2023 – Sep 2027) at Babu Banarasi Das Northern India Institute of Technology (BBDNIIT), Lucknow. Focus: systems development, core algorithms, enterprise software engineering.
- Full Stack Web Development Bootcamp (Jan 2025 – Sep 2025) at Sheryians Coding School. Focus: component lifecycle, state management, MVC structures, secure session controls.

PROFESSIONAL EXPERIENCE:
1. Full Stack Development Intern at IBM PBEL (Jan 2026 – Mar 2026, Remote)
   - Engineered production-grade full-stack e-commerce app (MERN stack) with Razorpay payment gateway integration and 3+ microservices.
   - Implemented Redis caching layer, reducing API response time by 40% and DB query load by 60%.
2. Full Stack Java Developer Intern at Grass Tech Technology (June 2026 – Jul 2026, Remote)
   - Built 4 full-stack Java projects using Core Java, Servlet, JSP, JDBC, Spring Boot, and MySQL, implementing 10+ CRUD modules and MVC architecture following OOP principles.

KEY PROJECTS:
1. NOVA – AI-Powered Voice & System Controller (Node.js, WebSocket, OpenRouter API, Ollama, GitHub: https://github.com/Aryan444Bits/Nova-Autonomous-Agent): Engineered an autonomous voice-controlled desktop assistant combining local rule engines with AI intent classification to execute 15+ Windows OS commands with sub-1s latency.
2. AI Chat Bot (ChatGPT Clone) (RAG, Vector Embeddings, LangChain, Socket.io, React): Architected a RAG-powered conversational AI platform supporting 100+ concurrent users with real-time contextual responses.
3. Moody Music Player (React, Tailwind CSS, Redis, Face API, Cloudinary): Built an emotion-aware music recommendation app achieving 82% emotion-detection accuracy with sub-second response times.
4. Crop Advisory & Yield Prediction System (Python, Flask, React.js, ML Models): AI-powered agricultural advice & crop yield prediction system built for hackathons.
5. Short-Term-Memory-ChatBot (NLP, OpenAI API, Node.js, Express): AI assistant for student management.
6. Backend-Journey (REST APIs, Core Java, Spring Boot, Node.js, MySQL): Hands-on repository documenting backend architecture, authentication, and REST APIs.

TECHNICAL ARSENAL:
- Languages: Java, JavaScript (ES6+), HTML5, CSS3, SQL
- Frontend: React.js, Tailwind CSS, Bootstrap, Responsive Web Design, Axios, DOM Manipulation
- Backend: Node.js, Express.js, Spring Boot, RESTful APIs, Microservices, Servlet, JSP, JDBC, JWT & OAuth Authentication, Authorization, MVC Architecture, Redis Caching, Load Balancer
- Databases: MongoDB, MySQL, CouchDB, Database Design & Integration, CRUD Operations, Pinecone (Vector Database)
- Cloud & Deployment: Vercel, Render, Netlify, Git, GitHub (25+ repos)
- AI/ML Tools: LangChain, MCP Server, RAG, Vector Embeddings, OpenRouter API
- Tools: Postman, VS Code, Eclipse, IntelliJ IDEA, Spring Initializr, NPM, Webpack
- Core Concepts: Data Structures & Algorithms, System Design, DBMS, OS, Computer Networks, OOP, Generative AI

LEADERSHIP & ACHIEVEMENTS:
- GFG Campus Ambassador: Represented GeeksforGeeks as Campus Ambassador at BBDNIIT; organized 10+ workshops, training 200+ students in web development.
- Golden Batch in DSA Solving (HackerRank): Earned recognition for consistent top performance in Data Structures & Algorithms.
- IBM PBEL Full Stack Development Intern Certification
- Grass Tech Technology Full Stack Java Developer Intern Certification

TONE & RULES:
- Be polite, professional, concise, enthusiastic, and helpful.
- Speak in third person about Aryan (or as his friendly portfolio AI assistant).
- Highlight key metrics like "40% response time reduction with Redis" and "60% query load reduction" when asked about experience.
- Keep answers concise (2-4 sentences max unless detailed project breakdown is requested).
`;

// Smart Fallback Generator when API Key is missing or unavailable
let fallbackCount = 0;
const generateFallbackResponse = (userQuery) => {
  const query = userQuery.toLowerCase().trim();
  
  // Greetings & Intros
  if (query.match(/^(hi|hello|hey|greetings|hola|wassup|who are you|who is aryan|intro|introduce)/i)) {
    const greetings = [
      "Hello! 👋 I'm Aryan's AI Portfolio Assistant. I can tell you all about Aryan's skills in Java, Spring Boot, MERN Stack, his internships at IBM PBEL & Grass Tech Technology, or his AI projects like NOVA!",
      "Hi there! Welcome to Aryan Baranwal's portfolio. Feel free to ask me about his 25+ GitHub projects, technical skills, or professional experience!",
      "Hey! Thanks for visiting. How can I assist you with Aryan's background today? You can ask about his projects, skills, education, or contact details."
    ];
    return greetings[fallbackCount++ % greetings.length];
  }

  // Thanks & Compliments
  if (query.match(/(thanks|thank you|awesome|cool|great|nice|good job|perfect)/i)) {
    return "You're very welcome! 😊 Let me know if you have any other questions about Aryan's projects or background.";
  }

  // Technical Skills / Stack
  if (query.includes('skill') || query.includes('tech') || query.includes('stack') || query.includes('language') || query.includes('java') || query.includes('spring') || query.includes('react') || query.includes('node') || query.includes('express')) {
    return "Aryan is a Full Stack Developer skilled in Java (Spring Boot, Servlet/JSP, JDBC, OOP), MERN Stack (MongoDB, Express, React.js, Node.js), Redis Caching, Pinecone Vector DB, SQL, REST APIs, and Cloud Platforms (Vercel, Render, Netlify).";
  }

  // Experience / Internships
  if (query.includes('experience') || query.includes('ibm') || query.includes('grass') || query.includes('work') || query.includes('intern') || query.includes('company') || query.includes('job')) {
    return "Aryan has completed two full-stack internships:\n1. Full Stack Intern at IBM PBEL (Jan-Mar 2026): Engineered MERN microservices & reduced DB load by 60% with Redis caching.\n2. Full Stack Java Developer Intern at Grass Tech Technology (June-July 2026): Built 4 Java & Spring Boot enterprise web applications.";
  }

  // Projects / Apps / NOVA
  if (query.includes('project') || query.includes('nova') || query.includes('rag') || query.includes('music') || query.includes('crop') || query.includes('build') || query.includes('app') || query.includes('voice')) {
    return "Aryan's top GitHub projects include:\n• NOVA: Autonomous AI Voice Desktop Controller (Node.js, OpenRouter API, Ollama): https://github.com/Aryan444Bits/Nova-Autonomous-Agent\n• AI Chat Bot: RAG-powered platform using LangChain & Socket.io for 100+ concurrent users.\n• Moody Music Player: Emotion-aware app using Face API & Cloudinary with 82% accuracy.";
  }

  // Education / Degree
  if (query.includes('education') || query.includes('college') || query.includes('study') || query.includes('degree') || query.includes('btech') || query.includes('bbdniit') || query.includes('sheryians')) {
    return "Aryan is pursuing his B.Tech in Computer Science & Engineering (2023–2027) at Babu Banarasi Das Northern India Institute of Technology (BBDNIIT), Lucknow. He also completed a Full Stack Bootcamp at Sheryians Coding School.";
  }

  // Leadership & Certifications
  if (query.includes('certif') || query.includes('gfg') || query.includes('ambassador') || query.includes('award') || query.includes('dsa') || query.includes('hackerrank') || query.includes('leader')) {
    return "Aryan serves as the GeeksforGeeks Campus Ambassador at BBDNIIT (organized 10+ workshops for 200+ students) and earned the HackerRank Golden Batch in DSA. He also holds credentials from IBM PBEL and Grass Tech Technology!";
  }

  // Contact / Socials
  if (query.includes('contact') || query.includes('email') || query.includes('hire') || query.includes('linkedin') || query.includes('github') || query.includes('leetcode') || query.includes('reach') || query.includes('phone')) {
    return "Get in touch with Aryan:\n• Email: baranwalaryan33@gmail.com\n• LinkedIn: linkedin.com/in/aryan-baranwal-12a1b8301/\n• GitHub: github.com/aryan444bits (25+ repos)\n• LeetCode: leetcode.com/u/Aryan0x01";
  }

  // Resume Download
  if (query.includes('resume') || query.includes('cv') || query.includes('download') || query.includes('pdf')) {
    return "You can download Aryan's official resume by clicking the 'Download Resume' button in the contact bar at the top of this portfolio!";
  }

  // Rotating Varied Default Responses
  const defaultResponses = [
    "Aryan is a Full Stack Developer proficient in Java, Spring Boot, React.js, and Node.js. Would you like to know more about his IBM internship, his NOVA AI Voice assistant, or his technical skills?",
    "I'd be glad to help! You can ask me specific questions about Aryan's 25+ GitHub repositories, his B.Tech coursework, his Redis caching optimizations, or how to contact him.",
    "Aryan specializes in building scalable MERN & Spring Boot web applications and AI/RAG integrations. Feel free to ask about his projects, certifications, or work experience!"
  ];

  return defaultResponses[fallbackCount++ % defaultResponses.length];
};

const parseInlineMarkdown = (text) => {
  if (!text) return null;
  const regex = /(https?:\/\/[^\s]+)|(\*\*[^*]+\*\*)|(`[^`]+`)|(\*[^*]+\*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const matchedStr = match[0];
    if (matchedStr.startsWith('http://') || matchedStr.startsWith('https://')) {
      const cleanUrl = matchedStr.replace(/[.,;!?)]$/, '');
      parts.push(
        <a key={key++} href={cleanUrl} target="_blank" rel="noopener noreferrer" className="msg-link">
          {cleanUrl.replace(/^https?:\/\/(www\.)?/, '')} ↗
        </a>
      );
    } else if (matchedStr.startsWith('**') && matchedStr.endsWith('**')) {
      parts.push(
        <strong key={key++} className="msg-bold">
          {matchedStr.slice(2, -2)}
        </strong>
      );
    } else if (matchedStr.startsWith('`') && matchedStr.endsWith('`')) {
      parts.push(
        <code key={key++} className="msg-code">
          {matchedStr.slice(1, -1)}
        </code>
      );
    } else if (matchedStr.startsWith('*') && matchedStr.endsWith('*')) {
      parts.push(
        <em key={key++} className="msg-italic">
          {matchedStr.slice(1, -1)}
        </em>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const FormattedMessage = ({ text }) => {
  if (!text) return null;

  const lines = text.split('\n');

  return (
    <div className="formatted-msg">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lineIdx} className="msg-spacer" />;
        }

        const isBullet = trimmed.startsWith('•') || trimmed.startsWith('- ') || trimmed.startsWith('* ');
        const isNumbered = /^\d+\.\s/.test(trimmed);

        if (isBullet) {
          const rawContent = trimmed.replace(/^([•\-\*])\s*/, '');
          return (
            <div key={lineIdx} className="msg-bullet-item">
              <span className="bullet-dot">•</span>
              <span className="bullet-content">{parseInlineMarkdown(rawContent)}</span>
            </div>
          );
        }

        if (isNumbered) {
          const match = trimmed.match(/^(\d+\.)\s*(.*)/);
          return (
            <div key={lineIdx} className="msg-bullet-item">
              <span className="bullet-num">{match ? match[1] : ''}</span>
              <span className="bullet-content">{parseInlineMarkdown(match ? match[2] : trimmed)}</span>
            </div>
          );
        }

        return (
          <p key={lineIdx} className="msg-p">
            {parseInlineMarkdown(trimmed)}
          </p>
        );
      })}
    </div>
  );
};

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ai',
      text: "👋 Hi! I'm Aryan's AI Assistant. Ask me anything about Aryan's skills, IBM internship, projects, or background!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const envOpenRouterKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
  const envGeminiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
  const storedKey = typeof window !== 'undefined' ? localStorage.getItem('aryan_portfolio_api_key') || '' : '';
  
  const [apiKey, setApiKey] = useState(storedKey || envOpenRouterKey || envGeminiKey);
  const [showKeyModal, setShowKeyModal] = useState(false);
  const [tempApiKey, setTempApiKey] = useState('');
  
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const getActiveKey = () => {
    return apiKey || storedKey || envOpenRouterKey || envGeminiKey;
  };

  const isUsingOpenRouter = () => {
    const key = getActiveKey();
    return Boolean(key && (key.startsWith('sk-or-') || key === envOpenRouterKey || key.includes('openrouter')));
  };

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInputValue('');
    setIsLoading(true);

    const activeKey = getActiveKey();

    if (activeKey && activeKey !== 'your_openrouter_api_key_here' && activeKey !== 'your_gemini_api_key_here') {
      try {
        if (isUsingOpenRouter()) {
          // Format conversation history strictly alternating user/assistant without initial intro message
          const history = messages
            .filter(m => m.id !== 1)
            .slice(-6)
            .map(m => ({
              role: m.sender === 'user' ? 'user' : 'assistant',
              content: m.text
            }));

          const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${activeKey}`,
              'Content-Type': 'application/json',
              'HTTP-Referer': typeof window !== 'undefined' ? window.location.href : 'http://localhost:5173',
              'X-Title': 'Aryan Baranwal Portfolio'
            },
            body: JSON.stringify({
              model: 'openai/gpt-3.5-turbo',
              max_tokens: 300,
              messages: [
                { role: 'system', content: ARYAN_RESUME_CONTEXT },
                ...history,
                { role: 'user', content: text.trim() }
              ]
            })
          });

          if (response.ok) {
            const data = await response.json();
            const aiText = data.choices?.[0]?.message?.content;
            if (aiText) {
              setMessages(prev => [
                ...prev,
                {
                  id: Date.now() + 1,
                  sender: 'ai',
                  text: aiText,
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
              ]);
              setIsLoading(false);
              return;
            }
          } else {
            console.warn("OpenRouter API returned status:", response.status);
          }
        } else {
          // Direct Google Gemini API call
          const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: [
                  {
                    role: 'user',
                    parts: [
                      { text: ARYAN_RESUME_CONTEXT },
                      { text: `User Question: ${text.trim()}` }
                    ]
                  }
                ],
                generationConfig: {
                  maxOutputTokens: 300,
                  temperature: 0.7,
                }
              })
            }
          );

          if (response.ok) {
            const data = await response.json();
            const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (aiText) {
              setMessages(prev => [
                ...prev,
                {
                  id: Date.now() + 1,
                  sender: 'ai',
                  text: aiText,
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
              ]);
              setIsLoading(false);
              return;
            }
          }
        }
      } catch (error) {
        console.warn("LLM API request failed, using context engine:", error);
      }
    }

    // Dynamic Context Generator execution
    setTimeout(() => {
      const fallbackText = generateFallbackResponse(text);
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'ai',
          text: fallbackText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsLoading(false);
    }, 400);
  };

  const handleSaveCustomKey = () => {
    const keyToSave = tempApiKey.trim();
    setApiKey(keyToSave);
    if (typeof window !== 'undefined') {
      localStorage.setItem('aryan_portfolio_api_key', keyToSave);
    }
    setShowKeyModal(false);
  };

  const suggestionChips = [
    "What are Aryan's key skills?",
    "Tell me about his IBM internship",
    "What projects has Aryan built?",
    "Where is Aryan studying?"
  ];

  const currentKey = getActiveKey();
  const hasValidKey = Boolean(currentKey && currentKey !== 'your_openrouter_api_key_here' && currentKey !== 'your_gemini_api_key_here');

  return (
    <div className="ai-chatbot-wrapper">
      {/* Floating Trigger Button */}
      <button 
        className={`ai-chat-trigger ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Talk to AI about Aryan"
      >
        <span className="trigger-pulse"></span>
        <div className="trigger-icon">
          {isOpen ? (
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M12 2a2 2 0 0 1 2 2v1a7 7 0 0 1 7 7v4a3 3 0 0 1-3 3h-1.1c-.5 1.7-2 3-3.9 3s-3.4-1.3-3.9-3H8a3 3 0 0 1-3-3v-4a7 7 0 0 1 7-7V4a2 2 0 0 1 2-2zm-4 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm8 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
            </svg>
          )}
        </div>
        {!isOpen && <span className="trigger-text">Talk to AI</span>}
      </button>

      {/* Main Chat Drawer Container */}
      {isOpen && (
        <div className="ai-chat-card glass-card">
          {/* Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="avatar-container">
                <span className="avatar-icon">🤖</span>
                <span className="online-dot"></span>
              </div>
              <div>
                <h4 className="chat-title">Aryan's AI Assistant</h4>
                <p className="chat-status">
                  {hasValidKey 
                    ? (isUsingOpenRouter() ? 'OpenRouter AI Connected' : 'Gemini AI Connected')
                    : 'Resume Knowledge Engine'}
                </p>
              </div>
            </div>

            <div className="header-actions">
              <button 
                className="header-btn" 
                title="Clear Chat"
                onClick={() => setMessages([{
                  id: Date.now(),
                  sender: 'ai',
                  text: "Chat cleared! How can I assist you with Aryan's profile?",
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }])}
              >
                🗑️
              </button>
              <button className="header-btn close-btn" onClick={() => setIsOpen(false)}>
                ✕
              </button>
            </div>
          </div>

          {/* Key Configuration Sub-modal */}
          {showKeyModal && (
            <div className="key-modal-overlay">
              <div className="key-modal glass-card">
                <h5>LLM API Key Settings</h5>
                <p className="key-modal-desc">
                  Enter your OpenRouter (<code>sk-or-v1-...</code>) or Gemini API key. You can also paste it in your <code>.env</code> file as <code>VITE_OPENROUTER_API_KEY</code>.
                </p>
                <input 
                  type="password"
                  placeholder="Enter OpenRouter or Gemini API Key..."
                  value={tempApiKey}
                  onChange={(e) => setTempApiKey(e.target.value)}
                  className="key-input"
                />
                <div className="key-modal-actions">
                  <button className="key-btn cancel" onClick={() => setShowKeyModal(false)}>Cancel</button>
                  <button className="key-btn save" onClick={handleSaveCustomKey}>Save Key</button>
                </div>
              </div>
            </div>
          )}

          {/* Messages Stream */}
          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-row ${msg.sender}`}>
                {msg.sender === 'ai' && <div className="msg-avatar">🤖</div>}
                <div className="message-bubble">
                  <div className="message-text">
                    <FormattedMessage text={msg.text} />
                  </div>
                  <span className="message-time">{msg.time}</span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="message-row ai">
                <div className="msg-avatar">🤖</div>
                <div className="message-bubble typing">
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                  <span className="typing-dot"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="suggestion-chips">
            {suggestionChips.map((chip, idx) => (
              <button 
                key={idx} 
                className="chip-btn"
                onClick={() => handleSendMessage(chip)}
                disabled={isLoading}
              >
                {chip}
              </button>
            ))}
          </div>

          {/* Input Bar */}
          <form 
            className="chat-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <input 
              type="text"
              placeholder="Ask me about Aryan's resume..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              disabled={isLoading}
              className="chat-input"
            />
            <button 
              type="submit" 
              className="send-btn"
              disabled={!inputValue.trim() || isLoading}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AIChatBot;
