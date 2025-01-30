import React, { useState } from "react";

const CustomInputAutocomplete = ({ fieldData, onRequest, onChange }) => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    onChange(e.target.name, value); // Llamar a la función onChange para el cambio del valor

    if (value.length > 2) {
      setIsLoading(true);
      try {
        const result = await onRequest(value); // Ejecutar la solicitud para autocompletar
        setOptions(result); // Asumimos que `result` es un array de opciones
      } catch (error) {
        console.error("Error al obtener opciones de autocompletar:", error);
      } finally {
        setIsLoading(false);
      }
    } else {
      setOptions([]); // Limpiar opciones si el valor es demasiado corto
    }
  };

  const handleOptionClick = (option) => {
    onChange(fieldData.name, option.value); // Asignar el valor seleccionado al campo
    setOptions([]); // Limpiar las opciones después de seleccionar
  };

  return (
    <div>
      <label htmlFor={fieldData.name}>{fieldData.label}</label>
      <input
        id={fieldData.name}
        name={fieldData.name}
        type="text"
        value={fieldData.value}
        placeholder={fieldData.placeholder || ""}
        onChange={handleInputChange}
      />
      {isLoading && <p>Cargando...</p>}
      {options.length > 0 && (
        <ul style={{ border: "1px solid #ccc", padding: "5px", marginTop: "5px" }}>
          {options.map((option, index) => (
            <li
              key={index}
              style={{ padding: "5px", cursor: "pointer" }}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomInputAutocomplete;
