import React, { useContext } from "react";

import InputTotal from "./InputTotal";

import { DataContext } from "../contexts/DataContext";
import InputField from "./InputField";

const RowFields = () => {
  const { inputFields, total, setInputFields, setInputToEdit, setIndex } =
    useContext(DataContext);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = parseFloat(event.target.value);
    setInputFields(values);
  };

  const getIndex = (index) => {
    const values = [...inputFields];
    setIndex(index);
    setInputToEdit(values[index].name);
  };

  return (
    <div className="row g-4">
      {inputFields.map((field, index) => (
        <InputField
          key={index}
          inputValue={field.valueNumber}
          inputName={field.name}
          handleInput={(event) => handleChangeInput(index, event)}
          getIndex={() => getIndex(index)}
        />
      ))}

      <InputTotal total={total} />
    </div>
  );
};

export default RowFields;
