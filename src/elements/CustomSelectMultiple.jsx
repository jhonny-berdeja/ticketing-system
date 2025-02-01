import React, { useState, useEffect } from "react";
import "../styles/custom_select_multiple.css";

const CustomSelectMultiple = ({ fieldData, onRequest, onChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState(fieldData.value || []); // Usamos un array para seleccionar múltiples valores
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = async () => {
      if (onRequest?.shouldDisplay) {
        const visible = await onRequest.shouldDisplay();
        setIsVisible(visible);
      }
    };
    checkVisibility();
  }, [onRequest]);

  useEffect(() => {
    const fetchOptions = async () => {
      if (onRequest?.fetchOptions) {
        const data = await onRequest.fetchOptions();
        setOptions(data);
      }
    };
    fetchOptions();
  }, [onRequest]);

  const handleChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    setSelectedValues(selectedOptions);
    onChange(selectedOptions); // Mandamos los valores seleccionados al onChange
  };

  useEffect(() => {
    if (fieldData.value !== selectedValues) {
      setSelectedValues(fieldData.value); // Actualiza el estado si el valor cambia desde el formulario
    }
  }, [fieldData.value, selectedValues]);

  if (!isVisible) return null;

  return (
    <div className="container">
      <label className="label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      <select
        className="select"
        id={fieldData.name}
        name={fieldData.name}
        value={selectedValues}
        onChange={handleChange}
        disabled={!fieldData.enabled}
        multiple
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelectMultiple;
