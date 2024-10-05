import React, { useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { createUserAppointment } from "../config/firebase";
import LoadingSpinner from "./LoadingSpinner";
import { RiCloseLine } from "@remixicon/react";
import { sendAppointmentEmail } from "../config/email";

export default function EnquireNow({ header }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guestEmail: "",
    phone: "",
    hospital: "",
    beds: "",
    appointmentDate: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);


  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      await createUserAppointment(formData);

      // await sendAppointmentEmail({
      //   name: formData.name,
      //   email: formData.email,
      //   hospital: formData.hospital,
      //   beds: formData.beds,
      //   appointmentDate: ''
      // });

      setLoading(false);
      setIsModalOpen(true);
    } catch (error) {
      setLoading(false);
      setIsModalOpen(true);
      setError(true);
    }
  };

  return (
    <>
      <article id="enquiry-form" className={`max-w-screen-lg w-full mx-auto px-4 ${header ? 'translate-y-1/2' : 'translate-y-10'}`}>
        <div className="bg-white rounded-xl border shadow-2xl p-12">
          {header ?
              <h2 className="font-semibold text-2xl text-center">
                Get a Free trial for 6 Months. Select from over 100 Modules
              </h2>
              :
              <div className="flex flex-col text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-semibold text-[#A3DC2F]">
                  Enquire Now
                </h2>
                <h3 className="text-lg md:text-xl font-semibold">
                  And we will connect with you within 24 hours!
                </h3>
              </div>
          }

          <form className="mt-10" onSubmit={onSubmit}>
            <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
              <input
                required
                minLength={2}
                value={formData.name}
                onChange={(e) => {
                  setFormData((pre) => ({ ...pre, name: e.target.value }));
                }}
                placeholder="Your Full Name"
                className="rounded-full border px-6 py-3"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => {
                  setFormData((pre) => ({ ...pre, email: e.target.value }));
                }}
                placeholder="Your Email ID"
                className="rounded-full border px-6 py-3"
              />
              <input
                value={formData.phone}
                onChange={(e) => {
                  setFormData((pre) => ({ ...pre, phone: e.target.value }));
                }}
                type="text"
                placeholder="Your Phone Number"
                className="rounded-full border px-6 py-3"
              />
              <input
                minLength={3}
                required
                value={formData.hospital}
                onChange={(e) => {
                  setFormData((pre) => ({
                    ...pre,
                    hospital: e.target.value,
                  }));
                }}
                placeholder="Name of your Hospital"
                className="rounded-full border px-6 py-3"
              />
              <input
                required
                value={formData.beds}
                onChange={(e) => {
                  setFormData((pre) => ({
                    ...pre,
                    beds: e.target.value,
                  }));
                }}
                type="text"
                placeholder="Number of Beds"
                className="rounded-full border px-6 py-3"
              />

              <button type="submit" className="col-span-full justify-self-center px-10 py-2.5 bg-[#0065C0] rounded-full text-white hover:shadow-lg hover:bg-[#1a74c6] transition-all">
                Submit
              </button>
            </div>
          </form>
        </div>
      </article>

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
                    <p>Your info has been noted. We will connect with you within 24 hours!</p>
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
  );
};
