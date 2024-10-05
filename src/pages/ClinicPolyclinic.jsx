import Header from "../components/Header";
import Section1 from "../components/ClinicPolyclinic/Section1";
import Section2 from "../components/ClinicPolyclinic/Section2";
import Section3 from "../components/ClinicPolyclinic/Section3";
import Section4 from "../components/ClinicPolyclinic/Section4";
import Section5 from "../components/ClinicPolyclinic/Section5";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

export default function ClinicPolyclinic() {
  return (
    <>
      <Header title="Clinic-Polyclinic" paragraph="Advantages of Hospital Information System" />

      <main>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <EnquireNow/>
      </main>

      <Footer />

      <SideBtn />
    </>
  )
}