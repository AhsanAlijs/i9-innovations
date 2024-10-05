import { useState } from "react";
import * as AccordionRadix from '@radix-ui/react-accordion';
import Faqs from "../Faqs";
import Accordion from "../Accordion";

export default function Section2() {
  return (
    <section className="py-16 max-w-screen-xl mx-auto px-4">
      <Faq title="Clinical Modules:" faqArray={clinicalFaqs} />
      <Faq title="Administrative Modules:" faqArray={administrativeFaqs} />
      <Faq title="Patient-Related Modules:" faqArray={patientFaqs} />
      <Faq title="Financial Modules:" faqArray={financialFaqs} />
      <Faq title="Supply Chain Modules:" faqArray={supplyChainFaqs} />
      <Faq title="Human Resources Modules:" faqArray={hrFaqs} />
      <Faq title="Quality and Compliance Modules:" faqArray={qualityFaqs} />
      <Faq title="Support Service Modules:" faqArray={supportFaqs} />
      <Faq title="Specialty-Specific Modules:" faqArray={specialityFaqs} />
      <Faq title="Integration and Interoperability Modules:" faqArray={integrationFaqs} />
      <Faq title="Patient Safety and Care Modules:" faqArray={patientSafetyFaqs} />
      <Faq title="Data and Reporting Modules:" faqArray={dataReportingFaqs} />
      <Faq title="Technical Modules:" faqArray={technicalFaqs} />
      <Faq title="Governance Strategy and Environmental Modules:" faqArray={governanceFaqs} />
      {/* <Faq title="Environmental and Infrastructure Modules:" faqArray={environmentalFaqs} /> */}
    </section>
  )
}

function Faq({ title, faqArray }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  return (
    <div className="mt-24">
      <h2 className="font-semibold text-4xl max-sm:text-3xl text-[#8ABC3E] text-center">
        {title}
      </h2>

      {/* <div className="grid grid-cols-2 gap-4 mt-12 max-md:grid-cols-1 *:self-start [&>*:nth-last-child(1):nth-child(odd)]:col-span-full *:w-full *:max-w-[700px] justify-items-center"> */}
      <AccordionRadix.Root className="grid grid-cols-2 gap-4 mt-12 max-md:grid-cols-1 *:self-start [&>*:nth-last-child(1):nth-child(odd)]:col-span-full *:w-full *:max-w-[700px] justify-items-center" type="single" collapsible>
        {
          faqArray.map((item, index) => (
            <Accordion
              key={`${item.title}-${index}`}
              title={item.title}
              paragraph={item.paragraph}
              index={index}
              // isOpen={isOpen}
              // setIsOpen={setIsOpen}
              // activeFaqIndex={activeFaqIndex}
              // setActiveFaqIndex={setActiveFaqIndex}
            />
          ))
        }
        </AccordionRadix.Root>
      {/* </div> */}
    </div>
  )
}

const clinicalFaqs = [
  {
    title: "Emergency Department Management:",
    paragraph: "Streamlines emergency care processes, ensuring rapid response and treatment.",
  },
  {
    title: "Anesthesia Information Management:",
    paragraph: "Automates anesthesia records, enhancing patient safety during surgeries.",
  },
  {
    title: "Critical Care Management:",
    paragraph: "Supports intensive care units with real-time patient monitoring and data analysis.",
  },
  {
    title: "Endoscopy Department Management:",
    paragraph: "Manages endoscopic procedures, scheduling, and documentation.",
  },
  {
    title: "Cardiology Information System:",
    paragraph: "Integrates cardiology-specific workflows and patient data for comprehensive cardiac care.",
  },
  {
    title: "Oncology Management:",
    paragraph: "Tailors patient care plans and tracks treatment progress for oncology patients.",
  },
  {
    title: "Dialysis Management:",
    paragraph: "Schedules and monitors dialysis sessions, ensuring patient comfort and safety.",
  },
  {
    title: "Maternity and Childbirth Module:",
    paragraph: "Manages prenatal, delivery, and postnatal care for mothers and newborns.",
  },
  {
    title: "Neonatal Intensive Care Unit (NICU) Management:",
    paragraph: "Provides specialized features for the care of premature or ill newborns.",
  },
  {
    title: "Pain Management:",
    paragraph: "Offers solutions for assessing and managing patient pain levels effectively.",
  },
  {
    title: "Rehabilitation Services Management:",
    paragraph: "Coordinates rehabilitation programs and tracks patient progress.",
  },
  {
    title: "Surgical Workflow Management:",
    paragraph: "Streamlines the entire surgical process from scheduling to post-operative care.",
  },
  {
    title: "Pathology Module:",
    paragraph: "Manages laboratory tests, results, and integrates with patient records.",
  },
  {
    title: "Physiotherapy and Rehabilitation Module:",
    paragraph: "Schedules and documents physiotherapy sessions, aiding in patient recovery.",
  },
];

