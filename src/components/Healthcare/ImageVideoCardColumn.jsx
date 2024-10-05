import React from "react";
import SectionWrapper from "../SectionWrapper";
import Container from "../Container";
import CardImg1 from "../../assets/about/section5/cardimg1.png";
import CardImg2 from "../../assets/about/section5/cardimg2.png";
import { Link } from "react-router-dom";
import { RiArrowRightDownLine } from "@remixicon/react";

const ImageVideoCardColumn = ({
  imgLeft,
  imgRight,
  title,
  paragraph,
  links,
  parentClasses
}) => {
  return (
    <SectionWrapper classNames={`py-20 ${parentClasses}`}>
      <Container>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-14">
          {imgLeft && (
            <div className="relative">
              <div className="flex flex-col lg:items-end">
                <img alt="" className="w-[500px] xl:w-[400px]" src={CardImg1} />
              </div>
              <img
                alt=""
                className="cursor-pointer shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all w-[350x] lg:w-[300px] absolute -bottom-20 md:-bottom-5 right-[0rem] lg:bottom-[5rem] xl:bottom-0 xl:left-10"
                src={CardImg2}
              />
            </div>
          )}
          <div className="mt-14 md:mt-0">
            {title && title}
            <p className="mb-7">{paragraph}</p>

            {links &&
              <div className="flex flex-row items-center justify-center gap-5 mt-12">
                <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all text-sm">
                  <span>Call Now</span>
                  <RiArrowRightDownLine />
                </a>

                <Link to="/appointment/1" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all text-sm">
                  <span>Free Demo</span>
                  <RiArrowRightDownLine />
                </Link>
              </div>
            }
          </div>

          {imgRight && (
            <div className="relative">
              <div className="flex flex-col lg:items-end">
                <img alt="" className="w-[500px] xl:w-[400px]" src={CardImg1} />
              </div>
              <img
                alt=""
                className="cursor-pointer shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all w-[350x] lg:w-[300px] absolute -bottom-20 md:-bottom-5 right-[0rem] lg:bottom-[5rem] xl:bottom-0 xl:left-10"
                src={CardImg2}
              />
            </div>
          )}
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default ImageVideoCardColumn;
