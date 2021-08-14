import React, { useContext } from "react";

import { DataContext } from "../contexts/DataContext";

function InputField({ inputName, inputValue, handleInput, getIndex }) {
  const { deleteField } = useContext(DataContext);

  return (
    <div className="col-md">
      <div className="form-floating">
        <input
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
          onClick={() => deleteField(inputName)}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default InputField;
