import React from "react";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessCard from "../IncreasingBussinessCard";
import CardImg1 from "../../assets/maximizing-efficiency/section-3/card-img-1.png";
import CardImg2 from "../../assets/maximizing-efficiency/section-3/card-img-2.png";
import CardImg3 from "../../assets/maximizing-efficiency/section-3/card-img-3.png";
import CardImg4 from "../../assets/maximizing-efficiency/section-3/card-img-4.png";
import CardImg5 from "../../assets/maximizing-efficiency/section-3/card-img-5.png";
import CardImg6 from "../../assets/maximizing-efficiency/section-3/card-img-6.png";

let cards = [
  {
    img: CardImg1,
    title: "Advantages and Disadvantages in Hospital information system",
    paragraph: "The advantages of Hospital Information Systems (HIS) are manifold, including enhanced efficiency, cost-effectiveness, and improved patient care. However, it's important to acknowledge the disadvantages such as the initial setup costs and the need for ongoing training. While the upfront investment in HIS can be significant, the long-term savings and operational improvements often outweigh these initial expenses. Continuous training is essential to keep staff updated on system features, ensuring the HIS is used to its full potential.",
  },
  {
    img: CardImg2,
    title: "Patient and Nursing Information Systems",
    paragraph: "Patient Information Systems and Nursing Information Systems are integral components of HIS, offering specific advantages in patient management and nursing workflows. These systems provide real-time access to patient records, streamline communication among care teams, and support evidence-based nursing practices, enhancing the quality of patient care and nursing efficiency.",
  },
  {
    img: CardImg3,
    title: "Purpose and Scope of Hospital information system",
    paragraph: "The purpose of HIS is to improve healthcare delivery by integrating and automating various hospital operations, from patient care to administrative tasks. The scope of HIS extends across all hospital departments, facilitating a seamless flow of information and coordinated care delivery, which is essential for operational excellence and enhanced patient outcomes.",
  },
  {
    img: CardImg4,
    title: "Critical Care and Development",
    paragraph: "In critical care settings, HIS provides vital support by enabling quick access to critical patient data, supporting rapid decision-making, and ensuring the delivery of timely care. The development of a robust HIS involves careful planning, customization to meet specific hospital needs, and integration with existing healthcare technologies, ensuring that the system enhances care delivery in high-stakes environments.",
  },
  {
    img: CardImg5,
    title: "Future Trends in Hospital information system",
    paragraph: "The future of HIS is promising, with advancements in AI, machine learning, and interoperability set to further revolutionize healthcare. These technologies will enhance predictive analytics, automate routine tasks, and improve the sharing of health information across different systems and settings, leading to more personalized and efficient healthcare delivery.",
  },
  {
    img: CardImg6,
    title: "The Super Dr Advantages",
    paragraph: "In the realm of Hospital Information Systems (HIS), our flagship product, Super Dr, stands out as a beacon of innovation and efficiency. Designed with the modern healthcare environment in mind, Super Dr encapsulates the essence of what a comprehensive HIS should be, aligning perfectly with the advantages discussed earlier.",
  },
];

const Section3 = () => {
  return (
    <>
      <div className="_maximizing_efficiency">
        <Container>
          <SectionWrapper>
            <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
              Addressing{" "}
              <span className="text-[#A3DC2F]"> Common Questions </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
              {cards?.map((item, index) => {
                return (
                  <IncreasingBussinessCard
                    imgTop={true}
                    index={index}
                    item={item}
                    cardClassNames={"border gap-4"}
                    customImg={
                      <div className="flex flex-col mb-4 h-[13rem] items-center justify-center">
                        <img className={``} alt="" src={item?.img} />
                      </div>
                    }
                  />
                );
              })}
            </div>
          </SectionWrapper>
        </Container>
      </div>
    </>
  );
};

export default Section3;
