import Faqs from "../Faqs";

export default function Section3() {
  return (
    <Faqs coloredTitle={true} faqs={faqs} title={"FAQS"} />
  )
}

let faqs = [
  {
    title: "What is an EMR record?",
    paragraph: "RIS and PACS are integrated systems used in radiology to manage patient information and imaging files digitally, enhancing the efficiency and accuracy of diagnoses.",
  },
  {
    title: "What are the 4 main uses of PACS?",
    paragraph: "The four main uses of PACS include storing medical imaging data, ensuring easy retrieval of images, enabling efficient presentation of images for review, and facilitating secure sharing of images with other healthcare providers.",
  },
  {
    title: "What is the difference between RIS and EMR?",
    paragraph: "RIS is specifically designed for radiology departments to manage imaging orders and patient data, whereas an Electronic Medical Record (EMR) is a broader system used for storing all of a patient's medical history.",
  },
  {
    title: "What are the advantages of PACS and RIS integration?",
    paragraph: "Integration of PACS and RIS offers streamlined workflows, reduced manual errors, enhanced patient care through quicker access to images and information, and improved communication within and between departments.",
  },
  {
    title: "What is HL7 in PACS?",
    paragraph: "HL7 (Health Level 7) is a set of international standards for the exchange of clinical and administrative data between software applications used by various healthcare providers, crucial for integrating PACS with other hospital systems like EMRs.",
  },
  {
    title: "What is the difference between PACS and DICOM?",
    paragraph: "Lorem ipsum dolor set.",
  },
  {
    title: "Is PACS a server?",
    paragraph: "Lorem ipsum dolor set.",
  },
  {
    title: "Who invented PACS?",
    paragraph: "Lorem ipsum dolor set.",
  },
  {
    title: "What is the full form of DICOM?",
    paragraph: "Lorem ipsum dolor set.",
  },
];