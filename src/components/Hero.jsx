// src/components/HeroSection.jsx
import React from 'react'
import BlueExpandButton from './ui/BlueExpandButton'
import WhiteExpandButton from './ui/WhiteExpandButton'

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between bg-white rounded-2xl p-8 shadow-2xl">
      {/* Lado Izquierdo */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-semibold leading-snug text-gray-900 mb-4">
          Con <span className="text-[#0603FD] font-bold">FLUXO</span>, tu salario,<br/>
          a tu alcance, al instante.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Ayuda a tus empleados a resolver imprevistos financieros de manera rápida y segura.
        </p>
        <div className="flex space-x-4">
          <BlueExpandButton text="Descarga la app"></BlueExpandButton>
          <WhiteExpandButton text="Explora sus beneficios"></WhiteExpandButton>
        </div>
      </div>

      {/* Lado Derecho */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/fluxo-hero.gif"
          alt="Ilustración animada de FLUXO"
          className="w-full max-w-md"
        />
      </div>
    </section>
  )
}

export default Hero
