import { Link, useLocation } from "react-router-dom";

export default function ProfessionalDetails() {
  const location = useLocation();

  let user = null;
  if (location.state) {
    user = location.state.user
  }

  if (!user) return null;

  return (
    <div>
      <div className="bg-white rounded-lg p-8 max-lg:p-4">
        <h2 className="text-3xl font-semibold max-sm:text-xl">
          User Information
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-6 [&_h3]:text-[#0065C0] [&_h3]:font-medium [&_a]:underline hover:[&_a]:decoration-transparent [&_a]:transition-all max-sm:grid-cols-1">
          <li>
            <h3>Full name</h3>
            <p>{user.firstName} {user.lastName}</p>
          </li>
          <li>
            <h3>Email</h3>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>
          <li>
            <h3>Phone</h3>
            <a href={`tel:${user.phone}`}>{user.phone}</a>
          </li>
          <li>
            <h3>Website</h3>
            <a href={user.website} target="_blank">{user.website}</a>
          </li>
          <li>
            <h3>Whatsapp</h3>
            <a href={`https://wa.me/${user.whatsapp}`}>{user.whatsapp}</a>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-8 max-lg:p-4 mt-6 max-lg:mt-2">
        <h2 className="text-3xl font-semibold max-sm:text-xl">
          Educational Background
        </h2>

        <div className="mt-10 w-full overflow-x-auto [scrollbar-width:thin]">
          <table className="border w-full [&_th]:border [&_td]:border [&_:is(th,td)]:p-2 [&_th]:text-[#0065C0] [&_th]:font-semibold [&_td]:text-center  max-sm:text-sm">
            <thead>
              <tr>
                <th>Degree/Course</th>
                <th>University/Institute</th>
                <th>Year of Graduate</th>
                <th>City</th>
              </tr>
            </thead>

            <tbody>
              {user.educationalBackground.map((item, i) => (
                <tr key={i}>
                  <td><p>{item.degree}</p></td>
                  <td><p>{item.university}</p></td>
                  <td><p>{item.year}</p></td>
                  <td><p>{item.city}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg p-8 max-lg:p-4 mt-6 max-lg:mt-2">
        <h2 className="text-3xl font-semibold max-sm:text-xl">
          Practice info
        </h2>

        <div className="mt-10 w-full overflow-x-auto [scrollbar-width:thin]">
          <table className="border w-full [&_th]:border [&_td]:border [&_:is(th,td)]:p-2 [&_th]:text-[#0065C0] [&_th]:font-semibold [&_td]:text-center max-sm:text-sm">
            <thead>
              <tr>
                <th>Name of hospital</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Charges</th>
                <th>Timings</th>
              </tr>
            </thead>

            <tbody>
              {user.practiceInfo.map((item, i) => (
                <tr key={i}>
                  <td><p>{item.hospital}</p></td>
                  <td><p>{item.address}</p></td>
                  <td><p>{item.phone}</p></td>
                  <td><p>{item.charges}</p></td>
                  <td><p>{item.timing}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-6 [&_h3]:text-[#0065C0] [&_h3]:font-medium max-sm:grid-cols-1">
          <li>
            <h3>Primary Specialty</h3>
            <p>{user.primarySpecialty}</p>
          </li>
          <li>
            <h3>Secondary Specialty</h3>
            <p>{user.secondarySpecialty}</p>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-lg p-8 max-lg:p-4 mt-6 max-lg:mt-2">
        <h2 className="text-3xl font-semibold max-sm:text-xl">
          Summary
        </h2>

        <div className="mt-10 w-full">
          <p>{user.aboutYourself}</p>
        </div>
      </div>

      <div className="mt-6">
        <Link to={-1} className="block ml-auto w-max bg-[#0065C0] px-8 py-4 text-lg font-medium text-white rounded-md">
          Back
        </Link>
      </div>
    </div>
  )
}