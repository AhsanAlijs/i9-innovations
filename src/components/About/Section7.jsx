import React from "react";

const Section7 = () => {
  return (
    <div className="md:w-full lg:w-9/12 mx-auto bg-white shadow-2xl rounded-xl px-10 md:px-16 py-8 translate-y-10">
      <div className="flex flex-col text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#8ABC3E]">
          Enquire Now
        </h2>
        <h3 className="text-lg md:text-xl font-bold">
          And we will connect with you within 24 hours!
        </h3>
      </div>
      <div className="flex flex-col justify-center">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[0, 0, 0, 0, 0].map((item, index) => {
            return (
              <div className="" key={index}>
                <input placeholder="Input placeholder" className="px-5 py-3 rounded-full w-full border focus:outline-[#D8D8D8] border-[#D8D8D8]" />
              </div>
            );
          })}
        </form>
        <button className="mt-8 self-center px-10 py-2.5 bg-blue-700 rounded-full text-white hover:shadow-lg hover:bg-blue-800 transition-all">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Section7;
