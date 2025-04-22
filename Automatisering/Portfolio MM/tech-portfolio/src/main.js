// src/main.js
import './styles/main.scss'
import { renderHeader } from './components/Header'
import { renderFooter } from './components/Footer'
import { renderLogoCarousel } from './components/LogoCarousel'
import { renderVideoSection } from './components/VideoSection'
import { renderAnimatedLogo } from './components/AnimatedLogo'
import { renderBackendSkills } from './components/BackendSkills'

document.querySelector('#app').innerHTML = `
  <div class="portfolio-container">
    <div id="header"></div>
    
    <main>
      <section class="hero">
        <div class="hero__content">
          <h1 class="glitch-text">Front-End Developer</h1>
          <p class="typewriter">Building digital experiences with code.</p>
          <div id="animated-logo"></div>
        </div>
      </section>
      
      <section class="about">
        <h2 class="section-title">About Me</h2>
        <div class="about__content">
          <p>I'm a passionate front-end developer with a unique blend of creative design intuition and technical expertise. My journey in web development began with a curiosity about how digital experiences are crafted, and has evolved into mastering the art of building elegant, responsive, and performant web applications.</p>
          
          <p>With expertise in modern JavaScript frameworks and a keen eye for design, I specialize in transforming complex requirements into intuitive interfaces. I thrive on the challenge of optimizing user experiences and find satisfaction in crafting clean, efficient code that scales.</p>
          
          <p>What sets me apart is my commitment to creating seamless connections between front-end interfaces and back-end systems. I believe in building holistic solutions where every pixel and function serves a purpose. Whether implementing pixel-perfect designs or architecting robust application logic, I approach each project with meticulous attention to detail and a drive for excellence.</p>
          <p># Professional Bio: Front-End Developer

## Summary
I'm a results-driven Front-End Developer with a passion for creating immersive digital experiences that combine aesthetic appeal with technical excellence. Specializing in modern JavaScript frameworks and responsive design, I bridge the gap between creative vision and technical implementation. My unique background in both design and development allows me to approach problems holistically, delivering solutions that are both beautiful and functional.

## Core Technical Skills

### Front-End Technologies
- **HTML5/CSS3/JavaScript**: Expert-level proficiency, with deep understanding of modern ES6+ features
- **CSS Frameworks**: Advanced implementation of SCSS/SASS for creating scalable styling architectures
- **UI Frameworks**: Currently mastering React ecosystem & Tailwind CSS for efficient development
- **Responsive Design**: Creating adaptive interfaces that provide optimal experiences across all devices
- **Performance Optimization**: Implementing advanced techniques for lightning-fast load times

### Back-End Integration
- **API Development**: Building robust REST APIs with Express
- **Database Management**: Data modeling and query optimization with SQLite
- **Server-Side Logic**: Creating efficient middleware and authentication systems with Node.js
- **Full-Stack Integration**: Seamless connection between front-end interfaces and back-end services

## Professional Approach
My development philosophy centers around three core principles:

1. **User-Centric Design**: Every line of code I write serves to enhance the user experience, with careful attention to accessibility, performance, and intuitive interaction.

2. **Technical Excellence**: I maintain high standards for code quality, with emphasis on clean architecture, thorough documentation, and comprehensive testing.

3. **Continuous Learning**: The tech landscape evolves rapidly, and I stay at the forefront by constantly experimenting with emerging technologies and expanding my skill set.

## What Sets Me Apart
Beyond technical skills, I bring a unique perspective to development projects:

- **Problem-Solving Mindset**: I approach challenges with creativity and analytical thinking
- **Attention to Detail**: I believe the difference between good and great lies in the details
- **Collaborative Spirit**: I thrive in team environments, communicating effectively with designers, product managers, and fellow developers
- **End-to-End Capability**: With both front-end expertise and back-end knowledge, I can develop complete solutions independently

I'm constantly pushing the boundaries of what's possible on the web, creating experiences that are not just functional but memorable. Whether optimizing performance, crafting pixel-perfect interfaces, or architecting complex systems, I approach each project with passion and precision.</p>
        </div>
      </section>
      
      <section class="skills">
        <h2 class="section-title">Tech Stack</h2>
        <div id="logo-carousel"></div>
      </section>
      
      <section class="backend">
        <h2 class="section-title">API & Backend Skills</h2>
        <div id="backend-skills"></div>
      </section>
      
      <section class="showcase">
        <h2 class="section-title">Featured Project</h2>
        <div id="video-section"></div>
      </section>
      
      <section class="projects">
        <h2 class="section-title">Projects</h2>
        <div class="projects-grid">
          <div class="project-card">
            <h3>Interactive Dashboard</h3>
            <p>A real-time data visualization dashboard using REST APIs and SVG animations.</p>
            <div class="tech-tags">
              <span>JavaScript</span>
              <span>SCSS</span>
              <span>REST API</span>
            </div>
          </div>
          
          <div class="project-card">
            <h3>E-commerce Platform</h3>
            <p>Full-featured online store with cart functionality and payment processing.</p>
            <div class="tech-tags">
              <span>Node.js</span>
              <span>Express</span>
              <span>SQLite</span>
            </div>
          </div>
          
          <div class="project-card">
            <h3>API Integration Service</h3>
            <p>A middleware service that connects various APIs and normalizes data flow.</p>
            <div class="tech-tags">
              <span>Express</span>
              <span>SQLite</span>
              <span>REST API</span>
            </div>
          </div>
          
          <div class="project-card">
            <h3>Portfolio Website</h3>
            <p>This very website showcasing my work and skills as a front-end developer.</p>
            <div class="tech-tags">
              <span>Vite</span>
              <span>SASS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </section>
      
      <section class="approach">
        <h2 class="section-title">My Approach</h2>
        <div class="approach-content">
          <p>I believe that exceptional digital products arise from a perfect blend of technical excellence and thoughtful design. My development philosophy centers around these core principles:</p>
          
          <div class="principles">
            <div class="principle">
              <h3>Performance First</h3>
              <p>I optimize every line of code for speed and efficiency, ensuring lightning-fast load times and smooth interactions.</p>
            </div>
            
            <div class="principle">
              <h3>Responsive By Default</h3>
              <p>Every interface I build works flawlessly across all devices and screen sizes, with no compromises in functionality.</p>
            </div>
            
            <div class="principle">
              <h3>Clean Architecture</h3>
              <p>I structure code with maintainability in mind, creating systems that are modular, well-documented, and easy to extend.</p>
            </div>
            
            <div class="principle">
              <h3>End-to-End Solutions</h3>
              <p>From database design to API development to frontend implementation, I create cohesive full-stack experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
    <div id="footer"></div>
  </div>
`

renderHeader()
renderFooter()
renderLogoCarousel()
renderVideoSection()
renderAnimatedLogo()
renderBackendSkills()

// Easter egg: Snake game
let snakeGame = false
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !snakeGame) {
    console.log('Snake game activated!')
    // Snake game would be initialized here
    snakeGame = true
  }
})