import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const projectDetails = {
  sync: {
    number: '01',
    title: 'Sync',
    subtitle: 'Digital Wellbeing Platform',
    description: 'A digital wellbeing platform that brings different care fields into one cohesive and seamless experience.',
    role: 'Product Designer & Researcher',
    duration: '3 Months',
    tags: ['Mobile App', 'UI/UX Design', 'Design System', 'Wellbeing']
  },
  seasoned: {
    number: '02',
    title: 'Seasoned',
    subtitle: 'Smart Menu Planning Platform for Chefs',
    description: 'A menu planning app designed to help chefs plan and track menus in a smart, time-efficient, and cost-effective way by leveraging real-time seasonality and pricing data.',
    role: 'Lead UI/UX Designer',
    duration: '2 Months',
    tags: ['Mobile App', 'Menu Planning', 'UI/UX Design', 'Data Visualization']
  },
  greenlight: {
    number: '03',
    title: 'Greenlight',
    subtitle: 'Urban Renewal Project Evaluation System',
    description: 'A digital system that streamlines how Urban Renewal Authority employees evaluate, review, and approve projects.',
    role: 'Product Designer',
    duration: '2.5 Months',
    tags: ['GovTech', 'Web System', 'Process Optimization', 'UI/UX']
  }
};

export default function ProjectPage() {
  const { id } = useParams();
  const project = projectDetails[id] || {
    number: '00',
    title: 'Case Study',
    subtitle: 'Detailed Design Case Study',
    description: 'Case study overview and design process details.',
    role: 'Product Designer',
    duration: '2026',
    tags: ['UI/UX', 'Product Design']
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="container project-detail-header" style={{ minHeight: '80vh' }}>
      <Link to="/" className="back-link">
        ← Back to Homepage
      </Link>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <span style={{ fontSize: '15px', color: '#888', fontWeight: 600, letterSpacing: '1px' }}>
            PROJECT {project.number}
          </span>
          <h1 className="project-detail-title">{project.title}</h1>
        </div>
      </div>

      <p style={{ fontSize: '24px', fontFamily: 'var(--font-serif-display)', color: '#333', marginBottom: '20px' }}>
        {project.subtitle}
      </p>

      <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#444', maxWidth: '750px', marginBottom: '40px' }}>
        {project.description}
      </p>

      {/* Hero Media Placeholder for Figma Case Study Screens */}
      <div className="project-detail-hero-media">
        <div className="placeholder-box" style={{ background: 'linear-gradient(135deg, #F9F9F9 0%, #E9E9E9 100%)' }}>
          <span className="placeholder-badge">{project.title} Figma Screens</span>
          <p className="placeholder-hint" style={{ marginTop: '8px' }}>
            [ Attach your Figma case study screens here for project {project.title} ]
          </p>
        </div>
      </div>

      {/* Case Study Metadata */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', padding: '40px 0', borderTop: '1px solid #000', borderBottom: '1px solid #000', marginBottom: '80px' }}>
        <div>
          <h4 style={{ fontSize: '13px', color: '#888', textTransform: 'uppercase', marginBottom: '8px' }}>Role</h4>
          <p style={{ fontSize: '16px', fontWeight: 600 }}>{project.role}</p>
        </div>
        <div>
          <h4 style={{ fontSize: '13px', color: '#888', textTransform: 'uppercase', marginBottom: '8px' }}>Timeline</h4>
          <p style={{ fontSize: '16px', fontWeight: 600 }}>{project.duration}</p>
        </div>
        <div>
          <h4 style={{ fontSize: '13px', color: '#888', textTransform: 'uppercase', marginBottom: '8px' }}>Focus</h4>
          <p style={{ fontSize: '16px', fontWeight: 600 }}>{project.tags.join(', ')}</p>
        </div>
      </div>

      {/* Case Study Section Blocks Ready for Figma Images */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '80px', marginBottom: '120px' }}>
        <div>
          <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '36px', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
            01. The Challenge & Research
          </h3>
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#333', maxWidth: '800px', marginBottom: '30px' }}>
            Detailed breakdown of problem statement, user research, wireframes, and design iterations.
          </p>
          <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#EAEAEA', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#777', fontSize: '14px' }}>[ Figma Wireframes & User Research Screen Placeholder ]</span>
          </div>
        </div>

        <div>
          <h3 style={{ fontFamily: 'var(--font-serif-display)', fontSize: '36px', color: 'var(--color-terracotta)', marginBottom: '16px' }}>
            02. Design Solution & UI Components
          </h3>
          <p style={{ fontSize: '17px', lineHeight: '1.7', color: '#333', maxWidth: '800px', marginBottom: '30px' }}>
            High fidelity UI designs, component design systems, color tokens, and interactive prototypes.
          </p>
          <div style={{ width: '100%', aspectRatio: '16/9', backgroundColor: '#E0E0E0', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ color: '#777', fontSize: '14px' }}>[ Final UI Design Screen Placeholder ]</span>
          </div>
        </div>
      </div>
    </div>
  );
}
