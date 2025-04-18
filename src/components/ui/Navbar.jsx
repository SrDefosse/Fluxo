// src/components/ui/Navbar.jsx
import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div
        className="
          w-[95%] mx-auto
          bg-gradient-to-r from-[#0603FD]/80 to-[#7B68FD]/80
          rounded-full
          px-4 py-3 my-6
          flex justify-center
          shadow-lg
        "
      >
        <img
          src="/images/fluxo_navbar_white.png"
          alt="Fluxo Logo"
          className="h-8 w-auto object-contain"
        />
      </div>
    </nav>
  )
}

export default Navbar
