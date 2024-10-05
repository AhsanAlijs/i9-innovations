import Header from "../components/Header";
import Section1 from "../components/Modules/Section1";
import Section2 from "../components/Modules/Section2";
import Section3 from "../components/Modules/Section3";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

export default function Modules() {
  return (
    <>
      <Header title="100 plus Modules" paragraph="The i9 2024 Hospital Management Software" />

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