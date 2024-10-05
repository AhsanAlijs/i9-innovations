import React from "react";
import Header from "../components/Header";
import Section1 from "../components/ABDM/Section1";
import Section2 from "../components/ABDM/Section2";
import Section3 from "../components/ABDM/Section3";
import Section4 from "../components/ABDM/Section4";
import Section5 from "../components/ABDM/Section5";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

const ABDM = () => {
  return (
    <>
      <Header
        title={"ABHA ID"}
        paragraph={"Crucial Role of ABDM and ABHA Compliance in Hospital Software"}
      />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <EnquireNow />
      <Footer />
      <SideBtn />
    </>
  );
};

export default ABDM;
