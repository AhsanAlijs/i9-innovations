import { RiArrowRightDownLine } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const ImageCardColumn = ({
  imgleft,
  title,
  title1,
  title2,
  paragraph,
  links,
  img,
  parentClasses,
  subtitle,
  subparagraph,
  imgStyles
}) => {
  return (
    <div
      className={`relative py-[3rem] my-[5rem] lg:my-[8rem] ${parentClasses}`}
    >
      <div className="px-5 flex flex-col xl:px-14 container mx-auto">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-0 py-3">
          {imgleft && (
            <div className="flex flex-col items-start">
              <img alt="" className={`w-[300px] lg:w-[450px] ${imgStyles}`} src={img} />
            </div>
          )}

          <div className="mt-14 md:mt-0 order-2 lg:order-1">
            {!title && <h2 className="text-3xl md:text-4xl font-semibold mb-7">
              {title1}
              <span className="text-[#A3DC2F]"> {title2} </span>
            </h2>}

            {title && title}

            <p className=" text-[17px] text-black lg:pr-14">{paragraph}</p>
            {/* 
            {links?.length ? (
              <div className="flex flex-row items-center gap-5 mt-12">
                {links?.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="flex flex-row gap-4 px-7 sm:px-14 py-3 bg-[#0065C0] rounded-full text-white transition-colors hover:bg-[#1a74c6]"
                  >
                    <span>{item.title}</span>
                  </Link>
                ))} 
                
              </div>
            ) : (
              ""
            )}
            */}

            {subtitle && (
              <h3 className="text-lg font-semibold mb-3 mt-6">
                {subtitle}
              </h3>
            )}

            {subparagraph && (
              <p className=" text-[17px] text-black lg:pr-14">{subparagraph}</p>
            )}

            {links &&
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
            }
          </div>

          {!imgleft && (
            <div className="flex flex-col items-start lg:items-end order-1 lg:order-2">
              <img alt="" className="w-[300px] lg:w-[450px]" src={img} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCardColumn;
