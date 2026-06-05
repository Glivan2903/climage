import React from 'react';

import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function Logo({ className = "", width = 180, height = 60 }: LogoProps) {
  const safeWidth = width === "auto" ? 180 : Number(width) || 180;
  const safeHeight = height === "auto" ? 60 : Number(height) || 60;

  return (
    <Image 
      src="/logo.png" 
      alt="Climagem Logo" 
      width={safeWidth}
      height={safeHeight}
      className={`object-contain ${className}`}
      priority
    />
  );
}
