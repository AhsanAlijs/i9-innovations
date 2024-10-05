import React from "react";
import Header from "../components/Header";
import ImageCardColumn from "../components/Healthcare/ImageCardColumn";
import Sec1Img from "../assets/medical-healthcare/section-1-img.png";
import ImediateAccess from "../components/ImediateAccess";
import Sec2Img from "../assets/customized-clinic/section-2-img.png";
import KeyFeatures from "../components/KeyFeatures";
import CardImg1 from "../assets/customized-clinic/section-3-cardimg-1.png";
import CardImg2 from "../assets/customized-clinic/section-3-cardimg-2.png";
import CardImg3 from "../assets/customized-clinic/section-3-cardimg-3.png";
import CardImg4 from "../assets/customized-clinic/section-3-cardimg-4.png";
import EnquireNow from "../components/EnquireNow";
import Container from "../components/Container";
import SectionWrapper from "../components/SectionWrapper";
import IncreasingBussinessCard from "../components/IncreasingBussinessCard";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

let cards = [
  {
    title: "Performance Optimization",
    paragraph:
      "We tailor content strategies to meet healthcare needs, fostering patient loyalty. Our approach communicates empathy, expertise, and reliability—qualities patients value in providers. With SEO optimization, we boost your online visibility, making it easier for patients to find and choose your services.",
  },
  {
    title: "Analytics Integration",
    paragraph:
      "We tailor content strategies to meet healthcare needs, fostering patient loyalty. Our approach communicates empathy, expertise, and reliability—qualities patients value in providers. With SEO optimization, we boost your online visibility, making it easier for patients to find and choose your services.",
  },
];

let cards1 = [
  {
    img: CardImg1,
    title: "Appointment Booking & CRM Integration:",
    paragraph: "Simplify appointment scheduling with integrated booking systems and CRM solutions for efficient patient management and personalized care.",
  },
  {
    img: CardImg2,
    title: "Interactive Forms & Responsive Design:",
    paragraph: "Our websites feature responsive, mobile-optimized designs and interactive forms, ensuring accessibility and ease of use across all devices.",
  },
  {
    img: CardImg3,
    title: "Landing Pages & URL Strategy:",
    paragraph: "We create compelling landing pages with strategic URL structuring to enhance user experience and SEO, guiding visitors towards taking desired actions.",
  },
  {
    img: CardImg4,
    title: "Title Tags, Meta Descriptions & Backlink Strategy:",
    paragraph: "Through carefully crafted metadata and a strategic backlink approach, we enhance your site's SEO, improving visibility and authority.",
  },
];

let cards2 = [
  {
    title: "Super Dr Integration",
    paragraph:
      "As we begin the transition into discussing the Super Dr system, it's clear that it stands on the shoulders of these technological giants. Super Dr is a reflection of the modern Hospital Management information Systems, imbued with the latest tech features and designed to meet the digital demands of contemporary healthcare operations.",
  },
  {
    title: "HMIS & Queue Management Compatibility",
    paragraph:
      "After exploring the historical context and evolution of HMIS, we arrive at the contemporary pinnacle of such systems, the Super Dr system. This modern HMIS represents the zenith of healthcare technology's aspirations to deliver an unparalleled ",
  },
  {
    title: "Security and Compliance",
    paragraph:
      "Super Dr stands out with its ability to seamlessly integrate into existing healthcare ecosystems. It adapts to the unique workflows of individual hospitals and clinics, ensuring that the transition to digital operations enhances, rather than disrupts, established processes.",
  },
  {
    title: "Customizable Solutions",
    paragraph:
      "Leveraging AI, Super Dr offers predictive analytics that aid in critical areas such as patient care, resource allocation, and financial management. By analyzing trends and patterns, it provides actionable insights that lead to informed decision-making.",
  },
  {
    title: "Continuous Support and Evolution",
    paragraph:
      "In an era where data breaches are a significant concern, Super Dr assures compliance with international standards like HIPAA for data protection and privacy. It employs robust cybersecurity measures to safeguard sensitive patient data against threats.",
  },
  {
    title: "Enhanced Website Features and Servicess",
    paragraph:
      "The system is crafted with a deep understanding of the end-users—doctors, nurses, administrative staff, and patients. Its intuitive design ensures that users of all tech proficiencies can navigate its features with minimal training, reducing resistance to digital transition.",
  },
];

const HealthcareMedical = () => {
  return (
    <>
      <Header title={"Expert Healthcare Medical Website Development Service"} />
      <ImageCardColumn
        imgleft={false}
        title={
          <h2 className="text-3xl md:text-4xl font-semibold mb-7">
            Holistic
            <span className="text-[#A3DC2F]"> Healthcare & Medical </span>
            Website
          </h2>
        }
        paragraph={
          "At i9, we understand the importance of a lasting logo. Our experienced designers listen to your needs, crafting logos that convey your brand's name, sincerity, and dedication. With a futuristic approach, we ensure your logo stands out, attracting attention and respect for your business"
        }
        img={Sec1Img}
        parentClasses={" _img_top lg:my-[0rem]"}
        links={true}
      />

      <ImageCardColumn
        imgleft={true}
        title={
          <h2 className="text-3xl md:text-4xl font-semibold mb-7">
            Customized
            <span className="text-[#A3DC2F]">
              {" "}
              Web Design & Development for Healthcare UX/UI{" "}
            </span>
            Building Trust Through Design
          </h2>
        }
        paragraph={
          "At i9, we understand the importance of a lasting logo. Our experienced designers listen to your needs, crafting logos that convey your brand's name, sincerity, and dedication. With a futuristic approach, we ensure your logo stands out, attracting attention and respect for your business"
        }
        img={Sec1Img}
        parentClasses={" _img_bottom lg:my-[0rem]"}
      />

      <ImediateAccess
        title={
          <h2 className="text-3xl md:text-4xl font-semibold mb-7">
            <span className="text-[#A3DC2F]">Content Strategy & SEO: </span>
            Building Loyalty with Strategic Content
          </h2>
        }
        paragraph={`
        We tailor content strategies to meet healthcare needs, fostering patient loyalty. Our approach communicates empathy, expertise, and reliability—qualities patients value in providers. With SEO optimization, we boost your online visibility, making it easier for patients to find and choose your services.
        `}
        img={Sec2Img}
        cards={cards}
      />

      <KeyFeatures
        title1={"ENHANCED"}
        title2={" FUNCTIONALITY & SECURITY"}
        imgLeft={true}
        cards={cards1}
      />

      <Container>
        <SectionWrapper>
          <div className="text-center xl:w-5/6 mx-auto">
            <h2 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold mb-7">
              Super Dr:
              <span className="text-[#A3DC2F]"> The Ultimate Integration </span>
              for
              <span className="text-[#A3DC2F]"> Modern Healthcare </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {cards2.map((item, index) => {
              return <IncreasingBussinessCard index={index} item={item} cardClassNames={' gap-5 border'} />;
            })}
          </div>
        </SectionWrapper>
      </Container>

      <EnquireNow />

      <Footer />
      <SideBtn />
    </>
  );
};

export default HealthcareMedical;
