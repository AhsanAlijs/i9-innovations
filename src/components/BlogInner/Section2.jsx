import React from "react";
import SectionWrapper from "../SectionWrapper";
import CardImg1 from "../../assets/bloginner/section2/cardimg1.png";
import CardImg2 from "../../assets/bloginner/section2/cardimg2.png";
import CardImg3 from "../../assets/bloginner/section2/cardimg3.png";
import CardImg4 from "../../assets/bloginner/section2/cardimg4.png";

let cards = [
  {
    img: CardImg1,
    title: "Medication Purchase Reminders",
    paragraph:
      "Keeps users informed about their medication needs, promoting health management.",
  },
  {
    img: CardImg2,
    title: "Automated Purchase Orders",
    paragraph:
      "Optimizes inventory management with intelligent procurement systems.",
  },
  {
    img: CardImg3,
    title: "Customizable Alerts",
    paragraph:
      "Personalizes health management with tailored reminders and alerts. Intuitive Interface: Guarantees an effortless experience in managing healthcare needs.",
  },
  {
    img: CardImg4,
    title: "Scalability and Customization:",
    paragraph:
      "Our specialized developers deliver high-quality code for scalable custom apps, adapting to the evolving needs of healthcare providers for long-term relevance and effectiveness.",
  },
];

const Section2 = () => {
  return (
    <SectionWrapper>
      <h2 className="text-5xl max-lg:text-4xl max-sm:text-3xl font-semibold text-center mb-14">
        Transformative Pharmacy Solutions by
        <span className="text-[#8ABC3E]"> i9 Innovations:</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards?.map((item, index) => {
          return (
            <div
              className="shadow-xl rounded-xl px-4 border bg-white hover:shadow-2xl transition-all"
              key={index}
            >
              <div className="flex flex-col items-center justify-center my-5">
                <img alt="" className="w-[150px]" src={item.img} />
              </div>
              <div className="text-center">
                <h2 className="text-[15px] font-bold mb-4">{item.title}</h2>
                <p className="text-sm mb-5">{item.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Section2;
