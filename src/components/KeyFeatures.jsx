import React from "react";
import Container from "./Container";
import SectionWrapper from "./SectionWrapper";
import CardBigImg1 from "../assets/customized-clinic/section-3-img.png";

const KeyFeatures = ({ title1, title2, imgLeft, imgRight, cards, title }) => {
  return (
    <Container>
      <SectionWrapper>
        {title ? (
          title
        ) : (
          <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold mb-7 xl:w-8/12 mx-auto text-center">
            {title1}
            <span className="text-[#A3DC2F]">{title2}</span>
          </h2>
        )}

        <div className="grid grid-cols-1 gap-14 lg:gap-0 lg:grid-cols-2 mt-14">
          {imgLeft && (
            <div className="flex flex-col items-center justify-center">
              <img alt="" className="w-[450px]" src={CardBigImg1} />
            </div>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 gap-x-5">
            {cards?.map((item, index) => {
              return (
                <div
                  className="rounded-xl shadow-xl hover:shadow-2xl p-1.5 bg-white"
                  key={index}
                >
                  <div
                    className={`bg-[#0065C099] h-full p-10 md:p-0 md:px-5 md:py-5 lg:py-4 hover:bg-[#0065C0E5] transition-all rounded-xl flex-1`}
                  >
                    <div className="relative min-h-[5rem]">
                      <div className="absolute w-full -top-[5rem] sm:-top-[4rem] left-0 flex flex-col items-center justify-center">
                        <img alt="" className="w-[130px]" src={item?.img} />
                      </div>
                    </div>
                    <div className="text-white">
                      <h3 className="text-lg font-semibold mb-4">
                        {item?.title}
                      </h3>
                      <p className="text-white">{item?.paragraph}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {imgRight && (
            <div className="flex flex-col items-center justify-center">
              <img alt="" className="w-[450px]" src={CardBigImg1} />
            </div>
          )}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default KeyFeatures;
