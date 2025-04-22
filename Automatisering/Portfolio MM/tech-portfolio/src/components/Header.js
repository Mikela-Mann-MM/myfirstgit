// src/components/Header.js
export function renderHeader() {
    const header = document.getElementById('header')
    
    header.innerHTML = `
      <header class="site-header">
        <div class="logo">
          <span class="pixel-text">MM</span>
        </div>
        <nav>
          <ul>
            <li><a href="#" class="nav-link">Home</a></li>
            <li><a href="#" class="nav-link">Projects</a></li>
            <li><a href="#" class="nav-link">Skills</a></li>
            <li><a href="#" class="nav-link">Contact</a></li>
          </ul>
        </nav>
        <div class="theme-toggle">
          <span class="theme-icon">⚡</span>
        </div>
      </header>
    `
    
    // Add theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle')
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode')
      const icon = themeToggle.querySelector('.theme-icon')
      icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '⚡'
    })
  }