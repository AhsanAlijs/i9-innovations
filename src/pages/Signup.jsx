import { useState } from "react";
import * as Dialog from '@radix-ui/react-dialog';
import { Link, useNavigate } from "react-router-dom";
import { setUser, signup } from "../config/firebase";
import LoadingSpinner from "../components/LoadingSpinner";
import { RiCloseLine } from "@remixicon/react";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

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
      const userCredential = await signup(formData.email, formData.password);
      await setUser(userCredential.uid, formData.email);
      setLoading(false);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      setLoading(false);
      if (error.code === 'auth/email-already-in-use') setErrorMsg('Email is already taken. Try another one.');
      else setErrorMsg('Something went wrong. Try again later.')
      setIsModalOpen(true);
    }
  }

  return (
    <>
      <main className="bg-white flex flex-col justify-center items-center relative px-4">
        <form className="bg-white rounded-md p-12 max-w-lg w-full max-sm:px-6" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold text-center text-[#0065C0]">
            Create Admin
          </h1>

          <div className="mt-8 max-w-sm mx-auto flex flex-col gap-8 focus-visible:[&_input]:outline focus-visible:[&_input]:outline-2 focus-visible:[&_input]:outline-[#0065C0]">
            <div>
              <label htmlFor="email">Email</label>
              <input required name="email" value={formData.email} onChange={handleChange} id="email" type="email" className="p-3 bg-slate-100 rounded font-normal w-full" placeholder="abc@gmail.com" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input required name="password" value={formData.password} onChange={handleChange} id="password" type="password" className="p-3 bg-slate-100 rounded font-normal w-full" placeholder="••••••" />
            </div>

            <button type="submit" className="bg-[#0065C0] px-6 py-2 text-white rounded-md">
              Signup
            </button>

            <p className="font-normal text-center">
              Already have an account?
              {' '}
              <Link to="/signin" className="text-[#0065C0] underline hover:decoration-transparent transition-colors">Sign in.</Link>
            </p>
          </div>
        </form>
      </main>
      {loading && <LoadingSpinner />}

      <Dialog.Root open={isModalOpen} onOpenChange={setIsModalOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
            <Dialog.Description className="text-zinc-800 mt-[10px] mb-5 text-[15px] leading-normal" asChild>
              <div className="flex gap-4 flex-col">
                <p>{errorMsg}</p>
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