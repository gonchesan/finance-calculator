import React, { useContext } from "react";

import { DataContext } from "../global-context/DataContext";

function InputField({ id, inputName, inputValue, handleInput, getIndex }) {
  const { deleteField } = useContext(DataContext);

  return (
    <div className="col-md">
      <div className="form-floating">
        <input
          id={id}
          name="valueNumber"
          type="number"
          onChange={handleInput}
          value={inputValue}
          className="form-control input-to-calculate"
        />
        <label>{inputName}</label>
        <button
          className="btn btn-warning btn-sm"
          data-bs-toggle="modal"
          data-bs-target="#ModalEdit"
          onClick={getIndex}
        >
          ❕
        </button>
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => deleteField(id)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default InputField;
