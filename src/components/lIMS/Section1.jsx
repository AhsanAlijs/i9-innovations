import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import Img1 from "../../assets/lims/img1.png";
import IncreasingBussinessCard from "../IncreasingBussinessCard";
import { Link } from "react-router-dom";
import { RiArrowRightDownLine } from "@remixicon/react";

const Section1 = () => {
  return (
    <Container>
      <SectionWrapper>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center">
            <img className="w-[900px] max-h-[550px] object-contain" alt="" src={Img1} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((item, index) => (
              <IncreasingBussinessCard
                key={index}
                item={item}
                index={index}
                cardClassNames={"gap-3 border"}
              />
            ))}
          </div>
        </div>

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
      </SectionWrapper>
    </Container>
  );
};

export default Section1;

const cards = [
  {
    title: "Specialized Solutions for Every Laboratory Discipline",
    paragraph: "From microbiology to serology, our LIMS offers tailored solutions for various laboratory disciplines, ensuring that each department operates with optimal efficiency and precision.",
  },
  {
    title: "The Sample Lifecycle: Managed with Excellence",
    paragraph: "Our LIMS streamlines the entire sample lifecycle, from collection to analysis, ensuring that every sample is handled with care and precision, leading to reliable diagnostic outcomes.",
  },
  {
    title: "Extending Capabilities with Outsourced Lab Management",
    paragraph: "Manage outsourced laboratory services with ease, ensuring that every sample, whether processed in-house or externally, is tracked and integrated seamlessly into your workflow.",
  },
];
