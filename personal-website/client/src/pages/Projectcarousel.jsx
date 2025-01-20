import React from "react";
import "./Projectcarousel.css";

const Projectcarousel = ({ title, filters, selectedFilters, onToggleFilter }) => {
  return (
    <div className="dropdown">
      <select
        className="dropdown-select"
        onChange={(e) => onToggleFilter(e.target.value)}
        value={selectedFilters[-1]||""}
      >
        <option value="" disabled>
          {title}
        </option>
        {filters.map((filter, index) => (
          <option key={index} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Projectcarousel;
