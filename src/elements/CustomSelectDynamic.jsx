import React, { useState, useEffect } from "react";
import "../styles/custom_select_dynamic.css";

const CustomSelectDynamic = ({ fieldData, onRequest, onChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState(fieldData.value || ""); // Inicializa con el valor
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
    const value = event.target.value;
    setSelectedValue(value);
    onChange(value); // Pasa solo el valor del campo
  };

  useEffect(() => {
    if (fieldData.value !== selectedValue) {
      setSelectedValue(fieldData.value); // Actualiza el estado si el valor cambia desde el formulario
    }
  }, [fieldData.value, selectedValue]);

  if (!isVisible) return null;

  return (
    <div className="container">
      <label className="label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      <select
        className="select"
        id={fieldData.name}
        name={fieldData.name}  // Asegúrate de que tenga un nombre único aquí también
        value={selectedValue}
        onChange={handleChange}
        disabled={!fieldData.enabled}
      >
        <option value="">Seleccione una opción</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};


export default CustomSelectDynamic;
