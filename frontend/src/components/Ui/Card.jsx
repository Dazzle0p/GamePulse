import React from "react";

const Card = ({ children, className = "", hoverEffect = true }) => {
  return (
    <div
      className={`bg-gpdark border border-gpgray/20 rounded-2xl p-6 transition-colors duration-300 ${
        hoverEffect ? "hover:border-gpred-500 group" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
