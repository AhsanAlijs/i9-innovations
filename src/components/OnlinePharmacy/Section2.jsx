import React from "react";
import Container from "../Container";
import Img1 from "../../assets/online-pharmacy/section2/img1.png"
import Img2 from "../../assets/online-pharmacy/section2/img2.png"
import Img3 from "../../assets/online-pharmacy/section2/img3.png"
import Img4 from "../../assets/online-pharmacy/section2/img4.png"
import Img5 from "../../assets/online-pharmacy/section2/img5.png"
import Img6 from "../../assets/online-pharmacy/section2/img6.png"
import Img7 from "../../assets/online-pharmacy/section2/img7.png"
import Img8 from "../../assets/online-pharmacy/section2/img8.png"
import Img9 from "../../assets/online-pharmacy/section2/img9.png"
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessCard from "../IncreasingBussinessCard";

const Section2 = () => {
  return (
    <Container>
      <SectionWrapper>
        <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
          Key Features
          <span className="text-[#8ABC3E]"> and </span>
          Benefits:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, index) => {
            return (
              <IncreasingBussinessCard
                key={index}
                item={item}
                index={index}
                cardClassNames={"gap-3 border px-5 py-4"}
                showReadMore={true}
              />
            );
          })}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default Section2;


let cards = [
  {
    title: "Inventory and Vendor Management:",
    paragraph: "Gone are the days of manual stocktaking and vendor negotiations. With advanced inventory management, you can automate stock levels, set reorder points, and manage vendors efficiently, ensuring that your pharmacy never runs out of essential medications.",
    img: Img1,
  },
  {
    title: "Cost and Quotation Management:",
    paragraph: "Make informed purchasing decisions with a system that provides real-time cost comparisons and quotation management. This feature ensures that you get the best deals from vendors, improving your bottom line.",
    img: Img2,
  },
  {
    title: "Loyalty Management:",
    paragraph: "Build lasting relationships with your customers through a loyalty management system. Reward repeat customers, send personalized offers, and keep them engaged, driving sales and fostering loyalty.",
    img: Img3,
  },
  {
    title: "Online Orders and Payments:",
    paragraph: "Embrace the digital age with features that allow customers to order medications online and make payments securely. This not only enhances customer convenience but also opens up new revenue streams for your business.",
    img: Img4,
  },
  {
    title: "Comprehensive ERP and CRM Integration:",
    paragraph: "Streamline your operations with an integrated Enterprise Resource Planning (ERP) system and Customer Relationship Management (CRM) tools. These integrations provide a holistic view of your business operations, from inventory to customer interactions, making management a breeze.",
    img: Img5,
  },
  {
    title: "Digital Shortbook and Purchase Marketplace:",
    paragraph: "Keep track of your inventory digitally and connect with a wider network of suppliers through an online purchase marketplace. This feature simplifies procurement and ensures you always have access to the pharmaceuticals you need.",
    img: Img6,
  },
  {
    title: "Advanced Features for Modern Pharmacies:",
    paragraph: "With unlimited CSV uploads, barcode scanning, multi-device logins, full mobile and web access, QR code systems, and staff login capabilities, the modern online pharmacy software ensures that your pharmacy is equipped for the future.",
    img: Img7,
  },
  {
    title: "Engagement and Retention Tools:",
    paragraph: "Engage your customers like never before with a customer app, store webpage, personalized reminders, greetings, and offers. These tools not only enhance the customer experience but also help in retaining them.",
    img: Img8,
  },
  {
    title: "Operational Excellence:",
    paragraph: "With features like expense management, daily stock reconciliation, and more, the new age online pharmacy software ensures that your operations are seamless, efficient, and error-free.",
    img: Img9,
  },
];