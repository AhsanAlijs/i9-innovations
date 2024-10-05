import React from "react";

const PatientBenefitCard = ({item, index}) => {
  return (
    <div
      className="xl:gap-3 px-3 py-5 grid grid-cols-1 gap-2 sm:grid-cols-12 items-center bg-white shadow-xl hover:shadow-2xl transition-all rounded-xl"
      key={index}
    >
      <div className="col-span-4 ">
        <img alt="" className="rounded-xl overflow-hidden" src={item?.img} />
      </div>
      <div className="col-span-8 px-3 lg:px-2 xl:px-4">
        <h2 className="text-lg font-bold mt-1 mb-3">{item?.title}</h2>
        <p className="text-">{item?.paragraph}</p>
      </div>
    </div>
  );
};

export default PatientBenefitCard;
