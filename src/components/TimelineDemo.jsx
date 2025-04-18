import React from "react";
import { FiUserPlus, FiDownload, FiClock, FiCheck } from "react-icons/fi";
import TimelineSteps from "./TimelineSteps";

/** Pasos de ejemplo: ajusta textos o añade más si lo necesitas */
const steps = [
  {
    label: "Paso 1",
    Icon: FiUserPlus,
    title: "Regístrate",
    description:
      "Da de alta a tu empresa y nosotros la contactamos por ti.",
  },
  {
    label: "Paso 2",
    Icon: FiDownload,
    title: "Descarga la app",
    description:
      "Gestiona todo desde tu teléfono en cuestión de minutos.",
  },
  {
    label: "Paso 3",
    Icon: FiClock,
    title: "Liquidez al instante",
    description:
      "Recibe tu adelanto de nómina cuando lo necesites, sin trámites.",
  },
  {
    label: "Paso 4",
    Icon: FiCheck,
    title: "Disfruta la tranquilidad",
    description:
      "Olvídate del estrés financiero y dedícate a lo que realmente importa.",
  },
];

export default function TimelineDemo() {
  return (
    <div className="w-full">
      <TimelineSteps data={steps} />
    </div>
  );
}
