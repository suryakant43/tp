import React from "react";
import { Text, Heading } from "your-text-heading-library"; // Adjust import based on your actual library

export default function Skillsoverview({
  title = "Front End Development",
  htmlSkill = "HTML",
  htmlProficiency = "90%",
  cssSkill = "CSS",
  cssProficiency = "85%",
  jsSkill = "JavaScript",
  jsProficiency = "80%",
  phpSkill = "PHP",
  phpProficiency = "75%",
  wordpressSkill = "WordPress",
  wordpressProficiency = "85%",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex flex-col items-start justify-center w-full gap-3.5 px-[42px] py-[34px] md:px-5 sm:p-5 bg-white`}
    >
      <Heading as="p" className="ml-2 capitalize">
        {title}
      </Heading>
      <div className="self-stretch">
        <div className="flex flex-col gap-1.5">
          <div className="mr-2.5 flex flex-wrap justify-between gap-5">
            <Text as="p">{htmlSkill}</Text>
            <Text as="p">{htmlProficiency}</Text>
          </div>
          <div className="mt-1.5">
            <div className="h-[4.04px] rounded-sm bg-yellow" />
            <div className="relative mt-[-2px] h-[2.02px] rounded-sm bg-yellow" />
          </div>
          <div className="mr-2.5 mt-2.5 flex flex-wrap justify-between gap-5">
            <Text as="p">{cssSkill}</Text>
            <Text as="p">{cssProficiency}</Text>
          </div>
          <div className="mt-1.5">
            <div className="h-[4.04px] rounded-sm bg-yellow" />
            <div className="relative mt-[-2px] h-[2.02px] rounded-sm bg-yellow" />
          </div>
          <div className="mr-2.5 mt-2.5 flex flex-wrap justify-between gap-5">
            <Text as="p">{jsSkill}</Text>
            <Text as="p">{jsProficiency}</Text>
          </div>
          <div className="mt-1.5 flex flex-col gap-2">
            <div>
              <div className="h-[4.04px] rounded-sm bg-yellow" />
              <div className="relative mt-[-2px] h-[2.02px] rounded-sm bg-yellow" />
            </div>
            <div className="mr-2.5 flex flex-wrap justify-between gap-5">
              <Text as="p">{phpSkill}</Text>
              <Text as="p">{phpProficiency}</Text>
            </div>
            <div className="flex flex-col items-start justify-center">
              <div className="h-[4.04px] w-full self-stretch rounded-sm bg-yellow" />
              <div className="relative mt-[-2px] h-[2.02px] w-[84%] rounded-sm bg-yellow" />
            </div>
          </div>
          <div className="mr-2.5 mt-2.5 flex flex-wrap justify-between gap-5">
            <Text as="p">{wordpressSkill}</Text>
            <Text as="p">{wordpressProficiency}</Text>
          </div>
          <div className="mt-1.5">
            <div className="h-[4.04px] rounded-sm bg-yellow" />
            <div className="relative mt-[-2px] h-[2.02px] rounded-sm bg-yellow" />
          </div>
        </div>
      </div>
    </div>
  );
}
