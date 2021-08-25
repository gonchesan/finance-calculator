import React from "react";

import InputTotal from "./InputTotal";

import InputField from "./InputField";

const RowFields = ({ inputFields, handleChangeInput, getIndex, total }) => {
  return (
    <div className="row g-4">
      {inputFields.map((field) => (
        <InputField
          id={field.id}
          key={field.id}
          inputValue={field.valueNumber}
          inputName={field.name}
          handleInput={(event) => handleChangeInput(event)}
          getIndex={() => getIndex(field.id)}
        />
      ))}

      <InputTotal total={total} />
    </div>
  );
};

export default RowFields;
