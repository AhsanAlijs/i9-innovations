import React from "react";
import CardImg2 from "../../assets/online-pharmacy/section-1-img.png";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import CardImg1 from "../../assets/online-pharmacy/section1/img1.png";
import CardImg3 from "../../assets/online-pharmacy/section1/img2.png";
import IncreasingBussinessCard from "../IncreasingBussinessCard";
import { RiArrowRightDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";

let cards = [
  {
    img: CardImg1,
    title: "Understanding the Limitations of Traditional Pharmacy Software",
    paragraph: "The new generation of online pharmacy software, like Super Dr, is designed to overcome these challenges. It's not just software; it's a comprehensive ecosystem that brings a host of features tailored for the modern pharmacy and hospital operations, ensuring that you are not just keeping up but setting the pace in the healthcare industry.",
  },
  {
    img: CardImg3,
    title: "Understanding the Limitations of Traditional Pharmacy Software",
    paragraph:
      `Traditional pharmacy management systems in India have served their purpose well, but with the advent of digitalization, their limitations are glaringly apparent. They lack essential features such as:
      • Digital indenting,
      • Digital short books,
      • Auto order forms, and
      • Efficient management of medicine locations,
      • Including look-alike and
      • Sound-alike drugs. These limitations not only hamper operational efficiency but also pose significant risks to patient safety.`,
  },
];

const Section1 = () => {
  return (
    <>
      <div className="_abdm_section_1 py-[3rem] my-[5rem] lg:my-[10rem] ">
        <div className="px-5 flex flex-col xl:px-14 container mx-auto">
          <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0">
            <div className="mt-14 md:mt-0 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-semibold mb-7">
                Super Dr
                <span className="text-[#A3DC2F]"> Online Pharmacy </span>
              </h2>
              <p className=" text-[17px] text-black lg:pr-14">
                In the dynamic world of healthcare and pharmaceuticals, staying
                ahead of technological advancements is not just an option; it's
                a necessity. For pharmacy and hospital owners in India, the
                traditional Windows-based pharmacy software, costing around
                ₹25,000 per year, is rapidly becoming a relic of the past.These
                systems lack the modern web features and business enhancement
                tools crucial for today's fast-paced market. Enter the era of
                online pharmacy software – a game-changer for the industry.
              </p>

              <div className="flex flex-row items-center gap-5 mt-12">
                <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all text-sm">
                  <span>Call Now</span>
                  <RiArrowRightDownLine />
                </a>

                <Link to="/appointment/1" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all text-sm">
                  <span>Free Demo</span>
                  <RiArrowRightDownLine />
                </Link>
              </div>
            </div>


            <div className="flex flex-col items-start lg:items-end order-1 lg:order-2">
              <img alt="" className="w-[300px] lg:w-[450px]" src={CardImg2} />
            </div>
          </div>
        </div>
      </div>

      <Container>
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards?.map((item, index) => {
              return (
                <IncreasingBussinessCard
                  key={index}
                  imgTop={true}
                  item={item}
                  index={index}
                  cardClassNames={"gap-3 py-7 px-7 border"}
                />
              );
            })}
          </div>
        </SectionWrapper>
      </Container>
    </>
  );
};

export default Section1;
