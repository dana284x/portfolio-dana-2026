import React from 'react';
import SingleCrayonStar from './SingleCrayonStar';
import FallingStarDoodle from './FallingStarDoodle';

export default function Hero() {
  return (
    <section className="hero-section reveal-on-scroll">
      <div className="container">
        <h1 className="hero-statement">
          <span className="hero-word-with-star">
            <span className="star-twinkle-wrapper" aria-hidden="true">
              <SingleCrayonStar />
            </span>
            <span className="highlight-blue">Product designer</span>
          </span>
          {' '}based in Tel Aviv, focused on creating seamless interfaces that feel intuitive, empathetic, and effortless to&nbsp;navigate.
        </h1>
      </div>

      {/* Hand-Drawn Falling Star Doodle with Arc Trace (Right side, falling towards bottom & off-screen) */}
      <FallingStarDoodle />
    </section>
  );
}
