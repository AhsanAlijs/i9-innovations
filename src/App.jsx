import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, Outlet } from "react-router-dom";
import About from "./pages/About";
import ABDM from "./pages/abdm";
import SoftwareEmr from "./pages/SoftwareEMR";
import SoftwareHmis from "./pages/SoftwareHmis";
import SoftwareLims from "./pages/SoftwareLims";
import Home from "./pages/Home";
import Awards from "./pages/Awards";
import Career from "./pages/Career";
import RisPacs from "./pages/RisPacs";
import OnLinePharmacy from "./pages/OnLinePharmacy";
import SoftWareHealthcare from "./pages/SoftWareHealthcare";
import CustomizedClinic from "./pages/CustomizedClinic";
import HealthcareMedical from "./pages/HealthcareMedical";
import MaximizingEfficiency from "./pages/MaximizingEfficiency";
import ClinicPolyclinic from "./pages/ClinicPolyclinic";
import Modules from "./pages/Modules";
import ExplainerVideo from "./pages/ExplainerVideo";
import OldData from "./pages/OldData";
import Signin from "./pages/Signin";
// import Signup from "./pages/Signup";
import OurTeam from "./pages/OurTeam";
import Blogs from "./pages/Blogs";
import BlogPage from "./pages/Blogs/BlogPage";
import PageNotFound from "./pages/404";
import AppointmentForm, { AppointmentForm1, AppointmentForm2 } from "./pages/Appointment";
import JoinOurNetwork, { ReferralForm0, ReferralForm1, ReferralForm2, ReferralForm3 } from "./pages/JoinOurNetwork";
import Dashboard from "./pages/Dashboard";
import UsersList from "./components/Dashboard/UsersList";
import UserDetails from "./components/Dashboard/UsersDetails";
import ProfessionalsList from "./components/Dashboard/ProfessionalsList";
import ProfessionalDetails from "./components/Dashboard/ProfessionalDetails";
import JobApplicationsList from "./components/Dashboard/JobApplicationsList";
import JobList from "./components/Dashboard/JobList";
import JobDetails from "./components/Dashboard/JobDetails";
import BlogList from "./components/Dashboard/BlogsList";
import BlogDetails from "./components/Dashboard/BlogDetails";
import Protect from "./components/Protect";
import '@mdxeditor/editor/style.css';

function App() {
  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/emr" element={<SoftwareEmr />} />
          <Route path="/hmis" element={<SoftwareHmis />} />
          <Route path="/lims" element={<SoftwareLims />} />
          <Route path="/healthcare" element={<SoftWareHealthcare />} />
          <Route path="/ris-pacs" element={<RisPacs />} />
          <Route path="/abdm" element={<ABDM />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/career" element={<Career />} />
          <Route path="/super-dr-modules" element={<Modules />} />
          <Route path="/explainer-video" element={<ExplainerVideo />} />
          <Route path="/online-pharmacy" element={<OnLinePharmacy />} />
          <Route path="/customize-clinic" element={<CustomizedClinic />} />
          <Route path="/healthcare-medical" element={<HealthcareMedical />} />
          <Route path="/polyclinic" element={<ClinicPolyclinic />} />
          <Route path="/old-data" element={<OldData />} />
          <Route path="/maximizing-efficiency" element={<MaximizingEfficiency />}/>

          <Route path="/blogs" element={<Outlet />}>
            <Route index={true} element={<Blogs />} />
            <Route path=":slug" element={<BlogPage />} />
          </Route>

          <Route path="/join-our-network" element={<JoinOurNetwork />}>
            <Route index={true} element={<ReferralForm0 />} />
            <Route path="1" element={<ReferralForm1 />} />
            <Route path="2" element={<ReferralForm2 />} />
            <Route path="3" element={<ReferralForm3 />} />
          </Route>

          <Route path="/dashboard" element={<Protect><Dashboard /></Protect>}>
            <Route path="users" element={<UsersList />} />
            <Route path="users/:id" element={<UserDetails />} />
            <Route path="healthcare-professionals" element={<ProfessionalsList />} />
            <Route path="healthcare-professionals/:id" element={<ProfessionalDetails />} />
            <Route path="job-list" element={<JobList />} />
            <Route path="job-list/:id" element={<JobDetails />} />
            <Route path="job-applications" element={<JobApplicationsList />} />
            <Route path="blogs" element={<BlogList />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            {/* <Route path="create-admin" element={<Signup />} /> */}
          </Route>

          <Route path="/appointment" element={<AppointmentForm />}>
            <Route path="1" element={<AppointmentForm1 />} />
            <Route path="2" element={<AppointmentForm2 />} />
          </Route>

          <Route path="/signin" element={<Signin />} />
          {/* <Route path="/signup" element={<Signup />} /> */}
          
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
