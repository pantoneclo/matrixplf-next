import React from "react"

export function SpoolIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Top cap */}
      <ellipse cx="12" cy="4" rx="2.5" ry="1" />
      
      {/* Top rim of the thread body */}
      <ellipse cx="12" cy="6" rx="3.5" ry="1.2" />
      
      {/* Left and right sides of the spool body */}
      <path d="M8.5 6.5l-2.5 11" />
      <path d="M15.5 6.5l2.5 11" />
      
      {/* Bottom rim of the main thread body */}
      <path d="M6 17.5c0 1.5 2.5 2 6 2s6-.5 6-2" />
      
      {/* Base lip */}
      <path d="M5 18.5c0 1.5 3 2.5 7 2.5s7-1 7-2.5" />
      
      {/* Diagonal thread lines */}
      <path d="M8 9.5l8 2.5" />
      <path d="M7.2 12.5l8.6 2.5" />
      <path d="M6.4 15.5l7 2" />
    </svg>
  )
}
