import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
};

const variants = {
  fill: {
    background: "bg-background text-blue_gray-900_7f",
  },
};

const sizes = {
  md: "h-[74px] px-6 text-[18px]",
  xs: "h-[50px] px-3",
  sm: "h-[74px] px-6",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "sm",
      color = "",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text ${
          variants[variant][color]
        } ${sizes[size]} ${(shape && shapes[shape]) || ""}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["background"]),
};

export { Input };
