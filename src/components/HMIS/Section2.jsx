import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessCard from "../IncreasingBussinessCard";

let cards = [
  {
    title: "The Super Dr System",
    paragraph: "As we begin the transition into discussing the Super Dr system, it's clear that it stands on the shoulders of these technological giants. Super Dr is a reflection of the modern Hospital Management information Systems, imbued with the latest tech features and designed to meet the digital demands of contemporary healthcare operations.It embodies the legacy of Hospital Management information Systems while pushing the boundaries of what these systems can achieve in terms of scalability, user experience, and comprehensive care facilitation. The Super Dr system then takes center stage, representing the culmination of years of development in Hospital Management information Systems. It’s a testament to the industry’s ongoing commitment to innovation, striving to deliver ever-more-efficient healthcare solutions that respond to the needs of both patients and providers in a rapidly evolving digital world.",
  },
  {
    title: "Seamless Integration and Adaptability",
    paragraph: "Super Dr stands out with its ability to seamlessly integrate into existing healthcare ecosystems. It adapts to the unique workflows of individual hospitals and clinics, ensuring that the transition to digital operations enhances, rather than disrupts, established processes.",
  },
  {
    title: "Artificial Intelligence and Predictive Analytics",
    paragraph: "Leveraging AI, Super Dr offers predictive analytics that aid in critical areas such as patient care, resource allocation, and financial management. By analyzing trends and patterns, it provides actionable insights that lead to informed decision-making.",
  },
  {
    title: "Customizable Modules for Diverse Needs",
    paragraph: "Understanding that healthcare providers have diverse needs, Super Dr offers a range of customizable modules. Whether it's streamlining outpatient services or managing complex inpatient care, Super Dr's modules can be tailored to fit the specific requirements of any healthcare facility.",
  },
  {
    title: "Comprehensive Support and Maintenance",
    paragraph: "Super Dr is backed by a dedicated support team that provides ongoing maintenance and updates. This ensures that the system evolves with the changing needs of the healthcare industry and remains at the forefront of HMIS technology.",
  },
  {
    title: "A Modern Interpretation of Hospital Management Systems",
    paragraph: "After exploring the historical context and evolution of HMIS, we arrive at the contemporary pinnacle of such systems, the Super Dr system. This modern HMIS represents the zenith of healthcare technology's aspirations to deliver an unparalleled",
  },
  {
    title: "User-Centric Design",
    paragraph: "The system is crafted with a deep understanding of the end-users—doctors, nurses, administrative staff, and patients. Its intuitive design ensures that users of all tech proficiencies can navigate its features with minimal training, reducing resistance to digital transition.",
  },
  {
    title: "Compliance and Security",
    paragraph: "In an era where data breaches are a significant concern, Super Dr assures compliance with international standards like HIPAA for data protection and privacy. It employs robust cybersecurity measures to safeguard sensitive patient data against threats.",
  },
  {
    title: "Cloud-Based Accessibility",
    paragraph: "With cloud-based technology, Super Dr ensures that healthcare professionals have access to the system anytime, anywhere. This facilitates better coordination between different departments and improves the continuity of care.",
  },
];

const Section2 = () => {
  return (
    <Container>
      <SectionWrapper>
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
          Super
          <span className="text-[#8ABC3E]"> Dr </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards?.map((item, index) => {
            return (
              <IncreasingBussinessCard
                key={index}
                item={item}
                index={index}
                showReadMore={true}
                cardClassNames={"gap-3 py-7 px-7 border"}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section2;
