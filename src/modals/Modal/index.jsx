import { Button, Input, Heading } from "../../components"; // Adjusted path if necessary
import React from "react";
import Modal from "react-modal"; // Import the default export as Modal

export default function ModalComponent({ isOpen, ...props }) {
  return (
    <Modal
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[1244px]"
    >
      <div className="container xs flex min-w-[1244px] justify-center px-14 md:p-5 md:px-5">
        <div className="flex w-[74%] flex-col items-center gap-[30px] rounded-[10px] bg-white px-7 py-[34px] md:w-full md:p-5">
          <Heading size="headings" as="h1" className="capitalize">
            Add skill
          </Heading>

          <div className="flex flex-col gap-[30px] self-stretch">
            <div className="flex flex-col gap-3.5">
              <div className="flex">
                <Heading size="textxl" as="h2" className="mb-1 capitalize">
                  Domain
                </Heading>
              </div>
              <Input
                size="md"
                shape="round"
                name="Domain Input"
                placeholder="Front end developer"
                className="font-medium capitalize"
              />
            </div>

            <div className="flex flex-col gap-3.5">
              <div className="flex">
                <Heading size="textxl" as="h3" className="capitalize">
                  Skills
                </Heading>
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-wrap justify-between gap-5">
                  <Heading as="h4" className="capitalize">
                    Skill
                  </Heading>
                  <Heading as="h5" className="mr-5 capitalize">
                    <span className="text-black">Proficiency</span>
                    <span className="italic text-black">&nbsp; (%)</span>
                  </Heading>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-5 md:flex-col">
                    <Input
                      shape="round"
                      name="Skill Input"
                      className="flex-grow"
                    />
                    <Input
                      shape="round"
                      name="Proficiency Input"
                      className="w-[20%] md:w-full"
                    />
                  </div>
                  <div className="flex gap-5 md:flex-col">
                    <div className="h-[74px] flex-1 rounded-[5px] bg-background md:self-stretch" />
                    <Input
                      shape="round"
                      name="Additional Input"
                      className="w-[20%] md:w-full"
                    />
                  </div>
                  <div className="flex gap-5 md:flex-col">
                    <div className="h-[74px] flex-1 rounded-[5px] bg-background md:self-stretch" />
                    <Input
                      shape="round"
                      name="Secondary Input"
                      className="w-[20%] md:w-full"
                    />
                  </div>
                  <div className="flex gap-5 md:flex-col">
                    <Input
                      shape="round"
                      name="Pair Input One"
                      className="flex-grow"
                    />
                    <Input
                      shape="round"
                      name="Pair Input Two"
                      className="w-[20%] md:w-full"
                    />
                  </div>
                </div>
                <div className="flex gap-5 md:flex-col">
                  <Input
                    shape="round"
                    name="Pair Input Three"
                    className="flex-grow"
                  />
                  <div className="h-[74px] w-[20%] rounded-[5px] bg-background" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-[26px]">
            <Button
              shape="round"
              className="min-w-[150px] font-semibold uppercase"
            >
              Add skill
            </Button>
            <Button
              shape="round"
              className="min-w-[150px] border border-solid border-red-200 font-semibold uppercase"
              onClick={props.onRequestClose}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
