import React from "react";

const sizes = {
  h2_32px: "capitalize text-[32px] font-bold md:text-[30px] sm:text-[28px]",
  texts: "text-[14px] font-medium",
  textlg: "text-[18px] font-medium",
  textxl: "text-[22px] font-medium",
  headingxs: "text-[20px] font-bold",
  headings: "text-[44px] font-bold md:text-[40px] sm:text-[34px]",
  headingmd: "text-[48px] font-bold md:text-[44px] sm:text-[38px]",
};

const Heading = ({
  children,
  className = "",
  size = "textlg",
  as,
  ...restProps
}) => {
  const Component = as || "h6";
  return (
    <Component
      className={`text-black font-inter ${className} ${sizes[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Heading };
