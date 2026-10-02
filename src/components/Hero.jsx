import React from 'react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-grid">
        <h1 className="hero-statement">
          <span className="highlight-blue">Product designer</span> based in Tel Aviv, focused on creating seamless interfaces that feel intuitive, empathetic, and effortless to&nbsp;navigate.
        </h1>
        <div className="hero-avatar-placeholder" title="Profile Photo Placeholder">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 4 0 0 0-4-4H8a4 4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span style={{ marginTop: '8px', fontSize: '11px', color: '#777' }}>Photo Placeholder</span>
        </div>
      </div>
    </section>
  );
}
