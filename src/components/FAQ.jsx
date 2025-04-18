import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

const BasicFAQ = () => {
  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h3 className="mb-4 text-center text-3xl font-semibold">
          Frequently asked questions
        </h3>
        <Question title="¿Puedo usar FLUXO si mi empresa no lo ha dado de alta?" defaultOpen>
          <p>
          No. Por el momento FLUXO solo está disponible para los empleados de empresas dadas de alta, pero no te preocupes, dar de alta a tu empresa es muy fácil y rápido. Contáctanos por WhatsApp y nosotros nos encargamos.
          </p>
        </Question>
        <Question title="¿Puedo adelantar si estoy en buró de crédito?">
          <p>
          Si. Nosotros no checamos tu historial crediticio. Si tu empresa está dada de alta, puedes pedir tu adelanto de nómina en cualquier momento y se descontará al final de tu quincena/semana para no endeudarte.
          </p>
        </Question>
        <Question title="¿Tiene costo usar la app FLUXO?">
          <p>
          No. Usar FLUXO es 100% gratuito y libre de intereses al pedir tu adelanto. Nosotros solo cobramos un fee fijo por transacción que ronda alrededor de los $55 pesos mexicanos dependiendo del monto adelantado.
          </p>
        </Question>
        <Question title="¿Cómo puedo usar FLUXO?">
          <p>
          Para usar FLUXO, primero debes descargar la app desde el Play Store o App Store. Una vez instalada, inicia sesión con tu correo electrónico y contraseña. Si no tienes una cuenta, puedes crear una nueva desde la app.
          </p>
        </Question>
      </div>
    </div>
  );
};

const Question = ({ title, children, defaultOpen = false }) => {
  const [ref, { height }] = useMeasure();
  const [open, setOpen] = useState(defaultOpen);

  return (
    <motion.div
      animate={open ? "open" : "closed"}
      className="border-b-[1px] border-b-slate-300"
    >
      <button
        onClick={() => setOpen((pv) => !pv)}
        className="flex w-full items-center justify-between gap-4 py-6"
      >
        <motion.span
          variants={{
            open: {
              color: "rgba(3, 6, 23, 0)",
            },
            closed: {
              color: "rgba(3, 6, 23, 1)",
            },
          }}
          className="bg-[#0603FD] bg-clip-text text-left text-lg font-medium"
        >
          {title}
        </motion.span>
        <motion.span
          variants={{
            open: {
              rotate: "180deg",
              color: "rgb(124 58 237)",
            },
            closed: {
              rotate: "0deg",
              color: "#030617",
            },
          }}
        >
          <FiChevronDown className="text-2xl" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? height : "0px",
          marginBottom: open ? "24px" : "0px",
        }}
        className="overflow-hidden text-slate-600"
      >
        <p ref={ref}>{children}</p>
      </motion.div>
    </motion.div>
  );
};

export default BasicFAQ;