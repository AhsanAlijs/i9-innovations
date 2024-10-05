import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import * as Dialog from '@radix-ui/react-dialog';
import { RiAddLine, RiCloseLine, RiSubtractLine } from "@remixicon/react";
import { produce } from "immer";

import Header from "../components/Header";
import LoadingSpinner from "../components/LoadingSpinner";
import Footer from "../components/Footer";
import SideBtn from "../components/SideBtn";
import { createHealthCareProfessional, uploadFile } from "../config/firebase";
import Icon1 from "../assets/join-our-network/icon1.svg"
import Icon2 from "../assets/join-our-network/icon2.svg"
import Icon3 from "../assets/join-our-network/icon3.svg"
import Icon4 from "../assets/join-our-network/icon4.svg"

export default function JoinOurNetwork() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    whatsapp: '',
    educationalBackground: [{ degree: '', university: '', year: '', city: '' }],
    practiceInfo: [{ hospital: '', address: '', phone: '', timing: '', charges: '' }],
    aboutYourself: ''
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    navigate('/join-our-network', { replace: true });
  }, [])

  return (
    <>
      <Header title={"Join Our Network of Healthcare Professionals"} />

      <div className="max-w-screen-xl mx-auto mt-52 px-4 pb-24 grid grid-cols-[1fr_2.5fr] max-lg:grid-cols-1 gap-8">
        <nav className="flex flex-col gap-4">
          <NavLink to="/join-our-network" onClick={(e) => { e.preventDefault() }} end={true} className="flex gap-6 max-lg:gap-4 max-lg:p-2 items-center bg-white shadow-lg rounded-md [&.active]:bg-[#8ABC3E] [&.active]:text-white p-6 pointer-events-none max-lg:text-sm">
            <span className="p-2 rounded-full bg-[#0065C033] shrink-0">
              <img src={Icon1} alt="" className="size-10 max-lg:size-6" />
            </span>
            <span>Personal Information</span>
          </NavLink>
          <NavLink to="/join-our-network/1" onClick={(e) => { e.preventDefault() }} end={true} className="flex gap-6 max-lg:gap-4 max-lg:p-2 items-center bg-white shadow-lg rounded-md [&.active]:bg-[#8ABC3E] [&.active]:text-white p-6 pointer-events-none max-lg:text-sm">
            <span className="p-2 rounded-full bg-[#0065C033] shrink-0">
              <img src={Icon2} alt="" className="size-10 max-lg:size-6" />
            </span>
            <span>Educational Background</span>
          </NavLink>
          <NavLink to="/join-our-network/2" onClick={(e) => { e.preventDefault() }} end={true} className="flex gap-6 max-lg:gap-4 max-lg:p-2 items-center bg-white shadow-lg rounded-md [&.active]:bg-[#8ABC3E] [&.active]:text-white p-6 pointer-events-none max-lg:text-sm">
            <span className="p-2 rounded-full bg-[#0065C033] shrink-0">
              <img src={Icon3} alt="" className="size-10 max-lg:size-6" />
            </span>
            <span>Practice Info</span>
          </NavLink>
          <NavLink to="/join-our-network/3" onClick={(e) => { e.preventDefault() }} end={true} className="flex gap-6 max-lg:gap-4 max-lg:p-2 items-center bg-white shadow-lg rounded-md [&.active]:bg-[#8ABC3E] [&.active]:text-white p-6 pointer-events-none max-lg:text-sm">
            <span className="p-2 rounded-full bg-[#0065C033] shrink-0">
              <img src={Icon4} alt="" className="size-10 max-lg:size-6" />
            </span>
            <span>About Yourself</span>
          </NavLink>
        </nav>

        <main className="w-full rounded-md shadow-md p-8">
          <div className="flex gap-6 justify-between items-center max-sm:flex-col">
            <img src="/logo2.png" alt="Logo of i9 innovation" className="h-20" />

            <div>
              <h2 className="text-lg font-semibold">Hello Dr,</h2>
              <p className="mt-4 font-normal">
                Welcome to our referral program. Please enter your details so we can recommend you to our corporate clients. Its FREE.
              </p>
            </div>
          </div>

          <Outlet context={{ formData, setFormData, image, setImage }} />
        </main>
      </div>

      <Footer />
      <SideBtn />
    </>
  );
}

