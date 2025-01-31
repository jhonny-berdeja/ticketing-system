import React from "react";
import "../../styles/custom_select.css";

const CustomSelect = ({ fieldData, onChange }) => {
  return (
<>
  <div className="container">
    <label className="label" htmlFor={fieldData.name}>
      {fieldData.label}
    </label>
    <select
      className="select"
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
</>
  );
};

export default CustomSelect;
