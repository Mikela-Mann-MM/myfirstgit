// src/components/CodeVisualization.js
export function renderCodeVisualization() {
    const codeVisSection = document.getElementById('code-visualization')
    
    codeVisSection.innerHTML = `
      <div class="code-visualization-container">
        <div class="code-editor-dynamic">
          <div class="editor-header">
            <span class="file-name">portfolio.js</span>
            <div class="editor-buttons">
              <span class="editor-btn red"></span>
              <span class="editor-btn yellow"></span>
              <span class="editor-btn green"></span>
            </div>
          </div>
          <div class="editor-content">
            <pre><code id="typing-code"></code></pre>
          </div>
        </div>
        
        <div class="code-explanation">
          <h3>Live Code Demonstration</h3>
          <p>Watch as code writes itself based on your scroll position. This visualization demonstrates how I structure my JavaScript applications with clean, readable code that follows best practices.</p>
          <p>The animation speed and typing pattern are dynamically adjusted to create a natural coding flow effect.</p>
        </div>
      </div>
    `
    
    // Sample code for typing animation
    const codeSnippet = `// Dynamic Portfolio Component
  import { useState, useEffect } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  
  // Custom hook for animation control
  function useScrollAnimation(threshold = 0.5) {
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold }
      );
      
      const currentElement = document.getElementById('code-visualization');
      if (currentElement) {
        observer.observe(currentElement);
      }
      
      return () => {
        if (currentElement) {
          observer.unobserve(currentElement);
        }
      };
    }, [threshold]);
    
    return isVisible;
  }
  
  export default function PortfolioProject({ project }) {
    const isVisible = useScrollAnimation(0.3);
    const [expanded, setExpanded] = useState(false);
    
    const handleExpand = () => {
      setExpanded(!expanded);
    };
    
    return (
      <motion.div
        className="project-card"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="project-details"
            >
              <p>{project.longDescription}</p>
              <div className="project-links">
                <a href={project.demoUrl} target="_blank" rel="noopener">
                  Live Demo
                </a>
                <a href={project.codeUrl} target="_blank" rel="noopener">
                  View Code
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button 
          className="expand-button"
          onClick={handleExpand}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </button>
        
        <div className="tech-tags">
          {project.technologies.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
      </motion.div>
    );
  }`;
  
    const typingCode = document.getElementById('typing-code')
    let codeIndex = 0
    let isTyping = false
    
    // Start typing animation when scrolled into view
    function initScrollTrigger() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !isTyping) {
            isTyping = true
            typingAnimation()
          } else if (!entry.isIntersecting) {
            // Reset when out of view
            codeIndex = 0
            if (typingCode) typingCode.textContent = ''
            isTyping = false
          }
        })
      }, { threshold: 0.3 })
      
      if (codeVisSection) {
        observer.observe(codeVisSection)
      }
    }
    
    // Function to simulate typing with variable speed
    function typingAnimation() {
      if (codeIndex < codeSnippet.length) {
        // Add next character
        if (typingCode) typingCode.textContent += codeSnippet.charAt(codeIndex)
        codeIndex++
        
        // Apply syntax highlighting
        if (typingCode && typingCode.parentNode) {
          applySyntaxHighlighting()
        }
        
        // Variable typing speed
        let typingSpeed = 5 // Base speed
        
        // Slow down for special characters to simulate thinking
        const currentChar = codeSnippet.charAt(codeIndex - 1)
        if (currentChar === '{' || currentChar === '}' || currentChar === ';') {
          typingSpeed = 200
        } else if (currentChar === '\n') {
          typingSpeed = 300
        } else if (currentChar === ' ' && Math.random() > 0.8) {
          // Random pauses to simulate human typing
          typingSpeed = 100
        }
        
        // Continue typing
        setTimeout(typingAnimation, typingSpeed)
      } else {
        // Restart after completion
        setTimeout(() => {
          codeIndex = 0
          if (typingCode) typingCode.textContent = ''
          typingAnimation()
        }, 5000)
      }
    }
    
    // Extremely simple syntax highlighting for demonstration
    function applySyntaxHighlighting() {
      if (!typingCode) return
      
      let html = typingCode.textContent
        // Keywords
        .replace(/const|let|function|return|if|else|new|import|from|export|default/g, '<span class="keyword">$&</span>')
        // Strings
        .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
        // Comments
        .replace(/\/\/(.*)/g, '<span class="comment">// $1</span>')
        // Functions
        .replace(/(\w+)\(/g, '<span class="function">$1</span>(')
        // Objects and properties
        .replace(/\.([\w]+)/g, '.<span class="property">$1</span>')
        // JSX
        .replace(/&lt;([\/\w.]+)/g, '&lt;<span class="jsx-tag">$1</span>')
      
      // Apply highlighting without resetting cursor position
      typingCode.innerHTML = html
    }
    
    // Initialize when code visualization is added to DOM
    setTimeout(initScrollTrigger, 100)
  }