import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessCard from "../IncreasingBussinessCard";
import Img1 from "../../assets/lims/section4/img1.png"
import Img2 from "../../assets/lims/section4/img2.png"
import Img3 from "../../assets/lims/section4/img3.png"
import Img4 from "../../assets/lims/section4/img4.png"
import Img5 from "../../assets/lims/section4/img5.png"
import Img6 from "../../assets/lims/section4/img6.png"
import Img7 from "../../assets/lims/section4/img7.png"
import Img8 from "../../assets/lims/section4/img8.png"
import Img9 from "../../assets/lims/section4/img9.png"
import Img10 from "../../assets/lims/section4/img10.png"
import Img11 from "../../assets/lims/section4/img11.png"
import Img12 from "../../assets/lims/section4/img12.png"

const Section4 = () => {
  return (
    <Container>
      <SectionWrapper>
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
          Comprehensive Modules of
          <span className="text-[#A3DC2F]"> Super Dr's LIMS </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {modules.map((item, index) => (
            <IncreasingBussinessCard
              key={index}
              item={item}
              index={index}
              showReadMore={true}
              cardClassNames={"gap-3 border"}
            />
          ))}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section4;

const modules = [
  {
    title: "Machine Interface Integration",
    paragraph: "Our LIMS features advanced machine interface integration, minimizing human error and ensuring the highest accuracy in test results and diagnostics.",
    img: Img1
  },
  {
    title: "Direct Indents and Swift Reporting",
    paragraph: "Facilitate seamless communication between labs and wards with direct indents, enabling faster reporting and immediate access to results for healthcare providers.",
    img: Img2
  },
  {
    title: "Real-Time Report Monitoring",
    paragraph: "Move beyond static reports with live monitoring capabilities, allowing for real-time tracking of patient metrics and test components.",
    img: Img3
  },
  {
    title: "Automated Billing System",
    paragraph: "Streamline your laboratory's financial transactions with our automated billing module, enhancing efficiency and reducing manual errors.",
    img: Img4
  },
  {
    title: "Role-Based Access Control",
    paragraph: "Safeguard sensitive data with role-based access controls, ensuring that information is only accessible to authorized personnel.",
    img: Img5
  },
  {
    title: "Software for Microbiology",
    paragraph: "Microbiology: Tailored solutions for microbiology labs, addressing specific workflows and diagnostic processes.Histopathology: Dedicated features for histopathology labs, ensuring precision in tissue-based diagnostics. Hematology: Customized tools for hematology departments, optimizing blood-related diagnostics and analyses. Immunology: Specialized functionalities for immunology labs, supporting intricate immunological testing and research. Serology: Advanced systems for serology labs, enhancing the accuracy and efficiency of serological testing.",
    img: Img6
  },
  {
    title: "Sample Management",
    paragraph: "Efficient management of sample collection, dispatch, and acknowledgment, ensuring a smooth workflow from collection to analysis.",
    img: Img7
  },
  {
    title: "Outsourced Lab Integration",
    paragraph: "Seamless integration of outsourced lab services, maintaining consistency and accuracy in external diagnostic processes.",
    img: Img8
  },
  {
    title: "Enhanced Security and Data Integrity",
    paragraph: "With Super Dr's LIMS, data security and integrity are paramount. Our system ensures that every piece of information is protected, maintaining the confidentiality and reliability of laboratory data.",
    img: Img9
  },
  {
    title: "The Super Dr Advantage in Laboratory Management",
    paragraph: "Super Dr's LIMS is not just a software solution; it's a transformative tool designed to meet the evolving needs of modern laboratories. By integrating these comprehensive modules, labs can achieve unparalleled operational excellence, improve patient care, and adapt to the dynamic landscape of medical diagnostics.",
    img: Img10
  },
  {
    title: "Light-Hearted Note",
    paragraph: "Imagine a lab where the only 'culture' you have to worry about is the one growing in the Petri dish, not the one lost in paperwork. That's the lab Super Dr's LIMS promises!",
    img: Img11
  },
  {
    title: "Inspirational Quote",
    paragraph: "Science and technology revolutionize our lives, but memory, tradition, and myth frame our response. - Arthur M. Schlesinger. Super Dr's LIMS bridges the gap between revolutionary technology and the timeless tradition of excellence in laboratory science.",
    img: Img12
  },
]