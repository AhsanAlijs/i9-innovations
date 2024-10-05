import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import CardImg1 from "../../assets/about/section2/cardimg1.png";
import CardImg2 from "../../assets/about/section2/cardimg2.png";
import CardImg3 from "../../assets/about/section2/cardimg3.png";
import CardImg4 from "../../assets/about/section2/cardimg4.png";
import IncreasingBussinessSection from "../IncreasingBussinessSection";

let cards = [
  {
    title: "Efficient Information Management",
    paragraph: "Hospitals equipped with ABHA-compliant software can manage patient data more efficiently, leading to streamlined operations and reduced administrative burdens.",
    img: CardImg1,
    
  },
  {
    title: "Better Clinical Decision-Making",
    paragraph: "Access to a patient's complete medical history allows healthcare providers to offer personalized and effective treatment plans, improving clinical outcomes.",
    img: CardImg2,
    
  },
  {
    title: "Compliance with National Standards",
    paragraph: "Adopting ABHA-compliant software ensures that hospitals are in line with national health data standards, enhancing interoperability and contributing to the larger vision of a digitized healthcare ecosystem.",
    img: CardImg3,
    
  },
  {
    title: "Increased Patient Trust",
    paragraph: "Hospitals that prioritize data security and patient privacy by adopting ABHA-compliant systems are likely to build stronger trust with their patients, fostering a more loyal patient base.",
    img: CardImg4,
    
  },
];

const Section4 = () => {
  return (
    <Container>
      <SectionWrapper>
        <div className="text-center mb-14 flex flex-col gap-5">
          <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
            Advantages of
            <span className="text-[#A3DC2F]"> ABHA </span>
            for Hospitals
          </h2>
          <h3 className="text-2xl max-lg:text-xl max-sm:text-lg font-medium ">
            Streamlining Operations and Enhancing Care
          </h3>
        </div>
        <IncreasingBussinessSection cards={cards} cardClassNames={"gap-5"} />
      </SectionWrapper>
    </Container>
  );
};

export default Section4;
