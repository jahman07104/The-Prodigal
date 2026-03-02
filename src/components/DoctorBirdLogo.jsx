import React from "react";

/**
 * DoctorBirdLogo Component
 * 
 * The custom SVG logo representing Jamaica's national bird (Doctor Bird/Hummingbird).
 * Features a dark background with gold border and green bird design.
 * 
 * Props:
 * - size: Number (default 60) - Controls the width/height of the logo
 * - className: String - Additional CSS classes for styling
 */
const DoctorBirdLogo = ({ size = 60, className = "" }) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", minWidth: size, minHeight: size }}
    aria-label="The Prodigal Doctor Bird Logo"
  >
    {/* Outer black circle background */}
    <circle cx="50" cy="50" r="48" fill="#1A1A1A" />
    
    {/* Gold border ring */}
    <circle cx="50" cy="50" r="42" stroke="#B48E2E" strokeWidth="2.5" />
    
    {/* Green bird body */}
    <path
      d="M48 40C45 40 32 45 28 50C24 55 35 60 45 70C48 73 52 75 55 65C58 55 55 43 52 40Z"
      fill="#4CAF50"
    />
    
    {/* Black bib (chest marking) */}
    <path
      d="M52 45C54 48 56 52 52 58C48 62 44 60 44 55C44 50 48 45 52 45Z"
      fill="black"
    />
    
    {/* White beak extending to the right */}
    <path
      d="M52 40C55 38 62 38 65 42L85 43"
      stroke="#ffffff"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    
    {/* Green head circle */}
    <circle cx="55" cy="43" r="4.5" fill="#4CAF50" />
    
    {/* Red detail (eye or marking) */}
    <path d="M56 46C58 47 62 45 60 43L56 43Z" fill="#E53935" />
    
    {/* Gold tail/wing detail */}
    <path
      d="M45 70C42 80 42 90 58 100"
      stroke="#B48E2E"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export default DoctorBirdLogo;
