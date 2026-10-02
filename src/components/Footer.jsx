import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "dana.paskin@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer id="contact" className="footer-banner">
      <div className="container">
        <div className="footer-subtitle">Have something in mind?</div>
        <h2 className="footer-title">Lets Work Together</h2>
        <div className="footer-actions">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="action-pill"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            onClick={handleCopyEmail}
            className="action-pill"
            title="Click to copy email or open mail client"
          >
            {copied ? '✓ Email Copied!' : 'Email'}
          </a>
        </div>
      </div>
    </footer>
  );
}
