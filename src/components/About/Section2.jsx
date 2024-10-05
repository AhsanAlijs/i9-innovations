import React from "react";
// import SectionWrapper from "../SectionWrapper";
import Container from "../Container";
import CardImg1 from "../../assets/about/section2/cardimg1.png";
import CardImg2 from "../../assets/about/section2/cardimg2.png";
import CardImg3 from "../../assets/about/section2/cardimg3.png";
import CardImg4 from "../../assets/about/section2/cardimg4.png";
import IncreasingBussinessSection from "../IncreasingBussinessSection";

let cards = [
  {
    title: "Our Mission",
    paragraph: "At i9 Innovations & Educations, our mission is to ignite a revolution in healthcare innovations and education, transcending boundaries and empowering individuals, hospitals, healthcare centers, and businesses to soar to unprecedented heights across the globe. We are committed to driving transformative change in the healthcare industry, fostering innovation, and enabling the growth of our global community. Join us on this journey towards a brighter and healthier future for all.",
    img: CardImg1,
  },
  {
    title: "Our Vision",
    paragraph: "Embark on a journey of boundless possibilities with i9 Innovations & Educations. Our vision is to create a dynamic healthcare ecosystem that fuels continuous learning, technological excellence, and unparalleled innovation, inspiring growth in every sphere. At i9, we envision a future where healthcare transcends conventional boundaries, embracing a harmonious blend of knowledge, technology, and innovation to usher in a new era of excellence. Join us in shaping a visionary healthcare landscape that transforms possibilities into realities.",
    img: CardImg2,
  },
  {
    title: "Customer Focus",
    paragraph: "At i9 Innovations & Educations,the soul of our enterprise is dedicated.To our customers. We wholeheartedly embrace an agile philosophy, fostering seamless collaboration between developers and end-users. Our unwavering commitment to delivering beyond expectations is vividly reflected in our user experience, which consistently sets new benchmarks in the industry. We prioritize the needs and satisfaction of our customers, ensuring that every interaction with our products and services exceeds their expectations.",
    img: CardImg3,
  },
  {
    title: "Excellence",
    paragraph: "Excellence in healthcaretechnologies is the cornerstone of.i9 Innovations & Educations, defined by a commitment to consistently surpassing the ordinary. We meticulously curate tasks, aiming for 100% precision and continuous refinement in every aspect of our work. For us, every project is an opportunity to exceed past accomplishments, pushing the boundaries of what's possible. This unwavering dedication to excellence is ingrained in our culture and propels us forward in our pursuit of technological innovation in healthcare.",
    img: CardImg4,
  },
];

const Section2 = () => {
  return (
    <Container>
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
        Empowering Healthcare Providers With
        <span className="text-[#8ABC3E]"> Advanced Features </span>
      </h2>

      <IncreasingBussinessSection cards={cards} classNames={"xl:px-8"} cardClassNames={"gap-5"} />
    </Container>
  );
};

export default Section2;
