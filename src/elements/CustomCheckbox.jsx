import React from "react";
import "../styles/custom_checkbox.css";

const CustomCheckbox = ({ fieldData, onChange }) => {
  const handleChange = (event) => {
    const value = event.target.checked;
    onChange(value);
  };

  return (
    <div className="form-check">
      <input
      className="form-check-input"
        type="checkbox"
        id={fieldData.name}
        name={fieldData.name}
        onChange={handleChange}
      />
      <label className="form-check-label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
