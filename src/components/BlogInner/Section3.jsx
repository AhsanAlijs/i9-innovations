import React from "react";
import SectionWrapper from "../SectionWrapper";
import CardImg1 from "../../assets/bloginner/section3/cardimg1.png";
import CardImg2 from "../../assets/bloginner/section3/cardimg2.png";
import CardImg3 from "../../assets/bloginner/section3/cardimg3.png";
import Container from "../Container";

let cards = [
  {
    img: CardImg1,
    title: "Enhanced Customer Loyalty:",
    paragraph: "Builds strong relationships through personalized interactions.",
  },
  {
    img: CardImg2,
    title: "Improved Medication Adherence:",
    paragraph:
      "Supports consistent medication use, ensuring steady pharmacy business.",
  },
  {
    img: CardImg3,
    title: "Streamlined Operations:",
    paragraph:
      "Redefines pharmacy management with smart, efficient app features.",
  },
];

const Section3 = () => {
  return (
    <div className="_inner_blog_section_3 py-[5rem] lg:pb-[2rem] pt-[7rem]">
      <Container>
        <div className="xl:px-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-[5rem]">
            BUSINESS BENEFITS
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cards?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="shadow-lg border sm:border-none transition-all bg-white hover:shadow-xl rounded-xl px-6 py-5"
                >
                  <div className="flex flex-col items-center justify-center">
                    <img alt="" src={item.img} />
                  </div>
                  <div className="text-center py-5">
                    <h2 className="text-lg font-bold mb-5">{item.title}</h2>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section3;
