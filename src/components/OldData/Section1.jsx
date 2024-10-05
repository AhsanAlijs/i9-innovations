import { RiArrowRightDownLine } from "@remixicon/react";
import { Link } from "react-router-dom";

export default function Section1() {
  return (
    <section className="mt-20 py-36 max-w-screen-xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-x-8 gap-y-16 max-md:grid-cols-1 justify-items-center items-center">
        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          <div>
            <h2 className="text-lg font-semibold">
              Continuity of Care
            </h2>

            <p className="mt-6 font-normal">
              Historical patient data, including past diagnoses, treatments, and outcomes, is invaluable for providing continuous and informed care. Migrating this data ensures that healthcare providers have comprehensive patient histories at their fingertips.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Regulatory Compliance
            </h2>

            <p className="mt-6 font-normal">
              With stringent data protection regulations in healthcare, ensuring that old data is securely migrated to systems that comply with current standards is essential for legal compliance and patient privacy.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Operational Efficiency
            </h2>

            <p className="mt-6 font-normal">
              Modern HMIS solutions offer superior data management and analytics capabilities. Migrating old data allows hospitals to leverage these tools for improved decision-making and operational workflows.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Cost Savings
            </h2>

            <p className="mt-6 font-normal">
              Maintaining legacy systems can be costly due to outdated infrastructure and the need for specialized support. Data migration can reduce these expenses by consolidating data into a single, more efficient system.
            </p>
          </div>
        </div>

        <div className="bg-[#0065C0] rounded-2xl p-8 h-full justify-self-center max-md:justify-self-center max-md:row-start-1 flex flex-col justify-between">
          <div>
          <h2 className="font-medium text-lg text-white">
            Importance of Old Data Migration
          </h2>
          <p className="text-white mt-6 font-normal">
            In the rapidly evolving healthcare industry, the ability to seamlessly migrate old data into new Hospital Management Information Systems (HMIS) is paramount. For hospital owners and doctors, understanding the significance of this process and leveraging the right tools, like Super Dr, can make all the difference in enhancing operational efficiency and patient care.
          </p>
          </div>

          <div className="flex flex-row items-center gap-5 mt-12">
            <a href="tel:+917304073040" className="flex flex-row items-center gap-4 px-4 py-2 text-[#0065C0] rounded-full bg-white hover:shadow-lg hover:bg-[#eee] transition-all text-sm">
              <span>Call Now</span>
              <RiArrowRightDownLine />
            </a>

          <Link to="/appointment/1" className="flex flex-row items-center gap-4 px-4 py-2 bg-[#8ABC3E] rounded-full text-white hover:shadow-lg hover:bg-[#76a134] transition-all text-sm">
            <span>Free Demo</span>
            <RiArrowRightDownLine />
          </Link>
        </div>
        </div>

        <div className="bg-[#0065C0] rounded-2xl p-8 h-full justify-self-center max-md:justify-self-center">
          <h2 className="font-medium text-lg text-white">
            The Super Dr Solution: Merging Old with the New
          </h2>
          <p className="text-white mt-6 font-normal">
          Super Dr stands out as a comprehensive HMIS solution designed with the future of healthcare in mind. It not only offers state-of-the-art patient management and EMR capabilities but also simplifies the data migration process. Here's how Super Dr can provide a competitive advantage:
          </p>
          <p className="text-white mt-2 font-normal">
          Flexible Data Integration: Super Dr allows for the selective migration of critical data, such as EMR and patient demographics, while providing the option to exclude non-essential information like outdated accounting records. This flexibility ensures that hospitals can tailor the migration process to their specific needs.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          <div>
            <h2 className="text-lg font-semibold">
              Seamless Transition
            </h2>

            <p className="mt-6 font-normal">
              With Super Dr, the transition from old systems to a new, unified platform is smooth and hassle-free, minimizing disruptions to daily operations and patient care.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Data Integrity and Security
            </h2>

            <p className="mt-6 font-normal">
              Super Dr prioritizes the integrity and security of migrated data, employing robust encryption and compliance measures to protect sensitive patient information.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Enhanced Data Usability
            </h2>

            <p className="mt-6 font-normal">
              By consolidating historical data within Super Dr's intuitive platform, healthcare providers gain enhanced access to patient histories, improving diagnostic accuracy and treatment outcomes.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold">
              Future-Proofing Healthcare
            </h2>

            <p className="mt-6 font-normal">
              Adopting Super Dr not only addresses current data migration needs but also prepares healthcare facilities for future technological advancements, ensuring long-term sustainability and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}