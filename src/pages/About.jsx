import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
// import Section1 from "../components/About/Section1";
import Section2 from "../components/About/Section2";
import Section3 from "../components/About/Section3";
import Section4 from "../components/About/Section4";
import Section5 from "../components/About/Section5";
import Section6 from "../components/About/Section6";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";
import SectionWrapper from "../components/SectionWrapper";

const About = () => {
  return (
    <>
      <Header
        title={"About Us"}
        paragraph={"HOSPITAL MANAGEMENT SOFTWARE COMPANY"}
      />

      <SectionWrapper classNames={"_about_section_5 py-24 gap-48"}>
        <Section4 />
        <Section5 />
      </SectionWrapper>

      {/* <Container>
        <Section1 />
      </Container> */}
      <Section2 />
      <Container>
        <Section3 />
      </Container>
      <Container>
        <Section6 />
      </Container>
      <EnquireNow/>

      <Footer />

      <SideBtn />
    </>
  );
};

export default About;
