import { ChipView, Heading, Text, Img } from "../"; // Ensure the correct path is provided
import React from "react";

export default function UserProfile({
  userImage = "images/img_image.png",
  titleText = "How to make Flyer Design",
  descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...",
  ...props
}) {
  const [chipOptions, setChipOptions] = React.useState([
    { value: 1, label: "Typescript" },
    { value: 2, label: "ReactJs" },
    { value: 3, label: "NextJs" },
    { value: 4, label: "CSS" },
    { value: 5, label: "HTML" },
    { value: 6, label: "MongoDB" },
  ]);

  const [selectedChipOptions, setSelectedChipOptions] = React.useState([]);

  return (
    <div
      {...props}
      className={`${props.className} flex flex-col w-full border border-black-900 bg-white shadow-xs rounded-[12px]`}
    >
      <Img
        src={userImage}
        alt="Main Image"
        className="h-[256px] w-full rounded-tl-[12px] rounded-tr-[12px] object-cover"
      />
      <div className="flex flex-col gap-2 self-stretch p-4">
        <div className="flex flex-col items-start gap-0.5">
          <Text
            size="textmd"
            as="p"
            className="font-medium capitalize text-black"
          >
            {titleText}
          </Text>
          <Heading
            size="textmd"
            as="p"
            className="w-full font-normal capitalize leading-6 text-paragraph_font"
          >
            {descriptionText}
          </Heading>
        </div>
        <ChipView
          options={chipOptions}
          setOptions={setChipOptions}
          values={selectedChipOptions}
          setValues={setSelectedChipOptions}
          className="flex flex-wrap gap-2.5"
        >
          {(option) => (
            <React.Fragment key={option.value}>
              <div
                onClick={option.toggle}
                className={`flex h-[24px] min-w-[92px] cursor-pointer flex-row items-center justify-center whitespace-pre-wrap rounded-[12px] border ${
                  option.isSelected
                    ? "border-black-900 bg-gray-200"
                    : "border-gray-300"
                }`}
              >
                <span>{option.label}</span>
              </div>
            </React.Fragment>
          )}
        </ChipView>
      </div>
    </div>
  );
}
