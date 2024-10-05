import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import CardImg1 from "../../assets/customized-clinic/section-2-img.png";
import ImediateAccess from "../ImediateAccess";

let cards = [
  {
    title: "Enhanced Patient Engagement",
    paragraph:"By offering personalized healthcare experiences through the app, we help clinics and pharmacies increase patient engagement, satisfaction, and loyalty.",
  },
  {
    title: "Streamlined Operations",
    paragraph: "For healthcare providers, our apps streamline operations, automate routine tasks, and improve coordination among healthcare professionals, leading to better resource management and patient care.",
  },
];

const Section2 = () => {
  return (
    <>
      <Container>
        <SectionWrapper classNames={" lg:my-[0.5rem] lg:mt-[8rem]"}>
          <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold mb-7 xl:w-4/5 mx-auto text-center">
            The Importance of
            <span className="text-[#A3DC2F]"> Customized Clinic </span>&
            <span className="text-[#A3DC2F]"> Pharmacy App Development </span>
          </h2>
        </SectionWrapper>
      </Container>

      <ImediateAccess
        title={
          <h2 className="text-3xl md:text-4xl font-semibold mb-7">
            Immediate Access
            <span className="text-[#A3DC2F]"> to Healthcare Services</span>
          </h2>
        }
        paragraph="Our apps provide patients with instant access to healthcare services, from ordering medications online to booking clinic appointments, making healthcare more accessible and convenient."
        img={CardImg1}
        cards={cards}
      />
    </>
  );
};

export default Section2;
