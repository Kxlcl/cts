import { useState } from 'react'
import './Tier3.css'

type Page = 'home' | 'about' | 'features' | 'characters' | 'gallery' | 'download'

function Tier3() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <section className="tier3-hero">
            <div className="tier3-hero-content">
              <p className="tier3-hero-label">COMING 2026</p>
              <h1>QUANTUM<br /><span>NEXUS</span></h1>
              <p className="tier3-hero-desc">Enter a universe where reality bends to your will. Master time manipulation, forge alliances, and shape the fate of humanity in this revolutionary sci-fi RPG.</p>
              <div className="tier3-hero-actions">
                <button onClick={() => setCurrentPage('download')} className="tier3-btn-primary">Pre-Order Now</button>
                <button onClick={() => setCurrentPage('gallery')} className="tier3-btn-secondary">Watch Trailer</button>
              </div>
            </div>
          </section>
        )

      case 'about':
        return (
          <section className="tier3-about">
            <div className="tier3-section-label">THE STORY</div>
            <h2>A New Era of Gaming</h2>
            <div className="tier3-about-content">
              <div className="tier3-about-text">
                <p>
                  In the year 2184, humanity discovered the Quantum Nexus—a gateway to infinite parallel realities.
                  As a Nexus Walker, you possess the rare ability to traverse these dimensions, but with great power
                  comes impossible choices.
                </p>
                <p>
                  Every decision ripples across the multiverse. Build your character, master unique abilities, and
                  forge your path through a branching narrative where no two playthroughs are the same.
                </p>
                <p>
                  The fate of countless worlds rests in your hands. Will you become humanity's savior, or will the
                  power of the Nexus corrupt you? The choice is yours, but remember—every action has consequences
                  that echo across dimensions.
                </p>
                <button onClick={() => setCurrentPage('features')} className="tier3-learn-more">
                  Explore Features →
                </button>
              </div>
              <div className="tier3-about-image"></div>
            </div>
          </section>
        )

      case 'features':
        return (
          <section className="tier3-features">
            <div className="tier3-section-label">GAMEPLAY</div>
            <h2>Revolutionary Features</h2>
            <div className="tier3-features-grid">
              <div className="tier3-feature">
                <div className="tier3-feature-icon">⚡</div>
                <h3>Dynamic Time Control</h3>
                <p>Manipulate time in combat and exploration. Slow, rewind, or fast-forward moments to gain tactical advantages and solve complex puzzles.</p>
              </div>
              <div className="tier3-feature">
                <div className="tier3-feature-icon">🌌</div>
                <h3>Multiverse Exploration</h3>
                <p>Travel between parallel dimensions, each with unique environments, NPCs, and storylines that react to your choices.</p>
              </div>
              <div className="tier3-feature">
                <div className="tier3-feature-icon">⚔️</div>
                <h3>Tactical Combat</h3>
                <p>Engage in strategic real-time combat combining weapons, abilities, and environmental manipulation.</p>
              </div>
              <div className="tier3-feature">
                <div className="tier3-feature-icon">🎭</div>
                <h3>Branching Narrative</h3>
                <p>Your choices matter. Shape relationships, factions, and the ultimate fate of the multiverse through your actions.</p>
              </div>
            </div>
          </section>
        )

      case 'characters':
        return (
          <section className="tier3-characters">
            <div className="tier3-section-label">MEET THE CAST</div>
            <h2>Unforgettable Characters</h2>
            <div className="tier3-characters-grid">
              <div className="tier3-character-card">
                <div className="tier3-character-image"></div>
                <div className="tier3-character-info">
                  <h3>Nova Chen</h3>
                  <p className="tier3-character-role">Nexus Walker</p>
                  <p>A former scientist turned interdimensional explorer, Nova seeks to understand the Nexus before it tears reality apart.</p>
                </div>
              </div>
              <div className="tier3-character-card">
                <div className="tier3-character-image"></div>
                <div className="tier3-character-info">
                  <h3>Kade Rourke</h3>
                  <p className="tier3-character-role">Rogue Agent</p>
                  <p>A mysterious operative with ties to the Nexus Collective. His motives remain unclear, but his skills are undeniable.</p>
                </div>
              </div>
              <div className="tier3-character-card">
                <div className="tier3-character-image"></div>
                <div className="tier3-character-info">
                  <h3>Dr. Elara Voss</h3>
                  <p className="tier3-character-role">Lead Scientist</p>
                  <p>The brilliant mind behind Nexus technology, now struggling with the consequences of her creation.</p>
                </div>
              </div>
            </div>
          </section>
        )

      case 'gallery':
        return (
          <section className="tier3-gallery">
            <div className="tier3-section-label">SCREENSHOTS</div>
            <h2>Explore the Multiverse</h2>
            <div className="tier3-gallery-grid">
              <div className="tier3-gallery-item tier3-gallery-large"></div>
              <div className="tier3-gallery-item"></div>
              <div className="tier3-gallery-item"></div>
              <div className="tier3-gallery-item"></div>
              <div className="tier3-gallery-item tier3-gallery-wide"></div>
            </div>
          </section>
        )

      case 'download':
        return (
          <section className="tier3-download">
            <div className="tier3-download-content">
              <h2>Ready to Begin Your Journey?</h2>
              <p>Pre-order now and receive exclusive in-game items, early access to beta, and the official digital artbook.</p>
              <div className="tier3-specs">
                <div className="tier3-spec-column">
                  <h3>Minimum Requirements</h3>
                  <ul>
                    <li>OS: Windows 10 64-bit</li>
                    <li>Processor: Intel Core i5-8400</li>
                    <li>Memory: 8 GB RAM</li>
                    <li>Graphics: NVIDIA GTX 1060</li>
                    <li>Storage: 50 GB available</li>
                  </ul>
                </div>
                <div className="tier3-spec-column">
                  <h3>Recommended Requirements</h3>
                  <ul>
                    <li>OS: Windows 11 64-bit</li>
                    <li>Processor: Intel Core i7-10700K</li>
                    <li>Memory: 16 GB RAM</li>
                    <li>Graphics: NVIDIA RTX 3070</li>
                    <li>Storage: 50 GB SSD</li>
                  </ul>
                </div>
              </div>
              <div className="tier3-download-buttons">
                <button className="tier3-download-btn tier3-btn-steam">
                  <span className="tier3-platform-icon">🎮</span>
                  Pre-Order on Steam
                </button>
                <button className="tier3-download-btn tier3-btn-epic">
                  <span className="tier3-platform-icon">🎯</span>
                  Pre-Order on Epic
                </button>
                <button className="tier3-download-btn tier3-btn-console">
                  <span className="tier3-platform-icon">🎲</span>
                  Pre-Order Console
                </button>
              </div>
            </div>
          </section>
        )

      default:
        return null
    }
  }

  return (
    <div className="tier3-page">
      <header className="tier3-header">
        <div className="tier3-logo" onClick={() => setCurrentPage('home')} style={{ cursor: 'pointer' }}>
          QUANTUM NEXUS
        </div>
        <nav className="tier3-nav">
          <a onClick={() => setCurrentPage('about')} className={currentPage === 'about' ? 'active' : ''}>About</a>
          <a onClick={() => setCurrentPage('features')} className={currentPage === 'features' ? 'active' : ''}>Features</a>
          <a onClick={() => setCurrentPage('characters')} className={currentPage === 'characters' ? 'active' : ''}>Characters</a>
          <a onClick={() => setCurrentPage('gallery')} className={currentPage === 'gallery' ? 'active' : ''}>Gallery</a>
          <a onClick={() => setCurrentPage('download')} className={currentPage === 'download' ? 'active' : ''}>Download</a>
        </nav>
      </header>

      {renderPage()}

      <footer className="tier3-footer">
        <div className="tier3-footer-content">
          <div className="tier3-footer-section">
            <h4>QUANTUM NEXUS</h4>
            <p>Experience the next evolution of gaming. Master time, shape reality, and become the legend.</p>
          </div>
          <div className="tier3-footer-section">
            <h4>PLATFORMS</h4>
            <p>PC (Steam, Epic)</p>
            <p>PlayStation 5</p>
            <p>Xbox Series X|S</p>
          </div>
          <div className="tier3-footer-section">
            <h4>COMMUNITY</h4>
            <p>Discord Server</p>
            <p>Twitter @QuantumNexus</p>
            <p>support@quantumnexus.game</p>
          </div>
        </div>
        <div className="tier3-footer-bottom">
          <p>&copy; 2026 Quantum Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Tier3
