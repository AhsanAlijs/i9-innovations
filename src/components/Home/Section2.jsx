import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";
import Img1 from '../../assets/home/section2/sec-solutions1.jpeg';
import Img2 from '../../assets/home/section2/sec-solutions2.jpeg';
import Img3 from '../../assets/home/section2/sec-solutions3.jpeg';
import Img4 from '../../assets/home/section2/sec-solutions4.jpeg';
import { RiCloseLine } from "@remixicon/react";

export default function Section2() {
  return (
    <section className="mt-40 max-w-screen-xl mx-auto px-4 py-44 max-sm:pt-60">
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
        Our <span className="text-[#8ABC3E]">Solutions</span>
      </h2>

      <p className="text-2xl max-lg:text-xl max-sm:text-lg font-medium text-center uppercase mt-4 max-sm:mt-2">
        Innovating for healthcare excellence
      </p>

      <div className="grid grid-cols-2 gap-8 mt-14 max-md:grid-cols-1">
        {solutions.map((item, i) => (<Card key={`${item.title}${i}`} item={item} />))}
      </div>
    </section>
  )
}

const solutions = [
  {
    title: 'Hospital Management Systems',
    text: "Revolutionize your healthcare operations with Super Dr, our cutting-edge Hospital Management information System HMIS designed to seamlessly integrate into your hospital's ecosystem. Super Dr is more than just a software solution; it's a comprehensive platform, From HMIS ,LIMS PACS , to advanced Pharmacy Apps, EMR, and EHR systems, our system ensures every aspect of hospital operations is covered. With the addition of dedicated mobile applications for both doctors and patients, Super Dr is built with a keen focus on user experience, featuring an intuitive interface and AI-enabled workflows that significantly reduce manual input. This not only streamlines operations but also allows healthcare professionals to dedicate more time to patient care. Adhering to the highest standards of security and compliance, including HIPAA and HL7, Super Dr is the future-proof solution for hospitals aiming to elevate their service quality and operational efficiency.",
    paragraph: (
      <>
        <p>
          Revolutionize your healthcare operations with Super Dr, our cutting-edge Hospital Management information System HMIS designed to seamlessly integrate into your hospital's ecosystem. Super Dr is more than just a software solution; it's a comprehensive platform, From <span className="text-[#8ABC3E]">HMIS ,LIMS, PACS,</span> to advanced Pharmacy Apps, EMR, and EHR systems, our system ensures every aspect of hospital operations is covered. With the addition of dedicated mobile applications for both doctors and patients,
        </p>
        <p>
          Super Dr is built with a keen focus on user experience, featuring an intuitive interface and AI-enabled workflows that significantly reduce manual input. This not only streamlines operations but also allows healthcare professionals to dedicate more time to patient care. Adhering to the highest standards of security and compliance, including <span className="text-red-500">HIPAA and HL7</span>, Super Dr is the future-proof solution for hospitals aiming to elevate their service quality and operational efficiency.
        </p>
      </>
    ),
    img: Img1
  },
  {
    title: 'Laboratory Information Management Systems (LIMS)',
    text: "Elevate your laboratory operations with our Laboratory Information Management System (LIMS) , a tool designed for peak efficiency and seamless integration. This affordable LIMS software eliminates manual data entry through an advanced Lab Machine Interface, directly connecting lab equipment to the system for fast and accurate results. Utilize Barcodes and QR Codes for efficient sample tracking and easy report access, enhancing the experience for healthcare providers and patients alike.Despite its advanced features, the LIMS software cost remains competitive, offering great value. Explore the system's capabilities with a free LIMS software demo, showcasing its user-friendly interface and extensive functionalities. As an Innovative LIMS software provider, we offer scalable solutions that cater to various laboratory sizes and types, from simple setups to complex systems. Super Dr LIMS software for laboratory use is designed to be intuitive, ensuring ease of use without any training. The LIMS software price is structured to balance affordability with advanced features, making it an ideal choice for labs seeking high-quality, affordable LIMS software. Our platform stands out amongst Top LIMS software providers for its comprehensive solutions, designed to enhance operations, improve accuracy, and ensure compliance. Whether you need simple LIMS software or a more elaborate system, our offerings are tailored to meet a wide range of laboratory needs and budgets, reaffirming our position as a versatile software LIMS provider.",
    paragraph: (
      <>
        <p>
          Elevate your laboratory operations with our <span className="text-[#8ABC3E]">Laboratory Information Management System (LIMS)</span> , a tool designed for peak efficiency and seamless integration. This affordable LIMS software eliminates manual data entry through an advanced Lab Machine Interface, directly connecting lab equipment to the system for fast and accurate results. Utilize Barcodes and QR Codes for efficient sample tracking and easy report access, enhancing the experience for healthcare providers and patients alike.
        </p>

        <p>
          Despite its advanced features, the LIMS software cost remains competitive, offering great value. Explore the system's capabilities with a free LIMS software demo, showcasing its user-friendly interface and extensive functionalities.
          As an Innovative LIMS software provider, we offer scalable solutions that cater to various laboratory sizes and types, from simple setups to complex systems. Super Dr LIMS software for laboratory use is designed to be intuitive, ensuring ease of use without any training.
        </p>

        <p>
          The LIMS software price is structured to balance affordability with advanced features, making it an ideal choice for labs seeking high-quality, affordable LIMS software.
        </p>
        <p>
          Our platform stands out amongst Top LIMS software providers for its comprehensive solutions, designed to enhance operations, improve accuracy, and ensure compliance. Whether you need simple LIMS software or a more elaborate system, our offerings are tailored to meet a wide range of laboratory needs and budgets, reaffirming our position as a versatile software LIMS provider.
        </p>
      </>
    ),
    img: Img2
  },
  {
    title: 'Pharmacy Management Solutions',
    text: "Elevate your pharmacy operations withSuper Dr Pharmacy Management Solutions, designed to revolutionize the way pharmacies function. Our comprehensive system offers unparalleled inventory control, ensuring that your stock levels are optimized, reducing Expiries, and improving efficiency. With our advanced Business enhancing capabilities, your pharmacy can seamlessly connect with healthcare providers, suppliers, and e-commerce platforms, Delivery apps, expanding your reach and streamlining operations. Our solutions go beyond mere inventory management; they are crafted to enhance customer engagement. Through personalized communication tools, loyalty programs, and mobile app integration, we empower pharmacies to build stronger relationships with their customers, fostering loyalty and improving service quality. Incorporating these Pharmacy Management Solutions into your operations means not just an upgrade in how you manage inventory or process prescriptions, but a transformation in your overall customer service and business growth strategy. Our system is designed to be intuitive, reducing the learning curve and enabling your staff to focus more on customer care and less on administrative tasks.",
    paragraph: (
      <>
        <p>
          Elevate your pharmacy operations with <span className="text-[#8ABC3E]">Super Dr Pharmacy Management Solutions</span>, designed to revolutionize the way pharmacies function. Our comprehensive system offers unparalleled inventory control, ensuring that your stock levels are optimized, reducing Expiries, and improving efficiency.
        </p>
        <p>
          With our advanced Business enhancing capabilities, your pharmacy can seamlessly connect with healthcare providers, suppliers, and e-commerce platforms, Delivery apps, expanding your reach and streamlining operations. Our solutions go beyond mere inventory management; they are crafted to enhance customer engagement. Through personalized communication tools, loyalty programs, and mobile app integration, we empower pharmacies to build stronger relationships with their customers, fostering loyalty and improving service quality. Incorporating these Pharmacy Management Solutions into your operations means not just an upgrade in how you manage inventory or process prescriptions, but a transformation in your overall customer service and business growth strategy. Our system is designed to be intuitive, reducing the learning curve and enabling your staff to focus more on customer care and less on administrative tasks.
        </p>
      </>
    ),
    img: Img3
  },
  {
    title: 'Custom Hospital Software',
    text: "Elevate your healthcare facility with our Custom Hospital Software, meticulously crafted to meet the specific requirements of your institution. Whether you operate a specialized clinic or a multi-specialty hospital, our tailor-made solutions ensure that every aspect of your operations is enhanced.",
    paragraph: (
      <>
        <p>
          Elevate your healthcare facility with our <span className="text-[#8ABC3E]">Custom Hospital Software</span>, meticulously crafted to meet the specific requirements of your institution. Whether you operate a specialized clinic or a multi-specialty hospital, our tailor-made solutions ensure that every aspect of your operations is enhanced for optimal efficiency and patient care.
        </p>
        <h4>
          Hospital Software Development
        </h4>
        <p>
          Our approach to Hospital Software Development is centered around understanding the unique challenges and objectives of your healthcare facility. We collaborate closely with you to develop software that not only addresses your current needs but is also scalable for future growth. Hospital Software Developer
          Our team of Hospital Software Developers are experts in healthcare technology, bringing a wealth of experience and innovation to each project. They are dedicated to creating solutions that improve workflow, patient care, and overall operational efficiency.
        </p>
        <h4>Hospital Management ERP Software</h4>
        <p>
          Our Hospital Management ERP Software integrates various functions across your hospital, from patient care to back-office operations, ensuring seamless coordination and data flow across departments.
        </p>
        <h4>Hospital Inventory Management Software</h4>
        <p>
          We offer a Hospital Inventory Management Software Free Demo to give you a glimpse of how our solutions can transform your inventory management, making it more efficient and cost-effective.
        </p>
        <h4>Hospital Facility Management Software</h4>
        <p>
          Our Hospital Facility Management Software is designed to streamline the maintenance and management of your hospital's facilities, ensuring a safe and welcoming environment for patients and staff.
        </p>
        <h4>Hospital Appointment Scheduling Software</h4>
        <p>
          With our Hospital Appointment Scheduling Software, patients can easily book appointments, and your staff can manage schedules more effectively, reducing wait times and improving patient satisfaction.
        </p>
        <h4>HMS Software for Hospitals</h4>
        <p>
          Our HMS Software for Small Hospitals is a comprehensive solution that covers all aspects of hospital management, from patient registration to discharge, ensuring a smooth and efficient patient journey.
        </p>
        <h4>Other Computer Software Used in Hospitals</h4>
        <p>
          With Super Dr you need not worry about any other Computer Software Used in Hospitals, We are committed to providing solutions that are robust, secure, and compliant with healthcare regulations, ensuring that your hospital remains at the forefront of technological advancements.
        </p>
        <h4>CRM Software for Hospital Industry</h4>
        <p>
          Our CRM Software for Hospital Industry is designed to enhance patient engagement and loyalty, by providing tools for personalized communication, feedback collection, and patient support. This CRM also helps you to connect you your facebook and other Social media pages and helps in lead conversion process.
        </p>
        <h4>Free Hospital Billing Software</h4>
        <p>
          We understand the need for cost-effective solutions, which is why we offer Free Hospital Billing Software for a period you desire, allowing small facilities to manage their billing efficiently without significant investment.
        </p>
        <h4>Hospital Management Software in ASP.NET</h4>
        <p>
          We develop software on demand Our Hospital Management Software in ASP.NET leverages the power of this robust framework to deliver secure, scalable, and high-performance software solutions for your hospital.
        </p>
        <h4>Hospital Management Software in PHP</h4>
        <p>
          The Hospital Management Software in PHP can be designed with flexibility and scalability in mind, ensuring that it can adapt to the evolving needs of your healthcare facility. PHP's server-side scripting makes it an excellent choice for developing dynamic and interactive web-based hospital management systems. This software solution streamlines various hospital operations, from patient registration to billing, with an easy-to-use interface and robust backend.
        </p>
        <h4>Hospital Management Software in Java</h4>
        <p>
          Similarly, the Hospital Management Software in Java leverages the power and versatility of Java to provide a secure, platform-independent system. Java's write-once-run-anywhere (WORA) capability ensures that our software can be deployed across various platforms without compatibility issues. This makes it an ideal solution for hospitals looking for a reliable and efficient management system that can handle complex operations and large volumes of data.
        </p>
      </>
    ),
    img: Img4
  },
]