export function ReferralForm0() {
  const { formData, setFormData } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    let data = {}
    for (let [key, value] of form.entries()) {
      data[key] = value;
    }

    setFormData((s) => ({ ...s, ...data }));
    navigate('/join-our-network/1')
  }

  return (
    <div className="py-6">
      <h3 className="text-lg font-medium">
        Personal Information
      </h3>

      <form className="grid grid-cols-2 gap-6 mt-6 [&>*:not(button)]:max-sm:col-span-full" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName" className="text-sm">First Name</label>
          <input id="firstName" required name="firstName" type="text" defaultValue={formData.firstName} className="rounded-full px-6 py-3 bg-zinc-100" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="lastName" className="text-sm">Last Name</label>
          <input id="lastName" required name="lastName" type="text" defaultValue={formData.lastName} className="rounded-full px-6 py-3 bg-zinc-100" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">Email</label>
          <input id="email" required name="email" type="email" defaultValue={formData.email} className="rounded-full px-6 py-3 bg-zinc-100" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm">Phone</label>
          <input id="phone" required name="phone" type="text" defaultValue={formData.phone} className="rounded-full px-6 py-3 bg-zinc-100" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="website" className="text-sm">Website</label>
          <input id="website" name="website" type="text" defaultValue={formData.website} className="rounded-full px-6 py-3 bg-zinc-100" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="whatsapp" className="text-sm">Whatsapp</label>
          <input id="whatsapp" name="whatsapp" type="text" defaultValue={formData.website} className="rounded-full px-6 py-3 bg-zinc-100" />
        </div>

        <button type="submit" className="col-span-full max-w-max py-3 px-9 rounded-full bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white justify-self-end">
          Next
        </button>
      </form>
    </div>
  )
}

