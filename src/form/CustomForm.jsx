import React, { useState } from "react";
import "../styles/custom_button.css";
import CustomInput from "../elements/CustomInput";
import CustomInputAutocomplete from "../elements/CustomInputAutocomplete";
import CustomSelectDynamic from "../elements/CustomSelectDynamic";
import CustomSelectMultiple from "../elements/CustomSelectMultiple";
import CustomCheckbox from "../elements/CustomCheckbox";
import CustomTextArea from "../elements/CustomTextArea";

// Los componentes disponibles
//Se crea un objeto availableComponents que asigna nombres clave a los componentes importados.
//Este objeto se usa más adelante para seleccionar dinámicamente qué componente se debe renderizar según los datos de entrada.
const availableComponents = {
  CustomInput: CustomInput,
  CustomInputAutocomplete: CustomInputAutocomplete,
  CustomSelectDynamic: CustomSelectDynamic,
  CustomSelectMultiple: CustomSelectMultiple,
  CustomCheckbox: CustomCheckbox,
  CustomTextArea: CustomTextArea,
};

//CustomForm recibe tres props importantes:
//fieldsData: Un array con la configuración de los campos del formulario.
//requestMethods: Métodos opcionales asociados a cada campo (posiblemente para validaciones, autocompletado, etc).
//onSubmit: Una función que se ejecuta cuando el formulario se envía.
const CustomForm = ({ fieldsData, requestMethods, onSubmit }) => {
  //Se inicializa el estado formData como un objeto vacío {}.
  //Este objeto almacenará los valores de los campos del formulario.
  const [formData, setFormData] = useState({});

  //actualiza el estado formData cuando un campo cambia.
  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
    console.log("");
  };

  //Se evita que el formulario recargue la página con e.preventDefault().
  //Se crea formSubmissionData, un array con:
  //fieldData: La configuración del campo.
  //value: El valor ingresado en el campo (o "" si está vacío).
  //component: El tipo de componente usado (CustomInput, CustomCheckbox, etc.).
  //Finalmente, se ejecuta la función onSubmit con estos datos.
  const handleSubmit = (e) => {
    e.preventDefault();
    const formSubmissionData = fieldsData.map((field) => ({
      fieldData: field.fieldData,
      value: formData[field.fieldData.name] || "",
      component: field.component,
    }));
    onSubmit(formSubmissionData);
  };

  // Construir el componentMap dinámicamente en base a fieldsData
  // Esto evita la inclusión de componentes innecesarios.
  const componentMap = fieldsData.reduce((acc, field) => {
    if (availableComponents[field.component]) {
      acc[field.component] = availableComponents[field.component];
    }
    return acc;
  }, {});

  // Se recorre fieldsData para renderizar cada campo.
  // Se obtiene el componente adecuado de componentMap.
  // Si el componente no está en componentMap, no se renderiza (return null).
  // Se pasa fieldData al componente y onRequest con los métodos específicos.
  // onChange actualiza el estado cuando cambia el valor del campo.
  // Se agrega un botón de envío.
  return (
    <form onSubmit={handleSubmit}>
      {fieldsData.map((field, index) => {
        const Component = componentMap[field.component];

        if (!Component) return null;

        const methods = requestMethods[field.methodsObjectName] || {};

        return (
          <Component
            key={index}
            fieldData={field.fieldData}
            onRequest={methods}
            onChange={(data) => handleChange(field.fieldData.name, data)}
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
