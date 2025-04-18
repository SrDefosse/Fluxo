import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Timeline vertical con scroll‑progress.  Mantiene la estructura visual
 * del componente original (línea, fechas sticky, contenido a la derecha).
 *
 * @param {Array<{label:string,Icon:React.FC,title:string,description:string}>} data
 */
export default function TimelineSteps({ data = [] }) {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  /* Calculamos la altura total de la línea para la animación */
  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} className="w-full bg-white md:px-10">
      {/* --------  encabezado estático (opcional) -------- */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0603FD] mb-4">
          ¿Cómo funciona?
        </h2>
        <p className="text-neutral-700 text-base md:text-lg max-w-xl">
          Sigue estos sencillos pasos y disfruta de nuestro servicio.
        </p>
      </div>

      {/* --------  timeline -------- */}
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map(({ label, Icon, title, description }, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* --- columna izquierda (sticky) --- */}
            <div className="sticky top-40 z-40 flex flex-col md:flex-row items-center self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 w-10 absolute left-3 md:left-3 rounded-full bg-white flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300" />
              </div>
              <h3 className="hidden md:block md:pl-20 text-5xl font-bold text-neutral-500">
                {label}
              </h3>
            </div>

            {/* --- contenido a la derecha --- */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              {/* etiqueta para mobile */}
              <h3 className="md:hidden block text-2xl mb-4 font-bold text-neutral-500">
                {label}
              </h3>

              {/* bloque icono‑título‑texto */}
              <div className="flex flex-col items-start">
                <Icon size={36} className="text-[#0603FD] mb-4" />
                <h4 className="text-lg md:text-xl font-semibold text-neutral-800 mb-2">
                  {title}
                </h4>
                <p className="text-sm md:text-base text-neutral-600">
                  {description}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* --- línea vertical + progreso animado --- */}
        <div
          style={{ height: `${height}px` }}
          className="absolute left-8 md:left-8 top-0 w-px bg-neutral-200 [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute inset-x-0 top-0 w-px bg-gradient-to-t from-[#0603FD] via-blue-500 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
