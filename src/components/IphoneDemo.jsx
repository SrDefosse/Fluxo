// src/components/IphoneDemo.jsx
import React, { useState, memo } from 'react';
// Remove the Iphone16 import as it's no longer used
// import Iphone16 from './ui/Iphone16';

/* Dimensiones internas del "screen" del SVG
   →  x = 14.08   y = 12.81   w = 171.98   h = 374.37
   Para el viewBox 200×400 equivale aprox.:
   left/right padding ≈ 7%   top ≈ 3.2%   height ≈ 93.6%
*/
const SCREEN_STYLES =
  'absolute left-[7%] top-[3.2%] w-[86%] h-[93.6%] object-cover rounded-[24px]';

export const IphoneDemo = memo(({ src, alt = '', className = '' }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    // Use w-full to ensure the container respects the outer grid layout
    <div className={`relative w-full h-auto select-none ${className}`}>
      {/* screenshot */}
      <img
        src={src}
        alt={alt}
        className={`
          ${SCREEN_STYLES}
          transition-opacity duration-500
          ${loaded ? 'opacity-100' : 'opacity-0'}
        `}
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        onLoad={() => setLoaded(true)}
      />

      {/* iPhone Frame Image */}
      {/* Make sure to replace this src with the actual path to your frame image */}
      <img
        src="/images/mockups/mockup1.jpg" // <-- Replace with your image path
        alt="iPhone Frame"
        className="relative z-10 w-full h-auto pointer-events-none"
        aria-hidden="true" // Hide from screen readers as it's decorative
        loading="lazy"
        decoding="async"
        fetchpriority="low"
      />
    </div>
  );
});
