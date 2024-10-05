import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Section1 from "../components/OurTeam/Section1";
import Section2 from "../components/OurTeam/Section2";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

const OurTeam = () => {
  return (
    <>
      <Header
        title={"Our team"}
        paragraph={"Our Team at i9 Innovations: Crafting Excellence Together"}
      />
      <Section1 />

      <Container>
        <Section2 />
      </Container>

      <EnquireNow/>

      <Footer />

      <SideBtn />
    </>
  );
};

export default OurTeam;
