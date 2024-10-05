import { useMemo, useState } from "react";
import { RiArrowRightDoubleLine, RiCloseLine, RiDeleteBinLine } from "@remixicon/react";
import * as Dialog from '@radix-ui/react-dialog';
import { Link, useOutletContext } from "react-router-dom";
import Pagination from "../Pagination";
import LoadingSpinner from "../LoadingSpinner";
import { deleteFile, deleteHealthCareProfessionals, getHealthCareProfessionals } from "../../config/firebase";
import { paginateArray } from "../../utils/functions";

export default function ProfessionalsList() {
  const { professionalsList, setProfessionalsList } = useOutletContext();
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedUsers = useMemo(() => paginateArray(professionalsList, 10), [professionalsList]);

  const [loading, setLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteProfessionalsId, setDeleteProfessionalsId] = useState(null);
  const [deleteProfessionalsImg, setDeleteProfessionalsImg] = useState(null);

  const openDeleteModal = (id, name) => {
    setIsDeleteModalOpen(true);
    setDeleteProfessionalsId(id);
    setDeleteProfessionalsImg(name);
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteHealthCareProfessionals(deleteProfessionalsId);
      await deleteFile(deleteProfessionalsImg);
      const professionals = await getHealthCareProfessionals();
      setProfessionalsList(professionals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setIsDeleteModalOpen(false);
      setDeleteProfessionalsId(null);
      setDeleteProfessionalsImg(null);
    }
  }

  return (
    <div className="bg-white rounded-lg p-8 max-lg:p-4">
      <h2 className="text-3xl font-semibold max-sm:text-xl">
        List of Healthcare professionals ({professionalsList.length})
      </h2>

      {loading && <LoadingSpinner />}

      <div className="mt-10 w-full overflow-x-auto [scrollbar-width:thin]">
        {professionalsList.length === 0 ?
          <p>No users</p>
          :
          <table className="w-full [&_td]:text-center [&_tr]:border-b [&_td]:py-4 max-sm:text-sm">
            <thead>
              <tr className="text-[#0065C0] font-medium">
                <td>Name</td>
                <td>Email</td>
                <td>Mobile Number</td>
                <td>Specialty</td>
                <td>Details</td>
                <td>Action</td>
              </tr>
            </thead>

            <tbody>
              {paginatedUsers[currentPage - 1].map((user, i) => (
                <tr key={`${user.id}-${i}`}>
                  <td>{user.firstName} {user.lastName}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.primarySpecialty}</td>
                  <td>
                    <Link to={`/dashboard/healthcare-professionals/${user.id}`} state={{ user }} className="text-[#0065C0] underline hover:decoration-transparent transition-colors flex justify-center items-center group">
                      <span>View Details</span>
                      <RiArrowRightDoubleLine size={18} color="#0065C0" className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </td>
                  <td>
                    <button onClick={() => openDeleteModal(user.id, user.profilePicName)} className="text-red-600 underline hover:decoration-transparent transition-colors flex justify-center items-center group w-full">
                      <RiDeleteBinLine size={20} className="" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }

        <Dialog.Root open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
              <Dialog.Description className="text-zinc-800 mt-[10px] mb-5 leading-normal" asChild>
                <div className="flex gap-4 flex-col">
                  <p>Are you sure you want to delete this user?</p>
                </div>
              </Dialog.Description>
              <div className="mt-6 flex gap-4 justify-end items-center">
                <button onClick={handleDelete} className="p-2 text-sm bg-red-600 text-white rounded-md">
                  Yes
                </button>
                <Dialog.Close asChild>
                  <button className="p-2 text-sm border rounded-md">
                    No
                  </button>
                </Dialog.Close>
              </div>

              <Dialog.Close asChild>
                <button className="text-[#0065C0] absolute top-2 right-2 inline-flex size-6 appearance-none items-center justify-center rounded-full" aria-label="Close">
                  <RiCloseLine size={24} />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

        <div className="mt-4">
          <Pagination page={currentPage} count={paginatedUsers.length} onChange={setCurrentPage} />
        </div>
      </div>
    </div>
  )
}