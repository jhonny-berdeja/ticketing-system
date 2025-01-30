import React from "react";
import CustomForm from "../form/CustomForm";
import CustomInput from "../form/elements/CustomInput";
import CustomSelect from "../form/elements/CustomSelect";
import CustomCheckbox from "../form/elements/CustomCheckbox";
import CustomInputAutocomplete from "../form/elements/CustomInputAutocomplete";
import CustomSelectMultiple from "../form/elements/CustomSelectMultiple";
import CustomSelectDynamic from "../form/elements/CustomSelectDynamic";
import fieldsData from "../json/fields.json"; // Importa JSON

const componentMap = {
  CustomInput: CustomInput,
  CustomSelect: CustomSelect,
  CustomCheckbox: CustomCheckbox,
  CustomInputAutocomplete: CustomInputAutocomplete,
  CustomSelectMultiple: CustomSelectMultiple,
  CustomSelectDynamic: CustomSelectDynamic,
};

const Home = () => {
  // Definir múltiples métodos para obtener datos
  const requestMethods = {
    searchUser: async (query) => {
      const users = [
        { value: "Juan Pérez", label: "Juan Pérez" },
        { value: "Maria García", label: "Maria García" },
        { value: "Carlos López", label: "Carlos López" },
      ];
      return users.filter((user) =>
        user.label.toLowerCase().includes(query.toLowerCase())
      );
    },
    fetchRoles: async () => {
      return [
        { value: "admin", label: "Administrador" },
        { value: "user", label: "Usuario" },
        { value: "guest", label: "Invitado" },
      ];
    },
    fetchDynamicOptions: async () => {
      return [
        { value: "option1", label: "Opción 1" },
        { value: "option2", label: "Opción 2" },
        { value: "option3", label: "Opción 3" },
      ];
    },
  };

  return (
    <div>
      <h1>¡Hola, bienvenido a mi aplicación! 👋</h1>
      <CustomForm fieldsData={fieldsData} componentMap={componentMap} requestMethods={requestMethods} />
    </div>
  );
};

export default Home;
