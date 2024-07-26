import { Img, Button, Text, Heading } from "../../components";
import React from "react";

export default function Herosection() {
  return (
    <div className="relative">
      {/* Hero section */}
      <div className="flex flex-col items-start gap-2 bg-white">
        <div className="absolute top-10 left-14 h-[20px] w-[22px] rounded-[10px] border-2 border-solid border-amber-600 md:left-0" />
        <div className="relative h-[558px] content-center self-stretch md:h-auto">
          <div className="mx-auto flex flex-1 flex-col items-center">
            <div className="relative z-[2] h-[20px] w-[22px] rounded-[10px] border-2 border-solid border-green-700 md:hidden" />
            <div className="relative mt-12 flex items-start justify-center self-stretch md:flex-col">
              <div className="relative z-[1] mt-11 flex w-[44%] flex-col items-start gap-7 md:w-full md:p-5">
                <Heading
                  size="headingmd"
                  as="h1"
                  className="capitalize leading-[123.6%]"
                >
                  <span className="text-black">
                    I'm Rayan Adlard
                    <br />
                  </span>
                  <span className="text-yellow">Front-end</span>
                  <span className="text-black">&nbsp;Developer&nbsp;</span>
                </Heading>
                <Text
                  size="textmd"
                  as="p"
                  className="w-[82%] capitalize leading-6 md:w-full"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  volutpat feugiat placerat lobortis. Natoque rutrum semper sed
                  suspendisse nunc lectus.
                </Text>
                <Button
                  shape="round"
                  rightIcon={
                    <Img
                      src="images/img_arrowright.svg"
                      alt="Arrow Right"
                      className="h-[16px] w-[16px]"
                    />
                  }
                  className="mb-4 min-w-[154px] gap-2 font-medium text-black"
                >
                  HIRE ME
                </Button>
              </div>
              <div className="relative ml-[-188px] flex h-[550px] w-[50%] items-center justify-center self-center bg-[url('/public/images/img_group_6.svg')]">
                <div className="mb-[18px] flex w-[76%] flex-col items-end md:w-full">
                  <Img
                    src="images/img_television.svg"
                    alt="Tv Image"
                    className="mr-7 h-[28px] md:mr-0"
                  />
                  <div className="ml-[62px] mt-[388px] h-[20px] w-[22px] rounded-[10px] border-2 border-solid border-amber-600 md:ml-0" />
                  <Img
                    src="images/img_polygon_1.svg"
                    alt="Triangle Image"
                    className="mt-10 h-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[7%] left-[9%] m-auto h-[20px] w-[22px] rounded-[10px] border-2 border-solid border-green-700" />
          <Img
            src="images/img_television_indigo_a700.svg"
            alt="Indigo tv Image"
            className="absolute bottom-[27%] left-[37%] z-[3] m-auto h-[28px]"
          />
        </div>
      </div>
    </div>
  );
}
