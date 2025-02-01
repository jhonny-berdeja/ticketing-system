import React, { useState, useEffect } from "react";
import "../styles/custom_input_autocomplete.css";

const CustomInputAutocomplete = ({ fieldData, onRequest, onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = async () => {
      const visible = await onRequest.shouldDisplay();
      setIsVisible(visible);
    };
    checkVisibility();
  }, [onRequest]);

  const handleSearch = async (query) => {
    setSearchTerm(query);
    if (query.trim() === "") {
      setSuggestions([]);
      return;
    }
    const results = await onRequest.searchUser(query);
    setSuggestions(results);
  };

   const handleSelect = (value) => {
    setSearchTerm(value);
    setSuggestions([]);
    onChange(value);
  }; 

  if (!isVisible) return null;

  return (
    <div className="form-outline">
      <label className="form-label" htmlFor={fieldData.name}>
        {fieldData.label}
      </label>
      <input
      className="form-control"
        type="text"
        id={fieldData.name}
        name={fieldData.name}
        placeholder={fieldData.placeholder}
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)} 
        disabled={!fieldData.enabled}
      />
      {suggestions.length > 0 && (
        <div >
        <ul >
          {suggestions.map((user) => (
            <li className="form-label" key={user.value} onClick={() => handleSelect(user.value)}>
              {user.label}
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

export default CustomInputAutocomplete;