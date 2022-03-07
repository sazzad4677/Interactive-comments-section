import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";

const Delete = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 mx-auto  w-96 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex min-h-screen items-end justify-center px-2 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-flex transform flex-col justify-center  gap-5 overflow-hidden rounded-lg bg-neutral-white px-2 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:pb-4 sm:align-middle">
              <div className="bg-neutral-white">
                <div className=" sm:flex sm:items-start">
                  <div className="mt-0 flex flex-col gap-4 text-center sm:mt-0  sm:text-left">
                    <h2 className="font-mono text-2xl font-medium text-neutral-dark-blue">
                      Delete comment
                    </h2>
                    <div>
                      <p className="font-mono text-base text-neutral-grayish-blue">
                        Are you sure you want to delete this comment? This will
                        remove the comment and cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 bg-neutral-white pb-4 font-mono">
                <button
                  type="button"
                  className="w-full rounded-md border border-transparent bg-neutral-grayish-blue px-6 py-3 text-base font-medium tracking-wide text-neutral-white "
                  onClick={() => setOpen(false)}
                >
                  NO, CANCEL
                </button>
                <button
                  type="button"
                  className="w-full  rounded-md bg-primary-soft-red px-6 py-3 text-base font-medium tracking-wide text-neutral-white shadow-sm focus:outline-none"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  YES, DELETE
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Delete;
