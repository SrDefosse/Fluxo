import React from "react";

const ButtonWrapper = ({ text }) => {
  return (
    <div className="flex items-center justify-center">
      <RoundedSlideButton text={text} />
    </div>
  );
};

const RoundedSlideButton = ({ text }) => {
  return (
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-full border-[1px] 
        border-[#0603FD] bg-white px-4 py-2 font-semibold
        text-[#0603FD] transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-[#0603FD]
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-white
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <span>{text}</span>
    </button>
  );
};

export default ButtonWrapper;