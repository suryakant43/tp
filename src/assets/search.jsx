import React from "react";

export const SearchSVG = ({
  fillColor = "#000000",
  className = "",
  ...props
}) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width="30px"
      height="30px"
      className={className}
      {...props}
    >
      <path d="M13 3C7.4889971 3 3 7.4889971 3 13s4.4889971 10 10 10c2.396508 0 4.597385-1.851014 6.322266-4.263672L25.292969 26 27 24.292969l-7.292969-7.292969C16.597385 15.851014 14.396508 17.703003 13 17.703003 7.4889971 17.703003 3 13 3 13s4.4889971-10 10-10Z" />
    </svg>
  );
};
