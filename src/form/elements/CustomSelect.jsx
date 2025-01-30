import React from "react";

const CustomSelect = ({ fieldData, onChange }) => {
  return (
    <div>
      <label htmlFor={fieldData.name}>{fieldData.label}</label>
      <select
        id={fieldData.name}
        name={fieldData.name}
        value={fieldData.value}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      >
        {fieldData.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
