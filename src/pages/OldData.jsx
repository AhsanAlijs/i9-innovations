import Header from "../components/Header";
import Section1 from "../components/OldData/Section1";
import Section2 from "../components/OldData/Section2";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

export default function OldData() {
  return (
    <>
      <Header title="OLD DATA" paragraph="Navigating Old Data Migration in Hospitals: The Super Dr Advantage" />

      <main>
        <Section1 />
        <Section2 />
        <EnquireNow/>
      </main>

      <Footer />

      <SideBtn />
    </>
  )
}