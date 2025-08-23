import React from "react";

const StatsBanner = ({ stats }) => {
  return (
    <div className="bg-gradient-to-r from-gpred-900/30 to-gporange-900/30 border-y border-gpred-500/20 py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-black/30 p-6 rounded-xl border border-gpred-500/20 text-center hover:scale-105 transition-transform duration-300"
          >
            <div className={`inline-block p-3 rounded-full mb-4 ${stat.color}`}>
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold mb-2 text-white">{stat.value}</h3>
            <p className="text-gpgray">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;
