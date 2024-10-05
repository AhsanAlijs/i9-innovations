import React from "react";
import Sec5CardImg1 from "../../assets/customized-clinic/section-5-card-img1.png";
import Sec5CardImg2 from "../../assets/customized-clinic/section-5-card-img2.png";
import Sec5CardImg3 from "../../assets/customized-clinic/section-5-card-img3.png";
import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessCard from "../IncreasingBussinessCard";

let sec5Cards = [
  {
    img: Sec5CardImg1,
    title: "Automating Repetitive Tasks",
    paragraph:
      "The advantages of Hospital Information Systems (HIS) are manifold, including enhanced efficiency, cost-effectiveness, and improved patient care. However, it's important to acknowledge the disadvantages such as the initial setup costs and the need for ongoing training. While the upfront investment in HIS can be significant, the long-term savings and operational improvements often outweigh these initial expenses. Continuous training is essential to keep staff updated on system features, ensuring the HIS is used to its full potential.",
  },
  {
    img: Sec5CardImg2,
    title: "Seamless Integrations",
    paragraph:
      "Patient Information Systems and Nursing Information Systems are integral components of HIS, offering specific advantages in patient management and nursing workflows. These systems provide real-time access to patient records, streamline communication among care teams, and support evidence-based nursing practices, enhancing the quality of patient care and nursing efficiency.",
  },
  {
    img: Sec5CardImg3,
    title: "Empowering Growth",
    paragraph:
      "The purpose of HIS is to improve healthcare delivery by integrating and automating various hospital operations, from patient care to administrative tasks. The scope of HIS extends across all hospital departments, facilitating a seamless flow of information and coordinated care delivery, which is essential for operational excellence and enhanced patient outcomes.",
  },
];

const Section5 = () => {
  return (
    <Container>
      <SectionWrapper>
        <div className="grid xl:grid-cols-3 gap-5 md:grid-cols-2 grid-cols-1">
          {sec5Cards.map((item, index) => {
            return (
              <IncreasingBussinessCard
                key={index}
                item={item}
                index={index}
                imgTop={true}
                customImg={
                  <div className="flex flex-col justify-center items-center h-[15rem] mb-5">
                    <img
                      className={''}
                      alt=""
                      src={item?.img}
                    />
                  </div>
                }
                cardClassNames={' gap-5 border'}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section5;
