import React from 'react';

export default function SingleCrayonStar() {
  return (
    <svg 
      className="twinkling-crayon-star-svg" 
      viewBox="0 0 60 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Authentic Wax Crayon Filter */}
        <filter id="single-star-crayon-texture" x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.26" numOctaves="3" result="noise" />
          <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="2" result="jitter" />
          <feDisplacementMap in="SourceGraphic" in2="jitter" scale="3.5" xChannelSelector="R" yChannelSelector="G" result="displaced" />
          <feComposite in="displaced" in2="noise" operator="arithmetic" k1="1.15" k2="0.1" k3="0.05" k4="0" />
        </filter>
      </defs>

      <g filter="url(#single-star-crayon-texture)" stroke="#4B63EB" strokeLinecap="round" strokeLinejoin="round">
        {/* Hand-Drawn 4-Point Sparkle Crayon Star (Filled Wax Body) */}
        <path 
          d="
            M 30 4 
            C 32 18, 42 28, 56 30 
            C 42 32, 32 42, 30 56 
            C 28 42, 18 32, 4 30 
            C 18 28, 28 18, 30 4 Z
          " 
          fill="#4B63EB" 
          opacity="0.9" 
          strokeWidth="3.5"
        />
        {/* Secondary Hand Contour Line */}
        <path 
          d="
            M 30 2 
            C 33 18, 43 27, 58 30 
            C 43 33, 33 43, 30 58 
            C 27 43, 17 33, 2 30 
            C 17 27, 27 18, 30 2 Z
          " 
          fill="none" 
          stroke="#2B3FB0" 
          strokeWidth="2" 
          opacity="0.7"
        />
      </g>
    </svg>
  );
}
