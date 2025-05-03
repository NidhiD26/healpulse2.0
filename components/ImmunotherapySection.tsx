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
                        Inventing the Next Wave in Immunotherapy
                    </h2>

                    <p className="text-lg md:text-xl font-normal">
                        Breakthrough science has given researchers, clinicians, and
                        patients new hope in the fight against cancer. With recent
                        discoveries in immunotherapy treatments and an increased
                        understanding of the immune system’s role in fighting disease, we
                        are closer than ever before to transforming all cancers into
                        curable diseases.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImmunotherapySection;
