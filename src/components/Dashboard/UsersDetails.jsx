import { Link, useLocation } from "react-router-dom";

export default function UserDetails() {
  const location = useLocation();

  let user = null;
  if (location.state) {
    user = location.state.user
  }

  if (!user) return null;

  let selectedDateTime = null;
  if (user.appointmentDate) {
    selectedDateTime = new Date(user.appointmentDate.seconds * 1000)
  }

  return (
    <div>
      <div className="bg-white rounded-lg p-8 max-lg:p-4">
        <h2 className="text-3xl font-semibold max-sm:text-xl">
          Appointment Details
        </h2>

        <ul className="mt-10 grid grid-cols-2 gap-6 [&_h3]:text-[#0065C0] [&_h3]:font-medium max-sm:grid-cols-1">
          <li>
            <h3>Name</h3>
            <p>{user.name}</p>
          </li>
          <li>
            <h3>Email</h3>
            <p>{user.email}</p>
          </li>
          <li>
            <h3>Mobile Number</h3>
            <p>{user.phone}</p>
          </li>
          {user.guestEmail &&
            <li>
              <h3>Guest Email</h3>
              <p>{user.guestEmail}</p>
            </li>
          }
          {user.hospital &&
            <li>
              <h3>Hospital</h3>
              <p>{user.hospital}</p>
            </li>
          }
          {user.beds &&
            <li>
              <h3>Number of beds</h3>
              <p>{user.beds}</p>
            </li>
          }
        </ul>
      </div>

      {selectedDateTime &&
        <div className="bg-white rounded-lg p-8 max-lg:p-4 col-start-2 mt-6 max-lg:mt-2">
          <h2 className="text-3xl font-semibold max-sm:text-xl">
            Appointment Date
          </h2>

          <ul className="mt-10 grid grid-cols-2 gap-6 [&_h3]:text-[#0065C0] [&_h3]:font-medium max-sm:grid-cols-1">
            <li className="flex gap-2 items-center">
              <h3>Date</h3>
              <p className="bg-slate-100 p-2 rounded-md">{selectedDateTime.toDateString()}</p>
            </li>
            <li className="flex gap-2 items-center">
              <h3>Time</h3>
              <p className="bg-slate-100 p-2 rounded-md">{selectedDateTime.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' })}</p>
            </li>
          </ul>
        </div>
      }

      {user.notes &&
        <div className="bg-white rounded-lg p-8 max-lg:p-4 col-start-2 mt-6 max-lg:mt-2">
          <h2 className="text-3xl font-semibold max-sm:text-xl">
            Appointment Notes
          </h2>

          <div className="mt-10 w-full">
            <p>{user.notes}</p>
          </div>
        </div>
      }

      <div className="mt-6">
        <Link to={-1} className="block ml-auto w-max bg-[#0065C0] px-8 py-4 text-lg font-medium text-white rounded-md">
          Back
        </Link>
      </div>
    </div>
  )
}