import React from "react";
import SectionWrapper from "../SectionWrapper";
import Container from "../Container";
import CardImg1 from "../../assets/about/section5/cardimg1.png";
import CardImg2 from "../../assets/about/section5/cardimg2.png";
import CardImg3 from "../../assets/about/section5/cardimg3.jpg";

const Section5 = () => {
  return (
    <Container>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-14">
        <div className="relative">
          <div className="flex flex-col lg:items-end">
            <img alt="" className="w-[500px] xl:w-[400px] rounded-lg" src={CardImg3} />
          </div>
          <img
            alt=""
            className="cursor-pointer shadow-lg hover:shadow-xl rounded-xl overflow-hidden transition-all w-[350x] lg:w-[300px] absolute -bottom-20 md:-bottom-5 right-[2rem] lg:bottom-[5rem] xl:bottom-0 xl:left-10"
            src={CardImg2}
          />
        </div>
        <div className="mt-14 md:mt-0">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 uppercase">
            Success In Becoming <span className="text-[#A3DC2F]">Best Hospital</span> Software In India
          </h2>
          <p className="mb-7">
            The i9 Innovations & Educations design team excels in crafting
            exceptional Ul and UX experiences tailored for users such as
            doctors, nurses, technicians, and even interns. With just an hour
            of training, your team will find our systems more user-friendly
            and appealing than any other in the world.
          </p>
          <p className="mb-14">
            To become best hospital software company in india, our primary focus is on healthcare, and our team comprises physicians, surgeons, qualified nurses, radiologists, pathologists, and senior technicians. Additionally, we provide services including software consultancy, professionally managed services, iOS and Android mobile app development, earning a well- deserved reputation for excellence in supporting and serving our customers.{" "}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Section5;
