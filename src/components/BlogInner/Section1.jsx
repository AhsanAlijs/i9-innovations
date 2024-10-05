import React from "react";
import SectionWrapper from "../SectionWrapper";
import CardImg from "../../assets/bloginner/section1-cardimg.png";

let cards = [
  {
    title: "Key Features of Our Pharmacy Apps:",
    list: [
      "Online Medicine Purchase: Secure and straightforward online ordering of prescribed medications.",
      "Direct Indent Placement: Immediate, accurate medication delivery from local pharmacies.",
      `Flexible Assembly Line: Adaptable, quick, and scalable solutions tailored to each client's needs.`,
      "Unified Healthcare Software: Enhances team collaboration, reducing errors and ensuring consistency.",
      "Clinic reference Management: Simplifies operations, reducing workload and improving efficiency across referring clinic chains.",
    ],
  },
  {
    title: "Advantages of Our Online Pharmacy Apps:",
    list: [
      "Online Medicine Purchase: Secure and straightforward online ordering of prescribed medications.",
      "Direct Indent Placement: Immediate, accurate medication delivery from local pharmacies.",
      `Flexible Assembly Line: Adaptable, quick, and scalable solutions tailored to each client's needs.`,
      "Unified Healthcare Software: Enhances team collaboration, reducing errors and ensuring consistency.",
      "Clinic reference Management: Simplifies operations, reducing workload and improving efficiency across referring clinic chains.",
    ],
  },
];

const Section1 = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="">
          <img alt="" className="w-[400px] lg:w-auto" src={CardImg} />
        </div>
        <div className=" flex flex-col gap-5">
          {cards?.map((item, index) => {
            return (
              <div className="bg-white p-1.5 rounded-xl shadow-xl" key={index}>
                <div className="bg-[#0065C0E5] rounded-xl p-5 text-white">
                  <h2 className="text-lg font-bold mb-3">{item.title}</h2>
                  <ul className="mx-4 gap-1 flex flex-col">
                    {item?.list?.map((li, id) => {
                      return (
                        <li className="text-sm list-item list-disc" key={id}>
                          {li}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Section1;
