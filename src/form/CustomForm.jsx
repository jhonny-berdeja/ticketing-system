import React, { useState } from "react";
import "../styles/custom_button.css";
import CustomInput from "../form/elements/CustomInput";
import CustomInputAutocomplete from "../form/elements/CustomInputAutocomplete";
import CustomSelectDynamic from "../form/elements/CustomSelectDynamic";
import CustomSelectMultiple from "../form/elements/CustomSelectMultiple";
import CustomCheckbox from "../form/elements/CustomCheckbox";
import CustomTextArea from "../form/elements/CustomTextArea";

// Los componentes disponibles
const availableComponents = {
  CustomInput: CustomInput,
  CustomInputAutocomplete: CustomInputAutocomplete,
  CustomSelectDynamic: CustomSelectDynamic,
  CustomSelectMultiple: CustomSelectMultiple,
  CustomCheckbox: CustomCheckbox,
  CustomTextArea: CustomTextArea,
};

const CustomForm = ({ fieldsData, requestMethods, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value && value.value ? value.value : value,
    }));
  };

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
  const componentMap = fieldsData.reduce((acc, field) => {
    if (availableComponents[field.component]) {
      acc[field.component] = availableComponents[field.component];
    }
    return acc;
  }, {});

  return (
    <form onSubmit={handleSubmit}>
      {fieldsData.map((field, index) => {
        const Component = componentMap[field.component];

        if (!Component) return null;

        const methods = requestMethods[field.fieldData.name] || {};

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
