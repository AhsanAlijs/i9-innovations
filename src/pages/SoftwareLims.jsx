import React from "react";
import Header from "../components/Header";
import Section1 from "../components/lIMS/Section1";
import Section2 from "../components/lIMS/Section2";
import InConclusion from "../components/InConclusion";
import Section3 from "../components/lIMS/Section3";
import Section4 from "../components/lIMS/Section4";
import AwardsSliderSection from "../components/AwardsSliderSection";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";
import Section5 from "../components/lIMS/Section5";

const SoftwareLims = () => {
  return (
    <>
      <Header
        title={"Lab Information Management System (LIMS)"}
        paragraph={"Embark on a journey of innovation and efficiency with i9 Innovation's state-of-the-art (LIMS)."}
      />
      <Section1 />
      <Section2 />
      <InConclusion
        title1={"Inspirational"}
        title2={"Quote"}
        paragraph={`"Innovation is taking two things that exist and putting them together in a new way."`}
        textClasses={"text-2xl font-bold text-center text-[#FFFFFF]"}
        child={"- Tom Freston"}
      />
      <Section3 />
      <Section5 />
      <InConclusion
        bgBlue={true}
        paragraph={`i9 Innovations' LIMS is more than just a laboratory information management system; it's a comprehensive solution designed to elevate the standards of laboratory operations. By choosing Super Dr's LIMS, you're not just adopting new software; you're embracing a future .`}
      />
      <Section4/>

      <InConclusion
        title1={"Light-Hearted "}
        title2={"Note"}
        bgBlue={true}
        paragraph={`"Imagine a world where laboratories run so smoothly, even the test tubes start to wonder".`}
        textClasses={"text-2xl font-bold text-center text-[#FFFFFF]"}
      />

      <AwardsSliderSection/>

      <EnquireNow/>

      <Footer />
      <SideBtn />
    </>
  );
};

export default SoftwareLims;
