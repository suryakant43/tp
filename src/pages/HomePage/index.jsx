import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import HomePageRecommendationsSection from "./HeroPageRecommendationsSection";
import ProjectsSection from "./ProjectsSection";
import React from "react";

export default function HomePagepage() {
  return (
    <>
      <Helmet>
        <title>Rayan Adlrdard - Front-End Developer Portfolio</title>
        <meta
          name="description"
          content="Explore the portfolio of Rayan Adlrdard, a skilled Front-End Developer with expertise in Typescript, ReactJs, NextJs, CSS, and HTML."
        />
      </Helmet>
      <div className="w-full bg-white">
        <div className="flex flex-col gap-[58px] bg-background sm:gap-[29px]">
          <div>
            <Header />
            {/* Hero section */}
            <HeroSection />
          </div>
          {/* Projects section */}
          <ProjectsSection />
          {/* Home page recommendations section */}
          <HomePageRecommendationsSection />
          {/* Contact section */}
          <ContactSection />
          <div className="flex flex-col items-center">
            <div className="container-xs flex flex-col items-center px-14 md:p-5 md:px-5">
              <div className="flex w-[86%] justify-between gap-5 md:w-full md:flex-col">
                <Img
                  src="images/img_frame.png"
                  alt="Image Two"
                  className="h-[144px] w-[14%] object-contain md:w-full"
                />
                <Img
                  src="images/img_frame_144x140.png"
                  alt="Image Three"
                  className="h-[144px] w-[14%] object-contain md:w-full"
                />
                <Img
                  src="images/img_frame_1.png"
                  alt="Image Four"
                  className="h-[144px] w-[14%] object-contain md:w-full"
                />
                <Img
                  src="images/img_frame_2.png"
                  alt="Image Five"
                  className="h-[144px] w-[14%] object-contain md:w-full"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch bg-background">
            <div className="mt-11 flex flex-col items-center">
              <div className="container-xs flex flex-col gap-[50px] md:p-5">
                <Img
                  src="images/img_rectangle_98.png"
                  alt="Product Image"
                  className="h-[76px] w-[12%] object-contain"
                />
                <Footer />
              </div>
            </div>
          </div>
          <div className="container-xs mb-5 flex flex-col items-center px-14 md:p-5 md:px-5">
            <div className="flex items-center gap-2.5 py-4">
              <Img
                src="images/img_copyright_circle.svg"
                alt="Copyright Image"
                className="h-[24px] w-[24px]"
              />
              <Text as="p">2024 Copyright, All rights reserved</Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