const administrativeFaqs = [
  {
    title: "Appointment and Scheduling Management:",
    paragraph: "Facilitates easy booking and management of patient appointments.",
  },
  {
    title: "Bed Management and Census:",
    paragraph: "Optimizes bed allocation and tracks hospital occupancy rates.",
  },
  {
    title: "Visitor Management:",
    paragraph: "Controls and monitors visitor access, enhancing hospital security.",
  },
  {
    title: "Contract Management:",
    paragraph: "Manages contracts with vendors, suppliers, and service providers.",
  },
  {
    title: "Credentialing Module:",
    paragraph: "Ensures all medical staff credentials are up-to-date and compliant.",
  },
  {
    title: "Facility Management:",
    paragraph: "Oversees the maintenance and operations of hospital facilities.",
  },
  {
    title: "Document Management:",
    paragraph: "Digitizes and organizes hospital documents for easy access and security.",
  },
  {
    title: "Healthcare Analytics and Intelligence:",
    paragraph: "Provides insights into hospital operations and patient care for informed decision-making.",
  },
];

const patientFaqs = [
  {
    title: "Patient Portal:",
    paragraph: "Offers patients access to their medical records, appointments, and communication with healthcare providers.",
  },
  {
    title: "Patient Engagement Tools:",
    paragraph: "Engages patients in their care process through educational resources and interactive tools.",
  },
  {
    title: "Patient Tracking:",
    paragraph: "Monitors patient flow within the hospital to enhance care delivery.",
  },
  {
    title: "Patient Relationship Management:",
    paragraph: "Builds and maintains positive relationships with patients, improving satisfaction and loyalty.",
  },
  // {
  //   title: "Patient Education System:",
  //   paragraph: "Provides patients with resources and information to understand and manage their health.",
  // },
];

const financialFaqs = [
  {
    title: "Accounts Receivable and Payable:",
    paragraph: "Manages billing, payments, and financial transactions.",
  },
  {
    title: "Cost Accounting:",
    paragraph: "Tracks and analyzes the costs of healthcare services.",
  },
  {
    title: "General Ledger:",
    paragraph: "Serves as the core of the hospital's financial record-keeping.",
  },
  {
    title: "Materials Management:",
    paragraph: "Oversees the procurement, storage, and distribution of medical and non-medical materials.",
  },
  // {
  //   title: "Budgeting and Forecasting:",
  //   paragraph: "Aids in financial planning and forecasting for hospital operations.",
  // },
];

const supplyChainFaqs = [
  {
    title: "Purchasing and Requisitions:",
    paragraph: "Streamlines the procurement process for hospital supplies and equipment.",
  },
  {
    title: "Supplier Management:",
    paragraph: "Manages relationships and contracts with suppliers.",
  },
  {
    title: "Inventory Control and Distribution:",
    paragraph: "Ensures optimal inventory levels and efficient distribution of supplies.",
  },
  {
    title: "Asset Management:",
    paragraph: "Tracks and manages hospital assets for maximum efficiency.",
  },
  // {
  //   title: "Central Sterile Services Department (CSSD):",
  //   paragraph: "Manages the sterilization and distribution of surgical instruments and equipment.",
  // },
];

const hrFaqs = [
  {
    title: "Staff Scheduling:",
    paragraph: "Efficiently schedules staff shifts and assignments.",
  },
  {
    title: "Time and Attendance:",
    paragraph: "Monitors staff attendance and time worked for payroll purposes.",
  },
  {
    title: "Performance Management:",
    paragraph: "Evaluates and manages employee performance, fostering professional growth.",
  },
  {
    title: "Recruitment and Staffing:",
    paragraph: "Streamlines the hiring process to ensure the hospital is adequately staffed.",
  },
  // {
  //   title: "Learning Management System:",
  //   paragraph: "Provides educational resources and training for hospital staff.",
  // },
];

