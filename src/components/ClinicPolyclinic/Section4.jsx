import Faqs from "../Faqs";

export default function Section4() {
  return (
    <Faqs faqs={faqs} title={"FAQS"} coloredTitle={true} />
  )
}

let faqs = [
  {
    title: "What is Clinic Management System Software?",
    paragraph: "A Clinic Management System is a comprehensive software solution designed to enhance efficiency and streamline operations in clinics and polyclinics.",
  },
  {
    title: "How does Queue Management benefit clinics?",
    paragraph: "Queue Management optimizes patient flow, providing a smooth and organized experience for both patients and clinic staff.",
  },
  {
    title: "What are the key features of Dentistry Management Software?",
    paragraph: "Dentistry Management Software is tailored for dental clinics, integrating features for appointment scheduling and treatment records.",
  },
  {
    title: "How does the Fitness Certificates feature work?",
    paragraph: "Fitness Certificates ensure accurate and documented fitness assessments, tracking progress and achievements for clients.",
  },
  {
    title: "Why is Follow-Up Reminders important for fitness programs?",
    paragraph: "Follow-Up Reminders enhance client engagement, ensuring adherence to fitness plans and contributing to overall program success.",
  },
];