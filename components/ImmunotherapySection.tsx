import React from "react";

const ImmunotherapySection: React.FC = () => {
    return (
        <div
            className="relative w-full overflow-hidden bg-black text-white"
        >
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                muted
                playsInline
                loop
            >
                <source
                    src="/Homepage-Dark-Purple-Cells.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="relative z-10 container mx-auto px-4 py-24 text-center">
                <div className="max-w-3xl mx-auto">
                    <div className="my-6 mx-auto h-1 w-20 bg-purple-500 rounded-full" />

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Where hope meets healing <br/>
                        Empowering your journey, one pulse at a time
                    </h2>

                    <p className="text-lg md:text-xl font-normal">
                       Welcome to HealPulse – Your Compassionate Companion in the Cancer Journey<br/>

At HealPulse, we believe healing goes beyond medicine. Our platform offers emotional support through guided communities and counseling, personalized nutrition charts to nourish your body, and smart reminders for medications and appointments. Daily affirmations and manifestation guides help uplift your spirit, while wellness trackers empower you to take control of your health. Together, we pulse with hope, strength, and resilience—because every step forward matters. 💜
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImmunotherapySection;
