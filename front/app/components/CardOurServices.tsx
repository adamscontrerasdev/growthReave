import React from "react";
import { ServiceEntity } from "../types";

interface CardOurServicesProps {
  services: ServiceEntity;
}

export const CardOurServices: React.FC<CardOurServicesProps> = ({
  services,
}) => {
  return (
    <div
      className={`flex md:gap-10 max-w-7xl w-full justify-between items-center md:h-96 ${
        services.order === 1 ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col `}
    >
      {/* Card izquierda: Imagen */}
      <div className="md:w-1/2 h-full bg-neutral-900 rounded-lg overflow-hidden flex justify-center items-center">
        <img
          src="https://images.ctfassets.net/8aevphvgewt8/6c7chpnM6t8hmLG6AWy2AJ/652974d3eb91ece9774d8773c943dba4/actions-collaborate.webp"
          alt="Workflow"
          className="w-full"
        />
      </div>

      {/* Card derecha: Texto */}
      <div className="md:w-1/2 h-full  flex flex-col items-start justify-center gap-3 p-6 ">
        <h2 className="px-3 py-1 border border-white/30 rounded-lg bg-neutral-950 text-sm">
          {services.name}
        </h2>
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          {services.title}
        </h2>
        <p className="text-white/80">{services.description}</p>

        <div className="flex gap-2 justify-center items-center">
          {services.points.map((point, i) => (
            <h2
              className="px-3 py-1 border border-white/30 rounded-lg bg-neutral-950 
              text-sm text-nowrap"
              key={i}
            >
              {point}
            </h2>
          ))}
        </div>
      </div>
    </div>
  );
};
