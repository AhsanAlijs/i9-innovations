import Header from "../components/Header";
import Section1 from "../components/RISPACS/Section1";
import Section2 from "../components/RISPACS/Section2";
import Section3 from "../components/RISPACS/Section3";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

export default function RisPacs() {
  return (
    <>
      <Header
        title="RIS-PACS"
        paragraph="Revolutionizing Medical Imaging: The Integration of RIS and PACS in Healthcare"
      />

      <main>
        <Section1 />

        <Section2 />

        <Section3 />

        <EnquireNow/>
        <Footer />
        <SideBtn />
      </main>

    </>
  );
}
