import React from "react";
export default function MovingBall() {
  return (
    <div className="flex items-center justify-center">
      <svg
        viewBox="0 0 400 400"
        className="w-120 h-120"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Gooey filter */}
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 22 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>

          {/* Gradient */}
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff0a87" />
            <stop offset="50%" stopColor="#d200c1" />
            <stop offset="100%" stopColor="#9b00ff" />
          </linearGradient>
        </defs>

        {/* Rotating group */}
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 200 200"
            to="-360 200 200"
            dur="10s"
            repeatCount="indefinite"
          />

          {/* Goo circles */}
          <g filter="url(#goo)">
            <circle cx="260" cy="120" r="95" fill="url(#grad)" />
            <circle cx="150" cy="260" r="100" fill="url(#grad)" />
          </g>

          {/* Texts counter-rotating */}
          <text
            x="260"
            y="120"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Montserrat, system-ui, sans-serif"
            fontWeight="600"
            fontSize="18"
            fill="#fff"
          >
            1 AMD
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 260 120"
              to="360 260 120"
              dur="10s"
              repeatCount="indefinite"
            />
          </text>

          <text
            x="150"
            y="260"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Montserrat, system-ui, sans-serif"
            fontWeight="600"
            fontSize="16"
            fill="#fff"
          >
            1 Muramoney
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 150 260"
              to="360 150 260"
              dur="10s"
              repeatCount="indefinite"
            />
          </text>
        </g>
      </svg>
    </div>
  );
}