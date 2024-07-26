import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-full",
  round: "rounded-[5px]",
};

const variants = {
  fill: {
    white: "bg-white text-red-500",
    yellow: "bg-yellow-500 text-black",
  },
};

const sizes = {
  xs: "h-[40px] px-2.5",
  sm: "h-[50px] px-8 text-[14px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "white",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${
        shapes[shape] || ""
      } ${sizes[size] || ""} ${variants[variant][color] || ""}`}
      {...restProps}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white", "yellow"]),
};

export { Button };
