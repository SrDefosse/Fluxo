import React from 'react';
import BlueExpandButton from './ui/BlueExpandButton';
import { FiUserPlus, FiDownload, FiClock, FiCheck } from 'react-icons/fi';
import { FaHandHoldingUsd } from 'react-icons/fa';

const steps = [
  {
    title: 'Da de alta a tu empresa y nosotros la contactamos',
    icon: <FiUserPlus />,
    bgColor: 'bg-purple-200',
    iconColor: 'text-purple-600',
    dotColor: 'bg-purple-600',
    lineColor: 'text-purple-600',
  },
  {
    title: 'Conoceremos tus necesidades para darte beneficios a tu medida',
    icon: <FaHandHoldingUsd />,
    bgColor: 'bg-red-200',
    iconColor: 'text-red-600',
    dotColor: 'bg-red-600',
    lineColor: 'text-red-600',
  },
  {
    title: 'Descarga la app',
    icon: <FiDownload />,
    bgColor: 'bg-[#0603FD]',
    iconColor: 'text-white',
    dotColor: 'bg-[#0603FD]',
    lineColor: 'text-[#0603FD]',
  },
  {
    title: '¡Tu cuenta ya está creada! Solo entra con un click.',
    icon: <FiCheck />,
    bgColor: 'bg-red-200',
    iconColor: 'text-red-600',
    dotColor: 'bg-red-600',
    lineColor: 'text-red-600',
  },
  {
    title: 'Ingresa el monto que quieres adelantar de tu nómina, y en menos de 3 segundos está en tu cuenta.',
    icon: <FiClock />,
    bgColor: 'bg-purple-200',
    iconColor: 'text-purple-600',
    dotColor: 'bg-purple-600',
    lineColor: 'text-purple-600',
  },
];

const ComoFunciona = () => {
  // Build a linear array: [step, connector, step, connector, ...]
  const gridItems = steps.flatMap((step, idx) => {
    const stepEl = (
      <div
        key={`step-${idx}`}
        className="flex flex-col items-center px-4 w-full md:col-span-1"
      >
        <div className={`${step.bgColor} ${step.iconColor} p-4 rounded-full text-2xl`}>
          {step.icon}
        </div>
        <p className="mt-4 text-center text-sm text-gray-500 min-h-[3rem]">
          {step.title}
        </p>
        {idx === 2 && (
          <div className="mt-4">
            <BlueExpandButton text="Descargar" />
          </div>
        )}
      </div>
    );

    if (idx < steps.length - 1) {
      const connectorEl = (
        <div
          key={`conn-${idx}`}
          className="flex justify-center md:col-span-1"
        >
          {/* Vertical connector on mobile */}
          <div className={`md:hidden flex flex-col items-center ${step.lineColor}`}>
            <span className={`w-3 h-3 rounded-full ${step.dotColor}`} />
            <div className="h-10 w-px border-l-2 border-dashed border-current my-2" />
            <span className={`w-3 h-3 rounded-full ${steps[idx + 1].dotColor}`} />
          </div>

          {/* Horizontal connector on desktop */}
          <div className="hidden md:flex items-center flex-1">
            <span className={`w-3 h-3 rounded-full ${step.dotColor}`} />
            <div className="flex-1 h-px border-t-2 border-dashed border-current mx-2" />
            <span className={`w-3 h-3 rounded-full ${steps[idx + 1].dotColor}`} />
          </div>
        </div>
      );
      return [stepEl, connectorEl];
    }

    return [stepEl];
  });

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0603FD] mb-12 text-left">
          ¿CÓMO FUNCIONA<br /><span className="font-bold">FLUXO</span> PARA TUS EMPLEADOS?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-9 gap-y-8 md:gap-x-8 items-start md:items-center">
          {gridItems}
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
