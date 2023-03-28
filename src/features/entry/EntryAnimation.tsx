import React from "react";

import "./EntryPage.css";

const EntryAnimation = () => {
  return (
    
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="3"
            fill="rgba(255, 255, 255, .1)"
          />
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="0"
            fill="rgba(255, 255, 255, .2)"
          />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>
  );
};

export default EntryAnimation;
