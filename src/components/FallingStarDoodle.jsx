import React, { useState, useEffect, useRef } from 'react';

export default function FallingStarDoodle() {
  const [scrolled, setScrolled] = useState(false);
  const svgRef = useRef(null);

  useEffect(() => {
    // Reset SVG animation clock to 0 on component mount so routing restarts clean
    if (svgRef.current && typeof svgRef.current.setCurrentTime === 'function') {
      try {
        svgRef.current.setCurrentTime(0);
      } catch (e) {
        // Fallback for environment differences
      }
    }

    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mathematically Exact Large 90-Degree 1/4 Circle Arc Path (Radius 720)
  const quarterCirclePath = "M 40 40 A 720 720 0 0 1 760 760";

  const handleScrollClick = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-falling-star-container">
      <svg 
        ref={svgRef}
        className="falling-star-doodle-svg" 
        viewBox="0 0 800 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Authentic Wax Crayon Filter */}
          <filter id="falling-star-crayon-texture" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">
            <feTurbulence type="fractalNoise" baseFrequency="0.25" numOctaves="3" result="noise" />
            <feTurbulence type="turbulence" baseFrequency="0.045" numOctaves="2" result="jitter" />
            <feDisplacementMap in="SourceGraphic" in2="jitter" scale="5" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feComposite in="displaced" in2="noise" operator="arithmetic" k1="1.15" k2="0.1" k3="0.05" k4="0" />
          </filter>

          {/* Fade Gradient for Tail Line 1 */}
          <linearGradient id="tail-line-fade-primary" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#4B63EB" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#4B63EB" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4B63EB" stopOpacity="0.0" />
          </linearGradient>

          {/* Fade Gradient for Tail Line 2 */}
          <linearGradient id="tail-line-fade-secondary" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2B3FB0" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#4B63EB" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4B63EB" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        <g className="crayon-textured-group" filter="url(#falling-star-crayon-texture)" strokeLinecap="round" strokeLinejoin="round">
          
          {/* ========================================================
              SHOOTING STAR GROUP (GLIDES ALONG LARGE 1/4 CIRCLE ARC)
              ======================================================== */}
          <g className="shooting-star-full-group">
            
            {/* --- TRAIL LINE 1 --- */}
            <path 
              d="M -10 0 C -70 -5, -150 -4, -280 0" 
              stroke="url(#tail-line-fade-primary)" 
              strokeWidth="7.5" 
              fill="none" 
            />

            {/* --- TRAIL LINE 2 --- */}
            <path 
              d="M -10 6 C -75 9, -145 8, -240 4" 
              stroke="url(#tail-line-fade-secondary)" 
              strokeWidth="4.5" 
              fill="none" 
            />

            {/* --- 5-POINT HAND-DRAWN CRAYON STAR HEAD --- */}
            <g transform="scale(1.6)">
              <path 
                d="
                  M 0 -22 
                  C 3 -12, 5 -8, 6 -7 
                  C 11 -6, 16 -6, 21 -5 
                  C 16 -1, 12 3, 9 6 
                  C 11 11, 13 16, 14 21 
                  C 9 17, 4 14, 0 11 
                  C -4 14, -9 17, -14 21 
                  C -13 16, -11 11, -9 6 
                  C -12 3, -16 -1, -21 -5 
                  C -16 -6, -11 -6, -6 -7 
                  C -5 -8, -3 -12, 0 -22 Z
                " 
                fill="#4B63EB" 
                stroke="#4B63EB" 
                strokeWidth="3.5" 
                opacity="0.95"
              />

              <path 
                d="
                  M 0 -24 
                  C 3 -12, 6 -8, 7 -7 
                  C 12 -6, 18 -6, 23 -5 
                  C 18 -1, 13 3, 10 6 
                  C 12 11, 15 16, 16 23 
                  C 10 18, 4 15, 0 12 
                  C -4 15, -10 18, -16 23 
                  C -15 16, -12 11, -10 6 
                  C -13 3, -18 -1, -23 -5 
                  C -18 -6, -12 -6, -7 -7 
                  C -6 -8, -3 -12, 0 -24 Z
                " 
                fill="none" 
                stroke="#2B3FB0" 
                strokeWidth="2" 
                opacity="0.75"
              />
            </g>

            {/* SVG Motion along large 1/4 circle arc (6.5s interval) */}
            <animateMotion 
              path={quarterCirclePath} 
              dur="6.5s" 
              repeatCount="indefinite" 
              rotate="auto" 
            />

            {/* Synchronized Opacity Fade In/Out tied to the exact same SVG SMIL timeline */}
            <animate 
              attributeName="opacity"
              values="0; 0; 1; 1; 0; 0"
              keyTimes="0; 0.03; 0.08; 0.70; 0.80; 1"
              dur="6.5s"
              repeatCount="indefinite"
            />
          </g>

        </g>
      </svg>

      {/* ALL CAPS GREY 'SCROLL' LABEL IN OPEN SANS (Placed a little below where the star falls) */}
      <button 
        className={`falling-star-scroll-label ${scrolled ? 'is-scrolled' : ''}`}
        onClick={handleScrollClick}
        aria-label="Scroll down to work section"
      >
        SCROLL
      </button>
    </div>
  );
}