function Card({ item }) {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const openModal = (text) => {
    document.body.classList.add('overflow-hidden')
    setModalText(text);
    setShowModal(true)
  }

  const closeModal = () => {
    document.body.classList.remove('overflow-hidden')
    setShowModal(false)
  }

  return (
    <article className="rounded-lg bg-slate-50 p-6 shadow-lg border flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-semibold uppercase max-lg:text-xl">
          {item.title}
        </h3>
        <p className="mt-12 line-clamp-4">
          {item.text}
        </p>
        <button onClick={() => openModal(item.paragraph)} className="block mt-6 ml-auto w-max rounded-full px-10 py-2 bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-lg text-white font-medium">
          Read more
        </button>
      </div>

      <div className="mt-8">
        <img
          src={item.img}
          alt=""
          className="h-36 object-cover rounded-lg w-full"
        />
      </div>
      {showModal && <ModalPopup open={showModal} text={modalText} closeModal={closeModal} />}
    </article>
  )
}

function ModalPopup({ text, closeModal, open }) {
  return (
    <Dialog.Root open={open} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] overflow-y-auto [scrollbar-width:thin] w-[90vw] max-w-prose -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
          <Dialog.Description className="text-zinc-800 mt-[10px] mb-5 text-[15px] leading-normal" asChild>
            <div className="flex gap-4 flex-col">
              {text}
            </div>
          </Dialog.Description>

          <Dialog.Close asChild>
            <button className="text-[#0065C0] absolute top-2 right-2 inline-flex size-6 appearance-none items-center justify-center rounded-full" aria-label="Close">
              <RiCloseLine size={24} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
