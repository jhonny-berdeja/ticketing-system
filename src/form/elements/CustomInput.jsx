import React from "react";
import "../../styles/custom_input.css"

const CustomInput = ({ fieldData, onChange }) => {
  return (
  <>
    <div className="form-outline">
      <label className="form-label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      <input
        className="form-control"
        id={fieldData.name}
        name={fieldData.name}
        type={fieldData.type || "text"}
        value={fieldData.value}
        placeholder={fieldData.placeholder || ""}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
    </div>
  </>
  );
};

export default CustomInput;
