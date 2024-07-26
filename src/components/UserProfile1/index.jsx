import { Text, Heading, Button, Img } from "../"; // Ensure the correct path
import React from "react";

export default function UserProfile1({
  countryLabelOne = "Country:",
  countryNameOne = "India",
  cityLabelOne = "City:",
  cityNameOne = "Delhi",
  streetLabelOne = "Street:",
  streetNameOne = "35th Street",
  countryLabelTwo = "Country:",
  countryNameTwo = "Bangladesh",
  cityLabelTwo = "City:",
  cityNameTwo = "Dhaka",
  streetLabelTwo = "Street:",
  streetNameTwo = "35 Vhatara, Badda",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} h-[210px] md:w-full md:h-auto bg-white flex-1 relative md:flex-none`}
    >
      <div className="mx-auto flex flex-1 flex-col items-center px-6 sm:px-5">
        <Button size="xs" shape="circle" className="w-[40px] rounded-[20px]">
          <Img src="images/img_user.svg" />
        </Button>
        <div className="mt-[-30px] flex flex-wrap justify-between gap-5 self-stretch">
          <Heading as="p" className="capitalize text-paragraph_font">
            {countryLabelOne}
          </Heading>
          <Text as="p">{countryNameOne}</Text>
        </div>
        <div className="mt-3.5 flex flex-wrap justify-between gap-5 self-stretch">
          <Heading as="p" className="capitalize text-paragraph_font">
            {cityLabelOne}
          </Heading>
          <Text as="p">{cityNameOne}</Text>
        </div>
        <div className="mt-3.5 flex flex-wrap justify-between gap-5 self-stretch">
          <Heading as="p" className="capitalize text-paragraph_font">
            {streetLabelOne}
          </Heading>
          <Text as="p">{streetNameOne}</Text>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center bg-white p-3.5">
        <Button
          size="xs"
          shape="circle"
          className="mt-2 w-[40px] rounded-[20px]"
        >
          <Img src="images/img_user.svg" />
        </Button>
        <div className="mt-[30px] flex flex-wrap justify-between gap-5 self-stretch">
          <Heading as="p" className="capitalize text-paragraph_font">
            {countryLabelTwo}
          </Heading>
          <Text as="p">{countryNameTwo}</Text>
        </div>
        <div className="mt-3.5 flex flex-wrap justify-between gap-5 self-stretch">
          <Heading as="p" className="capitalize text-paragraph_font">
            {cityLabelTwo}
          </Heading>
          <Text as="p">{cityNameTwo}</Text>
        </div>
        <div className="mt-4 flex flex-wrap justify-between gap-5 self-stretch">
          <Heading as="p" className="capitalize text-paragraph_font">
            {streetLabelTwo}
          </Heading>
          <Text as="p">{streetNameTwo}</Text>
        </div>
      </div>
    </div>
  );
}
