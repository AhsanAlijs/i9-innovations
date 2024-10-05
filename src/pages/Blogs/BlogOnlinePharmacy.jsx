import Header from "../../components/Header";
import Section2 from "../../components/Blogs/OnlinePharmacy/Section2";
import EnquireNow from "../../components/EnquireNow";
import Footer from "../../components/Footer";
import SideBtn from "../../components/SideBtn";

import HeaderImg from '../../assets/home/section5/sec-blog1.jpg';
import cardimg1 from "../../assets/blogs/online-pharmacy/section2/cardimg1.png"
import cardimg2 from "../../assets/blogs/online-pharmacy/section2/cardimg2.png"
import cardimg3 from "../../assets/blogs/online-pharmacy/section2/cardimg3.png"
import cardimg4 from "../../assets/blogs/online-pharmacy/section2/cardimg4.png"
import cardimg5 from "../../assets/blogs/online-pharmacy/section2/cardimg5.png"
import cardimg6 from "../../assets/blogs/online-pharmacy/section2/cardimg6.png"
import cardimg7 from "../../assets/blogs/online-pharmacy/section2/cardimg7.png"
import BlogHeader from "../../components/BlogHeader";

const list1Items = [
  {
    img: cardimg1,
    heading: 'Medication Purchase Reminders',
    text: 'Keeps users informed about their medication needs, promoting health management.',
  },
  {
    img: cardimg2,
    heading: 'Automated Purchase Orders',
    text: 'Optimizes inventory management with intelligent procurement systems.',
  },
  {
    img: cardimg3,
    heading: 'Customizable Alerts',
    text: 'Personalizes health management with tailored reminders and alerts. Intuitive Interface: Guarantees an effortless experience in managing healthcare needs.',
  },
  {
    img: cardimg4,
    heading: 'Scalability and Customization',
    text: 'Our specialized developers deliver high-quality code for scalable custom apps, adapting to the evolving needs of healthcare providers for long-term relevance and effectiveness.',
  },
]

const list2Items = [
  {
    img: cardimg5,
    heading: 'Enhanced Customer Loyalty',
    text: 'Builds strong relationships through personalized interactions.',
  },
  {
    img: cardimg6,
    heading: 'Improved Medication Adherence',
    text: 'Supports consistent medication use, ensuring steady pharmacy business.',
  },
  {
    img: cardimg7,
    heading: 'Streamlined Operations',
    text: 'Redefines pharmacy management with smart, efficient app features.',
  },
]

export default function BlogInner() {
  return (
    <>
      <Header title={"Online Pharmacy Apps Development"} />

      <BlogHeader
        heading="Online Pharmacy Apps Development"
        img={HeaderImg}
        author="Afzal Shaikh"
        date="January/13/2024"
        category="Healthcare"
      />

      <main className="px-4 pb-24">
        <section className="max-w-screen-md mx-auto [&_h2]:mt-10 text-zinc-600">
          <p>
            Welcome to the forefront of pharmacy management innovation. At i9 Innovations, we're not just developing Online Pharmacy Apps; we're setting new standards for efficiency and user experience in the pharmaceutical industry.
          </p>
          <h2 className="text-xl font-semibold text-zinc-800">
            Key Features of Our Pharmacy Apps:
          </h2>
          <ul className="mt-4 list-disc list-inside">
            <li><h3 className="font-medium inline-block text-zinc-800">Online Medicine Purchase:</h3> Secure and straightforward online ordering of prescribed medications.</li>
            <li><h3 className="font-medium inline-block text-zinc-800">Direct Indent Placement:</h3> Immediate, accurate medication delivery from local pharmacies.</li>
            <li><h3 className="font-medium inline-block text-zinc-800">Flexible Assembly Line:</h3> Adaptable, quick, and scalable solutions tailored to each client's needs.</li>
            <li><h3 className="font-medium inline-block text-zinc-800">Unified Healthcare Software:</h3> Enhances team collaboration, reducing errors and ensuring consistency.</li>
            <li><h3 className="font-medium inline-block text-zinc-800">Clinic reference Management:</h3> Simplifies operations, reducing workload and improving efficiency across referring clinic chains.</li>
          </ul>
          <h2 className="text-xl font-semibold text-zinc-800">
            Transformative Pharmacy Solutions by i9 Innovations:
          </h2>
          <ul className="mt-4 flex flex-col gap-6">
            {
              list1Items.map((item, i) => (
                <li key={`${i}-${item.heading}`}>
                  <div className="flex justify-start gap-6">
                    <img src={item.img} alt="" className="size-16 object-contain max-sm:size-10" />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-medium text-xl text-zinc-800">{item.heading}</h3>
                      <p>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
          <h2 className="text-xl font-semibold text-zinc-800">
            Advantages of Our Online Pharmacy Apps:
          </h2>
          <ul className="mt-4 list-disc list-inside">
            <li><h3 className="font-medium inline-block text-zinc-800">User-Friendly Access:</h3> Simplifies the medicine purchasing process, enhancing customer convenience.</li>
            <li><h3 className="font-medium inline-block text-zinc-800">Prompt Medication Delivery:</h3> Ensures timely delivery of medications, improving patient health outcomes.</li>
            <li><h3 className="font-medium inline-block text-zinc-800">Collaborative Healthcare:</h3> Fosters a unified healthcare environment, streamlining communication and operations.</li>
            <li><h3 className="font-medium inline-block text-zinc-800">Scalable Solutions:</h3> Offers customizable and scalable app development to meet evolving healthcare needs.</li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-800">
            Transformative Pharmacy Solutions by i9 Innovations:
          </h2>
          <ul className="mt-4 flex flex-col gap-6">
            {
              list2Items.map((item, i) => (
                <li key={`${i}-${item.heading}`}>
                  <div className="flex justify-start gap-6">
                    <img src={item.img} alt="" className="size-16 object-contain max-sm:size-10" />
                    <div className="flex flex-col gap-2">
                      <h3 className="font-medium text-xl text-zinc-800">{item.heading}</h3>
                      <p>
                        {item.text}
                      </p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </main>

      <Section2 />

      <EnquireNow />
      <Footer />
      <SideBtn />
    </>
  );
}