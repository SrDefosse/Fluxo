// GlassInput.jsx
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

const GlassInput = () => {
  const inputRef = useRef(null);

  return (
    <div className="w-full max-w-md py-4">
      <form
        onSubmit={(e) => e.preventDefault()}
        onClick={() => inputRef.current.focus()}
        className="
          relative flex items-center gap-3
          backdrop-blur-md bg-[#0603FD]/30
          border border-white/30
          rounded-2xl shadow-lg
          px-5 py-3
        "
      >
        <input
          ref={inputRef}
          type="email"
          placeholder="Tu correo electrónico"
          className="
            flex-1 bg-transparent
            text-gray-900 placeholder-white
            text-sm focus:outline-none
          "
        />

        <button
          onClick={(e) => e.stopPropagation()}
          type="submit"
          className="
            flex shrink-0 items-center gap-1.5
            rounded-full bg-white/80
            px-4 py-2 text-sm font-medium text-gray-800
            shadow-md transition-transform duration-150
            active:scale-95
          "
        >
          <span>Registrarse</span>
          <FiArrowRight className="-mr-3 opacity-0 transition-all duration-200 group-hover:-mr-1 group-hover:opacity-100" />
        </button>
      </form>
    </div>
  );
};

export default GlassInput;
