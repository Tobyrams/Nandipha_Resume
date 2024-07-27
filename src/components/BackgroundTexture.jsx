import React from "react";

const BackgroundTexture = () => {
  return (
    <div
      className="fixed  inset-0 h-full w-full bg-base-100"
      style={{
        backgroundImage:
          "radial-gradient(var(--fallback-bc, oklch(var(--bc)/0.2)) 1px, transparent 1px)",
        backgroundSize: "16px 16px",
      }}
    ></div>
  );
};

export default BackgroundTexture;
