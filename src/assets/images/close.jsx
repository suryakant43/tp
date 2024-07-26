import React from "react";

export const CloseSVG = ({
  fillColor = "#000000",
  className = "",
  ...props
}) => {
  return (
    <svg
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      height={props.height || 20}
      width={props.width || 20}
      viewBox={`0 0 ${props.width || 20} ${props.height || 20}`}
      {...props}
    >
      <path d="M4.707 3.293a1 1 0 011.414 0L12 8.586l5.879-5.879a1 1 0 111.414 1.414L13.414 10l5.879 5.879a1 1 0 01-1.414 1.414L12 11.414l-5.879 5.879a1 1 0 01-1.414-1.414L10.586 10 4.707 4.121a1 1 0 010-1.414z" />
    </svg>
  );
};
