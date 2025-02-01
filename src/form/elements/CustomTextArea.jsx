import React, { useState, useEffect } from "react";
import "../../styles/custom_text_area.css"

const CustomTextArea = ({ fieldData, onRequest, onChange }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Lógica para comprobar si se debe mostrar el TextArea
  useEffect(() => {
    const checkVisibility = async () => {
      const visible = await onRequest.shouldDisplay();
      setIsVisible(visible);
    };
    checkVisibility();
  }, [onRequest]);

  if (!isVisible) return null; // Si no se debe mostrar, no renderizamos el componente

  return (
    <div className="custom-textarea-container">
      <label className="custom-textarea-label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      <textarea
        className="custom-textarea"
        id={fieldData.name}
        name={fieldData.name}
        placeholder={fieldData.placeholder}
        disabled={!fieldData.enabled}
        onChange={(e) => onChange({ ...fieldData, value: e.target.value })}
      />
    </div>
  );
};

export default CustomTextArea;
