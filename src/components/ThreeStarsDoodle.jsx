import React from 'react';

export default function ThreeStarsDoodle() {
  return (
    <svg 
      className="hero-stars-doodle-svg" 
      viewBox="0 0 340 340" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hand-drawn periwinkle crayon 3 stars illustration"
    >
      <defs>
        {/* ========================================================
            STAR 1 CRAYON FILL CLIP PATH (Keeps fill neatly inside lines)
            ======================================================== */}
        <clipPath id="star-fill-boundary">
          <path d="
            M 220 40 
            C 225 64, 234 84, 242 90 
            C 262 92, 282 95, 296 98 
            C 281 112, 265 124, 252 136 
            C 259 154, 267 174, 271 190 
            C 252 177, 233 164, 220 156 
            C 205 164, 184 177, 165 190 
            C 172 172, 179 154, 186 136 
            C 173 124, 156 112, 143 98 
            C 158 94, 178 91, 197 90 
            C 206 84, 214 64, 220 40 Z" 
          />
        </clipPath>

        {/* ========================================================
            AUTHENTIC WAX CRAYON ON TEXTURED PAPER FILTER
            ======================================================== */}
        <filter id="real-crayon-texture" x="-40%" y="-40%" width="180%" height="180%" filterUnits="userSpaceOnUse">
          {/* Fine paper tooth noise */}
          <feTurbulence type="fractalNoise" baseFrequency="0.26" numOctaves="4" result="paperTooth" />
          
          {/* Hand stroke jitter noise */}
          <feTurbulence type="turbulence" baseFrequency="0.04" numOctaves="3" result="handJitter" />
          
          {/* Displace vector paths organically */}
          <feDisplacementMap in="SourceGraphic" in2="handJitter" scale="6" xChannelSelector="R" yChannelSelector="G" result="jitteredPath" />

          {/* Paper tooth mask for micro wax gaps */}
          <feComponentTransfer in="paperTooth" result="toothMask">
            <feFuncR type="linear" slope="2.8" intercept="-0.7" />
            <feFuncG type="linear" slope="2.8" intercept="-0.7" />
            <feFuncB type="linear" slope="2.8" intercept="-0.7" />
          </feComponentTransfer>

          {/* Mask crayon wax stroke with paper tooth */}
          <feComposite in="jitteredPath" in2="toothMask" operator="arithmetic" k1="1.1" k2="0.1" k3="0.05" k4="0" result="crayonWax" />

          {/* Soft chalky edge blur */}
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

      <g filter="url(#real-crayon-texture)" stroke="#4B63EB" strokeLinecap="round" strokeLinejoin="round">
        
        {/* ========================================================
            STAR 1: Large 5-Point Star (FILLED NEATLY INSIDE THE LINES)
            ======================================================== */}
        <g className="star-group star-main">
          
          {/* --- CRAYON WAX FILL (Clipped neatly inside the star boundary) --- */}
          <g clipPath="url(#star-fill-boundary)">
            {/* Base soft wax tone */}
            <path 
              d="
                M 220 40 
                C 225 64, 234 84, 242 90 
                C 262 92, 282 95, 296 98 
                C 281 112, 265 124, 252 136 
                C 259 154, 267 174, 271 190 
                C 252 177, 233 164, 220 156 
                C 205 164, 184 177, 165 190 
                C 172 172, 179 154, 186 136 
                C 173 124, 156 112, 143 98 
                C 158 94, 178 91, 197 90 
                C 206 84, 214 64, 220 40 Z" 
              fill="#4B63EB" 
              opacity="0.82"
            />
            {/* Dense hand-drawn wax scribble strokes inside boundary for authentic texture */}
            <path 
              d="
                M 218 45 L 222 65 
                M 210 65 L 232 75 
                M 200 80 L 245 88 
                M 185 95 L 265 100 
                M 170 105 L 285 110 
                M 160 115 L 275 120 
                M 165 125 L 265 130 
                M 175 135 L 255 140 
                M 185 145 L 250 150 
                M 180 155 L 260 160 
                M 170 165 L 265 170 
                M 175 175 L 258 180
              " 
              stroke="#3B51D0" 
              strokeWidth="6" 
              opacity="0.75"
            />
          </g>

          {/* --- REFINED HAND-DRAWN CRAYON OUTLINE --- */}
          <path 
            d="
              M 220 40 
              C 225 64, 234 84, 242 90 
              C 262 92, 282 95, 296 98 
              C 281 112, 265 124, 252 136 
              C 259 154, 267 174, 271 190 
              C 252 177, 233 164, 220 156 
              C 205 164, 184 177, 165 190 
              C 172 172, 179 154, 186 136 
              C 173 124, 156 112, 143 98 
              C 158 94, 178 91, 197 90 
              C 206 84, 214 64, 220 40 Z" 
            stroke="#4B63EB" 
            strokeWidth="6" 
            fill="none" 
            opacity="0.95"
          />

          {/* Secondary Sketch Line */}
          <path 
            d="
              M 221 38 
              C 227 64, 232 84, 244 91 
              C 263 92, 280 96, 297 97 
              C 280 113, 266 123, 251 137 
              C 258 153, 266 173, 270 192 
              C 251 176, 235 164, 221 157 
              C 204 164, 186 176, 164 192 
              C 173 173, 177 153, 187 137 
              C 172 123, 158 113, 141 97 
              C 160 96, 177 91, 196 91 
              C 207 84, 213 64, 221 38 Z" 
            stroke="#2B3FB0" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.65"
          />
        </g>

        {/* ========================================================
            STAR 2: Medium 4-Point Sparkle Star (REFINED CRAYON OUTLINE)
            ======================================================== */}
        <g className="star-group star-sparkle">
          <path 
            d="
              M 95 125 
              C 99 154, 118 178, 146 182 
              C 118 187, 99 210, 95 238 
              C 91 210, 72 187, 44 182 
              C 72 178, 91 154, 95 125 Z" 
            stroke="#4B63EB" 
            strokeWidth="6" 
            fill="none" 
            opacity="0.9"
          />
          <path 
            d="
              M 95 122 
              C 101 156, 115 175, 148 181 
              C 115 188, 101 208, 95 241 
              C 89 208, 74 188, 41 181 
              C 74 175, 89 156, 95 122 Z" 
            stroke="#6C82FF" 
            strokeWidth="3" 
            fill="none" 
            opacity="0.6"
          />
        </g>

        {/* ========================================================
            STAR 3: Small 4-Point Star (REFINED CRAYON OUTLINE)
            ======================================================== */}
        <g className="star-group star-small">
          <path 
            d="
              M 245 230 
              C 248 250, 260 265, 278 268 
              C 260 272, 248 288, 245 306 
              C 242 288, 230 272, 211 268 
              C 232 265, 243 250, 245 230 Z" 
            stroke="#4B63EB" 
            strokeWidth="5" 
            fill="none" 
            opacity="0.9"
          />
          <path 
            d="
              M 245 228 
              C 249 252, 258 263, 281 268 
              C 258 274, 249 285, 245 308 
              C 240 285, 231 274, 208 268 
              C 231 263, 240 252, 245 228 Z" 
            stroke="#3B51D0" 
            strokeWidth="2.5" 
            fill="none" 
            opacity="0.6"
          />
        </g>

        {/* ========================================================
            CRAYON SPARKLE & DOT ACCENTS
            ======================================================== */}
        <g className="accent-sparkle-1" opacity="0.85">
          <path d="M 64 80 L 78 80 M 71 73 L 71 87" stroke="#4B63EB" strokeWidth="4" />
        </g>

        <path d="M 302 148 C 304 148, 304 150, 302 150 C 300 150, 300 148, 302 148 Z" stroke="#4B63EB" strokeWidth="5.5" opacity="0.85" />

        <g className="accent-sparkle-2" opacity="0.8">
          <path d="M 122 280 L 134 280 M 128 274 L 128 286" stroke="#4B63EB" strokeWidth="3.5" />
        </g>
        
      </g>
    </svg>
  );
}
