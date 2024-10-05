import React from "react";
import SectionWrapper from "../SectionWrapper";
import Container from "../Container";
// import IncreasingBussinessCard from "../IncreasingBussinessCard";
import CardImg1 from "../../assets/hmis/section1/sec1-1.png";
import CardImg2 from "../../assets/hmis/section1/sec1-2.png";
import CardImg3 from "../../assets/hmis/section1/sec1-3.jpeg";
import CardImg4 from "../../assets/hmis/section1/sec1-4.png";
import CardImg5 from "../../assets/hmis/section1/sec1-5.png";
import CardImg6 from "../../assets/hmis/section1/sec1-6.png";
import CardImg7 from "../../assets/hmis/section1/sec1-7.png";
import CardImg8 from "../../assets/hmis/section1/sec1-8.png";
import SuperDrAppComponent from "../SuperDrAppComponent";

let cards = [
  {
    img: CardImg1,
    title: "What is Hospital Management information Systems?",
    paragraph: "A Hospital Management Information System (HMIS) is a comprehensive, integrated information system designed to manage the administrative, financial, and clinical aspects of a hospital. This system encompasses all required functionalities, from patient care to back-office operations.",
    cta: true,
  },
  {
    img: CardImg4,
    title: "The Birth of Hospital Management information Systems:",
    paragraph: "The inception of Hospital Management information Systems dates back to the 1960s when healthcare professionals recognized the need for a systematic approach to manage the increasing complexity of hospital operations and patient care. The first iterations of Hospital Management information Systems were rudimentary, focusing on basic data collection and patient record management.",
    cta: false,
  },
  {
    img: CardImg2,
    title: "Early Innovators and Implementations:",
    paragraph: "While there is no single inventor of Hospital Management information Systems, it was developed by pioneering healthcare facilities and IT professionals who understood the necessity of merging healthcare with information technology. One of the first documented uses of an Hospital Management information Systems was at the Latter-Day Saints Hospital in Salt Lake City, Utah, which implemented the HELP system — Health Evaluation through Logical Processes.",
    cta: false,
  },
  {
    img: CardImg3,
    title: "Hospital Management information Systems Goes Global:",
    paragraph: "Initially, Hospital Management information Systems was predominantly used in the United States, but the system saw rapid adoption across the globe as the benefits became clear. By the 1980s and 1990s, with the advent of more affordable and powerful computers, Hospital Management information Systems began to spread internationally.",
    cta: false,
  },
  {
    img: CardImg5,
    title: "Arrival in India:",
    paragraph: "India welcomed Hospital Management information Systems in the late 1990s when the healthcare sector began to embrace information technology to streamline operations. Early adopters were large hospital chains that could invest in the infrastructure needed to support such comprehensive systems.",
    cta: false,
  },
  {
    img: CardImg6,
    title: "Importance and Evolution of Hospital Management Systems:",
    paragraph: "Hospital Management information Systems became indispensable due to its ability to provide a cohesive platform for managing various hospital departments, ensuring the accuracy of medical records, improving communication between departments, and enhancing the quality of patient care.",
    cta: false,
  },
  {
    img: CardImg7,
    title: "Benefits of Hospital Management information Systems:",
    paragraph: "The system was supposed to bring numerous benefits, such as reduced paperwork, faster information flow, better resource management, and improved patient outcomes. It was also to help to comply with increasingly stringent regulatory requirements. But the technology didn’t reach to its full potential then",
    cta: false,
  },
  {
    img: CardImg8,
    title: "Changes Over Time:",
    paragraph: "Over the years, Hospital Management information Systems has undergone significant transformations. Early systems were primarily focused on billing and patient demographics. As technology progressed, so did the features of Hospital Management information Systems, incorporating advanced data analytics, interoperability, and real-time patient monitoring, among others.",
    cta: true,
  },
];

const Section1 = () => {
  return (
    <Container>
      <SectionWrapper>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards?.map((item, index) => {
            return (
              <IncreasingBussinessCard
                key={index}
                item={item}
                index={index}
                cardClassNames={"gap-3 py-7 px-7 border"}
              />
            );
          })}
        </div> */}
        {/* <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
          INTRODUCING THE <span className="text-[#8ABC3E]"> SUPER DR APP </span>
        </h2> */}
      <SuperDrAppComponent cards={cards} />
      </SectionWrapper>
    </Container>
  );
};

export default Section1;

