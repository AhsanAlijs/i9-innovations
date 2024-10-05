import React from "react";
import ImageCardColumn from "./Healthcare/ImageCardColumn";
import Container from "./Container";
import SectionWrapper from "./SectionWrapper";

const ImediateAccess = ({ title, paragraph, img, cards }) => {
  return (
    <>
      <div className="">
        <ImageCardColumn
          parentClasses={" lg:my-[0.5rem] py-0"}
          imgleft={true}
          img={img}
          title={
            title
          }
          paragraph={paragraph}
        />
      </div>

      <Container>
        <SectionWrapper classNames={" lg:my-[0.5rem] lg:mt-[1rem]"}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-0">
            {cards?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`${
                    index === 0
                      ? "sm:border-r sm:pr-12"
                      : "sm:border-l sm:pl-12"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-black">{item.paragraph}</p>
                </div>
              );
            })}
          </div>
        </SectionWrapper>
      </Container>
    </>
  );
};

export default ImediateAccess;
