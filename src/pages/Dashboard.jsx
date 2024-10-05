import { useEffect, useState } from "react";
import { RiArrowDropRightLine, RiCodeSSlashLine, RiGroup3Line, RiPagesLine, RiProfileLine, RiUserAddLine, RiUserLine } from "@remixicon/react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { getBlogPosts, getHealthCareProfessionals, getJobApplications, getJobs, getUserAppointments, signout } from "../config/firebase";

export default function Dashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [usersList, setUsersList] = useState([]);
  const [professionalsList, setProfessionalsList] = useState([]);
  const [jobApplicationsList, setJobApplicationsList] = useState([]);
  const [jobsList, setJobsList] = useState([]);
  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const [users, professionals, jobApplications, jobs, blogs] = await Promise.all([
        getUserAppointments(),
        getHealthCareProfessionals(),
        getJobApplications(),
        getJobs(),
        getBlogPosts(),
      ]);

      return { users, professionals, jobApplications, jobs, blogs };
    }

    getData().then((res) => {
      setUsersList(res.users);
      setProfessionalsList(res.professionals);
      setJobApplicationsList(res.jobApplications);
      setJobsList(res.jobs);
      setBlogsList(res.blogs);
    });
  }, []);

  const handleLogout = async () => {
    await signout();
    navigate('/');
  }

  let user = null;
  if (location.state) {
    user = location.state.user
  }

  return (
    <>
      <div>
        <header className="p-2 max-w-screen-2xl mx-auto flex justify-between items-center">
          <img src="/logo2.png" alt="Logo of i9 innovations" className="h-16" />

          <div className="flex gap-4 items-center">
            <button onClick={handleLogout} className="bg-[#0065C0] hover:bg-[#1a74c6] transition-colors font-medium px-6 py-2 text-white rounded-md">
              Logout
            </button>
          </div>
        </header>

        <div className="header-background2 h-52 w-full rounded-lg relative overflow-hidden">
          <div className="bg-white/40 absolute bottom-0 right-1/4 translate-y-1/2 size-72 rounded-full" />
          {user &&
            <div className="max-w-screen-2xl mx-auto relative w-full h-full">
              <div className="flex gap-4 items-center absolute top-1/2 left-4 -translate-y-1/2">
                <div className="rounded-full shrink-0">
                  <img src={user.profilePic ? user.profilePic : "/user.svg"} alt="Profile photo of user" className="size-28 max-sm:size-12 object-cover rounded-full" />
                </div>

                <div>
                  <p className="text-3xl font-bold max-sm:text-xl">{user.name ? user.name : `${user.firstName} ${user.lastName}`}</p>
                  <p>{user.email} • {user.phone}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>

      <main className="bg-slate-100 p-6 min-h-[80vh] max-lg:p-2">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-[22%_1fr] max-md:grid-cols-1 gap-6 max-lg:gap-2">
          <div className="bg-white rounded-lg p-8 max-lg:p-4">
            <ul className="flex flex-col gap-2 text-sm font-medium">
              <li>
                <NavLink to="/dashboard/users" className="text-center flex items-center justify-between gap-2 hover:bg-[#0066c007] [&.active]:bg-[#0066c01e] [&.active]:text-black p-4 rounded-md">
                  <RiUserLine size={20} color="#0065C0" className="shrink-0" />
                  <span>Appointments</span>
                  <RiArrowDropRightLine size={20} color="#0065C0" className="shrink-0" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/healthcare-professionals" className="text-center flex items-center justify-between gap-2 hover:bg-[#0066c007] [&.active]:bg-[#0066c01e] [&.active]:text-black p-4 rounded-md">
                  <RiGroup3Line size={20} color="#0065C0" className="shrink-0" />
                  <span>Professionals</span>
                  <RiArrowDropRightLine size={20} color="#0065C0" className="shrink-0" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/job-applications" className="text-center flex items-center justify-between gap-2 hover:bg-[#0066c007] [&.active]:bg-[#0066c01e] [&.active]:text-black p-4 rounded-md">
                  <RiProfileLine size={20} color="#0065C0" className="shrink-0" />
                  <span>Job applications</span>
                  <RiArrowDropRightLine size={20} color="#0065C0" className="shrink-0" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/job-list" className="text-center flex items-center justify-between gap-2 hover:bg-[#0066c007] [&.active]:bg-[#0066c01e] [&.active]:text-black p-4 rounded-md">
                  <RiCodeSSlashLine size={20} color="#0065C0" className="shrink-0" />
                  <span>Job ads</span>
                  <RiArrowDropRightLine size={20} color="#0065C0" className="shrink-0" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/blogs" className="text-center flex items-center justify-between gap-2 hover:bg-[#0066c007] [&.active]:bg-[#0066c01e] [&.active]:text-black p-4 rounded-md">
                  <RiPagesLine size={20} color="#0065C0" className="shrink-0" />
                  <span>Blogs</span>
                  <RiArrowDropRightLine size={20} color="#0065C0" className="shrink-0" />
                </NavLink>
              </li>
              {/* <li>
                <NavLink to="/dashboard/create-admin" className="text-center flex items-center justify-between gap-2 hover:bg-[#0066c007] [&.active]:bg-[#0066c01e] [&.active]:text-black p-4 rounded-md">
                  <RiUserAddLine size={20} color="#0065C0" className="shrink-0" />
                  <span>Create admin</span>
                  <RiArrowDropRightLine size={20} color="#0065C0" className="shrink-0" />
                </NavLink>
              </li> */}
            </ul>
          </div>

          <Outlet context={{ 
            usersList,
            setUsersList,
            professionalsList,
            setProfessionalsList,
            jobApplicationsList,
            setJobApplicationsList,
            jobsList,
            setJobsList,
            blogsList,
            setBlogsList,
          }} />
        </div>
      </main>
    </>
  )
}