import React from 'react';

export default function HeroIllustration() {
  return (
    <div className="doodle-avatar-container" title="Dana Paskin - Doodle Avatar">
      <svg
        viewBox="0 0 200 240"
        className="doodle-avatar-svg"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="crayon-texture" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="3" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2.5" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>

        <g filter="url(#crayon-texture)" className="doodle-group">
          {/* Sparkles & Stars */}
          <path d="M 30 40 L 30 52 M 24 46 L 36 46" stroke="#4B63EB" strokeWidth="3.5" strokeLinecap="round" className="sparkle-1" />
          <path d="M 165 35 L 165 47 M 159 41 L 171 41" stroke="#4B63EB" strokeWidth="3.5" strokeLinecap="round" className="sparkle-2" />
          <polygon points="175,90 178,98 186,98 180,103 182,111 175,106 168,111 170,103 164,98 172,98" stroke="#4B63EB" strokeWidth="3" fill="none" strokeLinejoin="round" />
          <circle cx="28" cy="110" r="3" fill="#4B63EB" />

          {/* Carré / Bob Hairstyle */}
          {/* Hair Left Side Cut */}
          <path d="M 60 85 C 52 105, 52 125, 56 138 C 60 144, 70 142, 72 132 C 72 110, 65 90, 65 85" stroke="#4B63EB" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Hair Right Side Cut */}
          <path d="M 140 85 C 148 105, 148 125, 144 138 C 140 144, 130 142, 128 132 C 128 110, 135 90, 135 85" stroke="#4B63EB" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Hair Crown / Top Curve */}
          <path d="M 60 85 C 55 50, 145 50, 140 85" stroke="#4B63EB" strokeWidth="4.5" strokeLinecap="round" />

          {/* Face Contour */}
          <path d="M 72 90 C 72 125, 128 125, 128 90" stroke="#4B63EB" strokeWidth="4.5" strokeLinecap="round" fill="none" />

          {/* Cute Bangs / Front Hair */}
          <path d="M 62 78 C 78 82, 92 84, 100 88 C 108 84, 122 82, 138 78" stroke="#4B63EB" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 78 65 C 88 74, 96 78, 100 84" stroke="#4B63EB" strokeWidth="4" strokeLinecap="round" />

          {/* Eyes (Bold minimal dots) */}
          <circle cx="85" cy="100" r="3.5" fill="#4B63EB" />
          <circle cx="115" cy="100" r="3.5" fill="#4B63EB" />

          {/* Smile */}
          <path d="M 92 112 Q 100 120 108 112" stroke="#4B63EB" strokeWidth="4" strokeLinecap="round" fill="none" />

          {/* Neck & Shoulders */}
          <path d="M 88 125 L 88 140 M 112 125 L 112 140" stroke="#4B63EB" strokeWidth="4.5" strokeLinecap="round" />
          <path d="M 65 152 Q 100 138 135 152" stroke="#4B63EB" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M 48 190 C 48 160, 65 150, 85 150 L 115 150 C 135 150, 152 160, 152 190" stroke="#4B63EB" strokeWidth="4.5" strokeLinecap="round" fill="none" />

          {/* Hand holding pencil */}
          <path d="M 115 168 Q 125 172 135 160" stroke="#4B63EB" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M 132 155 L 148 140 M 145 137 L 152 144" stroke="#4B63EB" strokeWidth="4" strokeLinecap="round" />

          {/* Coffee Cup Doodle */}
          <path d="M 32 175 L 34 195 C 34 198, 48 198, 48 195 L 50 175 Z" stroke="#4B63EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M 48 180 C 54 180, 54 190, 48 190" stroke="#4B63EB" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          {/* Steam */}
          <path d="M 37 170 Q 40 165 37 160 M 43 170 Q 46 165 43 160" stroke="#4B63EB" strokeWidth="3" strokeLinecap="round" fill="none" />
        </g>
      </svg>
    </div>
  );
}
