import React from "react";
import Container from "./Container";
import SectionWrapper from "./SectionWrapper";

const InConclusion = ({
  bgBlue,
  paragraph,
  textClasses,
  title1,
  title2,
  child,
}) => {
  return (
    <Container>
      <SectionWrapper>
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
          {title1 ? title1 : "In"}
          <span className="text-[#A3DC2F]">
            {" "}
            {title2 ? title2 : "Conclusion"}{" "}
          </span>
        </h2>
        <div
          className={` ${
            bgBlue ? "bg-[#0065C0]" : "bg-[#8ABC3E]"
          } rounded-xl shadow-xl p-8 lg:p-14 `}
        >
          <p className={`text-white text-center ${textClasses}`}>
            {paragraph ? (
              paragraph
            ) : (
              <>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis quia ipsa exercitationem laudantium incidunt
                consequuntur dicta quidem rerum tempora modi. Aliquid voluptatum
                esse aliquam ratione unde optio, assumenda consectetur inventore
                tenetur quibusdam repellendus, odio amet consequuntur molestias
                doloremque voluptates, modi reiciendis doloribus dolor corporis
                veniam porro nostrum accusantium sint? Porro beatae ipsum iure.
                Doloremque natus ipsum recusandae esse voluptate reiciendis
                explicabo, voluptatum non quaerat dignissimos officiis quisquam
                ratione laudantium consectetur incidunt beatae asperiores
                cupiditate vitae sint suscipit, atque autem nemo quidem.
                Incidunt ad alias eaque, repellendus accusamus, fugit voluptas
                enim, cum nesciunt rerum voluptatum numquam nostrum corporis!
                Laborum, sunt porro!
              </>
            )}
          </p>

          {child ? (
            <div className="text-center mt-5">
              <span className="text-2xl font-bold text-center text-white">
                {child}
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default InConclusion;
