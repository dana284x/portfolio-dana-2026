import React, { useState } from 'react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "284dana@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/dana-p-79395818a";

  const handleEmailClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer id="contact" className="footer-banner">
      <div className="container reveal-on-scroll">
        <div className="footer-subtitle">Have something in mind?</div>
        <h2 className="footer-title">Lets Work Together</h2>
        <div className="footer-actions">
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-pill"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            onClick={handleEmailClick}
            className="action-pill"
            title="Open email client (and copy email address)"
          >
            {copied ? '✓ Email Copied!' : 'Email'}
          </a>
        </div>
      </div>
    </footer>
  );
}
