import React from "react";
import { Search } from "lucide-react";

const FilterBar = ({
  filters = [],

  activeFilter,
  onFilterChange,
  placeholder,
  onSearch,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => onFilterChange(filter.value)}
            className={`px-4 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
              activeFilter === filter.value
                ? "bg-gpred-500 text-white"
                : "bg-gpdark border border-gpgray/30 text-gpgray hover:border-gpred-500 hover:text-white"
            }`}
          >
            {filter.icon && <filter.icon className="w-4 h-4" />}
            {filter.label}
          </button>
        ))}
      </div>

      {onSearch && (
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gpgray w-5 h-5" />
          <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-10 pr-4 py-2 bg-gpdark border border-gpgray/30 rounded-full text-white placeholder-gpgray focus:outline-none focus:border-gpred-500"
          />
        </div>
      )}
    </div>
  );
};

export default FilterBar;
