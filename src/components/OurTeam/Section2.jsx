import React from "react";
import SectionWrapper from "../SectionWrapper";
import CardImg1 from "../../assets/our-team/section2/cardimg1.png";
import CardImg2 from "../../assets/our-team/section2/cardimg2.png";
import CardImg3 from "../../assets/our-team/section2/cardimg3.png";
import CardImg4 from "../../assets/our-team/section2/cardimg4.png";
import CardImg5 from "../../assets/our-team/section2/cardimg5.png";
import CardImg6 from "../../assets/our-team/section2/cardimg6.png";
import CardImg7 from "../../assets/our-team/section2/cardimg7.png";
import CardImg8 from "../../assets/our-team/section2/cardimg8.png";
import CardImg9 from "../../assets/our-team/section2/cardimg9.png";
import CardImg10 from "../../assets/our-team/section2/cardimg10.png";

const cards = [
  {
    img: CardImg1,
    title: "Founders: The Visionaries",
    paragraph: "Our journey began with our founders, whose entrepreneurial spirit andunwavering vision set the course for i9 Innovations. They continue to guide our strategic direction, instilling a culture of innovation, excellence, and integrity.",
  },
  {
    img: CardImg2,
    title: "Investment Partners: The Enablers",
    paragraph: "Our investment partners are the cornerstone of ourgrowth, providing not just financial backing but also strategic insights that help us navigate market dynamics and seize opportunities.",
  },
  {
    img: CardImg3,
    title: "Directors: The Strategists",
    paragraph: "Our directors bring a wealth of experience andleadership, steering our various departments towards achieving our collective goals. They ensure that every project aligns with our core values and meets our high standards of quality.",
  },
  {
    img: CardImg4,
    title: "Management Team: The Executors",
    paragraph: "The management team is the bridge between ourvision and its execution. They are responsible for operational excellence, driving efficiency, and fostering a productive work environment that encourages creativity and innovation.",
  },
  {
    img: CardImg5,
    title: "Marketing Department: The Storytellers",
    paragraph: "Our marketing mavens craft compellingnarratives around our services and successes, connecting us with our clients and the broader community. They amplify our voice, ensuring our innovations are recognized and our brand stands out in a crowded marketplace.",
  },
  {
    img: CardImg6,
    title: "Development Team: The Innovators",
    paragraph: "At the heart of i9 Innovations is ourdevelopment team, a group of brilliant minds specializing in .NET, Java, PHP, and more. They translate complex challenges into elegant software solutions, pushing the boundaries of what's possible.",
  },
  {
    img: CardImg7,
    title: "Human Resources: The Cultivators",
    paragraph: "Our HR department is dedicatedto nurturing our most valuable asset: our people. They create a supportive and inclusive environment where everyone can thrive, emphasizing continuous learning, diversity, and well-being.",
  },
  {
    img: CardImg8,
    title: "Unity in Diversity: Our Collective Identity",
    paragraph: "Diversity is our strength, and collaborationis our ethos. i9 Innovations boasts a rich tapestry of cultures, backgrounds, and perspectives, making us more innovative, empathetic, and effective. We work together, play together, and celebrate together, fostering a sense of community and belonging.",
  },
  {
    img: CardImg9,
    title: "Recognizing Every Contribution",
    paragraph: "Our achievements, including accolades from MCGM and ESIC, are atestament to the hard work and dedication of every team member. We take pride in recognizing and celebrating these efforts, ensuring that each contribution is valued and acknowledged.",
  },
  {
    img: CardImg10,
    title: "Honoring Our Alumni",
    paragraph: "The legacy of i9 Innovations is also shaped by our past employees, whose contributionshave been instrumental in our journey. They may have moved on to new adventures, but they remain an integral part of our story, and we cherish the memories and milestones we've shared.",
  },
];

const Section2 = () => {
  return (
    <SectionWrapper>
      <div className="text-center mb-14 flex flex-col gap-5">
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center">
          Our Team at <span className="text-[#8ABC3E]">i9 Innovations</span>
        </h2>
        <h3 className="text-2xl max-lg:text-xl max-sm:text-lg font-medium">Crafting Excellence Together</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {cards?.map((item, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-12 rounded-lg sm:items-center gap-3 lg:gap-5 shadow-lg hover:shadow-xl transition-all p-2"
            >
              <div className="col-span-4">
                <img alt="" className="rounded-lg" src={item.img} />
              </div>
              <div className="col-span-8 flex flex-col gap-2 md:gap-3 lg:gap-5">
                <h4 className="text-md font-bold sm:text-lg sm:font-semibold">{item.title}</h4>
                <p className="text-[14px]">{item.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default Section2;
