import React from "react";

const CardOurProcess = () => {
  return (
    <div className="w-full h-96 bg-neutral-950 rounded-xl overflow-hidden flex flex-col justify-center items-start p-5 gap-3">
      <h2 className="rounded-full px-2 border border-white/30">Step 1</h2>
      <h2 className="text-xl md:text-2xl font-bold text-white">
        Smart Analyzing
      </h2>
      <p className="text-white/80">
        We assess your needs and identify AI solutions to streamline workflows
        and improve efficiency.
      </p>
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
