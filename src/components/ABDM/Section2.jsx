import React from "react";
import SectionWrapper from "../SectionWrapper";
import Container from "../Container";
import PatientBenefitCard from "../PatientBenefitCard";
import CardImg1 from "../../assets/abdm/section2/cardimg1.png";
import CardImg2 from "../../assets/abdm/section2/cardimg2.png";
import CardImg3 from "../../assets/abdm/section2/cardimg3.png";
import CardImg4 from "../../assets/abdm/section2/cardimg4.png";

let cards = [
  {
    img: CardImg1,
    title: "Unified Health Records",
    paragraph:
      "With ABHA, patients can have their health records digitally stored and accessible from anywhere, anytime. This eliminates the hassle of maintaining physical documents and ensures that their medical history is just a click away.",
  },
  {
    img: CardImg2,
    title: "Enhanced Privacy and Security",
    paragraph:
      "ABHA's framework is designed with robust security measures, ensuring that patients' health information is protected and shared only with their consent.",
  },
  {
    img: CardImg3,
    title: "Improved Healthcare Delivery",
    paragraph:
      "Access to comprehensive health records enables doctors to make informed decisions, reducing the risk of medical errors and enhancing the quality of care.",
  },
  {
    img: CardImg4,
    title: "Improved Healthcare Delivery",
    paragraph:
      "ABHA ensures that health data can be seamlessly shared across different healthcare systems, making it easier for patients to seek consultations and treatments across various facilities without any informational gaps.",
  },
];

const Section2 = () => {
  return (
    <Container>
      <SectionWrapper>
        <div className="text-center mb-14 flex flex-col gap-5">
          <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
            Benefits to <span className="text-[#A3DC2F]"> Patients </span>
          </h2>
          <h3 className="text-2xl max-lg:text-xl max-sm:text-lg font-medium">
            A Leap Towards Empowered Healthcare
          </h3>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-5 xl:gap-8">
          {cards?.map((item, index) => {
            return (
              <PatientBenefitCard key={index} index={index} item={item} />
              
            );
          })}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section2;
