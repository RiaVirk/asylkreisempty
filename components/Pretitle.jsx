import React from "react";

const Pretitle = ({ text, center }) => {
  return (
    <div
      className={`flex items-center gap-3 mb-4 ${center && "justify-center"}`}
    >
      <div className=" text-accent text-2xl">♦</div>

      <p className="font-primary tracking-[3.2px] uppercase text-center">
        {text}
      </p>
      <div className="  text-accent text-2xl">♦</div>
    </div>
  );
};

export default Pretitle;
