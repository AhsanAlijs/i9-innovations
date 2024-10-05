import React from "react";
import SectionWrapper from "../SectionWrapper";
import Container from "../Container";
import CardImg1 from "../../assets/about/section5/cardimg1.png";
import CardImg2 from "../../assets/about/section5/cardimg2.png";
import { Link } from "react-router-dom";
import { RiArrowRightDownLine } from "@remixicon/react";

const Section1 = () => {
  return (
    <SectionWrapper classNames={"_abdm_section_1 py-24"}>
      <Container>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-14">
          <div className="relative">
            <div className="flex flex-col lg:items-end">
              <img alt="" className="w-[500px] xl:w-[400px]" src={CardImg1} />
            </div>
            <img
              alt=""
              className="cursor-pointer shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all w-[350x] lg:w-[300px] absolute -bottom-20 md:-bottom-5 right-[0rem] lg:bottom-[5rem] xl:bottom-0 xl:left-10 2xl:left-52"
              src={CardImg2}
            />
          </div>
          <div className="mt-14 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Crucial Role of <span className="text-[#A3DC2F]">ABDM and ABHA Compliance </span> in Hospital Software
            </h2>
            <p className="mb-12">
              In the evolving landscape of healthcare in India, the Ayushman Bharat Digital Mission (ABDM) and Ayushman Bharat Health Account (ABHA) are becoming cornerstones of a more integrated and accessible healthcare system. These initiatives are not just transforming patient care but are also setting new standards for how hospital software should operate. As we delve into the significance of ABDM and ABHA, it's crucial to understand how their integration into hospital software can lead to a more efficient, secure, and patient-centric healthcare ecosystem.
            </p>

            <h3 className="mb-4 font-semibold">
              The Power of ABDM and ABHA in Indian Healthcare
            </h3>

            <p>
              At the heart of India's healthcare innovation, ABDM aims to develop a digital framework that supports universal health coverage in an inclusive, accessible, affordable, timely, and safe manner. A pivotal element of ABDM is the ABHA, which empowers individuals with a unique health ID, granting them access to their health records across multiple healthcare providers seamlessly.
            </p>


            <div className="flex flex-row items-center gap-5 mt-12">
              <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all text-sm">
                <span>Call Now</span>
                <RiArrowRightDownLine />
              </a>

              <Link to="/appointment/1" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all text-sm">
                <span>Free Demo</span>
                <RiArrowRightDownLine />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </SectionWrapper>
  );
};

export default Section1;
