import React, { useState } from 'react';
import { Water } from '@paper-design/shaders-react';
import FlipText from './FlipText';

const row1Items = [
  { id: 1, spanClass: 'span-2', ratioClass: 'ratio-row1-item1', title: 'Bird & Floral Pattern', imgSrc: '/art/item1.png' },
  { id: 2, spanClass: 'span-3', ratioClass: 'ratio-row1-item2', title: 'Botanical Woman Illustration', imgSrc: '/art/item2.png' },
  { id: 3, spanClass: 'span-2', ratioClass: 'ratio-row1-item3', title: 'Ornate Tile Motif', imgSrc: '/art/item3.png' },
  { id: 4, spanClass: 'span-3', ratioClass: 'ratio-row1-item4', title: 'Tropical Palm Leaves', imgSrc: '/art/item4.png' },
  { id: 5, spanClass: 'span-2', ratioClass: 'ratio-row1-item5', title: 'Red Character Illustration', imgSrc: '/art/item5.png' },
];

const row2Items = [
  { id: 6, spanClass: 'span-4', ratioClass: 'ratio-row2-item6', title: 'Abstract Seed Graphic', imgSrc: '/art/item6.png' },
  { id: 7, spanClass: 'span-4', ratioClass: 'ratio-row2-item7', title: 'Minimalist Overlap Shapes', imgSrc: '/art/item7.png' },
  { id: 8, spanClass: 'span-2', ratioClass: 'ratio-row2-item8', title: 'Totem Geometric Art', imgSrc: '/art/item9.png' },
  { id: 9, spanClass: 'span-2', ratioClass: 'ratio-row2-item9', title: 'Editorial Candle & Feather', imgSrc: '/art/item8.png' },
];

function GalleryCard({ art }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`art-card ${art.spanClass} ${art.ratioClass}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={art.imgSrc} alt={art.title} className="art-image" />
      <div className={`art-water-shader-overlay ${isHovered ? 'is-active' : ''}`}>
        {isHovered && (
          <Water
            image={art.imgSrc}
            colorBack="#8f8f8f"
            colorHighlight="#ffffff"
            highlights={0.025}
            layering={0}
            edges={0.025}
            waves={0}
            caustic={0.035}
            size={1.2}
            speed={0.45}
            scale={1}
            fit="cover"
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
}

export default function PersonalGallery() {
  return (
    <section className="container gallery-section">
      <h2 className="gallery-heading">
        Side <FlipText />
      </h2>

      {/* 12-Column Grid Row 1 */}
      <div className="gallery-12-col-grid margin-bottom-row">
        {row1Items.map((art) => (
          <GalleryCard key={art.id} art={art} />
        ))}
      </div>

      {/* 12-Column Grid Row 2 */}
      <div className="gallery-12-col-grid">
        {row2Items.map((art) => (
          <GalleryCard key={art.id} art={art} />
        ))}
      </div>
    </section>
  );
}


