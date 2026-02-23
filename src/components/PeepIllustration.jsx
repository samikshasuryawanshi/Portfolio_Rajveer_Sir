import React from "react";

const PeepIllustration = ({ index, className = "", style = {}, animated = true }) => {
    const rows = 15;
    const cols = 7;
    const total = rows * cols;
    const peepIndex = index !== undefined ? index % total : Math.floor(Math.random() * total);

    // Calculate position in spritesheet
    const x = (peepIndex % rows) * (100 / (rows - 1));
    const y = Math.floor(peepIndex / rows) * (100 / (cols - 1));

    return (
        <div
            className={`relative overflow-hidden ${className} ${animated ? "animate-bounce-slow" : ""}`}
            style={{
                ...style,
            }}
        >
            <div
                className="absolute inset-0 bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/peeps/all-peeps.png')",
                    backgroundSize: "1500% 700%", // 15 columns * 100%, 7 rows * 100%
                    backgroundPosition: `${x}% ${y}%`,
                    width: "100%",
                    height: "100%",
                }}
            />
            <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
};

export default PeepIllustration;
