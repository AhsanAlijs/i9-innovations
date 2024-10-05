import Container from "../Container";
import SectionWrapper from "../SectionWrapper";
import IncreasingBussinessCard from "../IncreasingBussinessCard";
import CardImg1 from "../../assets/healthcare/section-12-img1.png";
import CardImg2 from "../../assets/healthcare/section-12-img2.png";

let cards = [
  {
    img: CardImg1,
    items: [
      "Labs And Imaging",
      "Host in your secure server.",
      "Peer Referrals",
      "24/7 customer support.",
      "Notify Authorities. Health Dept. /Police",
      "No Registration Process.",
      "Multi-Clinic Facilitation",
      "Registrations And CME Points",
      "Digital Treatment Plans",
      "Digital Communication",
      "Complies With All EHR Standards",
      "Monitoring Patients Remotely",
      "Billing Integration",
      "Fastest Diagnosis",
    ],
  },
  {
    img: CardImg2,
    items: [
      "Medical Data (PHR) Available Anywhere",
      "Secured Password Protection",
      "Detailed One Time Registration Process",
      "Family History",
      "Allergies",
      "Reminders.",
      "Diet/Exercise/Medicine",
      "Automatic Doctor Appointments",
      "Digital Pharmacy Indent",
      "Digital Pharmacy Indent",
      "Diagnostic Centers And Labs",
      "E-Sharing Of Reports",
      "Online Submission For Medi-Claims",
    ],
  },
];

const MiscellaneousFacilities = () => {
  return (
    <Container>
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-7  text-[#0065C0]">
            Miscellaneous Facilities Of Super Doctor
          </h2>
          <p className="text-black lg:w-9/12 mx-auto text-lg">
            Apart from the unique features there are many miscellaneous features
            helping you to have a complete solution for every aspect of your
            institution. What-more all these are customisable as per your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {cards.map((item, index) => (
            <IncreasingBussinessCard
              imgClasses={"w-[250px]"}
              cardClassNames={"border px-8 gap-3"}
              key={index}
              imgTop={true}
              item={item}
              chidren={<ChekcBoxes items={item.items} />}
            />
          ))}
        </div>
      </SectionWrapper>
    </Container>
  );
};

export default MiscellaneousFacilities;

const ChekcBoxes = ({ items }) => {
  return (
    <div className="">
      {items?.map((item, index) => (
        <div key={index} className="">
          <label htmlFor={item} className="flex flex-row gap-5 items-center">
            <input type="checkbox" className="text-xl" id={item} defaultChecked />
            <span className="text-lg">{item}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
