import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";
import { Pagination } from "swiper/modules";
import SectionWrapper from "./SectionWrapper";
import CardImg1 from "../assets/about/section6/img1.png";
import CardImg2 from "../assets/about/section6/img2.png";
import CardImg3 from "../assets/about/section6/img3.png";
import CardImg4 from "../assets/about/section6/img4.png";
import CardImg5 from "../assets/about/section6/img5.png";
import CardImg6 from "../assets/about/section6/img6.png";
import CardImg7 from "../assets/about/section6/img7.png";
import CardImg8 from "../assets/about/section6/img8.png";
import CardImg9 from "../assets/about/section6/img9.png";
import CardImg10 from "../assets/about/section6/img10.png";
import CardImg11 from "../assets/about/section6/img11.png";
import CardImg12 from "../assets/about/section6/img12.png";
import CardImg13 from "../assets/about/section6/img13.png";
import CardImg14 from "../assets/about/section6/img14.png";
import Container from "./Container";

let images = [
  CardImg1,
  CardImg2,
  CardImg3,
  CardImg4,
  CardImg5,
  CardImg6,
  CardImg7,
  CardImg8,
  CardImg9,
  CardImg10,
  CardImg11,
  CardImg12,
  CardImg13,
  CardImg14,
];

const AwardsSliderSection = () => {
  const slidesPerView = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1024) {
      return 5;
    } else if (screenWidth >= 768) {
      return 3;
    } else {
      return 1;
    }
  };

  return (
    <>
      <Container>
        <SectionWrapper>
          <div className="text-center mb-14 flex flex-col gap-5">
            <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
              AWARDS & <span className="text-[#A3DC2F]"> RECOGNITIONS </span>
            </h2>
            <h3 className="text-2xl max-lg:text-xl max-sm:text-lg font-medium">
              Our Efforts as we Strive for Excellence
            </h3>
          </div>

          <div className="mt-10">
            <Swiper
              slidesPerView={slidesPerView()}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className=""
            >
              {images.map((item, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    className="flex flex-col items-center justify-center sm:shadow-xl sm:rounded-xl"
                  >
                    <img alt="" src={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </SectionWrapper>
      </Container>
    </>
  );
};

export default AwardsSliderSection;