export function ReferralForm1() {
  const { formData, setFormData } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    for (let [key, value] of form.entries()) {

      if (key.startsWith('table')) {
        const keyIndex = key.split('.');
        setFormData(produce(s => { s.educationalBackground[keyIndex[2]][keyIndex[1]] = value }))
      } else {
        setFormData(produce(s => { s[key] = value }))
      }
    }

    navigate('/join-our-network/2')
  }

  const addRows = () => {
    setFormData(produce(s => { s.educationalBackground.push({ degree: '', university: '', year: '', city: '' }) }))
  }

  const subtractRows = () => {
    setFormData(produce(s => { s.educationalBackground.pop({ degree: '', university: '', year: '', city: '' }) }))
  }

  return (
    <div className="py-6">
      <h3 className="text-lg font-medium">
        Educational Background
      </h3>

      <form className="grid grid-cols-2 gap-6 mt-6" onSubmit={handleSubmit}>
        <div className="col-span-full w-full overflow-x-auto [scrollbar-width:thin]">
          <table className="border w-full [&_th]:border [&_td]:border [&_input]:p-2 [&_th]:p-2">
            <thead>
              <tr>
                <th>Degree/Course</th>
                <th>University/Institute</th>
                <th>Year of Graduate</th>
                <th>City</th>
              </tr>
            </thead>

            <tbody className="[&_input]:w-full">
              {formData.educationalBackground.map((item, i) => (
                <tr key={i}>
                  <td><div className="flex"><input type="text" required defaultValue={item.degree} name={`table.degree.${i}`} /></div></td>
                  <td><div className="flex"><input type="text" required defaultValue={item.university} name={`table.university.${i}`} /></div></td>
                  <td><div className="flex"><input type="text" required defaultValue={item.year} name={`table.year.${i}`} /></div></td>
                  <td><div className="flex"><input type="text" required defaultValue={item.city} name={`table.city.${i}`} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-full flex justify-center items-center">
          <button type="button" disabled={formData.educationalBackground.length === 1} className="size-10 bg-[#0065C0] text-white flex justify-center items-center disabled:bg-opacity-50 rounded-l-full hover:bg-[#1a74c6]" onClick={subtractRows}>
            <RiSubtractLine size={18} />
          </button>
          <button type="button" disabled={formData.educationalBackground.length === 5} className="size-10 bg-[#0065C0] text-white flex justify-center items-center disabled:bg-opacity-50 rounded-r-full hover:bg-[#1a74c6]" onClick={addRows}>
            <RiAddLine size={18} />
          </button>
        </div>

        <button type="button" onClick={() => navigate(-1)} className="max-w-max py-3 px-9 rounded-full bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white justify-self-start">
          Back
        </button>

        <button type="submit" className="max-w-max py-3 px-9 rounded-full bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white justify-self-end">
          Next
        </button>
      </form>
    </div>
  )
}

export function ReferralForm2() {
  const { formData, setFormData } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    for (let [key, value] of form.entries()) {
      if (key.startsWith('table')) {
        const keyIndex = key.split('.');
        setFormData(produce(s => { s.practiceInfo[keyIndex[2]][keyIndex[1]] = value }))
      } else {
        setFormData(produce(s => { s[key] = value }))
      }
    }

    navigate('/join-our-network/3')
  }

  const addRows = () => {
    setFormData(produce(s => { s.practiceInfo.push({ hospital: '', address: '', phone: '', timing: '', charges: '' }) }))
  }

  const subtractRows = () => {
    setFormData(produce(s => { s.practiceInfo.pop({ hospital: '', address: '', phone: '', timing: '', charges: '' }) }))
  }

  return (
    <div className="py-6">
      <h3 className="text-lg font-medium">
        Practice Info
      </h3>

      <form className="grid grid-cols-2 gap-6 mt-6 [&>*:not(button)]:max-sm:col-span-full" onSubmit={handleSubmit}>
        <div className="col-span-full w-full overflow-x-auto [scrollbar-width:thin]">
          <table className="border w-full [&_th]:border [&_td]:border [&_input]:p-2 [&_th]:p-2">
            <thead>
              <tr>
                <th>Hospital / Clinic</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Timing</th>
                <th>Charges</th>
              </tr>
            </thead>

            <tbody className="[&_input]:w-full">
              {formData.practiceInfo.map((item, i) => (
                <tr key={i}>
                  <td><div className="flex"><input type="text" required defaultValue={item.hospital} name={`table.hospital.${i}`} /></div></td>
                  <td><div className="flex"><input type="text" required defaultValue={item.address} name={`table.address.${i}`} /></div></td>
                  <td><div className="flex"><input type="text" required defaultValue={item.phone} name={`table.phone.${i}`} /></div></td>
                  <td><div className="flex"><input type="text" required defaultValue={item.timing} name={`table.timing.${i}`} /></div></td>
                  <td><div className="flex"><input type="text" required defaultValue={item.charges} name={`table.charges.${i}`} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="col-span-full flex justify-center items-center">
          <button type="button" disabled={formData.practiceInfo.length === 1} className="size-10 bg-[#0065C0] text-white flex justify-center items-center disabled:bg-opacity-50 rounded-l-full hover:bg-[#1a74c6]" onClick={subtractRows}>
            <RiSubtractLine size={18} />
          </button>
          <button type="button" disabled={formData.practiceInfo.length === 5} className="size-10 bg-[#0065C0] text-white flex justify-center items-center disabled:bg-opacity-50 rounded-r-full hover:bg-[#1a74c6]" onClick={addRows}>
            <RiAddLine size={18} />
          </button>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="primarySpecialty" className="text-sm">Primary Specialty</label>
          <input id="primarySpecialty" name="primarySpecialty" type="text" required defaultValue={formData.primarySpecialty} className="rounded-full px-6 py-3 bg-zinc-100" />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="secondarySpecialty" className="text-sm">Secondary Specialty</label>
          <input id="secondarySpecialty" name="secondarySpecialty" type="text" defaultValue={formData.secondarySpecialty} className="rounded-full px-6 py-3 bg-zinc-100" />
        </div>

        <button type="button" onClick={() => navigate(-1)} className="max-w-max py-3 px-9 rounded-full bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white justify-self-start">
          Back
        </button>

        <button type="submit" className="max-w-max py-3 px-9 rounded-full bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white justify-self-end">
          Next
        </button>
      </form>
    </div>
  )
}

export function ReferralForm3() {
  const { formData, setFormData, image, setImage } = useOutletContext();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate(false);

  useEffect(() => {
    if (!formSubmitted) return;
    createHealthCareProfessional(formData).then(() => {
      setLoading(false);
      setIsModalOpen(true);
    }).catch(() => {
      setLoading(false);
      setIsModalOpen(true);
      setError(true);
    });
  }, [formSubmitted, formData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    setLoading(true)
    const imageUrl = await uploadFile(image);
    setFormData((s) => ({ ...s, aboutYourself: form.get('aboutYourself'), profilePic: imageUrl, profilePicName: image.name }));
    setFormSubmitted(true);
  }

  const handleChange = (e) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const newName = `professionals/${formData.email}.${file.name}.${Date.now()}`
      const renamedFile = new File([file], newName, { type: file.type, lastModified: file.lastModified })
      setImage(renamedFile);
    }
  }

  return (
    <div className="py-6">
      <h3 className="text-lg font-medium">
        About Yourself
      </h3>

      <form className="grid grid-cols-2 gap-6 mt-6" onSubmit={handleSubmit}>
        <div className="col-span-full flex flex-col gap-2">
          <textarea required rows={6} id="aboutYourself" name="aboutYourself" type="text" defaultValue={formData.aboutYourself} className="rounded-md px-6 py-3 bg-zinc-100" />
        </div>

        <div className="col-span-full bg-zinc-50 border-dashed border-2 border-zinc-300 p-4 rounded-md flex justify-between gap-4 items-center min-h-32">
          <label className="px-3 py-2 rounded-full bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white cursor-pointer">
            {image ? 'Change photo' : 'Upload file'}
            <input required type="file" name="profilePic" className="sr-only" accept="image/*" onChange={handleChange} />
          </label>

          {image && <img src={URL.createObjectURL(image)} alt="" className="size-16 rounded-full" />}
        </div>

        <button type="button" onClick={() => navigate(-1)} className="max-w-max py-3 px-9 rounded-full bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white justify-self-start">
          Back
        </button>

        <button type="submit" className="max-w-max py-3 px-9 rounded-full bg-[#0065C0] hover:bg-[#1a74c6] transition-colors text-white justify-self-end">
          Submit
        </button>
      </form>

      {loading && <LoadingSpinner />}

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
            <Dialog.Description className="text-zinc-800 mt-[10px] mb-5 text-[15px] leading-normal" asChild>
              <div className="flex gap-4 flex-col">
                {
                  error ?
                    <p>Something went wrong</p>
                    :
                    <>
                      <p>We're thrilled to have you consider joining the i9 Innovations network, where we bridge the gap between top-tier healthcare professionals and corporate clients. This registration is completely free, reflecting our commitment to improving healthcare accessibility and collaboration.</p>
                      <p>Also If you know any fellow healthcare professionals who would benefit from and contribute to our network, please feel free to share this link with them. Together, we can expand a community dedicated to excellence in patient care.</p>
                      <p>Thank you for your commitment to healthcare excellence. We look forward to welcoming you and your esteemed colleagues to our private network.</p>
                    </>
                }
              </div>
            </Dialog.Description>

            <Dialog.Close asChild>
              <button className="text-[#0065C0] absolute top-2 right-2 inline-flex size-6 appearance-none items-center justify-center rounded-full" aria-label="Close">
                <RiCloseLine size={24} />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}