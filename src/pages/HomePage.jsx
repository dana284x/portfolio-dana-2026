import React from 'react';
import Hero from '../components/Hero';
import WorkSection from '../components/WorkSection';
import AboutSection from '../components/AboutSection';
import PersonalGallery from '../components/PersonalGallery';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WorkSection />
      <AboutSection />
      <PersonalGallery />
    </main>
  );
}
