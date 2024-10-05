import React from "react";
import Faqs from "../Faqs";

let faqs = [
  {
    title: "What is ABHA ID?",
    paragraph: "The ABHA ID is a unique 14-digit health identification number assigned to individuals that allows them to access and share their health information digitally across multiple healthcare providers securely and conveniently",
  },
  {
    title: "What is the difference between a health ID and ABHA card?",
    paragraph: "The terms are often used interchangeably, but the health ID refers to the unique number assigned to you, while the ABHA card is the physical or digital representation of this ID.",
  },
  {
    title: "How and Where to create ABHA ID?",
    paragraph: "Creating an ABHA ID is a simple online process. Visit the official ABDM portal or use the participating healthcare provider's application, fill in the required details, and submit the necessary documents to obtain your ID.",
  },
  {
    title: "How to get ABHA Gold Card?",
    paragraph: "The 'Gold Card' term is typically associated with the PMJAY scheme, not the ABHA. For PMJAY, eligible individuals can apply through the common service centers or PMJAY website.",
  },
  {
    title: "What is the full form of ABHA?",
    paragraph: "ABHA stands for Ayushman Bharat Health Account, which is part of the Ayushman Bharat Digital Mission to provide a digital health ecosystem in India.",
  },
  {
    title: "How do I verify my ABHA card?",
    paragraph: "Verification of your ABHA card can be done through the ABDM portal, where you may need to provide additional documentation or information as required.",
  },
  {
    title: "Who is eligible for ABHA health?",
    paragraph: "Every resident of India, regardless of their socioeconomic status, is eligible for an ABHA, which facilitates access to their digital health records.",
  },
  {
    title: "How does ABHA health card work?",
    paragraph: "The ABHA health card works by giving healthcare providers secure access to your health records with your consent, facilitating better-informed healthcare decisions.",
  },
  {
    title: "What is the benefit of the ABHA health Card 5 lakh?",
    paragraph: "The ABHA health card itself does not provide a 5 lakh benefit. However, it can be linked to health insurance schemes like Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB-PMJAY), which offers health coverage up to X lakh rupees per family per year for secondary and tertiary care hospitalization.",
  },
  {
    title: "Is ABHA card useful?",
    paragraph: "Absolutely, it streamlines healthcare delivery and ensures your medical information is easily accessible in a secure and efficient manner.",
  },
  {
    title: "How do I claim my ABHA card?",
    paragraph: "To claim your ABHA card, simply sign up for an ABHA ID and you can generate a card through the ABDM portal or a participating healthcare provider's service.",
  },
  {
    title: "Does ABHA card provide free treatment?",
    paragraph: "The ABHA card itself does not provide free treatment, but it may be linked to government health insurance schemes that do.",
  },
  {
    title: "Is ABHA and Ayushman card the same?",
    paragraph: "No, the ABHA is an ID used to access and share digital health records, while the Ayushman card, specifically referring to the PMJAY card, is related to the health insurance scheme for free treatment.",
  },
  {
    title: "Is ABHA a health card?",
    paragraph: "Yes, ABHA serves as a health card, allowing the digital exchange of medical records across the ABDM network.",
  },
  {
    title: "What to do after creating ABHA card?",
    paragraph: "Once created, you should link your ABHA card with your health records and use it at healthcare visits to ensure all your health information is up to date and easily accessible.",
  },
  {
    title: "Where the ABHA card is used?",
    paragraph: "The ABHA card can be used at any ABDM-compliant healthcare facility across India.",
  },
  {
    title: "How do I cancel my ABHA card?",
    paragraph: "To cancel your ABHA ID, you can visit the ABDM portal and follow the deactivation process.",
  },
  {
    title: "What type of card is ABHA?",
    paragraph: "ABHA is a digital health card that represents your unique health ID within the ABDM framework.",
  },
  {
    title: "Is ABHA compulsory?",
    paragraph: "No, enrolling for an ABHA ID is voluntary, but it is encouraged as it facilitates better management of your health records.",
  },
  {
    title: "What is the limit of ABHA health card?",
    paragraph: "There is no monetary limit associated with the ABHA health card as it is not an insurance card but a means to access digital health records.",
  },
];

const Section5 = () => {
  return <Faqs faqs={faqs} coloredTitle={true} title={"FAQS"} />;
};

export default Section5;
