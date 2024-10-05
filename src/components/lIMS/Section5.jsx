import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import Img4 from "../../assets/lims/img4.png";
import IncreasingBussinessCard from "../IncreasingBussinessCard";
import { RiArrowRightDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <Container>
      <SectionWrapper>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-center">
            <img className="w-[500px] max-h-[500px] object-contain" alt="" src={Img4} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards.map((item, index) => {
              return (
                <IncreasingBussinessCard
                  key={index}
                  item={item}
                  index={index}
                  cardClassNames={"gap-3 border"}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-5 mt-12">
          <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all text-sm">
            <span>Call Now</span>
            <RiArrowRightDownLine />
          </a>

          <Link to="/appointment/1" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all text-sm">
            <span>Free Demo</span>
            <RiArrowRightDownLine />
          </Link>
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section5;

let cards = [
  {
    title: "The Future Is Live: Dynamic Monitoring of Laboratory Reports",
    paragraph: "With Super Dr's LIMS, reports are dynamic entities, offering live monitoring of critical metrics, allowing healthcare professionals to make informed decisions in real-time.",
  },
  {
    title: "Financial Mastery with Automated Billing",
    paragraph: "Our LIMS includes an automated billing system that streamlines financial operations, reduces errors, and optimizes revenue, ensuring your laboratory's financial health.",
  },
  {
    title: "Safeguarding Data with Role-Based Access Control",
    paragraph: "Data security is paramount in laboratory operations. Our LIMS ensures that sensitive information is protected through customizable access controls, maintaining confidentiality and integrity.",
  },
];