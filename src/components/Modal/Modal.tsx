import React, { useEffect } from "react";

interface Props {
  title: string;
  open: boolean;
}

const Modal: React.FC<Props> = ({ open, title, children }) => {
  useEffect(() => {
    if (open) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [open]);
  return open ? (
    <div className="fixed top-0 right-0 bottom-0 left-0  overflow-y-auto bg-backdrop text-center">
      <div className="bg-white rounded shadow w-11/12 p-2 sm:w-9/12 sm:p-4 lg:w-8/12 mx-auto my-10 flex flex-col">
        <div className="mb-4">
          <h1 className="text-left font-semibold uppercase border-b pb-2 text-sm">
            ✏ {title}
          </h1>
        </div>
        <div className="mb-4">{children}</div>
      </div>
    </div>
  ) : null;
};

export default Modal;
