// src/components/VideoSection.js
export function renderVideoSection() {
    const videoSection = document.getElementById('video-section')
    
    videoSection.innerHTML = `
      <div class="video-container">
        <div class="video-frame">
          <div class="video-placeholder">
            <span class="play-icon">▶</span>
            <span class="placeholder-text">My Featured Project Video</span>
          </div>
        </div>
        <div class="video-info">
          <h3>Project Spotlight</h3>
          <p>This is where my featured project video will be displayed. Add a demo or walkthrough of your best work to showcase your skills and creative approach.</p>
          <button class="cta-button">Learn More</button>
        </div>
      </div>
    `
    
    // Add click event for placeholder
    const videoPlaceholder = document.querySelector('.video-placeholder')
    videoPlaceholder.addEventListener('click', () => {
      alert('Video player would start here in the actual implementation!')
    })
  }