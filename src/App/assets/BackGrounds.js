import React from "react";

export const upperCircle = (
  <svg className="w-full h-full absolute inset-y-0 lg:right-0 right-32 z-0 opacity-75">
    <defs>
      <filter
        id="Subtraction_2"
        x="0"
        y="0"
        width="351"
        height="439.94"
        filterUnits="userSpaceOnUse"
      >
        <feOffset dx="10" dy="12" input="SourceAlpha" />
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feFlood floodOpacity="0.161" />
        <feComposite operator="in" in2="blur" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Subtraction_2)">
      <path
        d="M267,603.94V215H539.31a293.351,293.351,0,0,1,9.862,36.457,296.933,296.933,0,0,1,0,117.086,292.389,292.389,0,0,1-43.213,104.095A294.914,294.914,0,0,1,379.334,579.218,292.453,292.453,0,0,1,325.2,596.971,295.507,295.507,0,0,1,267,603.94Z"
        transform="translate(-267 -215)"
        fill="#e41c31"
      />
    </g>
  </svg>
);

export const bottomCircle = (
  <svg className="absolute bottom-0 right-0 opacity-75 ">
    <path
      d="M100,603.94h0V356H551.421c-.658,4.2-1.415,8.416-2.249,12.543a292.391,292.391,0,0,1-43.213,104.095A294.916,294.916,0,0,1,379.334,579.218,292.452,292.452,0,0,1,325.2,596.971,295.508,295.508,0,0,1,267,603.94Z"
      transform="translate(551.421 603.94) rotate(-180)"
      fill="#e41c31"
    />
  </svg>
);
