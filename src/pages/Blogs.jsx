import Header from "../components/Header";
import Section1 from "../components/Blogs/Section1";
import EnquireNow from "../components/EnquireNow";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";

export default function BlogsIndex() {
  return (
    <>
      <Header
        title="Blogs"
        paragraph="Discover our useful resources and read articles on different categories"
      />

      <main>
        <Section1 />
      </main>

      <EnquireNow/>

      <Footer />
      <SideBtn />
    </>
  )
}