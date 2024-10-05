import React from 'react'
import Container from '../Container'
import SectionWrapper from '../SectionWrapper';
import CardImg1 from "../../assets/abdm/section3/img1.png";
import CardImg2 from "../../assets/abdm/section3/img2.png";
import CardImg3 from "../../assets/abdm/section3/img3.png";
import CardImg4 from "../../assets/abdm/section3/img4.png";
import SuperDrAppComponent from '../SuperDrAppComponent';

let cards = [
  {
    title: "The Power of ABDM and ABHA in Indian Healthcare",
    paragraph: "At the heart of India's healthcare innovation, ABDM aims to develop a digital framework that supports universal health coverage in an inclusive, accessible, affordable, timely, and safe manner. A pivotal element of ABDM is the ABHA, which empowers individuals with a unique health ID, granting them access to their health records across multiple healthcare providers seamlessly.",
    img: CardImg1,
  },
  {
    title: "Integrating ABHA Compliance in Hospital Software: A Path Forward",
    paragraph: "For hospital software to be truly effective in the context of India's digital healthcare ambitions, ABHA compliance is non-negotiable. Software developers must ensure that their systems are equipped to handle ABHA IDs, can securely manage and store digital health records, and facilitate seamless data exchange across the healthcare continuum.",
    img: CardImg2,
  },
  {
    title: "Conclusion: Shaping the Future of Healthcare in India",
    paragraph: "The integration of ABDM and ABHA in hospital software is more than a regulatory requirement; it's a step towards a future where healthcare in India is interconnected, patient-focused, and driven by innovation. By harnessing the power of digital health IDs and ensuring ABHA compliance, hospitals can unlock new potentials in patient care, operational efficiency, and contribute to the national vision of a digital health ecosystem.",
    img: CardImg3,
  },
  {
    title: "The Human Touch in Technology",
    paragraph: "While we embrace the digital transformation of healthcare, it's imperative to keep the human aspect at the forefront. Hospital software should not only be technologically advanced but also intuitive and user-friendly, ensuring that both healthcare providers and patients can navigate the digital health landscape with ease and confidence.",
    img: CardImg4,
  },
];

const Section3 = () => {
  return (
    <Container>
      <SectionWrapper>
        <SuperDrAppComponent cards={cards} />
      </SectionWrapper>
    </Container>
  )
}

export default Section3