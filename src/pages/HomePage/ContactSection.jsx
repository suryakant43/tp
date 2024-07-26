import { Heading, Button, TextArea, Input } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import React, { Suspense } from "react";

const locationList = [
  {
    countryLabel: "Country:",
    countryName: "India",
    cityLabel: "City:",
    cityName: "Delhi",
    streetLabel: "Street:",
    streetName: "35th Street",
  },
  {
    countryLabel: "Country:",
    countryName: "Bangladesh",
    cityLabel: "City:",
    cityName: "Dhaka",
    streetLabel: "Street:",
    streetName: "35 Vhatara, Badda",
  },
  {
    countryLabel: "Email:",
    countryName: "youremail@gmail.com",
    cityLabel: "Skype:",
    cityName: "@yourusername",
    streetLabel: "Telegram:",
    streetName: "@yourusername",
  },
  {
    countryLabel: "Email:",
    countryName: "youremail@gmail.com",
    cityLabel: "Skype:",
    cityName: "@yourusername",
    streetLabel: "Telegram:",
    streetName: "@yourusername",
  },
];

export default function ContactSection() {
  return (
    <div className="flex justify-center">
      <div className="container-xs flex justify-center gap-6 md:flex-col md:p-5">
        <div className="flex flex-1 flex-col items-start gap-11 md:self-stretch">
          <Heading size="h2" as="h2">
            Leave ME your info
          </Heading>
          <div className="flex flex-col items-start justify-center gap-[22px] self-stretch bg-white px-9 py-6 sm:p-5">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <div className="flex flex-col items-start gap-2 self-stretch">
                <Heading as="h3" className="capitalize !text-paragraph_font">
                  Your Full Name (Required)
                </Heading>
                <Input
                  size="xs"
                  shape="round"
                  name="Full Name Input"
                  className="self-stretch"
                />
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <Heading as="h4" className="capitalize !text-paragraph_font">
                  Your Email (Required)
                </Heading>
                <Input
                  size="xs"
                  shape="round"
                  name="Email Input"
                  className="self-stretch"
                />
              </div>
              <div className="flex flex-col items-start gap-2.5 self-stretch">
                <Heading as="h5" className="capitalize !text-paragraph_font">
                  Subject
                </Heading>
                <Input
                  size="xs"
                  shape="round"
                  name="Subject Input"
                  className="self-stretch"
                />
              </div>
              <div className="flex flex-col items-start gap-2 self-stretch">
                <Heading as="h6" className="capitalize !text-paragraph_font">
                  Your Message
                </Heading>
                <TextArea
                  shape="round"
                  name="Message Area"
                  className="self-stretch"
                />
              </div>
              <Button
                shape="round"
                className="min-w-[150px] font-semibold uppercase"
              >
                Send message
              </Button>
            </div>
          </div>
        </div>

        <div className="flex w-[30%] flex-col items-start gap-[46px] md:w-full">
          <Heading size="h2" as="h2">
            Contact Information
          </Heading>
          <div className="flex flex-col gap-[18px] self-stretch">
            <Suspense fallback={<div>Loading feed...</div>}>
              {locationList.map((d, index) => (
                <UserProfile1 {...d} key={"contactList" + index} />
              ))}
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
