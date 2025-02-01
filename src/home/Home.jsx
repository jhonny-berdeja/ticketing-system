import React, { useState } from "react";
import CustomForm from "../form/CustomForm";
import fieldsData from "../json/fields.json";

const Home = () => {
  const [formData, setFormData] = useState(null);
  
  // Métodos para 'userSearch'
const userSearchMethods = {
  searchUser: async (query) => {
    const users = [
      { value: "Aaron Mendoza", label: "Aaron Mendoza" },
      { value: "Abel Rodríguez", label: "Abel Rodríguez" },
      { value: "Abigail Fernández", label: "Abigail Fernández" },
      { value: "Abril Gómez", label: "Abril Gómez" },
      { value: "Adriana Pérez", label: "Adriana Pérez" },
      { value: "Agustín Torres", label: "Agustín Torres" },
      { value: "Aída Ramírez", label: "Aída Ramírez" },
      { value: "Alan Domínguez", label: "Alan Domínguez" },
      { value: "Ana Fernández", label: "Ana Fernández" },
      { value: "Luis Rodríguez", label: "Luis Rodríguez" },
      { value: "Sofía Ramírez", label: "Sofía Ramírez" },
      { value: "Pedro Sánchez", label: "Pedro Sánchez" },
      { value: "Elena Torres", label: "Elena Torres" },
      { value: "Miguel Herrera", label: "Miguel Herrera" },
      { value: "Laura Castillo", label: "Laura Castillo" },
      { value: "Javier Morales", label: "Javier Morales" },
      { value: "Camila Ríos", label: "Camila Ríos" },
      { value: "Fernando Gómez", label: "Fernando Gómez" },
      { value: "Gabriela Ortega", label: "Gabriela Ortega" },
      { value: "Ricardo Domínguez", label: "Ricardo Domínguez" },
      { value: "Valeria Mendoza", label: "Valeria Mendoza" },
      { value: "Daniela Chávez", label: "Daniela Chávez" },
      { value: "Héctor Vargas", label: "Héctor Vargas" },
      { value: "Patricia Navarro", label: "Patricia Navarro" },
      { value: "Andrés Paredes", label: "Andrés Paredes" },
      { value: "Natalia Guzmán", label: "Natalia Guzmán" },
      { value: "Sebastián Figueroa", label: "Sebastián Figueroa" },
      { value: "Mariana López", label: "Mariana López" },
    ];

    return users.filter((user) =>
      user.label.toLowerCase().includes(query.toLowerCase())
    );
  },
  shouldDisplay: async () => {
    return true; // Aquí puedes cambiar la lógica para que dependa de alguna condición
  },
};

// Métodos para 'dynamicSelect'
const dynamicSelectMethods = {
  fetchOptions: async () => {
    return [
      { value: "perro", label: "Perro" },
      { value: "gato", label: "Gato" },
      { value: "elefante", label: "Elefante" },
      { value: "tigre", label: "Tigre" },
      { value: "león", label: "León" },
      { value: "jirafa", label: "Jirafa" },
      { value: "oso", label: "Oso" },
      { value: "cocodrilo", label: "Cocodrilo" },
      { value: "águila", label: "Águila" },
      { value: "lobo", label: "Lobo" },
      { value: "tortuga", label: "Tortuga" },
      { value: "serpiente", label: "Serpiente" },
      { value: "caballo", label: "Caballo" },
      { value: "delfín", label: "Delfín" },
      { value: "pingüino", label: "Pingüino" },
      { value: "canguro", label: "Canguro" },
      { value: "zorro", label: "Zorro" },
      { value: "ardilla", label: "Ardilla" },
      { value: "murciélago", label: "Murciélago" },
      { value: "camaleón", label: "Camaleón" },
    ];
  },
  shouldDisplay: async () => {
    return true; // Cambia la condición aquí
  },
};

// Métodos para 'multipleSelect'
const multipleSelectMethods = {
  fetchOptions: async () => {
    return [
      { value: "rojo", label: "Rojo" },
      { value: "azul", label: "Azul" },
      { value: "verde", label: "Verde" },
      { value: "amarillo", label: "Amarillo" },
      { value: "naranja", label: "Naranja" },
      { value: "morado", label: "Morado" },
      { value: "rosa", label: "Rosa" },
      { value: "negro", label: "Negro" },
      { value: "blanco", label: "Blanco" },
      { value: "gris", label: "Gris" },
      { value: "cian", label: "Cian" },
      { value: "magenta", label: "Magenta" },
      { value: "turquesa", label: "Turquesa" },
      { value: "lavanda", label: "Lavanda" },
      { value: "dorado", label: "Dorado" },
      { value: "plateado", label: "Plateado" },
      { value: "marrón", label: "Marrón" },
      { value: "beige", label: "Beige" },
      { value: "vino", label: "Vino" },
      { value: "oliva", label: "Oliva" },
    ];
  },
  shouldDisplay: async () => {
    return true; // Cambia la condición aquí
  },
};

// Métodos para 'additionalDescription'
const additionalDescriptionMethods = {
  shouldDisplay: async () => {
    return true; // O cambiar a false según tu condición
  },
};

// Objeto grande que incluye los métodos definidos afuera
const requestMethods = {
  mathodsInputAutocomplete: userSearchMethods,
  mathodsSelectDynamic: dynamicSelectMethods,
  mathodsSelectMultiple: multipleSelectMethods,
  mathodsTextArea: additionalDescriptionMethods,
};


  const handleFormSubmit = (data) => {
    setFormData(data);
    console.log("Formulario recibido en el padre:");
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <h1>¡Hola, bienvenido a mi aplicación! 👋 TICKETING</h1>
      <CustomForm 
        fieldsData={fieldsData} 
        requestMethods={requestMethods} 
        onSubmit={handleFormSubmit} 
      />
      {formData && (
        <div>
          <h2>Datos del formulario enviados:</h2>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;