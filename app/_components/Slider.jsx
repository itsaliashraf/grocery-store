import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const Slider = ({ sliderList }) => {
  return (
    <Carousel>
      <CarouselContent>
        {sliderList?.map((slider, index) => (
          <CarouselItem key={index}>
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                slider?.attributes?.image?.data?.attributes?.url
              }
              width={1000}
              height={400}
              alt="slider"
              className="w-full h-[150px] md:h-[500px] rounded-2xl object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="xs:hidden" />
      <CarouselNext className="xs:hidden" />
    </Carousel>
  );
};

export default Slider;
