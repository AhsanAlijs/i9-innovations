import { RiArrowRightDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import CardImg2 from "../../assets/software-section-1-cardimg.png";

const Section1 = () => {
  return (
    <div className="_abdm_section_1 py-[3rem] my-[5rem] lg:my-[10rem] ">
      <div className="px-5 flex flex-col xl:px-14 container mx-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-10 lg:gap-0">
          <div className="flex flex-col">
            <img alt="" className="w-[300px] lg:w-[400px]" src={CardImg2} />
          </div>
          <div className="mt-14 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-semibold mb-7">
              Charting the Evolution,
              <span className="text-[#A3DC2F]"> Electronic Medical Records </span>
              with Super Dr
            </h2>
            <p className=" text-[17px] text-black">
              The journey of Electronic Medical Records (EMR) is a fascinating
              tale of technological evolution, marked by milestones that have
              revolutionized healthcare documentation. From the initial
              scribbles on papyrus to the click-and-save ease of digital
              platforms like Super Dr, EMR has come a long way. Let's embark on
              this narrative, weaving through history, humor, and the high-tech
              horizons of healthcare.
            </p>
            <div className="flex flex-row items-center gap-5 mt-12">
              <a href="tel:+917304073040" className="flex flex-row gap-4 px-4 sm:px-14 py-3 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-colors">
                <span>Call Now</span>
                <RiArrowRightDownLine />
              </a>

              <Link to="/appointment/1" className="flex flex-row gap-4 px-4 sm:px-14 py-3 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all">
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

export default Section1;
