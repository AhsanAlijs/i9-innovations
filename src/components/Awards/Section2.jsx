import Faqs from "../Faqs";

let faqs = [
  {
    title: "What is the composition of the i9 Innovations team?",
    paragraph: "The i9 Innovations team is a diverse group of skilled professionals, including developers specialized in .NET, PHP, Java, Android, iOS, SQL, Laravel, CodeIgniter, and more. We also have experts in front-end and back-end development, UI/UX designers, project managers, healthcare consultants, and support staff, all working together to deliver cutting-edge healthcare solutions.",
  },
  {
    title: "How can I become a Key Opinion Leader (KOL) with i9 Innovations?",
    paragraph: "To become a KOL with i9 Innovations, we look for individuals with significant expertise and influence in the healthcare sector. If you're interested, please reach out to us with your credentials and areas of expertise. We value the insights and contributions of healthcare professionals in shaping the future of our solutions.",
  },
  {
    title: "How can I apply for a job at i9 Innovations?",
    paragraph: "We're always on the lookout for talented individuals passionate about making a difference in healthcare technology. Visit our careers page to view current openings or submit your resume and cover letter to our HR department. We'd love to hear from you and explore potential opportunities to join our dynamic team.",
  },
  {
    title: "What opportunities are there for professional growth at i9 Innovations?",
    paragraph: "At i9 Innovations, we believe in fostering a culture of continuous learning and professional development. We offer various opportunities for growth, including training programs, workshops, and participation in innovative projects that push the boundaries of healthcare technology.",
  },
  {
    title: "How does i9 Innovations collaborate with healthcare professionals and institutions?",
    paragraph: "Collaboration is at the heart of what we do. We work closely with healthcare professionals and institutions to understand their challenges and needs. This collaboration can take many forms, from consulting on product development to implementing customized solutions that address specific operational or clinical requirements.",
  },
];

export default function Section2() {
  return (
    <Faqs faqs={faqs} title={"FAQS"} coloredTitle={true} />
  )
}