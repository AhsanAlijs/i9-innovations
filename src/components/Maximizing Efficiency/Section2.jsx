import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessCard from "../IncreasingBussinessCard";

let cards = [
  {
    title: "Hospital Data Security",
    paragraph: "In the digital age, Hospital data security in healthcare is paramount. Hospital Information Systems (HIS) are designed with robust security protocols to protect sensitive patient information against unauthorized access, breaches, and other cyber threats. By employing advanced encryption, user authentication, and access controls, HIS ensures that patient data remains confidential and secure, fostering trust between patients and healthcare providers.",
  },
  {
    title: "Cost Reduction and Better Revenue Management in Hospital",
    paragraph: "One of the most significant advantages of implementing a Hospital Information System is the notable cost reduction it brings about. By automating routine tasks, reducing paperwork,and minimizing manual errors, hospitals can operate more efficiently, leading to substantial cost savings. Moreover, HIS enhances revenue management in hospital through accurate billing and coding, ensuring that services are billed correctly and revenue leakage is minimized.",
  },
  {
    title: "Enhanced Patient Experience",
    paragraph: "HIS plays a crucial role in providing a better patient experience. From streamlined appointment scheduling to reduced waiting times and more personalized care, HIS makes the patient journey smoother and more satisfactory.The ability to accesstheir health records and communicate with healthcare providers online further empowers patients, making their healthcare experience more engaging and transparent.",
  },
  {
    title: "Pharmacy and Inventory Management",
    paragraph: "Effective pharmacy management and inventory management are critical components of hospital operations. HIS integrates these aspects, ensuring that medication and supplies are managed efficiently.This integration helps in maintaining optimal stock levels, avoiding overstocking or stockouts, and ensuring that the right medications are available when needed, thereby enhancing patient safety.",
  },
  {
    title: "Improved Diagnostics and Treatment in Hospital",
    paragraph: "HIS significantly contributes to better diagnosis and treatment outcomes in hospitals and clinics. By providing healthcare professionals with comprehensive and up-to-date patientinformation and integrating seamlessly with diagnostic tools, HIS supports informed clinical decision-making, leading to more accurate diagnoses and effective treatment plans.",
  },
  {
    title: "Efficiency and Easy Data Retrieval in hospital software",
    paragraph: "The efficiency of hospital operations is greatly enhanced by HIS, which automates and streamlines processes, reducing the time and effort required for various tasks. Easy patient data retrieval byhospital software is another critical advantage, allowing healthcare providers to access patient information quickly and efficiently, which is essential for timely decision-making and care delivery.",
  },
  {
    title: "Error Reduction and Advanced Analytics in Hospitals",
    paragraph: "By automating data entry and processing, HIS significantly reduces the risk of human error, leading to safer and more reliable patient care. Additionally, HIS offers advanced analytics for hospital capabilities, providing valuable insights into hospital operations, patient care trends, and performance metrics, which can inform strategic decisions and operational improvements.",
  },
  {
    title: "Enhanced Patient Care and Interdepartmental ",
    paragraph: "HIS enhances patient care by ensuring that all relevant patient information is readily accessible to the care team, facilitating coordinated and comprehensive care. It also improves communication between hospital departments,ensuring that information flows smoothly across different units, which is crucial for efficient operations and patient care continuity.",
  },
  {
    title: "Comprehensive Billing and EMR Features in hospital",
    paragraph: "The billing process is streamlined with HIS, which automates and accurately captures all chargeable services, reducing billing errors and improving within HIS ensures that patient records are maintained in a digital format, making them revenue collection. The integration of Electronic Medical Records (EMR) in hospital easily accessible while ensuring accuracy and completeness.",
  },
  {
    title: "Faster Turnaround and Improved Services",
    paragraph: "HIS contributes to a faster turnaround in patient care processes, from admission to discharge, enhancing the overall efficiency of hospital services. This efficiency leads to improved services, with patients benefiting from quicker responses, reduced waiting times, and more efficient care delivery.",
  },
  {
    title: "Centralized Control and Access",
    paragraph: "HIS provides centralized control over all aspects of hospital operations, offering a unified view and management platform for administrators. This centralization ensures consistent policies and procedures across the hospital, enhancing operational efficiency. Additionally, HIS facilitates easy data access, allowing authorized personnel to access the information they need from anywhere, which is crucial for timely and informed decision-making.",
  },
];

const Section2 = () => {
  return (
    <Container>
      <SectionWrapper>
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14 xl:w-9/12 mx-auto">
          <span className="text-[#A3DC2F]">Key Advantages </span>
          of Hospital Information Systems
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
          {cards?.map((item, index) => {
            return <IncreasingBussinessCard index={index} item={item} cardClassNames={' gap-5 border'} linkStyles={' hidden'} showReadMore={true} />;
          })}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section2;
