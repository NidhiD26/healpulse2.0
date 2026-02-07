import React from "react";

const ImmunotherapySection: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        playsInline
        loop
      >
        <source src="/Homepage-Dark-Purple-Cells.mp4" type="video/mp4" />
      </video>

      <div className="relative z-10 container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto glass p-10 md:p-16 rounded-[2.5rem] space-y-8 border-white/20">
          <div className="mx-auto h-1.5 w-24 bg-gradient-to-r from-primary to-accent rounded-full" />

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Where hope meets <span className="gradient-text">healing</span>{" "}
            <br />
            <span className="text-3xl md:text-5xl font-bold opacity-90">
              Empowering your journey, one pulse at a time
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-light max-w-2xl mx-auto">
            Welcome to HealPulse – Your Compassionate Companion in the Cancer
            Journey.
          </p>

          <p className="text-base md:text-lg text-white/70 leading-relaxed font-normal">
            At HealPulse, we believe healing goes beyond medicine. Our platform
            offers emotional support, personalized nutrition, and smart
            reminders to help you pulse with hope, strength, and resilience.
            Every step forward matters. 💜
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImmunotherapySection;
