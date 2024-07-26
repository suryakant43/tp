import React from "react";

const sizes = {
  paragraphProgress15: "capitalize text-[15px] font-normal",
  textxs: "text-[12px] font-normal not-italic",
  textmd: "text-[16px] font-normal not-italic",
};

const Text = ({
  children,
  className = "",
  as = "p",
  size = "paragraphProgress15",
  ...restProps
}) => {
  const Component = as;
  return (
    <Component
      className={`text-paragraph_font font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
