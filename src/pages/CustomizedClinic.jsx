import React from "react";
import Header from "../components/Header";
import InConclusion from "../components/InConclusion";
import Faqs from "../components/Faqs";
import EnquireNow from "../components/EnquireNow";
import ImageVideoCardColumn from "../components/Healthcare/ImageVideoCardColumn";
import Section2 from "../components/Customized Clinic/Section2";
import Section4 from "../components/Customized Clinic/Section4";
import CardImg1 from "../assets/customized-clinic/section-3-cardimg-1.png";
import CardImg2 from "../assets/customized-clinic/section-3-cardimg-2.png";
import CardImg3 from "../assets/customized-clinic/section-3-cardimg-3.png";
import CardImg4 from "../assets/customized-clinic/section-3-cardimg-4.png";
import Section5 from "../components/Customized Clinic/Section5";
import Sec6Img from "../assets/customized-clinic/section-6-img.png";
import Sec7Img from "../assets/customized-clinic/section-7-img.png";

import ImageCardColumn from "../components/Healthcare/ImageCardColumn";
import KeyFeatures from "../components/KeyFeatures";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

let faqs = [
  {
    title: "How does a customized app benefit my clinic or pharmacy?",
    paragraph: "A customized app streamlines operations, automates repetitive tasks, enhances patient engagement, and provides valuable analytics to improve business decisions. It's tailored to meet your specific needs, ensuring maximum efficiency and customer satisfaction.",
  },
  {
    title: "What features can I expect in my clinic or pharmacy app?",
    paragraph: "Key features include appointment scheduling, inventory management, electronic prescriptions, patient records management, billing and invoicing, advanced analytics, and seamless integrations with existing systems.",
  },
  {
    title: "Where can patients access the app?",
    paragraph: "Patients can access the app from any device with an internet connection, including smartphones, tablets, and computers, ensuring they can engage with your clinic or pharmacy anytime, anywhere.",
  },
  {
    title: "How secure is patient data within the app?",
    paragraph: "Patient data security is a top priority. The app employs robust encryption, secure user authentication, and complies with healthcare regulations like HIPAA to protect patient information.",
  },
  {
    title: "What makes i9 Innovations' app development stand out?",
    paragraph: "i9 Innovations specializes in healthcare solutions, offering deep industry knowledge, a user-centric design approach, and comprehensive support, ensuring your app is not just functional but also a step ahead in digital healthcare innovation.",
  },
  {
    title: "Can the app integrate with my existing healthcare systems?",
    paragraph: "Yes, our apps are designed with integration capabilities to connect seamlessly with your existing healthcare systems, such as HMIS and EHR, for a unified operational ecosystem.",
  },
  {
    title: "Where can I get support if I encounter issues with the app?",
    paragraph: "i9 Innovations provides ongoing support and maintenance services. You can reach out via our support channels, including email, phone, and a dedicated customer service portal, for any assistance.",
  },
  {
    title: "How long does it take to develop a customized clinic or pharmacy app?",
    paragraph: "The development timeline varies based on the app's complexity and your specific requirements. We work closely with you to establish a timeline that meets your needs while ensuring the highest quality standards.",
  },
  {
    title: "What is the process for developing a customized app with i9 Innovations?",
    paragraph: "Our process includes consultation to understand your needs, design and development tailored to your clinic or pharmacy, testing to ensure quality and reliability, and deployment, followed by ongoing support.",
  },
  {
    title: "Can the app help in promoting my clinic or pharmacy services?",
    paragraph: "Absolutely. The app includes features for marketing and patient engagement, such as promotional notifications, loyalty programs, and health tips, helping you promote your services and build stronger patient relationships.",
  },
];

