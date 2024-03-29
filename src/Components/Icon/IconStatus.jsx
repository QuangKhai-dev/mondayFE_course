import React from 'react';

const IconStatus = () => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      width="24"
      height="24"
      aria-hidden="true"
      class="icon_fd9afdf75b noFocusStyle_90bb7af8c7"
      data-testid="icon"
    >
      <rect width="20" height="20" rx="3.636" fill="#00C875"></rect>
      <g filter="url(#filter0_d_43912_44076)" fill="#fff">
        <rect x="5.227" y="5.453" width="9.318" height="2.727" rx=".455"></rect>
        <rect x="5.227" y="8.635" width="9.318" height="2.727" rx=".455"></rect>
        <rect
          x="5.227"
          y="11.816"
          width="9.318"
          height="2.727"
          rx=".455"
        ></rect>
      </g>
      <defs>
        <filter
          id="filter0_d_43912_44076"
          x="3.408"
          y="4.544"
          width="12.955"
          height="12.727"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood result="BackgroundImageFix" flood-opacity="0"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy=".909"></feOffset>
          <feGaussianBlur stdDeviation=".909"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.200691 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_43912_44076"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_43912_44076"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};

export default IconStatus;
