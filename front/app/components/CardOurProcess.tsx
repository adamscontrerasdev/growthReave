import React from "react";
import { ProcessEntity } from "../types";

interface CardOurProcessProps {
  proceso: ProcessEntity;
}

const CardOurProcess: React.FC<CardOurProcessProps> = ({ proceso }) => {
  return (
    <div className="w-full h-96 bg-neutral-950 rounded-xl overflow-hidden flex flex-col justify-center items-start p-5 gap-3">
      <h2 className="rounded-full px-2 border border-white/30">
        Step {proceso.step}
      </h2>
      <h2 className="text-xl md:text-2xl font-bold text-white">
        {proceso.title}
      </h2>
      <p className="text-white/80">{proceso.description}</p>
      <div className="w-full h-full border border-white/30 rounded-lg overflow-hidden">
        <img
          src="https://welearndata.com/wp-content/uploads/2023/06/imagen-92-1024x441.png"
          alt=""
          className="w-full"
        />
      </div>
    </div>
  );
};

export default CardOurProcess;
