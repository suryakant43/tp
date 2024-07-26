import { Text, Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense } from "react";

const projectGrid = [
  {
    userImage: "images/img_image.png",
    titleText: "How to make Flyer Design",
    descriptionText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Awd and lorem ipsum...",
  },
  {
    userImage: "images/img_image_256X384.png",
    titleText: "How to make Flyer Design",
    descriptionText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Awd and lorem ipsum...",
  },
  {
    userImage: "images/img_image_1.png",
    titleText: "How to make Flyer Design",
    descriptionText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Awd and lorem ipsum...",
  },
  {
    userImage: "images/img_image_2.png",
    titleText: "How to make Flyer Design",
    descriptionText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Awd and lorem ipsum...",
  },
  {
    userImage: "images/img_image.png",
    titleText: "How to make Flyer Design",
    descriptionText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Awd and lorem ipsum...",
  },
  {
    userImage: "images/img_image_3.png",
    titleText: "How to make Flyer Design",
    descriptionText: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Awd and lorem ipsum...",
  },
];

export default function ProjectsSection() {
  return (
 
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col gap-11 md:p-5">
        <div className="mx-[-294px] flex flex-col items-center gap-3 md:mx-0">
          <Heading size="h2_32px" as="h2">
            Projects
          </Heading>
          <Text as="p" className="self-stretch text-center leading-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
            enim velit mollit. Lorem ipsum
          </Text>
        </div>
        <div className="grid grid-cols-3 justify-center gap-11 md:grid-cols-2 sm:grid-cols-1">
          <Suspense fallback={<div>Loading feed...</div>}>
            {projectGrid.map((d, index) => (
              <UserProfile {...d} key={`projectsGrid${index}`} />
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}
