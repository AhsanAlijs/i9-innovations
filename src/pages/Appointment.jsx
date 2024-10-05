import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import * as Dialog from '@radix-ui/react-dialog';
import { RiCloseLine } from "@remixicon/react";
import { TimePicker } from "../components/TimePicker";
import Calendar from "../components/Calendar";
import { createUserAppointment } from "../config/firebase";
import LoadingSpinner from "../components/LoadingSpinner";
import { sendAppointmentEmail } from "../config/email";

export default function AppointmentForm() {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    appointmentDate: null,
    name: '',
    email: '',
    guestEmail: '',
    notes: '',
    phone: '',
    hospital: '',
    beds: '',
  })

  useEffect(() => {
    navigate('/appointment/1', {replace: true});
  }, [])

  return (
    <>
      <main className="max-w-screen-xl mx-auto w-full p-8 max-sm:p-2 min-h-screen flex items-stretch">
        <div className="flex w-full">
          <div className="grid grid-cols-[30%_1fr] max-md:grid-cols-1 bg-white w-full h-full rounded-md">
            <div className="bg-[#0065C0] p-6 max-sm:p-4 rounded-md w-full relative overflow-hidden">
              <img src="/logo.png" alt="" className="h-16 max-sm:h-12" />
              <div className="bg-white/40 absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 size-72 rounded-full" />

              <h2 className="text-xl font-semibold text-white mt-8">
                Book your appointment
              </h2>

              <ul className="text-white flex flex-col gap-8 mt-8">
                <li className="flex gap-8 items-center ">
                  <NavLink to="/appointment/1" disabled className={`flex justify-center items-center rounded-full border border-white size-8 text-white [&.active]:bg-white [&.active]:text-zinc-800`}>
                    1
                  </NavLink>
                  <span>Select date and time</span>
                </li>
                <li className="flex gap-8 items-center ">
                  <NavLink to="/appointment/2" disabled className={`flex justify-center items-center rounded-full border border-white size-8 text-white [&.active]:bg-white [&.active]:text-zinc-800`}>
                    2
                  </NavLink>
                  <span>Details</span>
                </li>
              </ul>
            </div>

            <div className="p-8 max-sm:p-4 bg-zinc-100">
              <Outlet context={{ formData, setFormData }} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export function AppointmentForm1() {
  const { formData, setFormData } = useOutletContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/appointment/2')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-xl font-medium">
        Select Date and Time
      </h3>


      <div className="bg-white shadow-md rounded-md mx-auto max-w-max">
        <Calendar
          mode="single"
          selected={formData.appointmentDate}
          onSelect={(e) => setFormData((s) => ({ ...s, appointmentDate: e }))}
          className="rounded-md border"
        />
      </div>


      <div className="max-w-60 mx-auto mt-8 bg-white shadow-md rounded-md p-2">
        <TimePicker
          date={formData.appointmentDate ?? new Date(new Date().setHours(0, 0, 0, 0))}
          setDate={(e) => setFormData((s) => ({ ...s, appointmentDate: e }))}
        />
      </div>

      <div className="flex justify-between items-center gap-2 mt-8 max-sm:flex-col">
        <p>
          {formData.appointmentDate && `You chose ${formData.appointmentDate.toDateString()} at ${formData.appointmentDate.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' })}`}
        </p>

        <button type="submit" disabled={!formData.appointmentDate} className="bg-[#0065C0] px-6 py-2 text-white rounded-md disabled:opacity-60">
          Next
        </button>
      </div>
    </form>
  )
}

export function AppointmentForm2() {
  const { formData, setFormData } = useOutletContext();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserAppointment(formData);
      await sendAppointmentEmail({
        name: formData.name,
        email: formData.email,
        hospital: formData.hospital,
        beds: formData.beds,
        appointmentDate: `${formData.appointmentDate.toDateString()} at ${formData.appointmentDate.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: 'numeric' })}`,
      });

      setLoading(false)
      setIsModalOpen(true);
    } catch (error) {
      setLoading(false);
      setIsModalOpen(true);
      setError(true);
    }
  }

  return (
    <>
      {loading && <LoadingSpinner />}
      <form onSubmit={handleSubmit}>
        <h3 className="text-xl font-medium">
          Fill out the form
        </h3>

        <div className="mt-6 grid grid-cols-2 gap-6 max-sm:grid-cols-1">
          <input required type="text" name="name" value={formData.name} placeholder="Full name" onChange={handleChange} className="p-3 bg-white rounded font-normal" />
          <input required type="text" name="email" value={formData.email} placeholder="Email" onChange={handleChange} className="p-3 bg-white rounded font-normal" />
          <input type="text" name="guestEmail" value={formData.guestEmail} placeholder="Guest's Email" onChange={handleChange} className="p-3 bg-white rounded font-normal" />
          <input required type="text" name="phone" value={formData.phone} placeholder="Phone number" onChange={handleChange} className="p-3 bg-white rounded font-normal" />
          <input type="text" name="hospital" value={formData.hospital} placeholder="Hospital name" onChange={handleChange} className="p-3 bg-white rounded font-normal" />
          <input type="text" name="beds" value={formData.beds} placeholder="Number of beds" onChange={handleChange} className="p-3 bg-white rounded font-normal" />
          <textarea name="notes" value={formData.notes} placeholder="Share anything that will help prepare for our meeting." rows={5} onChange={handleChange} className="p-3 bg-white rounded font-normal col-span-full" />
        </div>

        <div className="flex justify-end items-center gap-2 mt-8 max-sm:flex-col">
          <button type="submit" disabled={loading} className="bg-[#0065C0] px-6 py-2 text-white rounded-md disabled:opacity-40 max-w-max text-end">
            Schedule Event
          </button>
        </div>
      </form>

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
            <Dialog.Description className="text-zinc-800 mt-[10px] mb-5 text-[15px] leading-normal" asChild>
              <div className="flex gap-4 flex-col">
                {error ?
                    <p>Something went wrong</p>
                    :
                    <p>Your appointment has been saved!</p>
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
    </>
  )
}