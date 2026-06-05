import React from 'react';

import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: string | number;
  height?: string | number;
}

export function Logo({ className = "", width = 180, height = 60 }: LogoProps) {
  return (
    <Image 
      src="/logo.png" 
      alt="Climagem Logo" 
      width={Number(width)}
      height={Number(height)}
      className={`object-contain ${className}`}
      priority
    />
  );
}
