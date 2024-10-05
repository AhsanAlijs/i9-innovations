import React from "react";
import Header from "../components/Header";
import Section1 from "../components/OnlinePharmacy/Section1";
import Section2 from "../components/OnlinePharmacy/Section2";
import Section3 from "../components/OnlinePharmacy/Section3";
import InConclusion from "../components/InConclusion";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

const OnLinePharmacy = () => {
  return (
    <>
      <Header title="Online Pharmacy Software in India" paragraph="With next-gen online workflows" />
      <Section1 />
      <Section2 />
      <Section3 />
      <InConclusion paragraph="For pharmacy and hospital owners in India looking to thrive in the digital age, transitioning to an online pharmacy software is imperative. With its comprehensive features, from inventory management to customer engagement, and its ability to integrate seamlessly with modern business practices, online pharmacy software is the key to unlocking new opportunities and achieving unparalleled success in the healthcare industry." />
      <EnquireNow/>

      <Footer />

      <SideBtn />
    </>
  );
};

export default OnLinePharmacy;
