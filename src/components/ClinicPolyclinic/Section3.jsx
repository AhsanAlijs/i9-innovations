import Img from "../../assets/clinicpolyclinic/section3/img.png"
import Step1 from "../../assets/clinicpolyclinic/section3/step1.svg"
import Step2 from "../../assets/clinicpolyclinic/section3/step2.svg"
import Step3 from "../../assets/clinicpolyclinic/section3/step3.svg"
import Step4 from "../../assets/clinicpolyclinic/section3/step4.svg"
import Step5 from "../../assets/clinicpolyclinic/section3/step5.svg"
import Step6 from "../../assets/clinicpolyclinic/section3/step6.svg"
import Step7 from "../../assets/clinicpolyclinic/section3/step7.svg"

export default function Section3() {
  return (
    <section className="py-36 max-w-screen-xl mx-auto px-4">
      <h2 className="text-6xl max-lg:text-5xl max-sm:text-4xl font-semibold text-center mb-14">
        Key
        <span className="text-[#8ABC3E]"> Benefits</span>
      </h2>

      <img src={Img} alt="" />

      <div className="mt-12 flex flex-wrap gap-8 justify-center items-center">
        {steps.map((step) => <Step key={step.title} image={step.image} text={step.text} title={step.title} />)}
      </div>
    </section>
  )
}

function Step({ image, title, text }) {
  return (
    <article className="max-w-72">
      <img src={image} alt="" className="size-40 mx-auto" />

      <h3 className="text-[#0065C0] font-medium text-center">
        {title}
      </h3>

      <p className="text-zinc-400 mt-2 text-center">
        {text}
      </p>
    </article>
  )
}

const steps = [
  {
    image: Step1,
    title: "Efficiency and Compliance",
    text: "Streamline administrative processes and ensure compliance with legal and regulatory requirements."
  },
  {
    image: Step2,
    title: "Client Empowerment",
    text: "Empower clients with tangible evidence of their fitness progress through personalized certificates."
  },
  {
    image: Step3,
    title: "Informed Decision-Making",
    text: "Facilitate informed decision-making with clear consents, fostering trust and transparency in client relationships."
  },
  {
    image: Step4,
    title: "Liability Mitigation",
    text: "Mitigate legal liabilities by capturing electronic signatures on tailored disclaimers, setting clear expectations for clients."
  },
  {
    image: Step5,
    title: "Proactive Engagement",
    text: "Enhance client engagement with personalized Follow-Up Reminders, promoting adherence to fitness plans."
  },
  {
    image: Step6,
    title: "User-Friendly Interface",
    text: "Enjoy a user-friendly interface for ease of use by both clients and fitness professionals."
  },
  {
    image: Step7,
    title: "Customization Options",
    text: "Tailor fitness certificates, consents, disclaimers, and follow-up reminders to align with your business's unique needs and branding."
  },
]