import React, { useState, useEffect } from "react";
import "../../styles/custom_text_area.css";

const CustomTextArea = ({ fieldData, onRequest, onChange }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const checkVisibility = async () => {
      if (onRequest) {
        const result = await onRequest();
        setIsVisible(result);
      }
    };

    checkVisibility();
  }, [onRequest]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="custom-textarea-container">
      <label className="custom-textarea-label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      <textarea
        className="custom-textarea"
        id={fieldData.name}
        name={fieldData.name}
        value={fieldData.value}
        placeholder={fieldData.placeholder || ""}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default CustomTextArea;
