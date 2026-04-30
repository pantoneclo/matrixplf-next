import React from "react"

export function EuIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className} 
      {...props} 
      fill="currentColor"
    >
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x = 50 + 32 * Math.sin(angle);
        const y = 50 - 32 * Math.cos(angle);
        return (
          <polygon
            key={i}
            points="0,-5 1.1,-1.5 4.7,-1.5 1.8,0.6 2.9,4.2 0,2.1 -2.9,4.2 -1.8,0.6 -4.7,-1.5 -1.1,-1.5"
            transform={`translate(${x}, ${y})`}
          />
        );
      })}
    </svg>
  )
}
