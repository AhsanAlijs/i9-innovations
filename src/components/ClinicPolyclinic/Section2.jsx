import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessCard from "../IncreasingBussinessCard";

let cards = [
  {
    title: "Queue Management:",
    paragraph: "Optimize patient flow seamlessly with our intelligent queue management system for a smooth and organized experience.",
  },
  {
    title: "Multiple Appointments:",
    paragraph: "Efficiently handle multiple appointments, ensuring optimal scheduling and reducing patient wait times.",
  },
  {
    title: "Automated Medical Billings:",
    paragraph: "Experience automated medical billings for transparent, accurate, and error-free financial transactions.",
  },
  {
    title: "Patient Details and Demographic Information:",
    paragraph: "Theme Implementation, Plugin Integration, Customization & Integrations.",
  },
  {
    title: "Scalability and Customization:",
    paragraph: "Capture and manage patient details effortlessly for a comprehensive and accurate database.",
  },
  {
    title: "OP Billing:",
    paragraph: "Streamline outpatient billing processes for transparent, accurate, and efficient financial transactions.",
  },
  {
    title: "EHR (Electronic Health Records):",
    paragraph: "Transition to a paperless environment with our advanced EHR system for centralized access to patient records and improved workflow.",
  },
  {
    title: "CRM Software for Clinic Doctors:",
    paragraph: "Foster strong doctor-patient relationships with our CRM software designed specifically for clinic doctors.",
  },
  {
    title: "Patient Data Software:",
    paragraph: "Ensure secure management of patient information, promoting confidentiality and data protection.",
  },
  {
    title: "Dentistry Management Software:",
    paragraph: "Tailored for dental clinics, our software meets the unique needs of dental care professionals.",
  },
  {
    title: "Mentor Templates:",
    paragraph: "Facilitate consistent and standardized documentation of medical information with mentor templates.",
  },
  {
    title: "Holiday Management:",
    paragraph: "Effectively manage clinic operations during holidays with our integrated holiday management feature.",
  },
  {
    title: "Video Calling Software:",
    paragraph: "Embrace modern healthcare communication with our Video Calling Software for remote consultations.",
  },
  {
    title: "Telemedicine:",
    paragraph: "Seamlessly integrate telemedicine capabilities into your clinic operations for secure and efficient virtual consultations.",
  },
  {
    title: "User-Friendly Login:",
    paragraph: "Simplify access to our comprehensive clinic management system with a user-friendly login process.",
  },
  {
    title: "Auto Registration:",
    paragraph: "Experience swift and automatic patient registration for a hassle-free onboarding process.",
  },
  {
    title: "3-Click OPD:",
    paragraph: "Streamline outpatient processes with our 3-click OPD feature for quick and efficient consultations.",
  },
  {
    title: "Prescriptions:",
    paragraph: "Generate accurate and detailed prescriptions with our prescription module for clear communication of treatment plans.",
  },
  {
    title: "Fitness Certificates:",
    paragraph: "Ensure accurate and seamless documentation of fitness assessments with personalized Fitness Certificates.",
  },
  {
    title: "Consents:",
    paragraph: "Capture electronic signatures for informed consents, reducing paperwork and fostering transparency.",
  },
  {
    title: "Disclaimers:",
    paragraph: "Set clear expectations and minimize legal liabilities with tailored Disclaimers for specific services.",
  },
  {
    title: "Follow-Up Reminders:",
    paragraph: "Maximize client engagement with personalized Follow-Up Reminders for appointments, workouts, or wellness checks.",
  },
];

const Section2 = () => {
  return (
    <Container>
      <SectionWrapper>
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
          Key Features of our 
          <span className="text-[#8ABC3E]"> Clinic Management System</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5">
          {cards?.map((item, index) => {
            return (
              <IncreasingBussinessCard
                key={index}
                item={item}
                index={index}
                cardClassNames={"gap-3 py-7 px-7 border _clinic_management_card"}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section2;
