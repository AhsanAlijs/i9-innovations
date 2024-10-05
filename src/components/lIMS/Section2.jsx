import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import Img2 from "../../assets/lims/img2.png";
import IncreasingBussinessCard from "../IncreasingBussinessCard";

const Section2 = () => {
  return (
    <Container>
      <SectionWrapper>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center">
            <img className="w-[900px] max-h-[550px] object-contain" alt="" src={Img2} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {cards.map((item, index) => (
              <IncreasingBussinessCard
                key={index}
                item={item}
                index={index}
                cardClassNames={"gap-3 border px-8 py-7"}
                showReadMore={true}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section2;

let cards = [
  {
    title: "The Advent of LIMS: A Leap Towards Laboratory Excellence",
    paragraph: `Laboratory Information Management Systems (LIMS) were first introduced in the early 1980s. The initial development and use of LIMS were primarily in the pharmaceutical and petrochemical industries. These early LIMS were designed to manage sample, testing, and reporting workflows in laboratories to improve efficiency, data accuracy, and compliance with regulatory standards.The concept and technology have since evolved and expanded to various other industries, including healthcare, biotechnology, environmental testing, and more, becoming an integral part of modern laboratory operations. The inception of LIMS marked a transformative era in laboratory management, introducing a level of automation and accuracy previously unattainable. i9 Innovations builds on this legacy, offering a LIMS that not only meets modern laboratory demands but also anticipates future challenges.`,
  },
  {
    title: "The Assurance of Accuracy: From Sample Processing to Report Verification",
    paragraph: "Our LIMS enhances laboratory efficiency with systematic sample processing and thorough report verification, guaranteeing the reliability and accuracy of every diagnostic report.",
  },
];
