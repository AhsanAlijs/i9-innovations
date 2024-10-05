import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import CardImg1 from "../../assets/customized-clinic/essentail-features/card-img-1.png";
import CardImg2 from "../../assets/customized-clinic/essentail-features/card-img-2.png";
import CardImg3 from "../../assets/customized-clinic/essentail-features/card-img-3.png";
import CardImg4 from "../../assets/customized-clinic/essentail-features/card-img-4.png";
import CardImg5 from "../../assets/customized-clinic/essentail-features/card-img-5.png";
import PatientBenefitCard from "../PatientBenefitCard";

let cards = [
  {
    img: CardImg1,
    title: "Business Management",
    paragraph:
      "Our apps are designed to simplify the complexities of healthcare business management, from appointment scheduling to inventory control, ensuring your operations run smoothly.",
  },
  {
    img: CardImg2,
    title: "Account Management",
    paragraph:
      "With integrated accounting features, our apps provide real-time financial insights, making it easier to manage billing, invoicing, and financial reporting, keeping your accounts clear and error-free.",
  },
  {
    img: CardImg3,
    title: "Error Reduction",
    paragraph:
      "By automating critical tasks, our apps minimize the risk of human error,ensuring accuracy in prescriptions, billing, and patient records.",
  },
  {
    img: CardImg4,
    title: "Task Automation",
    paragraph:
      "Repetitive tasks such as appointment reminders, stock reordering, and patient follow-ups are automated, freeing up valuable time for healthcare professionals to focus on patient care.",
  },
  {
    img: CardImg5,
    title: "Integration Capabilities",
    paragraph:
      "Our apps seamlessly integrate with existing healthcare systems,including HMIS and EHR, enhancing data flow and accessibility.",
  },
];

const Section4 = () => {
  return (
    <Container>
      <SectionWrapper>
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold mb-7 xl:w-8/12 mx-auto text-center">
          Essential Features of Our
          <span className="text-[#A3DC2F]"> Healthcare Apps </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {cards?.map((item, index) => {
            return <PatientBenefitCard key={index} item={item} index={index} />;
          })}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section4;
