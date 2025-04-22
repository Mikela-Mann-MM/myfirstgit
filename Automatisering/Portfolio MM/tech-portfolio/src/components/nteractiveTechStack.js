// src/components/InteractiveTechStack.js
export function renderInteractiveTechStack() {
    const techStackSection = document.getElementById('interactive-tech-stack')
    
    techStackSection.innerHTML = `
      <div class="tech-stack-container">
        <div class="tech-graph-container">
          <div class="tech-graph" id="tech-graph"></div>
          <div class="tech-controls">
            <button class="tech-filter-btn active" data-filter="all">All</button>
            <button class="tech-filter-btn" data-filter="frontend">Frontend</button>
            <button class="tech-filter-btn" data-filter="backend">Backend</button>
            <button class="tech-filter-btn" data-filter="tools">Tools</button>
          </div>
        </div>
        
        <div class="tech-details" id="tech-details">
          <div class="tech-default-message">
            <h3>Interactive Technology Map</h3>
            <p>Click on any technology node to see details about my experience with it and how it connects to other technologies in my stack.</p>
            <p>The connections between nodes represent how technologies work together in my projects.</p>
          </div>
        </div>
      </div>
    `
    
    // Define tech stack data
    const technologies = [
      {
        id: 'html',
        name: 'HTML',
        category: 'frontend',
        connections: ['css', 'js', 'sass'],
        description: 'Extensive experience with semantic HTML5, accessibility best practices, and structured markup. I use HTML as the foundation for all web projects, focusing on semantic meaning and proper document structure.',
        level: 95
      },
      {
        id: 'css',
        name: 'CSS',
        category: 'frontend',
        connections: ['html', 'sass', 'js'],
        description: 'Advanced CSS skills including animations, transitions, grid layouts, and responsive design techniques. I create pixel-perfect implementations of designs with clean, maintainable CSS.',
        level: 90
      },
      {
        id: 'js',
        name: 'JavaScript',
        category: 'frontend',
        connections: ['html', 'css', 'react', 'node', 'express'],
        description: 'Strong command of modern JavaScript (ES6+) with experience in DOM manipulation, asynchronous programming, and functional techniques. I write clean, efficient JavaScript code focusing on performance and maintainability.',
        level: 88
      },
      {
        id: 'sass',
        name: 'SASS/SCSS',
        category: 'frontend',
        connections: ['css'],
        description: 'Expert use of SASS/SCSS for creating maintainable styling architectures using mixins, functions, variables and modular components. I leverage SASS to create scalable CSS systems for large projects.',
        level: 85
      },
      {
        id: 'react',
        name: 'React',
        category: 'frontend',
        connections: ['js', 'tailwind'],
        description: 'Currently mastering React through projects that utilize hooks, context API, and component composition patterns. My focus is on building reusable component libraries and optimized render performance.',
        level: 70
      },
      {
        id: 'tailwind',
        name: 'Tailwind',
        category: 'frontend',
        connections: ['css', 'react'],
        description: 'Currently adding Tailwind CSS to my toolkit for rapid UI development. I appreciate its utility-first approach and how it accelerates the development process while maintaining design consistency.',
        level: 65
      },
      {
        id: 'node',
        name: 'Node.js',
        category: 'backend',
        connections: ['js', 'express', 'sqlite'],
        description: 'Proficient with Node.js for server-side JavaScript, particularly for creating backend services and APIs. I use Node.js to build efficient, scalable network applications.',
        level: 80
      },
      {
        id: 'express',
        name: 'Express',
        category: 'backend',
        connections: ['node', 'js', 'sqlite', 'restapi'],
        description: 'Experienced with Express.js for creating robust web applications and RESTful APIs. I implement middleware patterns, route organization, and error handling for production-quality Express applications.',
        level: 78
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        category: 'backend',
        connections: ['express', 'node'],
        description: 'Skilled in database design and SQL query optimization with SQLite. I implement efficient data models and relationships, and write optimized queries for application data needs.',
        level: 75
      },
      {
        id: 'restapi',
        name: 'REST API',
        category: 'backend',
        connections: ['express', 'js'],
        description: 'Experienced in designing and implementing RESTful APIs following best practices for resource modeling, error handling, and documentation. My APIs are built with developer experience and maintainability in mind.',
        level: 82
      },
      {
        id: 'vite',
        name: 'Vite',
        category: 'tools',
        connections: ['js', 'react'],
        description: 'Working knowledge of Vite for modern frontend development with fast hot module replacement and optimized builds. I use Vite to improve development efficiency and build performance.',
        level: 70
      },
      {
        id: 'git',
        name: 'Git',
        category: 'tools',
        connections: [],
        description: 'Proficient with Git for version control, including branching strategies, pull requests, and collaborative workflows. I maintain clean commit histories and effective documentation.',
        level: 85
      }
    ]
    
    // Create tech graph
    function createTechGraph() {
      const techGraph = document.getElementById('tech-graph')
      const techDetails = document.getElementById('tech-details')
      
      if (!techGraph) return
      
      // Clear any existing content
      techGraph.innerHTML = ''
      
      // Create nodes
      technologies.forEach(tech => {
        const node = document.createElement('div')
        node.className = `tech-node ${tech.category}`
        node.id = `node-${tech.id}`
        node.setAttribute('data-tech-id', tech.id)
        
        // Calculate position (simplified for this example - would be more complex in real implementation)
        const angle = Math.random() * Math.PI * 2
        const radius = 120 + Math.random() * 100
        const x = Math.cos(angle) * radius + 250 // Center X
        const y = Math.sin(angle) * radius + 250 // Center Y
        
        node.style.left = `${x}px`
        node.style.top = `${y}px`
        
        // Size based on proficiency level
        const size = 30 + (tech.level / 10)
        node.style.width = `${size}px`
        node.style.height = `${size}px`
        
        // Node content
        node.innerHTML = `
          <span class="node-label">${tech.name}</span>
        `
        
        // Click event
        node.addEventListener('click', () => showTechDetails(tech))
        
        techGraph.appendChild(node)
      })
      
      // Add connections (SVG lines)
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      svg.classList.add('connections-svg')
      svg.setAttribute('width', '100%')
      svg.setAttribute('height', '100%')
      
      technologies.forEach(tech => {
        tech.connections.forEach(connectionId => {
          setTimeout(() => {
            const startNode = document.getElementById(`node-${tech.id}`)
            const endNode = document.getElementById(`node-${connectionId}`)
            
            if (!startNode || !endNode) return
            
            // Get positions
            const startRect = startNode.getBoundingClientRect()
            const endRect = endNode.getBoundingClientRect()
            const graphRect = techGraph.getBoundingClientRect()
            
            // Calculate center points relative to container
            const startX = startRect.left - graphRect.left + startRect.width / 2
            const startY = startRect.top - graphRect.top + startRect.height / 2
            const endX = endRect.left - graphRect.left + endRect.width / 2
            const endY = endRect.top - graphRect.top + endRect.height / 2
            
            // Create SVG line
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
            line.setAttribute('x1', startX)
            line.setAttribute('y1', startY)
            line.setAttribute('x2', endX)
            line.setAttribute('y2', endY)
            line.setAttribute('stroke', 'var(--connection-color, #8888ff)')
            line.setAttribute('stroke-width', '2')
            line.setAttribute('opacity', '0.6')
            line.classList.add(`connection-${tech.id}`, `connection-${connectionId}`, 'tech-connection')
            
            svg.appendChild(line)
          }, 100) // Small delay to ensure nodes are positioned
        })
      })
      
      techGraph.appendChild(svg)
      
      // Add drag functionality (simplified)
      let draggedNode = null
      let offsetX = 0
      let offsetY = 0
      
      techGraph.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('tech-node')) {
          draggedNode = e.target
          const rect = draggedNode.getBoundingClientRect()
          offsetX = e.clientX - rect.left
          offsetY = e.clientY - rect.top
          
          // Highlight connections
          const techId = draggedNode.getAttribute('data-tech-id')
          document.querySelectorAll(`.connection-${techId}`).forEach(conn => {
            conn.setAttribute('stroke', 'var(--connection-highlight, #ff88ff)')
            conn.setAttribute('stroke-width', '3')
            conn.setAttribute('opacity', '1')
          })
        }
      })
      
      document.addEventListener('mousemove', (e) => {
        if (draggedNode) {
          const graphRect = techGraph.getBoundingClientRect()
          const x = e.clientX - graphRect.left - offsetX
          const y = e.clientY - graphRect.top - offsetY
          
          // Set new position
          draggedNode.style.left = `${x}px`
          draggedNode.style.top = `${y}px`
          
          // Update connections
          const techId = draggedNode.getAttribute('data-tech-id')
          updateConnections(techId)
        }
      })
      
      document.addEventListener('mouseup', () => {
        if (draggedNode) {
          const techId = draggedNode.getAttribute('data-tech-id')
          
          // Reset connection highlights
          document.querySelectorAll(`.connection-${techId}`).forEach(conn => {
            conn.setAttribute('stroke', 'var(--connection-color, #8888ff)')
            conn.setAttribute('stroke-width', '2')
            conn.setAttribute('opacity', '0.6')
          })
          
          draggedNode = null
        }
      })
    }
    
    // Update connections when nodes move
    function updateConnections(techId) {
      const graphRect = document.getElementById('tech-graph').getBoundingClientRect()
      
      document.querySelectorAll(`.connection-${techId}`).forEach(connection => {
        const classes = Array.from(connection.classList)
        
        // Find the other tech ID
        let otherTechId = null
        classes.forEach(cls => {
          if (cls.startsWith('connection-') && !cls.endsWith(techId)) {
            otherTechId = cls.replace('connection-', '')
          }
        })
        
        if (!otherTechId) return
        
        // Get nodes
        const node1 = document.getElementById(`node-${techId}`)
        const node2 = document.getElementById(`node-${otherTechId}`)
        
        if (!node1 || !node2) return
        
        // Calculate new line positions
        const rect1 = node1.getBoundingClientRect()
        const rect2 = node2.getBoundingClientRect()
        
        const x1 = rect1.left - graphRect.left + rect1.width / 2
        const y1 = rect1.top - graphRect.top + rect1.height / 2
        const x2 = rect2.left - graphRect.left + rect2.width / 2
        const y2 = rect2.top - graphRect.top + rect2.height / 2
        
        // Update line
        connection.setAttribute('x1', x1)
        connection.setAttribute('y1', y1)
        connection.setAttribute('x2', x2)
        connection.setAttribute('y2', y2)
      })
    }
    
    // Show tech details
    function showTechDetails(tech) {
      const techDetails = document.getElementById('tech-details')
      
      // Highlight active node
      document.querySelectorAll('.tech-node').forEach(node => {
        node.classList.remove('active')
      })
      document.getElementById(`node-${tech.id}`).classList.add('active')
      
      // Show details
      techDetails.innerHTML = `
        <div class="tech-detail-card">
          <h3>${tech.name}</h3>
          <div class="tech-proficiency">
            <div class="proficiency-label">Proficiency:</div>
            <div class="proficiency-bar">
              <div class="proficiency-fill" style="width: ${tech.level}%"></div>
            </div>
            <div class="proficiency-percentage">${tech.level}%</div>
          </div>
          <p>${tech.description}</p>
          
          <div class="tech-connections-list">
            <h4>Connections:</h4>
            <ul>
              ${tech.connections.map(connId => {
                const connTech = technologies.find(t => t.id === connId)
                return connTech ? `<li>${connTech.name}</li>` : ''
              }).join('')}
            </ul>
          </div>
        </div>
      `
      
      // Highlight connections
      document.querySelectorAll('.tech-connection').forEach(conn => {
        conn.setAttribute('stroke', 'var(--connection-color, #8888ff)')
        conn.setAttribute('stroke-width', '2')
        conn.setAttribute('opacity', '0.3')
      })
      
      document.querySelectorAll(`.connection-${tech.id}`).forEach(conn => {
        conn.setAttribute('stroke', 'var(--connection-highlight, #ff88ff)')
        conn.setAttribute('stroke-width', '3')
        conn.setAttribute('opacity', '1')
      })
    }
    
    // Filter tech nodes
    function setupTechFilters() {
      const filterButtons = document.querySelectorAll('.tech-filter-btn')
      
      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          // Update active button
          filterButtons.forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
          
          const filter = btn.getAttribute('data-filter')
          
          // Apply filter
          document.querySelectorAll('.tech-node').forEach(node => {
            if (filter === 'all' || node.classList.