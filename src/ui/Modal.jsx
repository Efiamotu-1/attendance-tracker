import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useTheme } from "../context/ThemeContext";

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  const { isDarkMode } = useTheme();

  if (name !== openName) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in" />
      
      {/* Modal */}
      <div 
        ref={ref}
        className={`relative w-full max-w-md border rounded-2xl shadow-2xl animate-slide-up transition-colors ${
          isDarkMode 
            ? 'bg-dark-800 border-dark-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className={`absolute top-4 right-4 p-2 rounded-lg transition-colors ${
            isDarkMode 
              ? 'hover:bg-dark-700 text-dark-400 hover:text-white' 
              : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
          }`}
        >
          <HiXMark className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6">
          {cloneElement(children, { onCloseModal: close })}
        </div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
