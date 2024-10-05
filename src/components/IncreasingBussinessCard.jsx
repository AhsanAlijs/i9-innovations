import * as Dialog from '@radix-ui/react-dialog';
import { RiCloseLine } from "@remixicon/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const IncreasingBussinessCard = ({
  cardClassNames,
  item,
  index,
  showReadMore,
  imgTop,
  chidren,
  imgClasses,
  customImg,
  linkStyles,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalImg, setModalImg] = useState(null);

  const openModal = (text, img) => {
    setModalText(text);
    if (img) setModalImg(img);
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      {showModal && <ModalPopup open={showModal} text={modalText} img={modalImg} closeModal={closeModal} />}
      <div
        className={`bg-white p-6 rounded-lg group shadow-md hover:shadow-lg transition-all flex flex-1 flex-col ${cardClassNames}`}
        key={index}
      >
        {item?.img && imgTop && !customImg ? (
          <div className="flex flex-col items-center justify-center">
            <img
              className={`${imgClasses ? imgClasses : "w-[180px] max-h-28 object-contain"}`}
              alt=""
              src={item?.img}
            />
          </div>
        ) : (
          ""
        )}

        {customImg && customImg}

        {item?.title && <h2 className="text-lg font-bold">{item?.title}</h2>}
        {showReadMore ? (
          <div className="">
            <p className="font-normal">
              {item?.paragraph?.length > 200 ? (
                <>
                  {item?.paragraph?.slice(0, 200)}...
                  <button onClick={() => openModal(item.paragraph, item.img)}>
                    <span className="text-[#8ABC3E] underline text-sm">
                      Read More
                    </span>
                  </button>
                </>
              ) : (
                item?.paragraph
              )}
            </p>
          </div>
        ) : (
          <p className="font-normal">{item.paragraph}</p>
        )}

        {chidren ? chidren : ""}

        {item?.path && (
          <Link
            to={item?.path}
            className={`text-blue-600 ${linkStyles} underline font-semibold`}
          >
            Learn more
          </Link>
        )}
        {item?.img && !imgTop ? (
          <div className="flex-1 flex flex-col items-center justify-end">
            <img className="w-[180px] max-h-28 object-contain" alt="" src={item?.img} />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default IncreasingBussinessCard;

function ModalPopup({ text, closeModal, img, open }) {
  return (
    <Dialog.Root open={open} onOpenChange={closeModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/40 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-6 focus:outline-none">
          <Dialog.Description className="text-zinc-800 mt-[10px] mb-5 text-[15px] leading-normal" asChild>
            <div className="flex gap-4 flex-col">
              {
                img &&
                <div className="flex-1 flex flex-col items-center justify-end">
                  <img className="w-[180px] max-h-28 object-contain" alt="" src={img} />
                </div>
              }
              {text}
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
  )
}
