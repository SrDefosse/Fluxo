// src/components/Beneficios.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

/* ----------------------------- datos ----------------------------- */
const benefits = [
  {
    id: 1,
    title: 'No revisamos tu historial crediticio',
    desc: 'No te pedimos tu historial crediticio ni tu historial de pagos.',
    img: '/images/mockups/mockup1.png',
  },
  {
    id: 2,
    title: 'Liquidez en un clic. Cuantas veces quieras.',
    desc: 'Accede a tu dinero en cualquier momento, sin restricciones ni complicaciones.',
    img: '/images/mockups/mockup2.png',
  },
  {
    id: 3,
    title: 'Seguros desde $10 MXN al mes',
    desc: 'Cobertura accesible para cuidar tu presupuesto sin sorpresas.',
    img: '/images/mockups/mockup3.png',
  },
  {
    id: 4,
    title: 'Sin deudas (se descuenta de tu nómina)',
    desc: 'Olvídate de recordatorios: el pago se descuenta automáticamente de tu nómina.',
    img: '/images/mockups/mockup4.png',
  },
];

/* ---------------------- animaciones de cards --------------------- */
const imageVariants = {
  hiddenLeft:  { opacity: 0, x: -120, rotateY: -25, scale: 0.9 },
  hiddenRight: { opacity: 0, x:  120, rotateY:  25, scale: 0.9 },
  visible:     {
    opacity: 1, x: 0, rotateY: 0, scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const textVariants = {
  hiddenLeft:  { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x:  80 },
  visible:     { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

/* ---------------------- imagen con fade‑in + hover --------------- */
const FadeImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <motion.img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      fetchpriority="low"
      onLoad={() => setLoaded(true)}
      whileHover={{ scale: 1.08 }}
      transition={{ scale: { type: 'spring', stiffness: 220, damping: 20 } }}
      className={`
        w-full h-auto rounded-lg select-none
        transition-opacity duration-500 will-change-transform
        ${loaded ? 'opacity-100' : 'opacity-0'}
      `}
    />
  );
};

/* ----------------------- decoraciones fijas ---------------------- */
const Decorations = () => (
    <>
      {/* Izquierda */}
      <img
        src="/images/decor/decoracion2.png"
        aria-hidden
        className="hidden lg:block absolute -left-40 top-1/4 w-64 pointer-events-none select-none"
      />
  
      {/* Derecha (arriba) */}
      <img
        src="/images/decor/decoracion1.png"
        aria-hidden
        className="hidden lg:block absolute -right-40 top-6 w-60 pointer-events-none select-none"
      />
  
      {/* Derecha (centro)  ← NUEVO */}
      <img
        src="/images/decor/decoracion4.png"
        aria-hidden
        className="hidden lg:block absolute -right-48 top-1/2 -translate-y-1/2 w-64 pointer-events-none select-none"
      />
  
      {/* Derecha (abajo) */}
      <img
        src="/images/decor/decoracion3.png"
        aria-hidden
        className="hidden lg:block absolute -right-48 bottom-10 w-72 pointer-events-none select-none"
      />
    </>
  );

/* -------------------------- componente --------------------------- */
const Beneficios = () => (
  <section className="relative mx-auto max-w-6xl px-6 lg:px-8 py-24 space-y-32">
    <Decorations />

    {benefits.map((b, idx) => {
      const imgLeftDesktop = idx % 2 === 0; // alterna sólo en desktop

      /* -- Bloque de imagen -- */
      const ImgBlock = (
        <motion.div
          variants={imageVariants}
          initial={imgLeftDesktop ? 'hiddenLeft' : 'hiddenRight'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className={`
            mx-auto max-w-xs overflow-hidden rounded-lg
            ${imgLeftDesktop ? 'order-2 lg:order-1' : 'order-2'}
          `}
        >
          <FadeImage src={b.img} alt={b.title} />
        </motion.div>
      );

      /* -- Bloque de texto -- */
      const TextBlock = (
        <motion.div
          variants={textVariants}
          initial={imgLeftDesktop ? 'hiddenRight' : 'hiddenLeft'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className={`
            flex flex-col gap-6
            ${imgLeftDesktop ? 'order-1 lg:order-2' : 'order-1'}
          `}
        >
          <h3 className="text-3xl lg:text-5xl font-bold text-[#0603FD]">
            {b.title}
          </h3>
          <p className="text-lg text-gray-600 max-w-md">{b.desc}</p>
          <button
            className="w-fit rounded-full bg-red-500 px-6 py-3 text-white text-sm font-medium
                       transition-transform hover:scale-105 active:scale-95"
          >
            Get Started
          </button>
        </motion.div>
      );

      /* -- En móvil siempre sale texto → imagen -- */
      return (
        <div key={b.id} className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {TextBlock}
          {ImgBlock}
        </div>
      );
    })}
  </section>
);

export default Beneficios;
