import React from "react";

const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center mb-12 animate-fade-in ${className}`}>
      <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gpred-500 to-gporange-500 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && <p className="text-xl text-gpgray">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
