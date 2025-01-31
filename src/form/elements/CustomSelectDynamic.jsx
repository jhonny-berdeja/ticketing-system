import React, { useState, useEffect } from "react";
import "../../styles/custom_select_dynamic.css";

const CustomSelectDynamic = ({ fieldData, onRequest, onChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
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
    const value = event.target.value;
    setSelectedValue(value);
    onChange(fieldData.name, value); // Notificar cambios al formulario
  };

  return (
    <div className="container">
      <label className="label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      {isLoading ? (
        <p>Cargando opciones...</p>
      ) : (
        <select
        className="select"
          id={fieldData.name}
          name={fieldData.name}
          value={selectedValue}
          onChange={handleSelectionChange}
          style={{ width: "100%" }}
        >
          <option value="">Seleccione una opción</option>
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

export default CustomSelectDynamic;
