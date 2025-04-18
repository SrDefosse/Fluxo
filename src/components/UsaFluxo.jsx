// UsaFluxo.jsx
import React from 'react';
import GlassInput from './ui/GlassInput';

const UsaFluxo = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      {/* GIF full-bleed de fondo */}
      <img
        src="/images/usafluxo.gif"
        alt="Animación FLUXO"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Card centrado */}
      <div className="
        relative z-10
        w-full max-w-md
        bg-white/80 backdrop-blur-md
        rounded-2xl
        p-6 lg:p-12
        flex flex-col items-center text-center space-y-4
      ">
        <h2 className="text-2xl lg:text-4xl font-bold text-[#0603FD]">
          ¿Quieres poder usar <span className="uppercase">FLUXO</span> en tu empresa?
        </h2>
        <p className="text-base text-[#0603FD]">
          Recomiéndala y gana <span className="font-semibold">$10000</span> pesos por darla de alta.
        </p>

        {/* GlassInput centrado */}
        <div className="w-full">
          <GlassInput />
        </div>

        <p className="text-xs text-gray-500">
          Aplican términos y condiciones
        </p>
      </div>
    </section>
  );
};

export default UsaFluxo;
