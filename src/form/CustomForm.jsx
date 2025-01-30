import React, { useState } from "react";

const CustomForm = ({ fieldsData, componentMap, requestMethods }) => {
  const [formData, setFormData] = useState(
    fieldsData.reduce((acc, field) => {
      acc[field.fieldData.name] = field.fieldData.value || ""; // Se mantiene el valor inicial si existe
      return acc;
    }, {})
  );

  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generar JSON con la misma estructura, agregando los valores seleccionados
    const updatedFieldsData = fieldsData.map((field) => ({
      ...field,
      fieldData: {
        ...field.fieldData,
        value: formData[field.fieldData.name], // Se agrega el valor ingresado por el usuario
      },
    }));

    console.log("Formulario enviado:", JSON.stringify(updatedFieldsData, null, 2));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulario Dinámico</h2>

      {fieldsData.map((field, index) => {
        const Component = componentMap[field.component];
        if (!Component) return null;

        const onRequest = field.onRequest ? requestMethods[field.onRequest] : undefined;

        return (
          <div key={index}>
            <Component
              fieldData={{
                ...field.fieldData,
                value: formData[field.fieldData.name], // Se pasa el valor actualizado
              }}
              onChange={handleChange}
              onRequest={onRequest}
            />
          </div>
        );
      })}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default CustomForm;
