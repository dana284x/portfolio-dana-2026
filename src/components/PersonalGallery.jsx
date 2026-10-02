import React from 'react';

const artworkPlaceholders = [
  { id: 1, title: 'Bird & Floral Pattern', className: 'art-pattern-1', text: 'Illustration 01' },
  { id: 2, title: 'Botanical Woman Artwork', className: 'art-pattern-2', text: 'Illustration 02' },
  { id: 3, title: 'Ornate Tile Motif', className: 'art-pattern-3', text: 'Tile Design 03' },
  { id: 4, title: 'Tropical Palm Leaves', className: 'art-pattern-4', text: 'Pattern 04' },
  { id: 5, title: 'Red Character Illustration', className: 'art-pattern-5', text: 'Character Art 05' },
  { id: 6, title: 'Abstract Seed Graphic', className: 'art-pattern-6', text: 'Graphic Poster 06' },
  { id: 7, title: 'Minimalist Overlap Shapes', className: 'art-pattern-7', text: 'Vector Composition 07' },
  { id: 8, title: 'Editorial Candle & Feather', className: 'art-pattern-8', text: 'Visual Design 08' },
  { id: 9, title: 'Totem Geometric Art', className: 'art-pattern-9', text: 'Abstract Art 09' },
];

export default function PersonalGallery() {
  const firstRow = artworkPlaceholders.slice(0, 5);
  const secondRow = artworkPlaceholders.slice(5, 9);

  return (
    <section className="container gallery-section">
      <h2 className="gallery-heading">
        product is nice but i <span className="highlight-blue">also like...</span>
      </h2>

      <div className="gallery-grid">
        {firstRow.map((art) => (
          <div key={art.id} className={`art-card ${art.className}`}>
            <div className="art-placeholder-inner">
              <span style={{ fontSize: '12px', opacity: 0.8, marginBottom: '6px' }}>Placeholder</span>
              <strong style={{ fontSize: '13px', fontWeight: 600 }}>{art.title}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-secondary-grid">
        {secondRow.map((art) => (
          <div key={art.id} className={`art-card ${art.className}`}>
            <div className="art-placeholder-inner">
              <span style={{ fontSize: '12px', opacity: 0.8, marginBottom: '6px' }}>Placeholder</span>
              <strong style={{ fontSize: '13px', fontWeight: 600 }}>{art.title}</strong>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
