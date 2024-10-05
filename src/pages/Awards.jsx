import Header from "../components/Header";
import Section1 from "../components/Awards/Section1";
import Section2 from "../components/Awards/Section2";
import Section3 from "../components/Awards/Section3";
import Section4 from "../components/Awards/Section4";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

export default function Awards() {
  return (
    <>
      <Header
        title="Awards"
        paragraph="Celebrating Excellence: i9 Innovations' Awards and Recognitions"
      />

      <main>
        <Section1 />

        
        <Section3 />

        <Section4 />

        <Section2 />
      </main>

      <EnquireNow/>

      <Footer />

      <SideBtn />
    </>
  );
}
