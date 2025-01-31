import React from "react";
import "../../styles/custom_checkbox.css";

const CustomCheckbox = ({ fieldData, onChange }) => {
  return (
  <>
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        id={fieldData.name}
        name={fieldData.name}
        checked={fieldData.value || false}
        onChange={(e) => onChange(e.target.name, e.target.checked)}
      />
      <label className="form-check-label">
        {fieldData.label}
      </label>
    </div>
  </>
  );
};

export default CustomCheckbox;
