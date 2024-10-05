import Header from "../components/Header";
import Section1 from "../components/Careers/Section1";
import Section2 from "../components/Careers/Section2";
import Section3 from "../components/Careers/Section3";
import Section4 from "../components/Careers/Section4";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

export default function Career() {
  return (
    <>
      <Header title="Career" paragraph="All new Healthcare | EMR, HMIS, PACS, & More" />

      <main>
        <Section1 />

        {/* <Section2 /> */}

        <Section3 />
        
        <Section4 />

        <EnquireNow/>

      </main>
      
      <Footer />
      <SideBtn />
    </>
  )
}