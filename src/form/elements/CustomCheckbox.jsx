import React from "react";

const CustomCheckbox = ({ fieldData, onChange }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          id={fieldData.name}
          name={fieldData.name}
          checked={fieldData.value || false}
          onChange={(e) => onChange(e.target.name, e.target.checked)}
        />
        {fieldData.label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
