import React from 'react';

const skillCategories = [
  {
    name: 'Figma',
    tags: []
  },
  {
    name: 'Adobe Creative Suite',
    tags: ['Illustrator', 'InDesign', 'Photoshop', 'After Effects', 'Premiere Pro']
  },
  {
    name: 'AI Tools & Prototyping',
    tags: ['LLMs', 'Generative Image & Video', 'Vibe Coding', 'AI Prototyping']
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="container about-section">
      <div className="section-header reveal-on-scroll">
        <div className="section-title-wrapper">
          <h2 className="section-title">About me</h2>
          <div className="section-title-line"></div>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-bio reveal-on-scroll">
          <p>
            Hi, I'm Dana, a recent Shenkar graduate in Visual Communication, specializing in Digital Product Design. Across two years of industry experience, I've worked on product, web and visual design, with a focus on creating clear and intuitive digital experiences.
          </p>
        </div>

        <div className="resume-details">
          <div className="skills-section reveal-on-scroll">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-group-list">
              {skillCategories.map((group, index) => (
                <div key={index} className="skill-group-item">
                  <h4 className="skill-group-name">{group.name}</h4>
                  {group.tags.length > 0 && (
                    <div className="skill-tags">
                      {group.tags.map((tag, idx) => (
                        <span key={idx} className="skill-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
