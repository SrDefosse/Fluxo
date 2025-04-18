// src/components/Quincena.jsx
import React from 'react'
import WhiteExpandButton from './ui/WhiteExpandButton'

const Quincena = () => {
  return (
    <section className="w-full bg-[#0603FD] text-white min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row items-center w-full py-16 px-4 lg:px-16">

        {/* Texto y botón (siempre en columna y alineado a la izquierda) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            No vuelvas a preocuparte por llegar a la quincena.
          </h1>
          <p className="text-lg mb-6 max-w-md">
            Di adiós al estrés e insatisfacción con tu sueldo.
          </p>
          <div className="mt-4">
            <WhiteExpandButton text="Descarga la App" />
          </div>
        </div>

        {/* Imagen (centrada en cada columna) */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <img
            src="/images/quincena.png"
            alt="Ilustración llegada de la quincena"
            className="w-full h-auto max-w-lg"
          />
        </div>

      </div>
    </section>
  )
}

export default Quincena
