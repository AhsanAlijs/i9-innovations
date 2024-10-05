import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { RiCheckboxFill } from "@remixicon/react";
import Header from "../../components/Header";
import EnquireNow from "../../components/EnquireNow";
import Footer from "../../components/Footer";
import SideBtn from "../../components/SideBtn";

import HeaderImg from '../../assets/home/section5/sec-blog2.jpeg';
import cardimg5 from "../../assets/blogs/online-pharmacy/section2/cardimg5.png"
import cardimg6 from "../../assets/blogs/online-pharmacy/section2/cardimg6.png"
import cardimg7 from "../../assets/blogs/online-pharmacy/section2/cardimg7.png"

import Img1 from "../../assets/blogs/e-commerce/img1.png"
import Img2 from "../../assets/blogs/e-commerce/img2.png"
import Img3 from "../../assets/blogs/e-commerce/img3.png"
import Img4 from "../../assets/blogs/e-commerce/img4.png"
import BlogHeader from "../../components/BlogHeader";

const list2Items = [
  {
    img: cardimg5,
    heading: 'Discovery',
    text: 'Gettig to know your business, understanding your goals, assessing your competition. The essential, strategic.',
  },
  {
    img: cardimg6,
    heading: 'Designing',
    text: 'Crafting the user experience. The visible design blooms from the templates you choose.',
  },
  {
    img: cardimg7,
    heading: 'Deployment',
    text: 'Introducing your site to the world. After quality assurance your site is submitted to search engines and is officially live.',
  },
]

export default function EcommerceWebsiteDesign() {
  return (
    <>
      <Header title={"E-commerce Website Design"} />

      <BlogHeader heading="Ecommerce Development for Medicals & Healthcare" img={HeaderImg} author="Roshan Singh" date="February/04/2024" category="E-Commerce" />

      <main className="px-4 pb-24">
        <section className="max-w-screen-md mx-auto [&_h2]:mt-10 text-zinc-600">
          <h2 className="text-xl font-semibold text-zinc-800">
            Ecommerce Development for Medicals & Healthcare:
          </h2>

          <p className="mt-4">
            i9 Innovations is among the best healthcare ecommerce development companies in Mumbai, India. We help ecommerce businesses increase their customer reach and grow their revenue through the optimal combination of omni-channel presence, know your customer tools, and end to-end user solutions. Being India’s leading ecommerce Development Company.
          </p>

          <p className="mt-4">
            E-commerce has grown to become the easiest, most efficient and hassle-free way of conducting business. This shift has brought about the opportunity to grow your business manifold and take it to the next level. To help your business capitalise on this opportunity, i9 Innovations, a leading e-commerce development company, will provide top-notch services and help you lead the way for your business. With over a decade of professional experience and ace professionals, we will be with you every step of the way.
          </p>

          <h2 className="text-xl font-semibold text-zinc-800">
            E-commerce Healthcare Web Store Development:
          </h2>

          <p className="mt-4">
            The E-Commerce Development Services offered by i9 Innovations are unparalleled in the industry, with options ranging from unique and stunning solutions to easily integrated payment gateways.Asp.Net is a feature-rich platform that is used for business functions, inter-operable apps, multi-tier software architecture, and various mobile applications.
          </p>

          <ul className="mt-4">
            <li>
              <div className="flex gap-2 items-center">
                <RiCheckboxFill size={20} color="#0065C0" />
                <span>Digital Pharmacy Indent</span>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <RiCheckboxFill size={20} color="#0065C0" />
                <span>Diagnostic Centers And Labs</span>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <RiCheckboxFill size={20} color="#0065C0" />
                <span>E-Sharing Of Reports</span>
              </div>
            </li>
            <li>
              <div className="flex gap-2">
                <RiCheckboxFill size={20} color="#0065C0" />
                <span>Online Submission For Medi-Claims</span>
              </div>
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-zinc-800">
            Influence of eCommerce on the Healthcare Industry:
          </h2>

          <ul className="mt-4 flex flex-col gap-6">
            {
              list2Items.map((item, i) => (
                <li key={`${i}-${item.heading}`}>
                  <div className="flex justify-start gap-6">
                    <img src={item.img} alt="" className="size-16 object-contain" />

                    <div className="flex flex-col gap-2">
                      <h3 className="font-medium text-xl text-zinc-800">{item.heading}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </main>

      <section className="py-28">
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center uppercase">
          What <span className="text-[#8ABC3E]">Technology</span> we are using
        </h2>

        <p className="text-2xl max-lg:text-xl max-sm:text-lg font-medium text-center mt-4 max-sm:mt-2 uppercase">
          For our customers
        </p>

        <div className="max-w-screen-xl mx-auto mt-24 py-10">
          <Swiper
            // breakpoints={{
            //   768: { slidesPerView: 2 },
            //   1024: { slidesPerView: 3 },
            // }}
            spaceBetween={100}
            pagination={{
              clickable: true,
              el: '.swiper-custom-pagination',
            }}
            modules={[Pagination]}
            className="[&_.swiper-slide]:min-w-72"
          >
            {
              images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="p-6 bg-white rounded-xl shadow-xlw-full">
                    <img src={item} alt="" />
                  </div>
                </SwiperSlide>
              ))
            }

            <div className="swiper-custom-pagination flex gap-2 justify-center mt-4" />
          </Swiper>
        </div>
      </section>

      <EnquireNow />
      <Footer />
      <SideBtn />
    </>
  );
}


let images = [
  Img1,
  Img2,
  Img3,
  Img4,
];