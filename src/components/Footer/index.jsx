import React from "react";
import PropTypes from "prop-types";
import { Img, Heading, Text } from "./.."; // Adjust the import according to your actual component library

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex md:flex-col justify-between items-start gap-5`}
    >
      <div className="flex w-[14%] flex-col items-start gap-5 self-center">
        <div className="flex flex-col items-start justify-center">
          <Img
            src="images/img_rectangle_97.png"
            alt="Upwork Image"
            className="h-[40px] rounded object-contain"
          />
          <Text size="text-xs" as="p" className="capitalize">
            4.5/5 rating on Lorem
          </Text>
        </div>
      </div>
      <div className="flex w-[14%] flex-col items-start gap-5 self-center">
        <div className="flex flex-col items-start justify-center">
          <Img
            src="images/img_rectangle_99.png"
            alt="Dribbble Image"
            className="h-[40px] w-[48%] rounded object-contain"
          />
          <Text size="text-xs" as="p" className="mb-1 capitalize">
            9/10 rating on Ipsum
          </Text>
        </div>
        <div className="flex flex-col items-start">
          <Img
            src="images/img_rectangle_100.png"
            alt="Fiverr Image"
            className="h-[40px] w-[52%] rounded object-contain"
          />
          <Text size="text-xs" as="p" className="mb-1.5 capitalize">
            4.5/5 Rating on Lorem
          </Text>
        </div>
      </div>
      <div className="flex w-[62%] items-start justify-between">
        <div className="flex w-[62%] items-center justify-between gap-5 self-center md:w-full sm:flex-col">
          <div className="flex w-full flex-col items-start gap-3">
            <Heading
              size="heading-xs"
              as="h5"
              className="capitalize !text-color_black-900"
            >
              Quick Links
            </Heading>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <a href="home" target="_blank" rel="noreferrer">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Home
                  </Text>
                </a>
              </li>
              <li>
                <a href="skills" target="_blank" rel="noreferrer">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Skills
                  </Text>
                </a>
              </li>
              <li>
                <a href="education" target="_blank" rel="noreferrer">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Education
                  </Text>
                </a>
              </li>
              <li>
                <a href="projects" target="_blank" rel="noreferrer">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Projects
                  </Text>
                </a>
              </li>
              <li>
                <a href="recommendations" target="_blank" rel="noreferrer">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Recommendations
                  </Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Heading
              size="heading-xs"
              as="h5"
              className="capitalize !text-color_black-900"
            >
              Portfolio
            </Heading>
            <ul className="flex flex-col items-start gap-2">
              <li>
                <a href="#">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Frontend Development
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Backend Development
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Website Design
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Machine Learning
                  </Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text
                    size="text-md"
                    as="p"
                    className="capitalize !text-color_black-900"
                  >
                    Problem Solving & DSA
                  </Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex w-[16%] flex-col items-start justify-center gap-4 md:w-full">
          <Heading
            size="heading-xs"
            as="h5"
            className="capitalize !text-color_black-900"
          >
            Connect
          </Heading>
          <Img
            src="images/img_linkedin.png"
            alt="LinkedIn Icon"
            className="h-[24px] w-[80%] object-contain"
          />
          <Img
            src="images/img_instagram.png"
            alt="Instagram Icon"
            className="h-[24px] w-full object-contain md:h-auto"
          />
          <Img
            src="images/img_facebook.png"
            alt="Facebook Icon"
            className="h-[24px] w-[86%] object-contain"
          />
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};
