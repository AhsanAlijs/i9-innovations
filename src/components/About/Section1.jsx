import React from "react";
import SectionWrapper from "../SectionWrapper";
import SuperDrAppComponent from "../SuperDrAppComponent";
import CardImg1 from "../../assets/about/section1/cardimg1.png";
import CardImg2 from "../../assets/about/section1/cardimg2.png";
import CardImg3 from "../../assets/about/section1/cardimg3.png";

let cards = [
  {
    title: "A PIONEERING LEAP IN DIGITAL HEALTHCARE SOLUTIONS",
    paragraph:
      "The Super Dr App stands at the forefront of digital healthcare innovation, embodying a seamless blend of cutting-edge technology and patient-centric care. Designed by i9 Innovations, this revolutionary application is set to redefine the standards of healthcare management, offering an all-encompassing solution that caters to the intricate needs of hospitals, healthcare centers, and medical professionals globally.",
    img: CardImg1,
  },
  {
    title: "EMPOWERING HEALTHCARE PROVIDERS WITH ADVANCED FEATURES",
    paragraph:
      "The Super Dr App is engineered to empower healthcare providers with a suite of advanced features, including real-time patient monitoring,electronic medical records(EMR) management, appointment scheduling, and telemedicine capabilities. Its intuitive interface ensures that healthcare professionals can access critical patient information and make informed decisions swiftly, enhancing the quality of care and patient outcomes. BRIDGING THE GAP BETWEEN PATIENTS AND HEALTHCARE SERVICES At its core, the Super Dr App is dedicated to bridging the gap between patients and healthcare services, facilitating easy access to medical consultations, health records, and medication management. Patients can effortlessly book appointments, receive remote consultations, and manage their health records securely within the app, fostering a proactive approach to health and wellness.",
    img: CardImg2,
  },
  {
    title: "INTEGRITY & CREDIBILITY",
    list: [
      "• Cultivate integrity & credibility: Be worthy of belief",
      "• Fragile nature of credibility: It takes time to build and moments to lose.",
      "• Do what you say you will do: Always follow through",
      "• Be responsive: Work on end-user feedback & optimize",
      "• Communicate & decisions: Openly, and in a timely manner.",
      "• Be authentic, & genuine: So people take you at face value.",
      "• Listen - seek first to understand end-user experience and optimize our services based on it.",
      "• Talent will be useless without training and Practice.",
      "• We stand up for what we believe in and are willing to put ourselves on the line.",
      "• Always put values ahead of short term gains.",
      "• Tell the whole truth - deliver the complete message.",
    ],
    img: CardImg3,
  },
];

const Section1 = () => {
  return (
    <SectionWrapper>
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
        INTRODUCING THE <span className="text-[#8ABC3E]"> SUPER DR APP </span>
      </h2>
      <SuperDrAppComponent cards={cards} />
    </SectionWrapper>
  );
};

export default Section1;
