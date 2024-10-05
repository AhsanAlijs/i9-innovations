import { RiArrowRightDownLine } from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const SuperDrAppComponent = ({ cards }) => {
  return (
    <div className="flex flex-col gap-6">
      {cards?.map((item, index) => {
        return (
          <div
            className="grid grid-cols-1 md:grid-cols-2 border items-center p-6 gap-5 rounded-lg shadow-md transition-all cursor-default hover:shadow-lg"
            key={index}
          >
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl font-bold mb-5">
                {item?.title}
              </h3>
              {item?.paragraph ?? <p>{item?.paragraph}</p>}
              {item?.list ? (
                <ul className="flex flex-col w-full">
                  {item?.list?.map((li, id) => <li className="w-full" key={id}>{li}</li>)}
                </ul>
              ) : (
                ""
              )}
              {
                item.cta && (
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
                )
              }
            </div>
            <div className="flex flex-col items-center justify-center">
              <img alt="" className="w-9/12 aspect-video object-contain min-h-44" src={item.img} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SuperDrAppComponent;