const qualityFaqs = [
  {
    title: "Infection Control:",
    paragraph: "Implements protocols to prevent and control infections within the hospital.",
  },
  {
    title: "Incident Reporting:",
    paragraph: "Facilitates the reporting and analysis of incidents to improve safety and quality.",
  },
  {
    title: "Risk Management:",
    paragraph: "Identifies and mitigates risks within hospital operations.",
  },
  // {
  //   title: "Audit Management:",
  //   paragraph: "Conducts internal audits to ensure compliance with healthcare standards and regulations.",
  // },
  {
    title: "Regulatory Reporting:",
    paragraph: "Manages and automates the reporting of data to regulatory bodies.",
  },
];

const supportFaqs = [
  {
    title: "Nutrition and Food Services:",
    paragraph: "Manages dietary services, ensuring patient nutritional needs are met.",
  },
  {
    title: "Housekeeping Scheduling and Management:",
    paragraph: "Coordinates housekeeping tasks to maintain a clean and safe hospital environment.",
  },
  {
    title: "Laundry Management:",
    paragraph: "Oversees the laundering of hospital linens and uniforms.",
  },
  {
    title: "Waste Management:",
    paragraph: "Manages the disposal of hospital waste in compliance with environmental and health regulations.",
  },
];

const specialityFaqs = [
  {
    title: "Ophthalmology Management:",
    paragraph: "Tailors features for the management of ophthalmology departments.",
  },
  {
    title: "Dermatology Management:",
    paragraph: "Integrates dermatology-specific workflows and patient management.",
  },
  {
    title: "Orthopedics Management:",
    paragraph: "Provides specialized tools for orthopedic care and treatment.",
  },
  {
    title: "Bariatric Surgery M anagement:",
    paragraph: "Manages the specific needs of bariatric surgery patients and workflows.",
  },
];

const integrationFaqs = [
  {
    title: "Health Information Exchange Connectivity:",
    paragraph: "Facilitates the secure exchange of health information with other systems.",
  },
  {
    title: "Interoperability Solutions:",
    paragraph: "Ensures Super Dr can seamlessly communicate with other healthcare software.",
  },
  {
    title: "API Management:",
    paragraph: "Manages and secures application programming interfaces (APIs) for integration with external services.",
  },
  {
    title: "Audit Management:",
    paragraph: "Conducts internal audits to ensure compliance with healthcare standards and regulations.",
  },
];

const patientSafetyFaqs = [
  {
    title: "Medication Administration:",
    paragraph: "Automates medication ordering and administration, reducing errors.",
  },
  {
    title: "Clinical Decision Support System:",
    paragraph: "Provides evidence-based guidelines to support clinical decisions.",
  },
  {
    title: "Allergy Alerts:",
    paragraph: "Alerts healthcare providers to patient allergies to prevent adverse reactions.",
  },
  {
    title: "Order Entry and Management:",
    paragraph: "Streamlines the ordering of tests, treatments, and other services.",
  },
];

const dataReportingFaqs = [
  {
    title: "Business Intelligence Reporting:",
    paragraph: "Offers advanced reporting tools for analyzing hospital data.",
  },
  {
    title: "Custom Report Builder:",
    paragraph: "Allows for the creation of customized reports to meet specific informational needs.",
  },
  {
    title: "Data Warehouse:",
    paragraph: "Consolidates data from various sources for analysis and reporting.",
  },
  {
    title: "Health Informatics:",
    paragraph: "Utilizes health information to improve healthcare delivery and outcomes.",
  },
];

const technicalFaqs = [
  {
    title: "IT Service Management:",
    paragraph: "Manages IT services and support for the hospital's technology infrastructure.",
  },
  {
    title: "System Administration:",
    paragraph: "Provides tools for the configuration and management of the Super Dr system.",
  },
  {
    title: "Data Backup and Recovery:",
    paragraph: "Ensures hospital data is securely backed up and can be recovered in case of loss.",
  },
  {
    title: "Cybersecurity Solutions:",
    paragraph: "Implements security measures to protect hospital data from cyber threats.",
  },
];

const governanceFaqs = [
  {
    title: "Strategic Planning:",
    paragraph: "Supports the development and implementation of hospital strategic plans.",
  },
  {
    title: "Governance and Policy Management:",
    paragraph: "Manages hospital governance structures and policy compliance.",
  },
  {
    title: "Executive Dashboard:",
    paragraph: "Provides executives with a comprehensive overview of hospital performance and metrics.",
  },
  {
    title: "Energy Management:",
    paragraph: "Supports the planning and development of hospital facilities.",
  },
  {
    title: "Sustainability Management:",
    paragraph: "Promotes sustainable practices within hospital operations.",
  },
  {
    title: "Facility Planning and Development:",
    paragraph: "Supports the planning and development of hospital facilities.",
  },
];

// const environmentalFaqs = [
// ];
