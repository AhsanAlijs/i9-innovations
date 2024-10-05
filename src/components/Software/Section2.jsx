import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessSection from "../IncreasingBussinessSection";
import CardImg1 from "../../assets/emr/section2/img1.png";
import CardImg2 from "../../assets/emr/section2/img2.png";
import CardImg3 from "../../assets/emr/section2/img3.png";
import CardImg4 from "../../assets/emr/section2/img4.png";
import CardImg5 from "../../assets/emr/section2/img5.png";
import CardImg6 from "../../assets/emr/section2/img6.png";
import CardImg7 from "../../assets/emr/section2/img7.png";
import CardImg8 from "../../assets/emr/section2/img8.png";
import CardImg9 from "../../assets/emr/section2/img9.png";
import CardImg10 from "../../assets/emr/section2/img10.png";
import CardImg11 from "../../assets/emr/section2/img11.png";
import CardImg12 from "../../assets/emr/section2/img12.png";
import CardImg13 from "../../assets/emr/section2/img13.png";
import CardImg14 from "../../assets/emr/section2/img14.png";
import CardImg15 from "../../assets/emr/section2/img15.png";
import CardImg16 from "../../assets/emr/section2/img16.png";
import CardImg17 from "../../assets/emr/section2/img17.png";
import CardImg18 from "../../assets/emr/section2/img18.png";
import CardImg19 from "../../assets/emr/section2/img19.png";
import CardImg20 from "../../assets/emr/section2/img20.png";

let cards = [
  {
    img: CardImg1,
    title: "The Genesis of EMR: A Peek into the Past",
    paragraph: "The inception of electronic medical records (EMR) can be traced back to the era when 'cutting-edge technology' meant a sharper chisel for your tablet - not the electronic kind, but the stone variety.",
  },
  {
    img: CardImg2,
    title: "The Advent of Digital EMR: A Game Changer",
    paragraph: "As computers found their way into hospitals, the early adopters of electronic medical records (EMR) systems were like the cool kids on the tech block, showcasing how digitization",
  },
  {
    img: CardImg3,
    title: "Early Users: Pioneers of the Digital Shift",
    paragraph: "The early adopters of electronic medical records (EMR) were primarily large hospitals and academic medical centers with the resources to invest in nascent computer technologies.",
  },
  {
    img: CardImg4,
    title: "The Leap into Digitalization: More Than Just Convenience",
    paragraph: "The digital transformation of electronic medical records (EMR) was not just about swapping paper for pixels; it was about enhancing the quality of care,",
  },
  {
    img: CardImg5,
    title: "The Need: Why EMR Became Essential",
    paragraph: "The shift towards electronic medical records (EMR) was driven by the need for more efficient, accurate, and accessible patient records. Traditional paper records were cumbersome.",
  },
  {
    img: CardImg6,
    title: "The Benefit: A Leap in Healthcare Quality",
    paragraph: "Electronic Medical Records (EMR) brought about a paradigm shift in healthcare, enhancing the quality of patient care through better data management, reduced",
  },
  {
    img: CardImg7,
    title: "The Spread: EMR Goes Global",
    paragraph: "The adoption of electronic medical records (EMR) spread globally over the decades, with developed countries leading the charge. Government initiatives,",
  },
  {
    img: CardImg8,
    title: "Laughter is the Best Medicine",
    paragraph: "Let's pause the serious talk for a moment. Imagine an electronic medical records (EMR) system that auto-corrects your typos, turning 'patient has a rash' into 'patient has a crush'.",
  },
  {
    img: CardImg9,
    title: "EMR in India: A Late Bloomer",
    paragraph: "India embraced electronic medical records (EMR) later than many Western countries, primarily due to infrastructural challenges and the initial high cost.",
  },
  {
    img: CardImg10,
    title: "The Digital Transformation: EMR in the 21st Century",
    paragraph: "The digitalization of electronic medical records (EMR) was a game-changer, introducing features like cloud storage, data analytics, and interoperability.",
  },
  {
    img: CardImg11,
    title: "The Super Dr EMR: Redefining Patient Records",
    paragraph: "Enter Super Dr EMR, a state-of-the-art platform designed to meet the dynamic needs of modern healthcare. Super Dr's EMR system stands out for its intuitive design.",
  },
  {
    img: CardImg12,
    title: "Automation with Super Dr: A Touch of AI",
    paragraph: "Super Dr elevates electronic medical records (EMR) with smart automation, employing AI to generate templates and streamline data entry.",
  },
  {
    img: CardImg13,
    title: "Use Cases:Super Dr EMR in Action",
    paragraph: "From multi-specialty hospitals to boutique clinics, Super Dr EMR has proven its mettle across diverse healthcare settings. Its adaptability",
  },
  {
    img: CardImg14,
    title: "Medico-Legal Implications: The Serious Side of EMR",
    paragraph: "With great power comes great responsibility, and digital electronic medical records (EMR) is no exception. In the medico-legal arena, digital",
  },
  {
    img: CardImg15,
    title: "Data Protection: The Digital Fortress",
    paragraph: "As electronic medical records (EMR) became digital, the question of data security took center stage. Protecting sensitive patient information from cyber",
  },
  {
    img: CardImg16,
    title: "Why Choose Super Dr EMR?",
    paragraph: "Hospitals in India and around the world are turning to Super Dr EMR for its robust functionality, ease of use, and rapid deployment. With Super Dr, healthcare",
  },
  {
    img: CardImg17,
    title: "The Super Dr Advantage: Going Live in 3 Days",
    paragraph: "One of the most compelling features of Super Dr is its swift implementation. Super Dr can go live in just three days, transforming the healthcare delivery",
  },
  {
    img: CardImg18,
    title: "A Dose of Laughter",
    paragraph: "As we navigate the serious world of EMR, let's not forget to inject a dose of humor. Imagine an EMR system so advanced it starts giving lifestyle advice:",
  },
  {
    img: CardImg19,
    title: "Automation and Customization with Super Dr",
    paragraph: "Super Dr takes EMR a step further with AI-driven templates and automation, ensuring that no two patients' files are just a copy-paste affair. It's like",
  },
  {
    img: CardImg20,
    title: "The Assurance of Data Protection with Super Dr",
    paragraph: "Super Dr is not just about efficiency and customization; it's also a digital stronghold for patient data. With state-of-the-art encryption and",
  },
];

const Section2 = () => {
  return (
    <Container>
      <SectionWrapper>
        <IncreasingBussinessSection cards={cards} cardClassNames={"gap-3 border"} />
      </SectionWrapper>
    </Container>
  );
};

export default Section2;
