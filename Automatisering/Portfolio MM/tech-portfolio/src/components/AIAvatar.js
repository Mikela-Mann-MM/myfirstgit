// src/components/AIAvatar.js
export function renderAIAvatar() {
    const avatarSection = document.getElementById('ai-avatar-section')
    
    avatarSection.innerHTML = `
      <div class="ai-avatar-container">
        <div class="avatar-interface">
          <div class="avatar-visual">
            <div class="avatar-placeholder">
              <div class="avatar-head"></div>
              <div class="avatar-body"></div>
              <div class="avatar-status">AI Assistant Online</div>
            </div>
            <div class="avatar-animation-container">
              <div class="audio-wave">
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
                <div class="wave-bar"></div>
              </div>
            </div>
          </div>
          
          <div class="avatar-chat">
            <div class="chat-messages" id="chat-messages">
              <div class="message avatar-message">
                <span class="message-text">Hello! I'm your AI assistant. I can tell you about my skills, projects, and experience. What would you like to know?</span>
              </div>
            </div>
            
            <div class="chat-input-container">
              <input type="text" id="visitor-name" class="chat-input" placeholder="Your name (optional)">
              <button id="set-name-btn" class="chat-btn">Set Name</button>
            </div>
            
            <div class="chat-input-container">
              <input type="text" id="chat-input" class="chat-input" placeholder="Ask me anything about my work...">
              <button id="send-btn" class="chat-btn">Send</button>
            </div>
            
            <div class="quick-questions">
              <button class="question-btn" data-question="What technologies do you know?">Tech Stack</button>
              <button class="question-btn" data-question="Tell me about your projects">Projects</button>
              <button class="question-btn" data-question="What is your experience?">Experience</button>
              <button class="question-btn" data-question="How do you approach development?">Process</button>
            </div>
          </div>
        </div>
        
        <div class="avatar-info">
          <h3>Interactive AI Assistant</h3>
          <p>This AI-powered virtual representation can answer questions about my skills, experience, and projects. Try asking specific questions about my development approach or technical expertise.</p>
          <p>Behind the scenes, this uses a combination of pre-defined responses and natural language processing to create an engaging conversation experience.</p>
        </div>
      </div>
    `
    
    // Avatar interaction logic
    const chatMessages = document.getElementById('chat-messages')
    const chatInput = document.getElementById('chat-input')
    const sendBtn = document.getElementById('send-btn')
    const visitorNameInput = document.getElementById('visitor-name')
    const setNameBtn = document.getElementById('set-name-btn')
    const quickQuestions = document.querySelectorAll('.question-btn')
    const audioWave = document.querySelector('.audio-wave')
    
    let visitorName = ''
    
    // Set visitor name
    setNameBtn.addEventListener('click', () => {
      if (visitorNameInput.value.trim() !== '') {
        visitorName = visitorNameInput.value.trim()
        addAvatarMessage(`Nice to meet you, ${visitorName}! How can I help you today?`)
        visitorNameInput.value = ''
        visitorNameInput.placeholder = `Name set: ${visitorName}`
      }
    })
    
    // Send message
    sendBtn.addEventListener('click', sendMessage)
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage()
      }
    })
    
    // Quick questions
    quickQuestions.forEach(btn => {
      btn.addEventListener('click', () => {
        const question = btn.getAttribute('data-question')
        addUserMessage(question)
        setTimeout(() => {
          processMessage(question)
        }, 500)
      })
    })
    
    function sendMessage() {
      const message = chatInput.value.trim()
      if (message !== '') {
        addUserMessage(message)
        chatInput.value = ''
        
        setTimeout(() => {
          processMessage(message)
        }, 500)
      }
    }
    
    function addUserMessage(message) {
      const messageElement = document.createElement('div')
      messageElement.className = 'message user-message'
      messageElement.innerHTML = `<span class="message-text">${message}</span>`
      chatMessages.appendChild(messageElement)
      chatMessages.scrollTop = chatMessages.scrollHeight
    }
    
    function addAvatarMessage(message) {
      // Start audio wave animation
      audioWave.classList.add('active')
      
      const messageElement = document.createElement('div')
      messageElement.className = 'message avatar-message'
      
      // Simulate typing effect
      const typingIndicator = document.createElement('div')
      typingIndicator.className = 'typing-indicator'
      typingIndicator.innerHTML = '<span></span><span></span><span></span>'
      messageElement.appendChild(typingIndicator)
      chatMessages.appendChild(messageElement)
      chatMessages.scrollTop = chatMessages.scrollHeight
      
      // Type out message character by character
      setTimeout(() => {
        messageElement.innerHTML = ''
        let i = 0
        const messageText = document.createElement('span')
        messageText.className = 'message-text'
        messageElement.appendChild(messageText)
        
        const typeInterval = setInterval(() => {
          if (i < message.length) {
            messageText.textContent += message.charAt(i)
            chatMessages.scrollTop = chatMessages.scrollHeight
            i++
          } else {
            clearInterval(typeInterval)
            audioWave.classList.remove('active')
          }
        }, 30)
      }, 1000)
    }
    
    function processMessage(message) {
      message = message.toLowerCase()
      
      // Simple response matching system
      if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        const greeting = visitorName ? `Hello ${visitorName}!` : 'Hello there!'
        addAvatarMessage(`${greeting} How can I help you today?`)
      }
      else if (message.includes('name')) {
        addAvatarMessage("I'm an AI assistant representing the portfolio owner. I can answer questions about their skills and work.")
      }
      else if (message.includes('tech') || message.includes('stack') || message.includes('technologies')) {
        addAvatarMessage("I specialize in HTML, CSS (including SCSS/SASS), JavaScript, REST APIs, Express, Node.js, and SQLite. I'm currently expanding my skills with React and Tailwind CSS. I also have interests in AI technologies.")
      }
      else if (message.includes('project')) {
        addAvatarMessage("I've worked on several projects including an E-commerce platform using Node.js, Express and SQLite, an interactive dashboard with REST APIs, and API integration services. Each project showcases different aspects of my full-stack capabilities.")
      }
      else if (message.includes('experience')) {
        addAvatarMessage("I'm a front-end developer with back-end capabilities, allowing me to build full-stack applications. I focus on creating responsive, performant web experiences with clean code and intuitive user interfaces.")
      }
      else if (message.includes('approach') || message.includes('process')) {
        addAvatarMessage("My development approach focuses on three principles: user-centric design, technical excellence, and continuous learning. I believe in writing clean, maintainable code that delivers exceptional user experiences.")
      }
      else if (message.includes('contact') || message.includes('hire') || message.includes('work')) {
        addAvatarMessage("You can reach out through the contact section at the bottom of this portfolio. I'm open to discussing new opportunities and would love to hear about your project.")
      }
      else if (message.includes('ai') || message.includes('artificial intelligence')) {
        addAvatarMessage("I'm currently exploring AI technologies and plan to integrate more advanced features into my work. This conversational interface is just the beginning of my journey into AI.")
      }
      else {
        addAvatarMessage("That's an interesting question! While I have knowledge about the portfolio owner's skills and projects, I might not have all the details. Feel free to ask something more specific about their technologies, projects, or development approach.")
      }
    }
  }