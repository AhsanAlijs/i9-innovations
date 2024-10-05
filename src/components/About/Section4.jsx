import React from "react";
import SectionWrapper from "../SectionWrapper";
import Container from "../Container";
import CardImg1 from "../../assets/about/section4/img1.jpg";
import CardImg2 from "../../assets/about/section5/cardimg2.png";
import { RiArrowRightDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Section4 = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="mt-14 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            WHO<span className="text-[#A3DC2F]"> WE </span>ARE
          </h2>
          <p className="mb-7">
            Founded in December 2015 by a team of healthcare experts, administrators, doctors, and clinical researchers, i9 Innovations & Educations was born out of a collective vision to revolutionize communication systems within the healthcare industry. Recognizing the challenges faced by hospitals, we set out to create an error-free, patient-centric platform that not only facilitates transparent operations but also accelerates the growth of healthcare institutions.
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
        <div className="relative">
          <div className="flex justify-center items-center">
            <img alt="" className="w-[500px] xl:w-[400px] rounded-xl" src={CardImg1} />
          </div>
          {/* <img
            alt=""
            className="cursor-pointer shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all w-[350x] lg:w-[300px] absolute -bottom-20 md:-bottom-5 right-[2rem] lg:bottom-[5rem] xl:bottom-0 xl:left-10"
            src={CardImg2}
          /> */}
        </div>
      </div>
    </Container>
  );
};

export default Section4;
