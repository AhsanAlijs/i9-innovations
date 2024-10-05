import Img1 from '../../assets/awards/section1/img1.png'
import Img2 from '../../assets/awards/section1/img2.png'
import Img3 from '../../assets/awards/section1/img3.png'
import Img4 from '../../assets/awards/section1/img4.jpeg'
import Img5 from '../../assets/awards/section1/img5.png'
import AwardCard from "./AwardCards";

export default function Section1() {
  return (
    <section className="py-36">
      <div className="flex flex-wrap justify-center max-w-screen-2xl mx-auto">
        <AwardCard
          title="A Tribute to Our Team's Hard Work and Dedication"
          paragraph="Our journey to excellence is paved with the hard work, dedication, and passion of our team members. Each Awards and Recognition we receive is a reflection of the countless hours of effort, innovative thinking, and unwavering commitment to our mission. It's their resilience and teamwork that transform challenges into opportunities and visions into realities."
          img={Img1}
        />
        <AwardCard
          title="Honoring the Wisdom of Our KOL Doctors"
          paragraph="The insights and expertise of our Key Opinion Leaders (KOL) doctors have been instrumental in guiding our path. Their deep understanding of healthcare's complexities and their commitment to patient care have enriched our solutions, making them not just technologically advanced but also deeply empathetic and patient-centric."
          img={Img2}
        />
        <AwardCard
          title="Looking Forward: The Journey Continues"
          paragraph="While we take a moment to celebrate our achievements, we remain focused on the future. The awards we've received fuel our drive to innovate, improve, and impact the healthcare industry positively. We are excited about the possibilities that lie ahead and are committed to continuing our journey of excellence with the support of our incredible team and KOL doctors."
          img={Img3}
        />
        <AwardCard
          title="A Culture of Innovation and Excellence"
          paragraph="At i9 Innovations, we foster a culture where innovation thrives and excellence is the norm. Our awards are a testament to this culture, encouraging us to push the boundaries of what's possible in healthcare technology and to continue delivering solutions that make a real difference."
          img={Img4}
        />
        <AwardCard
          title="Awards and Recognitions: A Testament to Our Excellence"
          paragraph="At i9 Innovations, we take immense pride in the awards and recognitions we have received over the years. Each accolade serves as a testament to our unwavering commitment to excellence in healthcare technology and innovation. These honors not only acknowledge our team's hard work and dedication but also reinforce our resolve to continue pushing the boundaries of what's possible in digital healthcare solutions. Our journey is marked by numerous milestones that reflect our passion for making a significant impact in the healthcare industry, and each award motivates us to set even higher standards of excellence."
          img={Img5}
        />
      </div>
    </section>

  )
}