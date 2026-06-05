import React from 'react';

export function Logo({ className = "", width = 200, height = 200 }: { className?: string, width?: number | string, height?: number | string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className={className} width={width} height={height}>
      <defs>
        <linearGradient id="splitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="#3D3B73" />
          <stop offset="50%" stopColor="#D184A2" />
        </linearGradient>
        <pattern id="blackStripes" width="10" height="6" patternUnits="userSpaceOnUse" patternTransform="translate(0, 2)">
          <rect width="10" height="3" fill="black" />
        </pattern>
        <mask id="sphereMask">
          <circle cx="100" cy="80" r="45" fill="white" />
          <rect x="0" y="0" width="200" height="200" fill="url(#blackStripes)" />
        </mask>
      </defs>
      
      {/* Outer Purple Circle */}
      <circle cx="100" cy="100" r="100" fill="#7058A3" />
      
      {/* Yellow Base */}
      <rect x="50" y="100" width="100" height="65" fill="#F1EB74" />
      
      {/* The Striped Sphere */}
      <circle cx="100" cy="80" r="45" fill="url(#splitGradient)" mask="url(#sphereMask)" />
      
      {/* "CLIMAGEM" Text */}
      <text x="100" y="148" textAnchor="middle" fill="#1A1A1A" style={{ fontStyle: 'italic', fontWeight: 900, fontFamily: 'Georgia, serif', fontSize: '34px', letterSpacing: '-1.5px' }}>
        CLIMAGEM
      </text>
      
      {/* Subtitle Text */}
      <text x="100" y="160" textAnchor="middle" fill="#1A1A1A" style={{ fontWeight: 600, fontFamily: 'system-ui, sans-serif', fontSize: '7.5px', letterSpacing: '1px' }}>
        CLINICA DE IMAGEM LTDA
      </text>
    </svg>
  );
}
