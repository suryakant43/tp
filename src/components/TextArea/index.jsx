import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[5px]",
};

const variants = {
  tarBackground: "bg-background",
};

const sizes = {
  xs: "h-[210px] p-3",
};

const TextArea = React.forwardRef(
  (
    {
      className = "",
      name,
      placeholder,
      shape,
      size = "xs",
      variant = "tarBackground",
      onChange,
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <textarea
        ref={ref}
        className={`${className} ${shape ? shapes[shape] : ""} ${
          sizes[size] || ""
        } ${variants[variant] || ""}`}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        {...restProps}
      />
    );
  }
);

TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["tarBackground"]),
  onChange: PropTypes.func,
};

export { TextArea };
