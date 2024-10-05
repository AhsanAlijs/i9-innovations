import React, { useState } from "react";
import Accordion from "./Accordion";
import * as AccordionRadix from '@radix-ui/react-accordion';
import Container from "./Container";
import SectionWrapper from "./SectionWrapper";

const Faqs = ({ coloredTitle, title1, title2, title, faqs, customeTitle }) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  return (
    <Container>
      <SectionWrapper>
        {customeTitle ? (
          customeTitle
        ) : (
          <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
            {title1}
            {title2 && <span className="text-[#A3DC2F]"> {title2}</span>}
            {coloredTitle && title ? (
              <span className="text-[#A3DC2F]"> {title}</span>
            ) : (
              ""
            )}
          </h2>
        )}

        <AccordionRadix.Root className="rounded-md mx-auto flex flex-col gap-8 w-full max-w-screen-lg" type="single" collapsible>
          {faqs?.map((item, index) => {
            return (
              <Accordion
                key={`${item.title}${index}`}
                title={item.title}
                paragraph={item.paragraph}
                index={index}
                // isOpen={isOpen}
                // setIsOpen={setIsOpen}
                // activeFaqIndex={activeFaqIndex}
                // setActiveFaqIndex={setActiveFaqIndex}
              />
            );
          })}
        </AccordionRadix.Root>
      </SectionWrapper>
    </Container>
  );
};

export default Faqs;
