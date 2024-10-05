import React from "react";
import Header from "../components/Header";
import Section1 from "../components/HMIS/Section1";
import Section2 from "../components/HMIS/Section2";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

const SoftwareHmis = () => {
  return (
    <>
      <Header
        title="Hospital Management Information Systems (HMIS)"
        paragraph="The New Era of Healthcare Efficiency"
      />
      <Section1/>
      <Section2/>
      <EnquireNow/>
      <Footer />
      <SideBtn />
    </>
  );
};

export default SoftwareHmis;
