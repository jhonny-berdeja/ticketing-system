import React from "react";

const CustomInput = ({ fieldData, onChange }) => {
  return (
    <>
      <label htmlFor={fieldData.name}>{fieldData.label}</label>
      <input
        id={fieldData.name}
        name={fieldData.name}
        type={fieldData.type || "text"}
        value={fieldData.value}
        placeholder={fieldData.placeholder || ""}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
    </>
  );
};

export default CustomInput;