let cards1 = [
  {
    img: CardImg1,
    title: "Appointment Scheduling:",
    paragraph: "Simplify booking processes with intuitive interfaces, reducing wait times and enhancing patient satisfaction.",
  },
  {
    img: CardImg2,
    title: "Electronic Prescriptions (e-Prescribing):",
    paragraph: "Streamline prescription processes, reducing errors and improving efficiency in medication dispensing.",
  },
  {
    img: CardImg3,
    title: "Patient Records Management:",
    paragraph: "Securely store and access patient records, providing comprehensive care history at your fingertips.",
  },
  {
    img: CardImg4,
    title: "Billing & Invoicing:  ",
    paragraph: "Automate billing processes for accuracy and efficiency, ensuring smooth financial operations.",
  },
];

const CustomizedClinic = () => {
  return (
    <>
      <Header
        title={"Customized Clinic & Pharmacy App Development"}
      />

      <ImageVideoCardColumn
        imgLeft={true}
        title={
          <h2 className="text-3xl md:text-4xl font-semibold mb-7">
            Transforming Healthcare Delivery with
            <span className="text-[#A3DC2F]"> Innovation App </span>
          </h2>
        }
        paragraph="In today's digital age, having a customized on-demand app for your pharmacy or clinic isn't just an added convenience—it's a necessity. i9 Innovations specializes in developing bespoke apps that revolutionize how pharmacies and clinics operate, enhancing accessibility, efficiency, and patient care."
        parentClasses={" _img_top  _img_bottom relative"}
        links={[
          {
            path: "",
            title: "Learn More",
          },
        ]}
      />

      <Section2 />
      
      <KeyFeatures
        title1={"Key Features of Our"}
        title2={" Pharmacy and Clinic Apps"}
        imgLeft={true}
        cards={cards1}
      />
      <Section4 />

      <KeyFeatures
        title={
          <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold mb-7 xl:w-8/12 mx-auto text-center">
            <span className="text-[#A3DC2F]">Robust Modules </span>
            for Every Need
          </h2>
        }
        imgRight={true}
        cards={cards1}
      />

      <Section5 />

      <ImageCardColumn
        imgleft={false}
        title1={"Pioneers in"}
        title2={" Digital Healthcare"}
        paragraph="Founded on the belief that technology has the power to transform healthcare, i9 Innovations has been developing cutting-edge digital solutions for clinics and pharmacies for almost a decade. Our journey began with a simple vision: to make healthcare management effortless and more efficient for providers and patients alike."
        img={Sec6Img}
        parentClasses={" _img_top"}
        links={true}
      />

      <ImageCardColumn
        imgleft={true}
        title1={"The Ultimate"}
        title2={" Healthcare Management Software"}
        paragraph="Building on our expertise in app development, we created Super Dr, a comprehensive healthcare management software that embodies our commitment to innovation and excellence. Super Dr offers a suite of tools designed to meet the diverse needs of modern healthcare facilities, from small clinics to large hospital networks."
        img={Sec6Img}
        parentClasses={" "}
      />

      <ImageCardColumn
        imgleft={false}
        title1={"Beyond Software,"}
        title2={" A Healthcare Revolution"}
        paragraph="Super Dr encapsulates our holistic approach to healthcare management. With its comprehensive suite of modules, Super Dr addresses the multifaceted needs of healthcare facilities, ensuring superior care delivery and operational efficiency."
        img={Sec7Img}
        parentClasses={" _img_bottom"}
      />

      <InConclusion
        title1={"i9"}
        title2={"Innovation"}
        paragraph="In the world of healthcare, technology should be silent-quietly transforming lifesaving businesses."
      />

      <Faqs
        faqs={faqs}
        coloredTitle={true}
        customeTitle={
          <h2 className="xl:w-9/12 mx-auto text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
            Basic FAQs for{" "}
            <span className="text-[#A3DC2F]">Clinic & Pharmacy </span> App
            Development
          </h2>
        }
      />

      <EnquireNow />

      <Footer />

      <SideBtn />
    </>
  );
};

export default CustomizedClinic;
