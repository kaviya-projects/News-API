import React from "react";

const Filters = ({ categories, sources, onCategoryChange, onSourceChange }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Category:
        <select onChange={(e) => onCategoryChange(e.target.value)} style={{ marginLeft: "10px" }}>
          <option value="">All</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>{cat}</option>
          ))}
        </select>
      </label>

      <label style={{ marginLeft: "20px" }}>
        Source:
        <select onChange={(e) => onSourceChange(e.target.value)} style={{ marginLeft: "10px" }}>
          <option value="">All</option>
          {sources.map((src, idx) => (
            <option key={idx} value={src}>{src}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Filters;
