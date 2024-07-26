import { Img, Text, Heading, RatingBar } from "../../components";
// import Slider from "../../components/Slider";
import { Slider } from "../../components/Slider/index";
import React from "react";

export default function HomePageRecommendationssection() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

  return (
    <div className="flex flex-col items-center gap-11 overflow-auto">
      <div className="container-xs flex flex-col items-center px-14 md:px-5 md:p-5">
        <div className="flex w-[44%] flex-col items-center md:w-full">
          <Heading size="h2_32px" as="h2">
            Recommendations
          </Heading>
          <Text as="p" className="self-stretch text-center leading-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Lorem ipsum
          </Text>
        </div>
      </div>

      <div className="flex w-full justify-center gap-6 self-start px-14 md:flex-col md:px-5">
        <div className="relative h-[326px] w-[18%] bg-[url('/public/images/img_review_2.svg')] bg-cover bg-no-repeat md:h-auto md:w-full">
          <div className="relative mx-auto h-[326px] w-full">
            <div className="absolute right-[25.36px] top-[25.36px] m-auto flex w-[60%] flex-col items-start gap-4">
              <Img
                src="images/img_rating.svg"
                alt="Rating Image"
                className="h-[16px] w-[50%] object-contain"
              />
              <Heading as="h3" className="capitalize">
                Amazing work!
              </Heading>
              <Text as="p" className="w-full leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae
                nulla diam in ac dictum a urna viverra morbi. Morbi donec amet
                ....
              </Text>
            </div>
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-[54%] items-center justify-center px-[34px] sm:px-5">
              <Text as="p" className="relative z-[4] mb-9 self-end">
                Photographer
              </Text>
              <div className="relative ml-[-66px] flex flex-1 items-center">
                <Heading as="h4" className="mb-16 self-end capitalize">
                  Tiana Philips
                </Heading>
                <Img
                  src="images/img_rectangle_95.svg"
                  alt="Photographer Image"
                  className="relative ml-[-74px] h-[326px] w-[44%] object-contain"
                />
              </div>
            </div>
          </div>
          <Img
            src="images/img_profile.png"
            alt="Profile Image"
            className="absolute bottom-[25.25px] left-[18.65px] m-auto h-[80px] w-[26%] rounded-[40px] object-contain"
          />
        </div>

        <div className="flex w-[76%] justify-center gap-6 md:w-full md:flex-col">
          <div className="mx-auto flex w-full gap-6 md:mx-0 md:flex-col md:self-stretch">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 3 },
              }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => setSliderState(e.item)}
              ref={sliderRef}
              items={[...Array(9)].map((_, index) => (
                <div key={index} className="px-3">
                  <div className="flex flex-col items-start bg-white px-[18px] py-6 sm:py-5">
                    <RatingBar
                      value={1}
                      isEditable={true}
                      size={16}
                      starcount={1}
                      className="ml-1.5 flex gap-2.5 md:ml-0"
                    />
                    <Heading as="h5" className="ml-1.5 mt-4 capitalize md:ml-0">
                      Great Quality!
                    </Heading>
                    <Text
                      as="p"
                      className="mt-3.5 w-[96%] self-end leading-6 md:w-full"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Vitae nulla diam in ac dictum a urna viverra morbi. Morbi
                      donec amet ..
                    </Text>
                    <div className="ml-1.5 mt-6 flex items-center gap-3.5 self-stretch md:ml-0">
                      <Img
                        src="images/img_profile_80x88.png"
                        alt="Profile Image"
                        className="h-[80px] w-[32%] rounded-[40px] object-contain"
                      />
                      <div className="mb-2.5 flex flex-1 flex-col items-start gap-1 self-end">
                        <Heading as="h6" className="capitalize">
                          James Gouse
                        </Heading>
                        <Text as="p">Graphic Designer</Text>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            />
          </div>
        </div>
      </div>

      <div className="container-xs flex flex-col items-center px-14 md:p-5 md:px-5">
        <div className="flex items-center justify-center">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              onClick={() => {
                sliderRef.current?.slideTo(
                  i * (sliderRef.current?.state?.itemsInSlide || 1)
                );
              }}
              className={`mr-2.5 inline-block h-[10px] w-[10px] cursor-pointer rounded-[50%] ${
                sliderState >=
                  i * (sliderRef.current?.state?.itemsInSlide || 1) &&
                sliderState <
                  (i + 1) * (sliderRef.current?.state?.itemsInSlide || 1)
                  ? "bg-amber-200"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
