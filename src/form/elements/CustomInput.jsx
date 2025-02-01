import React, { useState } from "react";
import "../../styles/custom_input.css";

const CustomInput = ({ fieldData, onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    onChange({ ...fieldData, value }); // Mandamos el valor al onChange
  };

  return (
    <div className="form-outline ">
      <label className="form-label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      <input
      className="form-control"
        type="text"
        id={fieldData.name}
        name={fieldData.name}
        placeholder={fieldData.placeholder}
        value={inputValue}
        onChange={handleChange}
        disabled={!fieldData.enabled}
      />
    </div>
  );
};

export default CustomInput;
