import Header from "../components/Header";
import Section1 from "../components/ExplainerVideo/Section1";
import Section2 from "../components/ExplainerVideo/Section2";
import Section3 from "../components/ExplainerVideo/Section3";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

export default function ExplainerVideo() {
  return (
    <>
      <Header title="Explainer Video" paragraph="Advantages of Hospital Information System" />

      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <EnquireNow/>
      </main>

      <Footer />
      <SideBtn />
    </>
  )
}