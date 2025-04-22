// src/components/Footer.js
export function renderFooter() {
    const footer = document.getElementById('footer')
    
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Contact</h3>
            <p><span class="contact-icon">✉</span> email@example.com</p>
            <p><span class="contact-icon">☎</span> (+45) 27570712</p>
          </div>
          
          <div class="footer-section">
            <h3>Social</h3>
            <div class="social-links">
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">Instagram</a>
            </div>
          </div>
          
          <div class="footer-section">
            <p class="footer-note">Built with <span class="heart">♥</span> and JavaScript</p>
            <p class="footer-note">Press ESC for a surprise</p>
          </div>
        </div>
        
        <div class="copyright">
          © ${new Date().getFullYear()} | Front-End Developer Portfolio
        </div>
      </footer>
    `
  }