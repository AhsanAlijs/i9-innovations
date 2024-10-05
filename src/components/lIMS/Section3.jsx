import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import Img3 from "../../assets/lims/img3.png";
import IncreasingBussinessCard from "../IncreasingBussinessCard";

const Section3 = () => {
  return (
    <Container>
      <SectionWrapper>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center">
            <img className="w-[500px] max-h-[500px] object-contain" alt="" src={Img3} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((item, index) => {
              return (
                <IncreasingBussinessCard
                  key={index}
                  item={item}
                  index={index}
                  cardClassNames={"gap-3 border"}
                />
              );
            })}
          </div>
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section3;

let cards = [
  {
    title: "Pioneers of Precision: The Inventors Behind LIMS",
    paragraph: "The development of LIMS was driven by visionary scientists and engineers who recognized the need for a system that could manage the complex data and workflows of modern laboratories. Their pioneering work laid the foundation for systems like i9 Innovations' LIMS.",
  },
  {
    title: "Unveiling Super Dr's LIMS: Where Innovation Meets Functionality",
    paragraph: "Super Dr's LIMS module is a testament to i9 Innovations' commitment to advancing laboratory operations. It seamlessly integrates with your existing infrastructure, bringing unparalleled efficiency and accuracy to your diagnostic processes.",
  },
  {
    title: "Enhancing Diagnostic Accuracy with Machine Interfaces",
    paragraph: "Our LIMS revolutionizes diagnostics with advanced machine interfaces, virtually eliminating human errors and ensuring that every result is precise, reliable, and actionable.",
  },
];