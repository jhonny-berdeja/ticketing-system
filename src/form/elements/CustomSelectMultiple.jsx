import React, { useState, useEffect } from "react";

const CustomSelectMultiple = ({ fieldData, onRequest, onChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOptions = async () => {
      setIsLoading(true);
      try {
        const result = await onRequest(); // Obtener lista de opciones desde la función proporcionada
        setOptions(result);
      } catch (error) {
        console.error("Error al obtener opciones:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOptions();
  }, [onRequest]);

  const handleSelectionChange = (event) => {
    const value = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedValues(value);
    onChange(fieldData.name, value); // Notificar cambios al formulario
  };

  return (
    <div>
      <label htmlFor={fieldData.name}>{fieldData.label}</label>
      {isLoading ? (
        <p>Cargando opciones...</p>
      ) : (
        <select
          id={fieldData.name}
          name={fieldData.name}
          multiple
          value={selectedValues}
          onChange={handleSelectionChange}
          style={{ width: "100%", height: "100px" }}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CustomSelectMultiple;
