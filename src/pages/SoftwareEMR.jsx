import React from "react";
import Header from "../components/Header";
import Section1 from "../components/Software/Section1";
import Section2 from "../components/Software/Section2";
import InConclusion from "../components/InConclusion";
import Section3 from "../components/Software/Section3";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

const Software = () => {
  return (
    <>
      <Header
        title={"EMR"}
        paragraph={
          "The Evolution of Electronic Medical Records and Hospital Software with Super Dr."
        }
      />
      <Section1 />
      <Section2 />
      <InConclusion bgBlue={false} paragraph="i9 Innovations' LIMS is more than just a laboratory information management system; it's a comprehensive solution designed to elevate the standards of laboratory operations. By choosing Super Dr's LIMS, you're not just adopting new software; you're embracing a future ." />
      <Section3/>
      <EnquireNow/>
      <Footer />
      <SideBtn />
    </>
  );
};

export default Software;
