import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import ArrowImg from "../../assets/arrow1.png";

let cards = [
  {
    title: "HIPAA and HL7 Compliance:",
    paragraph: "Super Dr is meticulously engineered to meet the stringent standards of HIPAA and HL7, ensuring the utmost security and interoperability of patient data. This compliance not only safeguards patient information but also facilitates seamless communication between different healthcare systems, enhancing data exchange and integration.",
  },
  {
    title: "ABHA Enablement:",
    paragraph: "With ABHA (Ayushman Bharat Health Account) enablement, Super Dr is at the forefront of supporting national health initiatives, ensuring that patients can securely access and share their health records across the healthcare ecosystem, promoting continuity of care and patient empowerment.",
  },
  {
    title: "Comprehensive Modules for Every Need:",
    paragraph: "Super Dr is not just an HIS; it's a holistic solution that caters to every conceivable need of a hospital or clinic. From pharmacy management to inventory control, appointment scheduling, and billing, Super Dr's modules are designed to streamline operations, improve efficiency, and enhance patient care.",
  },
  {
    title: "User-Friendliness:",
    paragraph: "Recognizing the diverse technological proficiency of healthcare staff, Super Dr is built with user-friendliness at its core. Its intuitive interface ensures that doctors, nurses, and administrators can navigate and utilize the system effectively, minimizing the learning curve and maximizing productivity.",
  },
  {
    title: "Medico-Legal Compliance:",
    paragraph: "In the complex landscape of healthcare, medico-legal compliance is non-negotiable. Super Dr is designed with this in mind, incorporating features that ensure compliance with local and international medico-legal requirements, safeguarding healthcare providers and patients alike.",
  },
  {
    title: "Future-Ready:",
    paragraph: "Super Dr is not just about meeting today's needs but also anticipating the future of hospital management systems. With features like AI-enabled workflows and templatised automated billing, Super Dr is poised to adapt to the evolving healthcare landscape, ensuring that healthcare providers remain at the cutting edge of technology.",
  },
];

const Section4 = () => {
  return (
    <div className="bg-[#F5F5F9] pt-0.5 pb-5">
      <Container>
        <SectionWrapper>
          <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
            <div className="absolute left-0 top-9 sm:-top-5">
              <img alt="" className="w-[40px] sm:w-[60px]" src={ArrowImg} />
            </div>
            The Super Dr <span className="text-[#A3DC2F]"> Advantages </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {cards?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white text-black group hover:text-white flex flex-col gap-4 duration-300 hover:bg-[#0065C0E5] transition-all rounded-xl shadow-xl hover:shadow-2xl p-8"
                >
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="">{item.paragraph}</p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </Container>
    </div>
  );
};

export default Section4;
