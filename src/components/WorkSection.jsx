import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'sync',
    number: '01',
    title: 'Sync',
    description: 'A digital wellbeing platform that brings different care fields into one cohesive and seamless experience.',
    mediaType: 'Desktop & Mobile App Mockup',
    reverse: false,
  },
  {
    id: 'seasoned',
    number: '02',
    title: 'Seasoned',
    description: 'A menu planning app designed to help chefs plan and track menus in a smart, time-efficient, and cost-effective way by leveraging real-time seasonality and pricing data.',
    mediaType: 'Mobile Screens Mockup',
    reverse: true,
  },
  {
    id: 'greenlight',
    number: '03',
    title: 'Greenlight',
    description: 'A digital system that streamlines how Urban Renewal Authority employees evaluate, review, and approve projects.',
    mediaType: 'App & Dashboard Interface',
    reverse: false,
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="container" style={{ paddingTop: '40px' }}>
      <div className="section-header">
        <div className="section-title-wrapper">
          <h2 className="section-title">WORK</h2>
          <div className="section-title-line"></div>
        </div>
      </div>

      <div className="work-list">
        {projects.map((project) => (
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className={`project-card ${project.reverse ? 'reverse-layout' : ''}`}
          >
            {!project.reverse ? (
              <>
                <div className="project-media">
                  <div className="placeholder-box">
                    <span className="placeholder-badge">{project.title} Preview</span>
                    <span className="placeholder-hint">[ Image Placeholder: {project.mediaType} ]</span>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-description-wrapper">
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-footer-meta">
                    <h3 className="project-name">{project.title}</h3>
                    <span className="project-number">{project.number}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="project-content">
                  <div className="project-description-wrapper">
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-footer-meta">
                    <h3 className="project-name">{project.title}</h3>
                    <span className="project-number">{project.number}</span>
                  </div>
                </div>
                <div className="project-media">
                  <div className="placeholder-box">
                    <span className="placeholder-badge">{project.title} Preview</span>
                    <span className="placeholder-hint">[ Image Placeholder: {project.mediaType} ]</span>
                  </div>
                </div>
              </>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
