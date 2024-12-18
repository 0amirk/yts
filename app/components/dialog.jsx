import React, { useEffect } from "react";
import { X } from "lucide-react";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Re-enable scrolling
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = ""; // Ensure scrolling is enabled when component unmounts
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center scroll animate-opacity-in"
          onClick={onClose} // Close modal on background click
        >
          {/* Modal background animation */}
          <div className="bg-black/50 h-[100vh] w-full absolute z-20"></div>
          <div
            className="relative z-50 p-6 bg-white rounded-lg w-full md:w-[750px] flex justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing on modal content click
          >
            <button
              onClick={onClose}
              className="absolute text-gray-600 hover:cursor-pointer top-2 right-2 hover:text-black"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="mt-2">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
