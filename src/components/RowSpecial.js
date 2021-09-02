import React from "react";

import InputField from "./InputField";
import InputMotos from "./InputMotos";

const RowSpecial = ({ inputFields, handleChangeInput, getIndex, total }) => {
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
      <InputMotos />
      <div className="col-md">
        <div className="form-floating">
          <input value={total} className="form-control" disabled />
          <label>Total Neto</label>
        </div>
      </div>
    </div>
  );
};

export default RowSpecial;
