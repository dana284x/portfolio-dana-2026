import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'sync',
    number: '01',
    title: 'Sync',
    description: 'A digital wellbeing platform that brings different care fields into one cohesive and seamless experience.',
    mediaType: 'Desktop & Mobile App Mockup',
    image: '/art/Rectangle 2.png',
    reverse: false,
  },
  {
    id: 'seasoned',
    number: '02',
    title: 'Seasoned',
    description: 'A menu planning app designed to help chefs plan and track menus in a smart, time-efficient, and cost-effective way by leveraging real-time seasonality and pricing data.',
    mediaType: 'Mobile Screens Mockup',
    image: '/art/Rectangle 34.png',
    reverse: true,
  },
  {
    id: 'greenlight',
    number: '03',
    title: 'Greenlight',
    description: 'A digital platform that streamlines project evaluation and approval for Urban Renewal teams.',
    mediaType: 'App & Dashboard Interface',
    image: '/art/Sunlit Greenlight Analytics Workspace (1).png',
    reverse: false,
  }
];

export default function WorkSection() {
  return (
    <section id="work" className="container" style={{ paddingTop: '40px' }}>
      <div className="section-header reveal-on-scroll">
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
            className={`project-card ${project.reverse ? 'reverse-layout' : ''} reveal-on-scroll`}
          >
            {!project.reverse ? (
              <>
                <div className="project-media">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} Preview`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <div className="placeholder-box">
                      <span className="placeholder-badge">{project.title} Preview</span>
                      <span className="placeholder-hint">[ Image Placeholder: {project.mediaType} ]</span>
                    </div>
                  )}
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
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} Preview`} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  ) : (
                    <div className="placeholder-box">
                      <span className="placeholder-badge">{project.title} Preview</span>
                      <span className="placeholder-hint">[ Image Placeholder: {project.mediaType} ]</span>
                    </div>
                  )}
                </div>
              </>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
