import React from 'react';

export default function SpiralArrowDoodle() {
  return (
    <svg 
      className="hero-spiral-arrow-svg" 
      viewBox="0 0 280 360" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hand-drawn periwinkle crayon spiral arrow pointing down to scroll"
    >
      <defs>
        {/* ========================================================
            AUTHENTIC WAX CRAYON FILTER FOR SPIRAL ARROW
            ======================================================== */}
        <filter id="spiral-crayon-texture" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">
          <feTurbulence type="fractalNoise" baseFrequency="0.26" numOctaves="4" result="paperTooth" />
          <feTurbulence type="turbulence" baseFrequency="0.045" numOctaves="3" result="handJitter" />
          <feDisplacementMap in="SourceGraphic" in2="handJitter" scale="6.5" xChannelSelector="R" yChannelSelector="G" result="jitteredPath" />
          
          <feComponentTransfer in="paperTooth" result="toothMask">
            <feFuncR type="linear" slope="2.8" intercept="-0.7" />
            <feFuncG type="linear" slope="2.8" intercept="-0.7" />
            <feFuncB type="linear" slope="2.8" intercept="-0.7" />
          </feComponentTransfer>

          <feComposite in="jitteredPath" in2="toothMask" operator="arithmetic" k1="1.1" k2="0.1" k3="0.05" k4="0" result="crayonWax" />

          <feMorphology in="jitteredPath" operator="dilate" radius="1" result="dilatedCrayon" />
          <feColorMatrix in="dilatedCrayon" type="matrix" values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 0.25 0" result="chalkDust" />

          <feMerge>
            <feMergeNode in="chalkDust" />
            <feMergeNode in="crayonWax" />
            <feMergeNode in="jitteredPath" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#spiral-crayon-texture)" stroke="#4B63EB" strokeLinecap="round" strokeLinejoin="round">
        
        {/* ========================================================
            HAND-DRAWN PERIWINKLE CRAYON SPIRAL ARROW
            ======================================================== */}
        <g className="spiral-arrow-group">
          {/* Main Heavy Crayon Spiral Arc */}
          <path 
            d="
              M 95 38 
              C 185 18, 255 75, 238 148 
              C 220 222, 102 188, 80 248 
              C 62 298, 108 335, 152 346
            " 
            stroke="#4B63EB" 
            strokeWidth="6.5" 
            fill="none" 
            opacity="0.95"
          />

          {/* Secondary Overlapping Crayon Stroke for authentic double-sketch look */}
          <path 
            d="
              M 98 34 
              C 188 15, 258 72, 241 146 
              C 223 220, 105 186, 83 246 
              C 64 296, 110 333, 154 344
            " 
            stroke="#2B3FB0" 
            strokeWidth="3.5" 
            fill="none" 
            opacity="0.75"
          />

          {/* --- HAND-DRAWN CRAYON ARROWHEAD --- */}
          {/* Left Arrow barb */}
          <path 
            d="M 122 322 C 134 332, 142 338, 152 346" 
            stroke="#4B63EB" 
            strokeWidth="6.5" 
            opacity="0.95"
          />
          <path 
            d="M 120 320 C 132 330, 140 336, 154 344" 
            stroke="#2B3FB0" 
            strokeWidth="3.5" 
            opacity="0.75"
          />

          {/* Right Arrow barb */}
          <path 
            d="M 166 324 C 158 333, 154 338, 152 346" 
            stroke="#4B63EB" 
            strokeWidth="6.5" 
            opacity="0.95"
          />
          <path 
            d="M 168 322 C 160 331, 156 336, 154 344" 
            stroke="#2B3FB0" 
            strokeWidth="3.5" 
            opacity="0.75"
          />
        </g>

        {/* ========================================================
            DOODLE SPARKLES & ACCENTS
            ======================================================== */}
        <g className="accent-sparkle-1" opacity="0.85">
          <path d="M 235 48 L 247 48 M 241 42 L 241 54" stroke="#4B63EB" strokeWidth="3.5" />
        </g>

        <g className="accent-sparkle-2" opacity="0.8">
          <path d="M 52 220 L 62 220 M 57 215 L 57 225" stroke="#4B63EB" strokeWidth="3" />
        </g>

        {/* Tiny Crayon Dots */}
        <circle cx="258" cy="190" r="2.5" fill="#4B63EB" stroke="none" opacity="0.8" />
        <circle cx="268" cy="205" r="1.8" fill="#4B63EB" stroke="none" opacity="0.6" />

      </g>
    </svg>
  );
}
