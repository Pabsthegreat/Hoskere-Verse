import React from "react";
import "./Projectcarousel.css";

const Projectcarousel = ({ title, filters, selectedFilters, onToggleFilter }) => {
  return (
    <div className="dropdown">
      <label htmlFor="filter-select" className="dropdown-label">
        {title}
      </label>
      <select
        id="filter-select"
        className="dropdown-select"
        onChange={(e) => onToggleFilter(e.target.value)}
        value={selectedFilters[-1] || ""}
        aria-label={title}
      >
        <option value="" disabled>
          Select {title}
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
