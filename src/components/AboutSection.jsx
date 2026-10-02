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
          <div className="skills-section">
            <h3 className="skills-title">Skills</h3>
            <ul className="skills-list">
              <li className="skill-item">Figma</li>
              <li className="skill-item">
                Adobe Creative Suite / Illustrator, Indesign, Photoshop, After Effects, Premiere Pro
              </li>
              <li className="skill-item">
                AI Tools & Prototyping / LLMs, Generative Image & Video, Vibe Coding, Ai Prototyping
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
