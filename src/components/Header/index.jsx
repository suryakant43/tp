import React from "react";
import PropTypes from "prop-types";
import { Img, Heading } from "./.."; // Adjust the import according to your actual component library

export default function Header({ ...props }) {
  return (
    <header
      {...props}
      className={`${props.className} flex justify-center items-center py-[38px] sm:py-5 bg-white shadow-sm`}
    >
      <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:p-5">
        <Img
          src="images/img_header_logo.png"
          alt="Header Logo"
          className="h-[76px] w-[158px] object-contain"
        />
        <div className="flex">
          <ul className="flex flex-wrap items-center gap-3.5">
            <li>
              <a
                href="#"
                className="flex rotate-[90deg] items-center justify-center rounded-[5px] bg-yellow"
              >
                <Heading
                  size="text-s"
                  as="p"
                  className="p-3 !text-color_black-900"
                >
                  Home
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="text-s"
                  as="p"
                  className="p-3 !text-color_black-900 hover:rounded-[5px] hover:bg-yellow"
                >
                  Skills
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="text-s"
                  as="p"
                  className="p-3 !text-color_black-900 hover:rounded-[5px] hover:bg-yellow"
                >
                  Education
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="text-s"
                  as="p"
                  className="p-3 !text-color_black-900 hover:rounded-[5px] hover:bg-yellow"
                >
                  Projects
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="text-s"
                  as="p"
                  className="p-3 !text-color_black-900 hover:rounded-[5px] hover:bg-yellow"
                >
                  Recommendations
                </Heading>
              </a>
            </li>
            <li>
              <a href="#" className="cursor-pointer">
                <Heading
                  size="text-s"
                  as="p"
                  className="p-3 !text-color_black-900 hover:rounded-[5px] hover:bg-yellow"
                >
                  Contact
                </Heading>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};
