import React, { useState } from "react";
import "../styles/custom_button.css";

const CustomForm = ({ fieldsData, componentMap, requestMethods, onSubmit }) => {
  const [formData, setFormData] = useState({});

  // Función para manejar los cambios en los campos
  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value && value.value ? value.value : value, // Asegúrate de extraer el valor si es necesario
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Recorre los campos y asigna solo los valores a cada campo
    const formSubmissionData = fieldsData.map((field) => ({
      fieldData: field.fieldData,
      value: formData[field.fieldData.name] || "", // Incluye el valor cargado o seleccionado
      component: field.component,
    }));

    // Llamar a la función onSubmit pasada por el padre
    onSubmit(formSubmissionData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fieldsData.map((field, index) => {
        const Component = componentMap[field.component]; // Se usa `component`, no `type`

        if (!Component) return null; // Si el componente no existe, se omite

        const methods = requestMethods[field.fieldData.name] || {}; // Obtiene métodos por `name`

        return (
          <Component
            key={index}
            fieldData={field.fieldData}
            onRequest={methods}
            onChange={(data) => handleChange(field.fieldData.name, data)} // Solo pasa el valor adecuado
          />
        );
      })}

      <button className="btn btn-primary btn-block mb-3" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default CustomForm;
