import React from "react";
import CardImg2 from "../../assets/online-pharmacy/section-3-img.png";
import { RiArrowRightDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <div className="_abdm_section_1 py-[5rem] my-[5rem] lg:my-[10rem] ">
      <div className="px-5 flex flex-col xl:px-14 container mx-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0">
          <div className="flex flex-col items-start">
            <img alt="" className="w-[300px] lg:w-[400px]" src={CardImg2} />
          </div>

          <div className="mt-14 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-7">
              The SuperDr
              <span className="text-[#A3DC2F]"> Advantage </span>
            </h2>
            <p className=" text-[17px] text-black lg:pr-14">
              Super Dr is not just another online pharmacy software; it's a
              comprehensive solution designed with the needs of Indian
              pharmacies and hospitals in mind. It brings together all the
              essential features required to manage a modern pharmacy
              efficiently and safely while also providing tools to enhance
              business growth and customer satisfaction.
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
      </div>
    </div>
  );
};

export default Section3;
