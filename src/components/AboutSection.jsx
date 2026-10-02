import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="container about-section">
      <div className="section-header">
        <div className="section-title-wrapper">
          <h2 className="section-title">About me</h2>
          <div className="section-title-line"></div>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-bio">
          <p>
            Hi, I'm Dana, a recent Shenkar graduate in Visual Communication, specializing in Digital Product Design. Across two years of industry experience, I've worked on product, web and visual design, with a focus on creating clear and intuitive digital experiences.
          </p>
        </div>

        <div className="resume-details">
          <div className="resume-group">
            <div className="resume-group-title">Skills:</div>
            <div className="resume-item-name" style={{ borderBottom: '1px solid #ddd', paddingBottom: '8px', display: 'inline-block' }}>
              Figma
            </div>
          </div>

          <div className="resume-group">
            <div className="resume-group-title">Work History:</div>
            <div style={{ marginBottom: '16px' }}>
              <div className="resume-item-name">Active Creative Studio</div>
              <div className="resume-item-sub">2 Years as Visual Designer & UI/UX Designer, Tel-Aviv</div>
            </div>
            <div>
              <div className="resume-item-name">Active Communication</div>
              <div className="resume-item-sub">1 Year as Visual & UI/UX Designer, Tel-Aviv</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
